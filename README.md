# Share Stats
Google Apps Scriptを使用してSlackにStatCounterのURLを流す目的に用いる。

## 初期設定
`.clasp-sample.json` をコピーして `.clasp.json` を作成。
対象のscript idを記述。

`.env-sample` をコピーして `.env` を作成。
対象のSlack urlを記述。

## 作成方法
`src/main.ts` に処理を記述。

## ビルド
`npm run build` によって下記が作成される。

```
src/appsscript.json
src/main.ts
```

## Google Driveに同期
`clasp push` によってGoogle Driveに同期される。