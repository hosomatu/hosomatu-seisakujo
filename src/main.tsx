/*=================================================================
Reactアプリケーションのエントリーポイント。
ReactDOM.createRootでReactのルート要素を作成し、そのルート要素にAuthenticatorコンポーネントを配置している。
Authenticatorコンポーネントは、AWS Amplifyの認証機能を使用して、ユーザーのサインイン、サインアップ、認証状態の管理を行う。
Appコンポーネントは、認証が完了したユーザーのみがアクセスできるコンテンツを表示する。
=================================================================*/

import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(   
  <React.StrictMode>  {/* 開発用の安全チェックモード */}
  <Authenticator>     {/* ← すべての機能に認証必須になっているので、後ほどApp.tsx側に移動する */}
    <App />
  </Authenticator>
</React.StrictMode>
);
