"use client";

import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Top from "@/components/home/Top";
import Works from "@/components/home/Works";
import { Tab } from "@/types/home";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";

const Home = () => {
  const [activeTab, setActiveTab] = useState<Tab>("top");
  const [hasLeftTop, setHasLeftTop] = useState(false); // topから一度でも出たかどうか

  // ヘッダー表示判定
  const isHeaderVisible = activeTab !== "top";

  // TOPから他のタブに移動したときのみtrue
  useEffect(() => {
    if (activeTab !== "top") {
      setHasLeftTop(true);
    }
  }, [activeTab]);

  // タブ切り替え
  const changeTab = (tab: Tab) => {
    setActiveTab(tab);
  };
  return (
    <main className="h-screen">
      {/* ヘッダー */}
      <AnimatePresence>
        {isHeaderVisible &&
          (hasLeftTop ? (
            // TOPから他のタブに移動: フェードインアニメーション
            <motion.div
              key="header"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Header activeTab={activeTab} changeTab={changeTab} />
            </motion.div>
          ) : (
            // TOPでないタブ間の移動: アニメーションなしで常時表示
            <Header activeTab={activeTab} changeTab={changeTab} />
          ))}
      </AnimatePresence>

      {/* メインコンテンツ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          {activeTab === "top" && <Top changeTab={changeTab} />}
          {activeTab === "about" && <About />}
          {activeTab === "works" && <Works />}
          {activeTab === "contact" && <Contact />}
        </motion.div>
      </AnimatePresence>

      {/* GitHubアイコン */}
      <div className="fixed bottom-0 right-0 w-12 md:w-16 h-12 md:h-16 m-8 md:m-10">
        <a
          href="https://github.com/andmatcha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github-mark.svg" alt="" />
        </a>
      </div>
    </main>
  );
};

export default Home;
