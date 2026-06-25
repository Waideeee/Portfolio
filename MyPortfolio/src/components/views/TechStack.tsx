"use client";

import { techstack } from "@/data/techstack.js";
import CodeView from "../CodeView";

export default function TechStack() {
  const lines: JSX.Element[] = [];

  lines.push(
    <span>
      <span className="tok-com">{"// techstack.js — what I build with"}</span>
    </span>
  );
  lines.push(<span> </span>);
  lines.push(
    <span>
      <span className="tok-kw">export const</span>{" "}
      <span className="tok-var">techstack</span>{" "}
      <span className="tok-punc">=</span> <span className="tok-punc">{"{"}</span>
    </span>
  );

  const entries = Object.entries(techstack) as [string, string[]][];
  entries.forEach(([cat, arr], idx) => {
    const comma = idx < entries.length - 1 ? "," : "";
    lines.push(
      <span>
        {"  "}
        <span className="tok-str">"{cat}"</span>
        <span className="tok-punc">: [</span>
      </span>
    );
    arr.forEach((item, i) => {
      const c = i < arr.length - 1 ? "," : "";
      lines.push(
        <span>
          {"    "}
          <span className="tok-str">"{item}"</span>
          <span className="tok-punc">{c}</span>
        </span>
      );
    });
    lines.push(
      <span>
        {"  "}
        <span className="tok-punc">]{comma}</span>
      </span>
    );
  });

  lines.push(<span className="tok-punc">{"};"}</span>);

  return <CodeView>{lines}</CodeView>;
}
