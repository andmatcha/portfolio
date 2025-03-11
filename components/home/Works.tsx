import { Tab } from "@/types/home";
import Header from "../layout/Header";

type Props = {
  changeTab: (tab: Tab) => void;
};

const Works = ({ changeTab }: Props) => {
  return (
    <div>
      <Header changeTab={changeTab} />
      <h2>WORKS</h2>
    </div>
  );
};

export default Works;
