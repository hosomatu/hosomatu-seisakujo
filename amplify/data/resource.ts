/*=================================================================
他のフレームワークで言うところのモデル。
GraphQLスキーマを定義する。(モデル → コントローラー → ルーティングに相当する)
Amplify Gen 2スタイルと呼ばれる独自の記述方法。
=================================================================*/

import { type ClientSchema, a, defineData } from "@aws-amplify/backend"; // aはamplifyの略称のようなもの。ユーティリティ関数集。

const schema = a.schema({
  Todo: a.model({ // Todoというモデル定義
    content: a.string(), // contentというカラムを定義。string型。
  }).authorization((allow) => [allow.owner()]), // 認証方法を設定。ownerという認証方法を設定。作成した本人のみがアクセスできる。owner = Cognito のサインイン済みユーザーの sub（一意ID）
});

export type Schema = ClientSchema<typeof schema>; // クライアントで使えるGraphQLスキーマ型を生成してexport

// GraphQL API（AppSync）と DynamoDBを作成する
export const data = defineData({
  schema, // このschemaを使用してデータAPIとDBを作成する
  authorizationModes: { // 誰がAPIにアクセスできるか
    defaultAuthorizationMode: 'userPool', // ユーザープール認証
    apiKeyAuthorizationMode: {
      expiresInDays: 30, // 30日間有効
    },
  },
});
