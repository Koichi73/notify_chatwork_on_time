function myFunction() {
  let functionName = 'send_messeage';
  let date = new Date();
  let time = '17:00'; //定刻
  date.setHours(...time.split(':'));

  deleteTriggers(functionName);
  setTrigger(functionName, date);
}

// トリガー削除
function deleteTriggers(functionName) {
  let triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => {
    if (trigger.getHandlerFunction() !== functionName) return;
    ScriptApp.deleteTrigger(trigger);
  });
}

// トリガー作成
function setTrigger(functionName, date) {
  ScriptApp.newTrigger(functionName).timeBased().at(date).create();
}

// 通知用関数
function send_messeage() {
  let chatwork_api = 'xxxx'; //APIトークン
  let chatwork_room = 'xxxx'; //ルームID

  let alart_body = '今日の日報を確認してください。'; //通知メッセージ

  let client = ChatWorkClient.factory({token: chatwork_api});
  client.sendMessage({
    room_id: chatwork_room,
    body: alart_body
  });
}


