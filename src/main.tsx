/*=================================================================
Reactアプリケーションのエントリーポイント。
ReactDOM.createRootでReactのルート要素を作成し、そのルート要素にAppコンポーネントを配置している。
Appコンポーネントはサイトのメインコンテンツを表示します。
=================================================================*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(   
  <React.StrictMode>  {/* 開発用の安全チェックモード */}
    <App />
  </React.StrictMode>
);
