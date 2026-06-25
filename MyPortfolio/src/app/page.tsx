"use client";

import { useState } from "react";
import ActivityBar from "@/components/ActivityBar";
import Explorer, { FileKey } from "@/components/Explorer";
import SearchPanel from "@/components/SearchPanel";
import Tabs, { Tab } from "@/components/Tabs";
import StatusBar from "@/components/StatusBar";
import AboutMe from "@/components/views/AboutMe";
import TechStack from "@/components/views/TechStack";
import MyProjects from "@/components/views/MyProjects";
import Timeline from "@/career/Timeline";
import Hobbies from "@/media/Hobbies";
import CV from "@/components/views/CV";
import AIPortfolio from "@/components/AIPortfolio";
import { FiArrowUpRight } from "react-icons/fi";

const fileNames: Record<FileKey, string> = {
  aboutme: "aboutme.json",
  techstack: "techstack.js",
  myprojects: "myprojects.css",
  timeline: "timeline.jsx",
  hobbies: "hobbies.tsx",
  cv: "cv.html",
};

export default function Home() {
  const [view, setView] = useState<"explorer" | "search">("explorer");
  const [showAI, setShowAI] = useState(false);
  const [tabs, setTabs] = useState<Tab[]>([
    { key: "aboutme", name: "aboutme.json" },
  ]);
  const [active, setActive] = useState<FileKey>("aboutme");

  const openFile = (key: FileKey) => {
    setActive(key);
    setTabs((prev) =>
      prev.find((t) => t.key === key)
        ? prev
        : [...prev, { key, name: fileNames[key] }]
    );
  };

  const closeTab = (key: FileKey) => {
    setTabs((prev) => {
      const next = prev.filter((t) => t.key !== key);
      if (active === key && next.length > 0) setActive(next[next.length - 1].key);
      return next;
    });
  };

  const renderView = () => {
    switch (active) {
      case "aboutme":
        return <AboutMe />;
      case "techstack":
        return <TechStack />;
      case "myprojects":
        return <MyProjects />;
      case "timeline":
        return <Timeline />;
      case "hobbies":
        return <Hobbies />;
      case "cv":
        return <CV />;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-bg text-text">
      {/* Title bar */}
      <div className="h-8 bg-tabbar flex items-center justify-center text-xs text-textMuted border-b border-border relative">
        <div className="absolute left-3 flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        MyPortfolio — Visual Studio Code
      </div>

      <div className="flex-1 flex overflow-hidden">
        <ActivityBar view={view} setView={setView} />
        {view === "explorer" ? (
          <Explorer active={active} onOpen={openFile} />
        ) : (
          <SearchPanel />
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          {tabs.length > 0 ? (
            <>
              <Tabs
                tabs={tabs}
                active={active}
                onSelect={setActive}
                onClose={closeTab}
              />
              <div className="flex-1 overflow-auto bg-bg">{renderView()}</div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-textMuted">
              Open a file from the Explorer to begin.
            </div>
          )}
        </div>
      </div>

      <StatusBar file={fileNames[active] ?? ""} />

      {/* Floating AI button — opens the AI-generated portfolio */}
      {!showAI && (
        <button
          onClick={() => setShowAI(true)}
          aria-label="Open the AI Portfolio"
          className="ai-fab group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-3 text-sm font-medium text-white shadow-xl shadow-fuchsia-500/30 hover:scale-105 transition-transform"
        >
          <span className="hidden sm:inline">the AI Portfolio</span>
          <FiArrowUpRight className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {showAI && <AIPortfolio onClose={() => setShowAI(false)} />}
    </div>
  );
}
