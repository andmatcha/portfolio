import { Tab } from "@/types/home";
import Header from "../layout/Header";

type Props = {
  changeTab: (tab: Tab) => void;
};

const About = ({ changeTab }: Props) => {
  return (
    <div>
      <Header changeTab={changeTab} />
      <h2>ABOUT</h2>
    </div>
  );
};

export default About;
