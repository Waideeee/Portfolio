"use client";

import data from "@/data/aboutme.json";
import CodeView from "../CodeView";

export default function AboutMe() {
  const lines: JSX.Element[] = [];

  lines.push(<span className="tok-punc">{"{"}</span>);

  const entries = Object.entries(data);
  entries.forEach(([key, val], idx) => {
    const comma = idx < entries.length - 1 ? "," : "";
    if (Array.isArray(val)) {
      lines.push(
        <span>
          {"  "}
          <span className="tok-key">"{key}"</span>
          <span className="tok-punc">: [</span>
        </span>
      );
      val.forEach((v, i) => {
        const c = i < val.length - 1 ? "," : "";
        lines.push(
          <span>
            {"    "}
            <span className="tok-str">"{v}"</span>
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
    } else {
      lines.push(
        <span>
          {"  "}
          <span className="tok-key">"{key}"</span>
          <span className="tok-punc">: </span>
          <span className="tok-str">"{String(val)}"</span>
          <span className="tok-punc">{comma}</span>
        </span>
      );
    }
  });

  lines.push(<span className="tok-punc">{"}"}</span>);

  return <CodeView>{lines}</CodeView>;
}
