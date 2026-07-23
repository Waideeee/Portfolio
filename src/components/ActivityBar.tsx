"use client";

import { VscFiles, VscSearch, VscSourceControl, VscAccount, VscSettingsGear } from "react-icons/vsc";

type View = "explorer" | "search";

export default function ActivityBar({
  view,
  setView,
}: {
  view: View;
  setView: (v: View) => void;
}) {
  const item =
    "h-12 w-12 flex items-center justify-center text-textMuted hover:text-text cursor-pointer relative";
  const active = "text-text";
  const indicator =
    "absolute left-0 top-0 h-full w-[2px] bg-white";

  return (
    <div className="w-12 bg-activity flex flex-col justify-between border-r border-border">
      <div className="flex flex-col">
        <div
          className={`${item} ${view === "explorer" ? active : ""}`}
          onClick={() => setView("explorer")}
          title="Explorer"
        >
          {view === "explorer" && <span className={indicator} />}
          <VscFiles size={24} />
        </div>
        <div
          className={`${item} ${view === "search" ? active : ""}`}
          onClick={() => setView("search")}
          title="Socials"
        >
          {view === "search" && <span className={indicator} />}
          <VscSearch size={22} />
        </div>
        <div className={item} title="Source Control">
          <VscSourceControl size={22} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className={item} title="Account">
          <VscAccount size={22} />
        </div>
        <div className={item} title="Settings">
          <VscSettingsGear size={22} />
        </div>
      </div>
    </div>
  );
}
