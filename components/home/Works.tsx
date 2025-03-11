import { Tab } from "@/types/home";
import Header from "../layout/Header";

type Props = {
  changeTab: (tab: Tab) => void;
};

const Works = ({ changeTab }: Props) => {
  return (
    <div>
      <Header changeTab={changeTab} />
      <div className="w-full px-4">
        <h2 className="text-3xl md:text-4xl">WORKS</h2>
        <div className="w-full px-2 py-4 flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col items-center">
            <div className="md:w-2/3">
              <img src="/works/saikan.png" alt="saikan" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xs font-bold py-1">
                <a href="https://saikanshoin.or.jp/service/service1/">
                  才幹競書サービス / 一般社団法人 才幹書院
                </a>
              </h3>
              <p className="text-xs">
                株式会社アンチパターンでインターン生として,
                フロントエンド/バックエンドともに開発を担当.
                他のインターン生とチームを組み, スクラム開発を行った.
                ReactおよびLaravelを採用している.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="md:w-2/3">
              <img src="/works/ares.png" alt="ares" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xs font-bold py-1">
                <a href="https://www.arespjt.jp">
                  ARES Project 公式Webサイト / ARES Project
                </a>
              </h3>
              <p className="text-xs">
                学生火星探査ローバー開発チームARES ProjectのWebサイトの制作,
                運営を1人で担当. Next.jsを使用して制作した.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
