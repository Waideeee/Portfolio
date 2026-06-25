"use client";

import { VscCloudDownload } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import aboutme from "@/data/aboutme.json";
import { techstack } from "@/data/techstack.js";
import { projects } from "@/data/myprojects";
import { experience as leadership } from "@/data/experience";

export default function CV() {
  const skills = Object.entries(techstack) as [string, string[]][];

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-start justify-between border-b border-border pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-semibold">{aboutme.name}</h1>
          <p className="text-textMuted">{aboutme.role}</p>
          <p className="text-xs text-textMuted mt-2">
            {aboutme.location} · {aboutme.email} · {aboutme.phone}
          </p>
          <a
            href="https://github.com/Waideeee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#569cd6] hover:text-accent inline-flex items-center gap-1 mt-1"
          >
            <FaGithub size={12} /> github.com/Waideeee
          </a>
        </div>
        <a
          href="/resume/Lia_Pitero_CV.pdf"
          download
          className="inline-flex items-center gap-2 bg-accent hover:bg-[#005a9e] text-white px-4 py-2 text-sm transition-colors shrink-0"
        >
          <VscCloudDownload size={18} /> Download CV
        </a>
      </div>

      <section className="mb-6">
        <h2 className="text-sm uppercase tracking-wider text-accent mb-2">
          About
        </h2>
        <p className="text-text leading-relaxed">{aboutme.bio}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm uppercase tracking-wider text-accent mb-2">
          Objective
        </h2>
        <p className="text-text leading-relaxed">{aboutme.objective}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm uppercase tracking-wider text-accent mb-2">
          Education
        </h2>
        <ul className="space-y-2">
          <li>
            <div className="font-medium">Bachelor of Science in Computer Science</div>
            <div className="text-sm text-textMuted">
              Philippine Christian University · 2023 – Present
            </div>
          </li>
          <li>
            <div className="font-medium">Senior High School</div>
            <div className="text-sm text-textMuted">
              Jesus Reigns Christian Academy · 2020 – 2023
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-sm uppercase tracking-wider text-accent mb-2">
          Technical Skills
        </h2>
        <div className="space-y-2 text-sm">
          {skills.map(([category, items]) => (
            <div key={category} className="flex flex-col sm:flex-row sm:gap-2">
              <span className="font-medium text-text sm:w-48 shrink-0">
                {category}:
              </span>
              <span className="text-textMuted">{items.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-sm uppercase tracking-wider text-accent mb-2">
          Projects
        </h2>
        <ul className="space-y-3">
          {projects.map((p) => (
            <li key={p.name}>
              <div className="flex items-center gap-2">
                <span className="font-medium">{p.name}</span>
                <span className="text-xs text-textMuted">
                  ({p.tech.join(", ")})
                </span>
              </div>
              <div className="text-sm text-textMuted">{p.description}</div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#569cd6] hover:text-accent inline-flex items-center gap-1"
              >
                <FaGithub size={11} /> {p.url}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-sm uppercase tracking-wider text-accent mb-2">
          Leadership &amp; Organizational Experience
        </h2>
        <ul className="space-y-3">
          {leadership.map((item) => (
            <li key={item.title}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
                <span className="font-medium">{item.title}</span>
                <span className="text-xs text-textMuted shrink-0">
                  {item.period}
                </span>
              </div>
              <ul className="mt-1 space-y-1 text-sm text-textMuted">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-sm uppercase tracking-wider text-accent mb-2">
          Soft Skills
        </h2>
        <ul className="grid grid-cols-2 gap-1 text-sm">
          {aboutme.softSkills.map((s) => (
            <li key={s}>• {s}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-sm uppercase tracking-wider text-accent mb-2">
          Languages
        </h2>
        <p className="text-sm">{aboutme.languages.join(", ")}</p>
      </section>

      <p className="text-xs text-textMuted mt-10 border-t border-border pt-4">
        Full contact details and complete resume are included in the downloadable
        PDF.
      </p>
    </div>
  );
}
