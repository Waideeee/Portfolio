"use client";

import { VscClose } from "react-icons/vsc";
import type { FileKey } from "./Explorer";

export type Tab = { key: FileKey; name: string };

export default function Tabs({
  tabs,
  active,
  onSelect,
  onClose,
}: {
  tabs: Tab[];
  active: FileKey;
  onSelect: (k: FileKey) => void;
  onClose: (k: FileKey) => void;
}) {
  return (
    <div className="flex bg-tabbar border-b border-border h-9 overflow-x-auto">
      {tabs.map((t) => {
        const isActive = t.key === active;
        return (
          <div
            key={t.key}
            onClick={() => onSelect(t.key)}
            className={`group flex items-center gap-2 px-3 h-full cursor-pointer border-r border-border text-sm whitespace-nowrap ${
              isActive ? "tab-active text-text" : "text-textMuted hover:text-text"
            }`}
          >
            <span>{t.name}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose(t.key);
              }}
              className="opacity-0 group-hover:opacity-100 hover:bg-hover rounded p-0.5"
              aria-label="Close tab"
            >
              <VscClose size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
