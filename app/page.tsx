"use client";

import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Top from "@/components/home/Top";
import Works from "@/components/home/Works";
import { Tab } from "@/types/home";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState<Tab>("top");
  const changeTab = (tab: Tab) => {
    setActiveTab(tab);
  };
  return (
    <main className="h-screen">
      {activeTab === "top" && <Top changeTab={changeTab} />}
      {activeTab === "about" && <About changeTab={changeTab} />}
      {activeTab === "works" && <Works changeTab={changeTab} />}
      {activeTab === "contact" && <Contact changeTab={changeTab} />}
    </main>
  );
};

export default Home;
