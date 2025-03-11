import { Tab } from "@/types/home";
import Header from "../layout/Header";

type Props = {
  changeTab: (tab: Tab) => void;
};

const Contact = ({ changeTab }: Props) => {
  return (
    <div className="px-4 md:px-40 pt-16 md:pt-20">
      <h2 className="text-3xl md:text-4xl">CONTACT</h2>
      <div className="flex flex-col gap-2 pt-2 items-center">
        <p className="text-sm md:text-base">
          お問い合わせは以下のメールアドレスまでお願いいたします.
        </p>
        <p className="text-sm md:text-base p-4">contact.jinaoyagi@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
