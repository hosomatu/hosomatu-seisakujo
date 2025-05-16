import SocialIcon from "./SocialIcon";

export default function ProfileIntro() {
    return (
      <section className="text-center py-6">
        <img 
          src="/vocalo_icon.jpg" 
          alt="ほそまつ製作所のアイコン" 
          className="mx-auto w-50 h-50 rounded-full border-4 border-white shadow-lg object-cover"
        />
        <h2 className="mt-4 text-lg font-bold">圧倒的パワー</h2>
        <p className="text-sm text-gray-700">元気が出る曲を創ります</p>
        <div className="mt-4 flex justify-center gap-4">
        <SocialIcon
          href="https://www.nicovideo.jp/user/86861902?rf=nvpc&rp=watch&ra=video_information"
          icon={<img src="/niconico_logo.png" alt="ニコニコ動画" className="w-6 h-6" />}
          label="ニコニコ動画"
        />
        <SocialIcon
          href="https://www.youtube.com/@hosomatutiyo"
          icon={<img src="/youtube_logo.png" alt="YouTube" className="w-6 h-6" />}
          label="YouTube"
        />
        <SocialIcon
          href="https://x.com/kotukotuganbar?s=21&t=Vu2CU6sBSYmCBrZ3VN5khw"
          icon={<img src="/x_logo.png" alt="X" className="w-6 h-6" />}
          label="X"
        />
      </div>
      </section>
    );
  }
  