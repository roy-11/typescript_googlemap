# 概要
これは、TypeScriptを使用してGooglemap上にユーザーと企業のフェイクデータをマッピングするサンプルプロジェクトです。  
このプロジェクトは、以下のようなトピックを包括しています。
* カスタムクラスによるGooglemapsのメソッドのプライベート化
* インターフェースを利用したクラスのプロパティ及びメソッドのチェック
* 利用ライブラリ：parcel, dotenv, faker

## 使用方法
1. 利用ライブラリのインポート
```bash
npm install
```
2. 環境変数の設定ファイルにGoogleMapAPIの追加
```bash
# project's root directory
touch .env
```
```bash
# .env file
GOOGLEMAP_KEY=
```
3. parcel-bundlerの実行 
```bash
# project's root directory
parcel index.html
```