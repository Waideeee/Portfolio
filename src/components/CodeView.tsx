"use client";

import { ReactNode, Children } from "react";

export default function CodeView({ children }: { children: ReactNode }) {
  const lines = Children.toArray(children);
  return (
    <div className="flex font-mono text-[13px] leading-6">
      <div className="line-numbers pt-4 pl-4">
        {lines.map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="flex-1 pt-4 pr-6 pb-10">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
