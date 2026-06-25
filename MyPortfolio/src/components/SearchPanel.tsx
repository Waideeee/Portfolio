"use client";

import { useState } from "react";
import { socials } from "@/data/socials";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
  GitHub: <FaGithub size={16} />,
  LinkedIn: <FaLinkedin size={16} className="text-[#0a66c2]" />,
  Facebook: <FaFacebook size={16} className="text-[#1877f2]" />,
  Email: <FaEnvelope size={16} className="text-rose-400" />,
};

export default function SearchPanel() {
  const [q, setQ] = useState("");
  const filtered = socials.filter(
    (s) =>
      s.name.toLowerCase().includes(q.toLowerCase()) ||
      s.handle.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="w-64 bg-sidebar text-text border-r border-border flex flex-col">
      <div className="px-5 py-2 text-[11px] uppercase tracking-wider text-textMuted">
        Search
      </div>
      <div className="px-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search socials…"
          className="w-full bg-bg border border-border focus:border-accent outline-none px-2 py-1 text-sm"
        />
      </div>
      <div className="mt-3 text-[11px] uppercase tracking-wider text-textMuted px-5">
        Results — {filtered.length}
      </div>
      <div className="flex-1 overflow-y-auto mt-1">
        {filtered.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 hover:bg-hover text-sm border-l-2 border-transparent hover:border-accent"
          >
            {iconMap[s.name]}
            <div className="flex flex-col">
              <span>{s.name}</span>
              <span className="text-xs text-textMuted">{s.handle}</span>
            </div>
          </a>
        ))}
        {filtered.length === 0 && (
          <div className="px-3 py-2 text-sm text-textMuted">No matches.</div>
        )}
      </div>
    </div>
  );
}
