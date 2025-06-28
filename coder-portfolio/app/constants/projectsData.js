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
  {
    id: 2,
    title: "Personal Blog",
    description: "My personal blog and portfolio website",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
    image: "/projects/linktweak/linktweak-01.png", // Change to actual blog image
    liveUrl: "https://zeeshanmunir.com",
    repoUrl: "https://github.com/Zeeshanx01/personal-blog",
    projectType: 0, // 0 for personal project
    details: {
      timeline: "Dec 2023 - Jan 2024",
      role: "Full-stack Developer",
      client: "Personal",
      status: "Completed",
      purpose: "Personal blog and portfolio website to showcase my work and share thoughts",
      features: [
        "Responsive design",
        "Dark/Light mode",
        "Blog functionality",
        "Contact form"
      ]
    },
    screenshots: [
      { path: "/projects/linktweak/linktweak-02.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-03.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-04.png", orientation: "L" },
    ]
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution for a local business",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/projects/linktweak/linktweak-01.png", // Change to actual e-commerce image
    liveUrl: "https://example-ecommerce.com",
    repoUrl: "https://github.com/Zeeshanx01/ecommerce-platform",
    projectType: 2, // 2 for real client project
    details: {
      timeline: "Mar 2024 - Jun 2024",
      role: "Full-stack Developer",
      client: "Local Business",
      status: "Completed",
      purpose: "Complete e-commerce solution for a local retail business",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment integration",
        "Admin dashboard"
      ]
    },
    screenshots: [
      { path: "/projects/linktweak/linktweak-02.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-03.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-04.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-05.png", orientation: "L" },
    ]
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative task management application",
    tech: ["Next.js", "TypeScript", "Prisma", "NextAuth"],
    image: "/projects/linktweak/linktweak-01.png", // Change to actual task app image
    liveUrl: "https://task-app-demo.vercel.app",
    repoUrl: "https://github.com/Zeeshanx01/task-management-app",
    projectType: 1, // 1 for portfolio demonstration
    details: {
      timeline: "May 2024 - Jul 2024",
      role: "Full-stack Developer",
      client: "Portfolio Project",
      status: "Completed",
      purpose: "Demonstrates advanced React patterns, state management, and real-time collaboration",
      features: [
        "Real-time collaboration",
        "Task assignments",
        "Progress tracking",
        "Team management"
      ]
    },
    screenshots: [
      { path: "/projects/linktweak/linktweak-02.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-03.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-04.png", orientation: "L" },
    ]
  },
  {
    id: 5,
    title: "Restaurant Website",
    description: "Modern website for a local restaurant chain",
    tech: ["React", "TailwindCSS", "Framer Motion", "Netlify"],
    image: "/projects/linktweak/linktweak-01.png", // Change to actual restaurant image
    liveUrl: "https://restaurant-website.com",
    repoUrl: "https://github.com/Zeeshanx01/restaurant-website",
    projectType: 2, // 2 for real client project
    details: {
      timeline: "Aug 2024 - Sep 2024",
      role: "Frontend Developer",
      client: "Restaurant Chain",
      status: "Completed",
      purpose: "Modern, responsive website for a local restaurant chain with online ordering",
      features: [
        "Menu display",
        "Online ordering",
        "Reservation system",
        "Mobile responsive"
      ]
    },
    screenshots: [
      { path: "/projects/linktweak/linktweak-02.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-03.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-04.png", orientation: "L" },
    ]
  }
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