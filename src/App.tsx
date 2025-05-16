import { useAuthenticator } from '@aws-amplify/ui-react';
import Header from "./components/Header/Header";
import ProfileIntro from './components/Profile/ProfileIntro';
import Youtube from './components/Youtube/Youtube';
import HistoryTable from './components/HistoryTable/HistoryTable';

const historyItems = [
    { date: '2019/03', description: 'ボカロPとして活動開始' },
    { date: '2020/08', description: '初のオリジナル曲を投稿' },
    { date: '2023/11', description: '楽曲がコンテストで入賞' },
  ];


// ルートコンポーネントの定義。main.tsxで<App />として呼び出される
function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <>
      <Header />
      <main className="mt-16">
        
      {/* TailwindTestコンポーネントを追加 */}
      <ProfileIntro />
      <Youtube title="Pick Up Song" videoUrl="https://www.youtube.com/watch?v=LAGf3Ikh56A" description="2023ボーカロイドコレクションネタ曲部門参加作品" />
      <Youtube title="My Work" videoUrl="https://www.youtube.com/watch?v=rc6u-vR2GAk" description="「きのこめあ」オリジナルPVの楽曲制作および、ゲーム内BGMを一部担当" />
      <HistoryTable items={historyItems} />
      <button 
        className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={signOut}>Sign out</button>
      </main>
    </>
  );
}

export default App;
