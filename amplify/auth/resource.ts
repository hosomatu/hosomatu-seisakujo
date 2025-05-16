/*=================================================================
AWS Amplify Gen2 の認証機能を使用して、アプリケーションの認証システムを構築するための基本設定ファイル。
Amazon Cognito ユーザープール が自動で構成される。
https://docs.amplify.aws/gen2/build-a-backend/auth
=================================================================*/

import { defineAuth } from '@aws-amplify/backend';

// Cognito関連リソースがデプロイされる。
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
