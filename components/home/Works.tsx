import { Tab } from "@/types/home";
import Header from "../layout/Header";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type Props = {
  changeTab: (tab: Tab) => void;
};

const Works = ({ changeTab }: Props) => {
  return (
    <div>
      <Header changeTab={changeTab} />
      <div className="w-full px-4 md:px-10 lg:px-20 xl:px-40">
        <h2 className="text-3xl md:text-4xl">WORKS</h2>
        <div className="w-full px-10 py-4 flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col items-center">
            <div className="md:w-4/5 rounded-md overflow-hidden">
              <img src="/works/saikan.png" alt="saikan" />
            </div>
            <div className="md:w-4/5">
              <h3 className="text-sm lg:text-base font-bold py-2">
                <a
                  href="https://saikanshoin.or.jp/service/service1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="leading-none border-b border-transparent hover:border-black transition-all duration-300">
                    才幹競書サービス / 一般社団法人 才幹書院
                  </span>
                  <OpenInNewIcon
                    className="ml-1 text-gray-400"
                    fontSize="small"
                  />
                </a>
              </h3>
              <p className="text-xs md:text-sm">
                株式会社アンチパターンでインターン生として,
                フロントエンド/バックエンドともに開発を担当.
                他のインターン生とチームを組み, スクラム開発を行った.
                ReactおよびLaravelを採用している.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="md:w-4/5 rounded-md overflow-hidden">
              <img src="/works/ares.png" alt="ares" />
            </div>
            <div className="md:w-4/5">
              <h3 className="text-sm lg:text-base font-bold py-2">
                <a
                  href="https://www.arespjt.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="leading-none border-b border-transparent hover:border-black transition-all duration-300">
                    ARES Project 公式Webサイト / ARES Project
                  </span>
                  <OpenInNewIcon
                    className="ml-1 text-gray-400"
                    fontSize="small"
                  />
                </a>
              </h3>
              <p className="text-xs md:text-sm">
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
