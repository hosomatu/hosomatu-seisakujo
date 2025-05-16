import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import TailwindTest from "./TailwindTest";

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
    <main className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-purple-700 mb-4">{user?.signInDetails?.loginId}'s todos</h1>
      
      {/* TailwindTestコンポーネントを追加 */}
      <TailwindTest />
      
      <button 
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={createTodo}>+ new</button>
      <ul className="bg-gray-100 rounded-lg overflow-hidden divide-y divide-gray-200 mb-4">
        {todos.map((todo) => (
          <li 
          onClick={() => deleteTodo(todo.id)}
          className="px-4 py-3 hover:bg-gray-200 cursor-pointer"
          key={todo.id}>{todo.content}
          </li>
        ))}
      </ul>
      <div className="mt-4 text-sm text-gray-600">
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates" 
          className="text-purple-600 hover:text-purple-800 font-semibold">
          Review next step of this tutorial.
        </a>
      </div>
      <button 
        className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
