// myprojects.ts — single source of truth for projects.
// Used by the VS Code portfolio (MyProjects view + CV) and by "the AI Portfolio".
// The VS Code views use name/description/tech/url; the AI Portfolio additionally
// uses category/year/accent/preview.

export type Project = {
  name: string;
  description: string;
  tech: string[];
  url: string;
  // --- used by "the AI Portfolio" work list ---
  category: string; // short role/type label, e.g. "Full-Stack · Web + Mobile"
  year: string; // short year shown on the row, e.g. "’25"
  accent: string; // hover accent colour
  preview?: string; // screenshot under /public for the hover preview
};

export const projects: Project[] = [
  {
    name: "OurFrame",
    description:
      "Current project — a Netflix-inspired app where you and your partner can add and relive your photos and videos together. Backend TBA by my co-dev.",
    tech: ["React", "AWS"],
    url: "https://github.com/Waideeee/OurFrame",
    category: "Web App · In Progress",
    year: "’26",
    accent: "#7ef58a",
  },
  {
    name: "CiviReport",
    description:
      "A civic issue reporting platform that lets residents submit and track community concerns.",
    tech: [
      "Laravel (Jetstream)/PHP",
      "JavaScript",
      "Python",
      "CSS",
      "PostgreSQL",
      "WebSocket",
    ],
    url: "https://github.com/Waideeee/civireport",
    category: "Full-Stack · Web + Mobile",
    year: "’25",
    accent: "#7ef58a",
    preview: "/projects/civireport.png",
  },
  {
    name: "BarangayPaws",
    description:
      "A mobile app for pets where owners can register their pets to the barangay.",
    tech: ["Laravel/PHP", "Firebase", "Cloudinary", "REST API"],
    url: "https://github.com/emnixxx/BarangayPaws",
    category: "Full-Stack · Commissioned",
    year: "’25",
    accent: "#6fd3ff",
  },
  {
    name: "Sociatech",
    description:
      "A social-tech web application built collaboratively as a team project.",
    tech: ["PHP", "React.js", "MySQL", "CSS", "Firebase"],
    url: "https://github.com/JohnCarl-30/SociaTech",
    category: "Full-Stack · Containerized",
    year: "’24",
    accent: "#ffb86f",
    preview: "/projects/sociatech.png",
  },
  {
    name: "Point of Sale System",
    description:
      "Desktop Point of Sale system with product management, inventory, and sales computation.",
    tech: ["Java (Swing/AWT)", "Excel", "Apache POI"],
    url: "https://github.com/fnzh-i/POS_SYSTEM",
    category: "Frontend · Desktop GUI",
    year: "’24",
    accent: "#c89bff",
    preview: "/projects/pos.png",
  },
  {
    name: "StackPay",
    description:
      "A payment-stack project exploring full transaction flow and clean financial UI patterns.",
    tech: ["Java (Android App)"],
    url: "https://github.com/Waideeee/StackPay",
    category: "Mobile · Payments",
    year: "’24",
    accent: "#7ef58a",
  },
  {
    name: "SharedPrefApp",
    description:
      "A Saving Data and Shared Preferences activity for Mobile Application Development — a Locket-inspired app where you upload pictures from the gallery, capture photos in real time, and post them.",
    tech: ["Java (Android App)"],
    url: "https://github.com/Waideeee/SharedPrefApp",
    category: "Mobile · Locket-inspired",
    year: "’24",
    accent: "#6fd3ff",
  },
  {
    name: "MEMEmoryGame",
    description:
      "A hands-on Memory Game activity for Mobile Application Development where you match your classmates' pictures with funny memes.",
    tech: ["Java"],
    url: "https://github.com/Waideeee/MEMEmoryGame",
    category: "Mobile · Memory Game",
    year: "’24",
    accent: "#ffb86f",
  },
  {
    name: "Senate-Brawl",
    description:
      "A browser-based fighting-game experiment — a tongue-in-cheek “Philippine Fighting Championship” built to explore game interaction and logic.",
    tech: ["JavaScript", "HTML", "CSS"],
    url: "https://github.com/Waideeee/Senate-Brawl",
    category: "Game · Experiment",
    year: "’23",
    accent: "#ffb86f",
    preview: "/projects/senate-brawl.png",
  },
];
