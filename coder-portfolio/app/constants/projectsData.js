export const projectsData = [
  {
    id: 1,
    title: "LinkTweak",
    description: "URL shortening tool demonstration",
    tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    image: "/projects/linktweak/linktweak-01.png",
    liveUrl: "https://link-tweak.vercel.app/",
    repoUrl: "https://github.com/Zeeshanx01/LinkTweak",
    projectType: 1, // 1 for portfolio demonstration
    details: {
      timeline: "Feb 2024 - Apr 2024",
      role: "Full-stack Developer",
      client: "Personal Project",
      status: "Completed",
      purpose: "Demonstrates full-stack development capabilities with modern web technologies",
      features: [
        "Custom URL shortening",
        "Analytics dashboard",
        "User authentication",
        "QR code generation"
      ]
    },
    screenshots: [
      { path: "/projects/linktweak/linktweak-02.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-08.jpg", orientation: "P" },
      { path: "/projects/linktweak/linktweak-03.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-04.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-05.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-06.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-09.jpg", orientation: "P" },
      { path: "/projects/linktweak/linktweak-07.png", orientation: "L" },
    ]
  },



];

// Project type constants for better readability
export const PROJECT_TYPES = {
  PERSONAL: 0,      // Personal projects for myself
  PORTFOLIO: 1,     // Portfolio demonstration projects
  CLIENT: 2         // Real client projects
};

// Helper function to get project type label
export const getProjectTypeLabel = (projectType) => {
  switch (projectType) {
    case PROJECT_TYPES.PERSONAL:
      return "Personal Project";
    case PROJECT_TYPES.PORTFOLIO:
      return "Portfolio Demonstration";
    case PROJECT_TYPES.CLIENT:
      return "Client Project";
    default:
      return "Project";
  }
};

// Helper function to get project type color
export const getProjectTypeColor = (projectType) => {
  switch (projectType) {
    case PROJECT_TYPES.PERSONAL:
      return "blue"; // blue-500/30 and blue-300
    case PROJECT_TYPES.PORTFOLIO:
      return "purple"; // purple-500/30 and purple-300
    case PROJECT_TYPES.CLIENT:
      return "green"; // green-500/30 and green-300
    default:
      return "purple";
  }
}; 