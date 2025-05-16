import { useAuthenticator } from '@aws-amplify/ui-react';
import TailwindTest from "./TailwindTest";
import Header from "./components/Header/Header";
import ProfileIntro from './components/Profile/ProfileIntro';


// ルートコンポーネントの定義。main.tsxで<App />として呼び出される
function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <>
      <Header />
      <main className="mt-16">
        
      {/* TailwindTestコンポーネントを追加 */}
      <ProfileIntro />
      <TailwindTest />
      <button 
        className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={signOut}>Sign out</button>
      </main>
    </>
  );
}

export default App;
