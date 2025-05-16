export default function HowToOrder() {
    return (
      <section id="order" className="py-10 px-4 text-center">
        <h2 className="text-xl font-bold mb-6">How&nbsp;to&nbsp;Order</h2>
  
        {/* 一枚の統合カード */}
        <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg text-left">
          {/* 価格 */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-500">Price (〜3&nbsp;min track)</p>
            <p className="mt-2 text-3xl font-extrabold text-purple-700">
              ¥25,000
            </p>
          </div>
  
          {/* 理由 */}
          <div className="mb-4 text-sm text-gray-700">
            <p className="font-semibold mb-1">価格の理由</p>
            <p>
              全然プロじゃない普通のサラリーマンのため<br />
              「依頼者と楽しく一緒に作品を作る」ことを大切にしています。 
            </p>
          </div>
  
          {/* おすすめポイント */}
          <div className="text-sm text-gray-800">
            <p className="font-semibold mb-2">おすすめの方</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>ポップス or ロック</li>
              <li>曲のテーマや世界観を一緒に考えたい方</li>
              <li>ボカロ特有の表現を活かしたいクリエイター</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  