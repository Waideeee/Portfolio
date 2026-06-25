"use client";

import { projects } from "@/data/myprojects";
import CodeView from "../CodeView";
import { FaGithub } from "react-icons/fa";

export default function MyProjects() {
  const lines: JSX.Element[] = [];

  lines.push(
    <span>
      <span className="tok-com">{"/* myprojects.css — repositories on GitHub */"}</span>
    </span>
  );
  lines.push(<span> </span>);

  projects.forEach((p, idx) => {
    const className = `.${p.name.toLowerCase().replace(/\s+/g, "-")}`;
    lines.push(
      <span>
        <span className="tok-tag">{className}</span>{" "}
        <span className="tok-punc">{"{"}</span>
      </span>
    );
    lines.push(
      <span>
        {"  "}
        <span className="tok-key">title</span>
        <span className="tok-punc">: </span>
        <span className="tok-str">"{p.name}"</span>
        <span className="tok-punc">;</span>
      </span>
    );
    lines.push(
      <span>
        {"  "}
        <span className="tok-key">description</span>
        <span className="tok-punc">: </span>
        <span className="tok-str">"{p.description}"</span>
        <span className="tok-punc">;</span>
      </span>
    );
    lines.push(
      <span>
        {"  "}
        <span className="tok-key">tech</span>
        <span className="tok-punc">: </span>
        <span className="tok-str">"{p.tech.join(", ")}"</span>
        <span className="tok-punc">;</span>
      </span>
    );
    lines.push(
      <span>
        {"  "}
        <span className="tok-key">repo</span>
        <span className="tok-punc">: </span>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#569cd6] underline inline-flex items-center gap-1 hover:text-accent"
        >
          <FaGithub size={12} /> {p.url}
        </a>
        <span className="tok-punc">;</span>
      </span>
    );
    lines.push(<span className="tok-punc">{"}"}</span>);
    if (idx < projects.length - 1) lines.push(<span> </span>);
  });

  return <CodeView>{lines}</CodeView>;
}
