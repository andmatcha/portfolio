import { Tab } from "@/types/home";

type Props = {
  activeTab: Tab;
  changeTab: (tab: Tab) => void;
};

const Header = ({ activeTab, changeTab }: Props) => {
  return (
    <header className="fixed w-full h-16 md:h-20 px-4 md:px-10 flex justify-end items-center text-sm md:text-base">
      <ul className="flex gap-4 md:gap-8">
        <li
          onClick={() => changeTab("top")}
          className="cursor-pointer hover:text-sky-500 transition-all duration-300"
        >
          TOP
        </li>
        <li
          onClick={() => changeTab("about")}
          className={`${
            activeTab === "about" ? "text-sky-500" : "cursor-pointer"
          } hover:text-sky-500 transition-all duration-300`}
        >
          ABOUT
        </li>
        <li
          onClick={() => changeTab("works")}
          className={`${
            activeTab === "works" ? "text-sky-500" : "cursor-pointer"
          } hover:text-sky-500 transition-all duration-300`}
        >
          WORKS
        </li>
        <li
          onClick={() => changeTab("contact")}
          className={`${
            activeTab === "contact" ? "text-sky-500" : "cursor-pointer"
          } hover:text-sky-500 transition-all duration-300`}
        >
          CONTACT
        </li>
      </ul>
    </header>
  );
};

export default Header;
