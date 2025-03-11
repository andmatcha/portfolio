import { Tab } from "@/types/home";

type Props = {
  changeTab: (tab: Tab) => void;
};

export default function Top({ changeTab }: Props) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-10 md:left-1/2 top-1/2 transform md:-translate-x-1/2 -translate-y-1/2">
        <h1 className="text-6xl">
          JIN <br className="md:hidden" />
          AOYAGI
        </h1>
      </div>
      <div className="absolute bottom-1/4 left-10 md:left-1/2 transform md:-translate-x-1/2">
        <ul className="flex flex-col gap-2 md:gap-16 md:flex-row">
          <li
            onClick={() => changeTab("about")}
            className="cursor-pointer hover:text-sky-500 transition-all duration-300"
          >
            ABOUT
          </li>
          <li
            onClick={() => changeTab("works")}
            className="cursor-pointer hover:text-sky-500 transition-all duration-300"
          >
            WORKS
          </li>
          <li
            onClick={() => changeTab("contact")}
            className="cursor-pointer hover:text-sky-500 transition-all duration-300"
          >
            CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
}
