# 概要

これは、TypeScript を使用して Googlemap 上にユーザーと企業のフェイクデータをマッピングするサンプルプロジェクトです。  
このプロジェクトは、以下のようなトピックを包含しています。

- カスタムクラスによる Googlemaps のメソッドのプライベート化
- インターフェースによるクラスのプロパティ及びメソッドのチェック
- 利用ライブラリ：parcel, dotenv, faker

## 使用方法

1. 利用ライブラリのインポート

```bash
npm install
```

2. 環境変数の設定ファイルに GoogleMapAPI の追加

```bash
# project's root directory
touch .env
```

```bash
# .env file
GOOGLEMAP_KEY=
```

3. parcel-bundler の実行

```bash
# project's root directory
npm start
```
