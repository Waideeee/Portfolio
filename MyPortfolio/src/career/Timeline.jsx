"use client";

// Timeline.jsx — education, leadership, organizations & seminars

const timeline = [
  {
    year: "Mar 17, 2026",
    title: "Gen AI to Z: A Career Summit in an AI-driven World",
    points: [
      "Learned to leverage generative AI tools for media production, mastering prompt engineering to create custom images and cinematic videos.",
      "Adopted an agent-first \"VibeCoding\" workflow using natural-language AI extensions to rapidly prototype, build, and debug web and mobile apps.",
      "Researched real-world AI case studies, from automated investigative journalism to predictive maintenance in space exploration.",
    ],
  },
  {
    year: "2025 – 2026",
    title: "Vice President-External · PCU-M Society of Computer Technologists",
    points: [
      "Managed and monitored organizational funds and financial records.",
      "Managed the Grade 12 Summit booth for Computer Science.",
      "Ensured transparency and accuracy in financial transactions.",
      "Managed seminar events.",
    ],
  },
  {
    year: "Nov 2025",
    title: "Blockchain Summit",
    points: ["Learned how crypto earns and how it increases."],
  },
  {
    year: "2025",
    title: "Philippine Christian University · 3rd Year",
    points: [
      "Third year of BS Computer Science — deeper into software engineering, databases, and full-stack projects.",
    ],
  },
  {
    year: "2024 – 2025",
    title: "Creatives Head · PCU-M Society of Computer Technologists",
    points: [
      "Created pubmats for events, announcements, and more.",
      "Assisted in budget planning and allocation for students.",
      "Managed a Grade 12 Summit booth for Computer Science.",
    ],
  },
  {
    year: "Oct 1, 2024",
    title: "BootUp: Computer Science Skills Intensive",
    points: [
      "Built a web-based CRUD management system with PHP and MySQL.",
      "Learned data modeling and interactive visualizations in Power BI.",
      "Built a real-time object detection project using Roboflow and a smartphone camera.",
    ],
  },
  {
    year: "May 10, 2024",
    title: "Exploring the New Digital Era",
    points: [
      "Learned how hacking works and what we can do to protect our data.",
      "Learned how the Cloud works.",
    ],
  },
  {
    year: "2024",
    title: "Philippine Christian University · 2nd Year",
    points: [
      "Second year of BS Computer Science — data structures, object-oriented programming, and web development.",
    ],
  },
  {
    year: "2023",
    title: "BS Computer Science begins · Philippine Christian University",
    points: ["Wrote my first line of code using Java."],
  },
];

export default function Timeline() {
  return (
    <div className="min-h-full bg-bg text-text px-8 py-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-1">Timeline</h2>
        <p className="text-sm text-textMuted mb-10">
          Education, leadership, organizations, and seminars along the way.
        </p>

        <ol className="relative border-l-2 border-border ml-3">
          {timeline.map((item, i) => (
            <li key={i} className="relative pl-8 pb-10 last:pb-0">
              {/* circle dot marker */}
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-bg" />
              <div className="text-sm font-semibold text-[#569cd6]">
                {item.year}
              </div>
              <h3 className="mt-0.5 text-lg font-bold text-text">
                {item.title}
              </h3>
              <ul className="mt-1 space-y-1 text-sm leading-relaxed text-textMuted">
                {item.points.map((point, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
