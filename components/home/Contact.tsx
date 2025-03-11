import { Tab } from "@/types/home";
import Header from "../layout/Header";

type Props = {
  changeTab: (tab: Tab) => void;
};

const Contact = ({ changeTab }: Props) => {
  return (
    <div>
      <Header changeTab={changeTab} />
    <h2>CONTACT</h2>
    </div>
  );
};

export default Contact;
