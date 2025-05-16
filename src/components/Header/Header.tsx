import { useState, useEffect } from 'react';
import logo from '../../assets/images/site_logo.png';

export default function Header() {
  // openという変数(状態)をsetOpenで管理して、初期状態をfalseとするだけでsetOpen(true)、setOpen(!open);のようなメソッドを使えるようになる
  const [open, setOpen] = useState(false);
  
  // 画面クリックの監視というサイドエフェクトを設定
  // handleClickOutsideという、画面上のどこかがクリックされたときに呼ばれる関数を定義
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement; // as HTMLElementは型アノテーション。eventはクリックイベントの情報が入った特別なオブジェクトでtargetはクリックの対象のこと
      if (target.closest('[aria-label="Menu"]')) return;
      if (open) setOpen(false);
    };
    
    // documentにクリックイベントを追加
    document.addEventListener('click', handleClickOutside);
    
    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open]); // openの状態が変わったら再設定

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#F8F9FA] shadow-md">
      <div className="mx-auto flex h-full max-w-lg items-center justify-between px-4">
        {/* ロゴ */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="ほそまつ製作所" className="h-8 w-auto" />
          <span className="text-lg font-bold tracking-wide">ほそまつ製作所</span>
        </a>

        {/* ハンバーガー */}
        <button
          aria-label="Menu"
          className="relative h-8 w-8"
          onClick={(e) => {
            e.stopPropagation(); // イベントの伝播を止める
            setOpen(!open);
          }}
        >
          <span className="absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-2 bg-black transition-all" />
          <span className="absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-black transition-all" />
          <span className="absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 translate-y-2 bg-black transition-all" />
        </button>
      </div>

      {/* モバイルメニュー */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-60' : 'max-h-0'}`}>
        <nav className="bg-[rgba(248,249,250,0.5)] shadow-inner">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><a href="#pickup" onClick={() => setOpen(false)} className="text-gray-700 font-medium">Pick Up</a></li>
            <li><a href="#works" onClick={() => setOpen(false)} className="text-gray-700 font-medium">My Works</a></li>
            <li><a href="#history" onClick={() => setOpen(false)} className="text-gray-700 font-medium">My History</a></li>
            <li><a href="#order" onClick={() => setOpen(false)} className="text-gray-700 font-medium">Links</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
