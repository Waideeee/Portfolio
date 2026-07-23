// experience.ts — leadership & organizational experience (source of truth: resume)
// Shared by the CV view and the AI-generated portfolio.

export type Experience = {
  title: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    title: "Vice President-External · PCU-M Society of Computer Technologists",
    period: "2025 – 2026",
    points: [
      "Managed and monitored organizational funds and financial records.",
      "Managed the Grade 12 Summit booth for Computer Science.",
      "Ensured transparency and accuracy in financial transactions.",
      "Managed seminar events.",
    ],
  },
  {
    title: "Creatives Head · PCU-M Society of Computer Technologists",
    period: "2024 – 2025",
    points: [
      "Created pubmats for events, announcements, and more.",
      "Assisted in budget planning and allocation for students.",
      "Managed a Grade 12 Summit booth for Computer Science.",
    ],
  },
  {
    title: "Gen AI to Z: A Career Summit in an AI-Driven World",
    period: "Mar 17, 2026",
    points: [
      "Leveraged generative AI tools and prompt engineering for media production.",
      'Adopted an agent-first "VibeCoding" workflow to prototype and debug apps.',
      "Researched real-world AI case studies in journalism and aerospace.",
    ],
  },
  {
    title: "BootUp: Computer Science Skills Intensive",
    period: "Oct 1, 2024",
    points: [
      "Built a web-based CRUD management system with PHP and MySQL.",
      "Learned data modeling and interactive visualizations in Power BI.",
      "Built a real-time object detection project using Roboflow.",
    ],
  },
  {
    title: "Exploring the New Digital Era",
    period: "May 10, 2024",
    points: [
      "Learned how hacking works and how to protect our data.",
      "Learned how the Cloud works.",
    ],
  },
];
