import Header from "./components/Header/Header";
import ProfileIntro from './components/Profile/ProfileIntro';
import Youtube from './components/Youtube/Youtube';
import HistoryTable from './components/HistoryTable/HistoryTable';
import HowToOrder from "./components/HowToOrder/HowToOrder";

const historyItems = [
    { date: '2019/03', description: 'ボカロPとして活動開始' },
    { 
      date: '2020/12', 
      description: 'ボカコレ2020冬 ルーキー 21位', 
      url: 'https://vocaloid-collection.jp/2020-winter/ranking/rookie/' 
    },
    { 
      date: '2022/10', 
      description: 'ボカコレ2022秋 演奏してみた 2位', 
      url: 'https://vocaloid-collection.jp/2022-autumn/ranking/enso-shitemita/' 
    },
    { 
      date: '2024/02', 
      description: 'ボカコレ2024冬 ボカコレネタ曲投稿祭 25位', 
      url: 'https://vocaloid-collection.jp/2024-winter/ranking/vocaneta/' 
    },
    { 
      date: '2024/10', 
      description: 'きのこめあ PV 楽曲提供', 
      url: 'https://www.youtube.com/watch?v=rc6u-vR2GAk' 
    },
  ];


// ルートコンポーネントの定義。main.tsxで<App />として呼び出される
function App() {

  return (
    <>
      <Header />
      <main className="mt-16 min-h-screen flex-grow pb-10">
        
      {/* TailwindTestコンポーネントを追加 */}
      <ProfileIntro />
      <Youtube title="Pick Up Song" videoUrl="https://www.youtube.com/watch?v=LAGf3Ikh56A" description="2023ボーカロイドコレクションネタ曲部門参加作品" id="pickup-song" />
      <Youtube title="My Work" videoUrl="https://www.youtube.com/watch?v=rc6u-vR2GAk" description="「きのこめあ」オリジナルPVの楽曲制作および、ゲーム内BGMを一部担当" id="work" />
      <HistoryTable items={historyItems} />
      <HowToOrder />
      </main>
    </>
  );
}

export default App;
