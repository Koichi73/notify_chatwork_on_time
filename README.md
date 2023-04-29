# notify_chatwork_on_time
【Google Apps Script】定刻にChatWorkへ通知を送る

## Setup
#### ライブラリの読み込み
以下のIDにて検索
```
1nf253qsOnZ-RcdcFu1Y2v4pGwTuuDxN5EbuvKEZprBWg764tjwA5fLav
```
#### コードの書き換え
以下の4点を変更
- 定刻
- APIトークン
- ルームID
- 通知メッセージ
#### トリガー
時間主導型 > 日付ベースのタイマー<br>「時刻を選択」にて、定刻よりも早い時間帯を選択

## Note
通知メッセージの冒頭に [To:(アカウントID)] を加えることで、Toで通知することが可能

## Reference
https://front-works.co.jp/blog/gas-set-triggers-on-time/

