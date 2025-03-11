import { Tab } from "@/types/home";

type Props = {
  changeTab: (tab: Tab) => void;
};

const Header = ({ changeTab }: Props) => {
  return (
    <header className="w-full h-20 px-10 flex justify-end items-center">
      <ul className="flex gap-8">
        <li className="cursor-pointer" onClick={() => changeTab("top")}>TOP</li>
        <li className="cursor-pointer" onClick={() => changeTab("about")}>ABOUT</li>
        <li className="cursor-pointer" onClick={() => changeTab("works")}>WORKS</li>
        <li className="cursor-pointer" onClick={() => changeTab("contact")}>CONTACT</li>
      </ul>
    </header>
  );
};

export default Header;
