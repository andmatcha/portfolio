import { Tab } from "@/types/home";
import Header from "../layout/Header";

type Props = {
  changeTab: (tab: Tab) => void;
};

const About = ({ changeTab }: Props) => {
  return (
    <div className="px-4 md:px-40 pt-16 md:pt-20">
      <h2 className="text-3xl md:text-4xl">ABOUT</h2>
      <section className="px-2 py-2">
        <h3 className="text-2xl md:text-3xl mb-2">Profile</h3>
        <div className="px-2 text-sm md:text-base flex items-center gap-2 md:gap-4">
          <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden">
            <img src="/profile.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl md:text-2xl">青柳 仁 Aoyagi Jin</p>
            <p className="text-sm pl-2">Web Developer</p>
            <p className="text-xs sm:text-sm pl-2">
              慶應義塾大学理工学部
              <br className="sm:hidden" />
              電気情報工学科2年
            </p>
          </div>
        </div>
      </section>
      <section className="px-2 py-2">
        <h3 className="text-2xl md:text-3xl mb-2">History</h3>
        <div className="flex flex-col gap-2 px-2 text-sm md:text-base">
          <div>
            <p className="font-bold">2021/04</p>
            <p className="pl-4">慶應義塾大学理工学部 入学</p>
          </div>
          <div>
            <p className="font-bold">2021/06-2023/03</p>
            <p className="pl-4">
              プログラミング学習コミュニティPOSSEに所属. JavaScript, PHP,
              Laravel, MySQLなどを使用したWebアプリケーション開発を学んだ.
              年に数回のハッカソンや数ヶ月にわたるチーム開発などを通して実践的なスキルを習得した.
            </p>
          </div>
          <div>
            <p className="font-bold">2022/07-2023/04</p>
            <p className="pl-4">
              株式会社アンチパターンに所属.
              長期インターン生として受託開発のプロダクトに携わり,
              Webフロントエンド/バックエンドの実務経験を積んだ.{" "}
            </p>
          </div>
          <div>
            <p className="font-bold">2022/09-</p>
            <p className="pl-4">
              学生火星探査ローバー開発チームARES Projectに所属.
              広報局の一員としてチームのWebサイトを制作, 運営する.
            </p>
          </div>
        </div>
      </section>
      <section className="px-2 py-2">
        <h3 className="text-2xl md:text-3xl mb-2">Skills</h3>
        <ul className="text-sm md:text-base px-2 w-2/3">
          <li className="flex">
            <span className="w-40">HTML5/CSS3</span>
            <span>■■■■■■■■□□</span>
          </li>
          <li className="flex">
            <span className="w-40">JavaScript</span>
            <span>■■■■■■■■□□</span>
          </li>
          <li className="flex">
            <span className="w-40">TypeScript</span>
            <span>■■■■■■■□□□</span>
          </li>
          <li className="flex">
            <span className="w-40">React</span>
            <span>■■■■■■■□□□</span>
          </li>
          <li className="flex">
            <span className="w-40">Next.js</span>
            <span>■■■■■■■□□□</span>
          </li>
          <li className="flex">
            <span className="w-40">PHP</span>
            <span>■■■■■■□□□□</span>
          </li>
          <li className="flex">
            <span className="w-40">Laravel</span>
            <span>■■■■■■□□□□</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
