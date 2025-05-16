import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

// 型付きの GraphQL クライアント。amplify/data/resource/Schema.tsで定義した型を使用
const client = generateClient<Schema>();

// ルートコンポーネントの定義。main.tsxで<App />として呼び出される
function App() {
  // const auth = useAuthenticator(); これはamplifyが用意しているフック。関数でありクラスではない。
  // const user = auth.user;
  // const signOut = auth.signOut;  を省略した形。
  const { user, signOut } = useAuthenticator();

  // useStateはフック。「ある値（状態）を保存するための箱=todos」と「その値を更新するための関数=setTodos」をセットで作る仕組み
  // Schemaはamplify/data/resource/Schema.tsで定義したGraphQLスキーマ型。
  // 初期値に[]を指定。あとでsetTodosで更新する。
  // Array<...>は、型推論で型を指定している。
  // Schema["Todo"]["type"] で、Schema の中の Todo モデル の中の type という型を取得している。つまり[todo]という型を指定している。
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }
    
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}'s todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li 
          onClick={() => deleteTodo(todo.id)}
          key={todo.id}>{todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
