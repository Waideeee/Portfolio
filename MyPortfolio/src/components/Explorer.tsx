"use client";

import { useState } from "react";
import {
  VscChevronDown,
  VscChevronRight,
  VscJson,
  VscFileCode,
  VscFilePdf,
} from "react-icons/vsc";
import { SiJavascript, SiCss, SiReact } from "react-icons/si";

export type FileKey =
  | "aboutme"
  | "techstack"
  | "myprojects"
  | "timeline"
  | "hobbies"
  | "cv";

const tree: {
  folder: string;
  files: { key: FileKey; name: string; icon: JSX.Element }[];
}[] = [
  {
    folder: "about",
    files: [
      {
        key: "aboutme",
        name: "aboutme.json",
        icon: <VscJson className="text-yellow-400" size={16} />,
      },
    ],
  },
  {
    folder: "skills",
    files: [
      {
        key: "techstack",
        name: "techstack.js",
        icon: <SiJavascript className="text-yellow-400" size={14} />,
      },
    ],
  },
  {
    folder: "projects",
    files: [
      {
        key: "myprojects",
        name: "myprojects.css",
        icon: <SiCss className="text-blue-400" size={14} />,
      },
    ],
  },
  {
    folder: "career",
    files: [
      {
        key: "timeline",
        name: "timeline.jsx",
        icon: <SiReact className="text-cyan-400" size={14} />,
      },
    ],
  },
  {
    folder: "media",
    files: [
      {
        key: "hobbies",
        name: "hobbies.tsx",
        icon: <VscFileCode className="text-sky-400" size={16} />,
      },
    ],
  },
  {
    folder: "resume",
    files: [
      {
        key: "cv",
        name: "cv.html",
        icon: <VscFilePdf className="text-red-400" size={16} />,
      },
    ],
  },
];

export default function Explorer({
  active,
  onOpen,
}: {
  active: FileKey;
  onOpen: (key: FileKey, name: string) => void;
}) {
  const [open, setOpen] = useState<Record<string, boolean>>({
    about: true,
    skills: true,
    projects: true,
    career: true,
    media: true,
    resume: true,
  });

  return (
    <div className="w-64 bg-sidebar text-text border-r border-border flex flex-col">
      <div className="px-5 py-2 text-[11px] uppercase tracking-wider text-textMuted">
        Explorer
      </div>
      <div className="px-2 pb-1 text-[13px] font-semibold uppercase tracking-wide flex items-center gap-1">
        <VscChevronDown size={14} />
        MyPortfolio
      </div>
      <div className="flex-1 overflow-y-auto text-sm">
        {tree.map((group) => (
          <div key={group.folder}>
            <button
              onClick={() =>
                setOpen((o) => ({ ...o, [group.folder]: !o[group.folder] }))
              }
              className="w-full flex items-center gap-1 px-2 py-[2px] hover:bg-hover text-left"
            >
              {open[group.folder] ? (
                <VscChevronDown size={14} />
              ) : (
                <VscChevronRight size={14} />
              )}
              <span className="text-yellow-600">📁</span>
              <span>{group.folder}</span>
            </button>
            {open[group.folder] &&
              group.files.map((f) => (
                <button
                  key={f.key}
                  onClick={() => onOpen(f.key, f.name)}
                  className={`w-full flex items-center gap-2 pl-7 pr-2 py-[2px] text-left hover:bg-hover ${
                    active === f.key ? "bg-selected" : ""
                  }`}
                >
                  {f.icon}
                  <span>{f.name}</span>
                </button>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
