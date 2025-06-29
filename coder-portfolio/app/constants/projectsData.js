export const projectsData = [



  {
    id: 1,
    title: "LinkTweak",
    description: "A full-stack URL shortener app that allows users to generate and manage custom short links.",
    tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    image: "/projects/linktweak/linktweak-01.png",
    liveUrl: "https://link-tweak.vercel.app/",
    repoUrl: "https://github.com/Zeeshanx01/LinkTweak",
    projectType: 1, // 1 for portfolio demonstration 0 for personal project 2 for real client project
    details: {
      timeline: "Feb 2024 - Apr 2024",
      role: "Full-stack Developer",
      client: "Personal Project",
      status: "Completed (more features planned)",
      overview: "LinkTweak is a full-stack web application built to simplify long URLs into compact, shareable short links. Developed using Next.js for the frontend and backend routing, along with MongoDB for data storage, the platform offers a smooth and responsive user interface crafted with TailwindCSS. The project includes features such as custom link generation, full CRUD support for managing links, and a user-friendly dashboard. Though currently designed for demo purposes, it is structured with scalability in mind—future updates are planned to include user authentication, personalized dashboards, and real-time analytics. This project highlights my proficiency in building complete web applications with modern technologies, RESTful APIs, and deployment on platforms like Vercel.",
      purpose: "To showcase my ability to build and deploy full-stack web applications using modern technologies.",
      features: [
        "Create short links from long URLs",
        "Track and list all generated URLs",
        "Basic CRUD operations (Create, Read, Update, Delete)",
        "Clean and responsive UI with TailwindCSS",
        "Server-side routing and API integration with Next.js",
        "Supports light and dark mode toggle",
        "Planned: user authentication and link analytics"
      ]
      
    },
    screenshots: [
      { path: "/projects/linktweak/linktweak-02.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-08.jpg", orientation: "P" },
      // { path: "/projects/linktweak/linktweak-03.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-04.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-05.png", orientation: "L" },
      // { path: "/projects/linktweak/linktweak-06.png", orientation: "L" },
      { path: "/projects/linktweak/linktweak-09.jpg", orientation: "P" },
      { path: "/projects/linktweak/linktweak-07.png", orientation: "L" },
    ]
  },
 


  {
    id: 2,
    title: "ZenTasks",
    description: "A minimalist to-do list app that helps users manage tasks with a smooth and clean interface.",
    tech: ["React", "TailwindCSS", "Lordicons"],
    image: "/projects/zentasks/zentasks-01.png",
    liveUrl: "https://zen-tasks-five.vercel.app/",
    repoUrl: "https://github.com/Zeeshanx01/Todolist-React-App",
    projectType: 1, // 1 for portfolio demonstration 0 for personal project 2 for real client project
    details: {
      timeline: "Mar 2024",
      role: "Frontend Developer",
      client: "Personal Project",
      status: "Completed",
      overview: "ZenTasks is a single-page task management app designed for simplicity and productivity. Built with React and styled using TailwindCSS, the app allows users to create, update, delete, and mark tasks as complete. It features a clean top-bar input section for quickly adding new tasks and a dynamic list below that organizes them intuitively. Lordicon animations add a touch of interactivity, enhancing the user experience. All data is stored locally using the browser's LocalStorage API, ensuring persistence without a backend. ZenTasks showcases my frontend development skills, state management in React, and the ability to deliver polished and responsive UIs.",
      purpose: "To demonstrate React frontend skills and local task persistence without using a backend.",
      features: [
        "Add, edit, and delete tasks",
        "Mark tasks as completed or active",
        "Toggle visibility of completed tasks",
        "State management using React hooks",
        "Fully responsive UI using TailwindCSS",
        "Task persistence using browser LocalStorage",
        "Interactive icons using Lordicon"
      ]
    },
    screenshots: [
      { path: "/projects/zentasks/zentasks-01.png", orientation: "L" },
      { path: "/projects/zentasks/zentasks-03.jpg", orientation: "P" },
      { path: "/projects/zentasks/zentasks-04.jpg", orientation: "P" },
      { path: "/projects/zentasks/zentasks-02.png", orientation: "L" },
    ]
  },
 


  {
    id: 3,
    title: "PassOP",
    description: "A lightweight password manager that stores credentials in local storage with easy copy functionality.",
    tech: ["React", "TailwindCSS", "React-Toastify", "Lordicons"],
    image: "/projects/passop/passop-01.png",
    liveUrl: "https://passop-topaz.vercel.app/", // replace if needed
    repoUrl: "https://github.com/Zeeshanx01/Password-Manager-Local", // replace if needed
    projectType: 1, // Portfolio Demonstration
    details: {
      timeline: "Apr 2024 - May 2024",
      role: "Frontend Developer",
      client: "Personal Project",
      status: "Completed",
      overview: "PassOP is a single-page password manager built to demonstrate my front-end capabilities with React and TailwindCSS. It enables users to store website login credentials locally in their browser, with an intuitive layout that separates input and data display areas. Each credential (URL, username, or password) can be copied individually via dedicated buttons. The project features smooth animations, responsive design, and toast notifications to enhance UX—all implemented without using a backend or database.",
      purpose: "To demonstrate client-side state management, local storage usage, and responsive UI development using modern frontend tools.",
      features: [
        "Add and store credentials (URL, username, password) using browser's localStorage",
        "Single-page responsive layout with intuitive sections",
        "Copy buttons for each credential field (username, password, etc.)",
        "Built with TailwindCSS and React functional components",
        "Visual feedback via React-Toastify notifications",
        "Animated icons with Lordicons for modern UI"
      ]
    },
    screenshots: [
      { path: "/projects/passop/passop-01.png", orientation: "L" },
      { path: "/projects/passop/passop-02.png", orientation: "L" },
      { path: "/projects/passop/passop-03.jpg", orientation: "P" },
      { path: "/projects/passop/passop-04.jpg", orientation: "P" },
    ]
  },
  
 


  {
    id: 4,
    title: "Linktree",
    description: "A full-stack Linktree clone that allows users to create and share personalized link hub profiles.",
    tech: ["Next.js", "MongoDB", "TailwindCSS"],
    image: "/projects/linktree/linktree-01.png",
    liveUrl: "https://linktree-clone-iota-lemon.vercel.app/", // replace if needed
    repoUrl: "https://github.com/Zeeshanx01/LinkTree-Clone", // replace if needed
    projectType: 1, // Portfolio Demonstration
    details: {
      timeline: "May 2024 - Jun 2024",
      role: "Full-stack Developer",
      client: "Personal Project",
      status: "Completed",
      overview: "Linktree is a modern, full-stack clone of the popular Linktree platform built to showcase dynamic routing, MongoDB integration, and full-stack CRUD operations using Next.js. The application features three main pages: a landing page with UI similar to the official Linktree site; a creation page where users can generate their personal link hub using a unique handle, profile picture, description, and multiple custom links; and a dynamic user page that publicly displays the personalized link profile. The design is clean and responsive, focused on user experience.",
      purpose: "To showcase my skills in building full-stack dynamic applications with database integration and responsive UI.",
      features: [
        "Custom Linktree creation with profile image, description, and multiple links",
        "Unique handle assignment and validation",
        "Data stored and managed in MongoDB",
        "Dynamic routing for each user’s linktree page",
        "Landing page UI inspired by the official Linktree site",
        "Built using Next.js app router and TailwindCSS"
      ]
    },
    screenshots: [
      { path: "/projects/linktree/linktree-01.png", orientation: "L" },
      { path: "/projects/linktree/linktree-02.png", orientation: "L" },
      { path: "/projects/linktree/linktree-03.jpg", orientation: "P" },
      { path: "/projects/linktree/linktree-04.jpg", orientation: "P" },
    ]
  },


  {
    id: 5,
    title: "ChattyPie",
    description: "A modern chat application featuring real-time communication, forum-based messaging, and user authentication.",
    tech: ["Next.js", "Clerk Auth", "Stream Chat", "TailwindCSS", "Lord Icons", ],
    image: "/projects/chattypie/chattypie-01.png",
    liveUrl: "", // replace if available
    repoUrl: "https://github.com/Zeeshanx01/Chat-App", // replace if available
    projectType: 1, // Portfolio Demonstration
    details: {
      timeline: "Jun 2024 - Ongoing",
      role: "Full-stack Developer",
      client: "Personal Project",
      status: "In Development",
      overview: "ChattyPie is a full-stack, forum-based chat application that demonstrates real-time communication using Stream integration and secure authentication via Clerk. Users can create accounts, join existing chat forums, and participate in live message threads. The platform also supports forum creation (admin only) and is structured to support scalable community discussions. Although the app is functional, it's currently under active development, with some bugs and missing features such as forum deletion and admin-only restrictions.",
      purpose: "To demonstrate full-stack development skills with a focus on authentication, real-time chat integration, and UI interaction using third-party APIs.",
      features: [
        "Clerk-based user authentication",
        "Join and participate in real-time chat forums",
        "Stream Chat API integration for messaging",
        "Single-page responsive chat experience",
        "Create new forums (admin access only)",
        "Light and dark mode support",
        "Under development: bug fixes and admin controls"
      ]
      
    },
    screenshots: [
      { path: "/projects/chattypie/chattypie-01.png", orientation: "L" },
      { path: "/projects/chattypie/chattypie-02.png", orientation: "L" },
      { path: "/projects/chattypie/chattypie-03.png", orientation: "L" },
      { path: "/projects/chattypie/chattypie-04.png", orientation: "L" },
      { path: "/projects/chattypie/chattypie-05.png", orientation: "L" },
      { path: "/projects/chattypie/chattypie-06.png", orientation: "L" },
    ]
  },







  {
    id: 6,
    title: "Get-Me-A-Chai",
    description: "A Patreon-style funding platform where creators can receive support and highlight contributors.",
    tech: ["Next.js", "NextAuth.js", "MongoDB", "TailwindCSS"],
    image: "/projects/getmeachai/getmeachai-01.png",
    liveUrl: "", // replace if available
    repoUrl: "https://github.com/Zeeshanx01/Get-Me-A-Chai", // replace if available
    projectType: 1, // Portfolio Demonstration
    details: {
      timeline: "Apr 2024 - May 2024",
      role: "Full-stack Developer",
      client: "Personal Project",
      status: "Partially Completed (payment integration pending)",
      overview: "Get-Me-A-Chai is a full-stack clone of Patreon where creators can create profiles and accept funding from supporters. Built using modern web technologies, it allows users to register using NextAuth, upload profile and cover images, and display messages from contributors. Supporters can send funds along with messages, which are then featured on the creator’s profile—higher contributions are prioritized at the top. While most of the core functionality is working, the actual payment processing system is still under development.",
      purpose: "To showcase my ability to create a community-based platform with authentication, dynamic content handling, and planned integration of payment systems.",
      features: [
        "User authentication via NextAuth",
        "Creator profile customization (cover photo, profile image, name, bio, handle)",
        "Receive funding with custom messages",
        "Top messages prioritized based on contribution amount",
        "Responsive and user-friendly UI",
        "Planned: full payment integration and admin dashboard"
      ]
    },
    screenshots: [
      { path: "/projects/getmeachai/getmeachai-01.png", orientation: "L" },
      { path: "/projects/getmeachai/getmeachai-02.png", orientation: "L" },
    ]
  },




  {
    id: 7,
    title: "Online Food Delivery System",
    description: "A full-stack online food delivery platform with admin panel, dynamic frontend, and MySQL backend integration.",
    tech: ["Next.js", "MySQL", "TailwindCSS", "Clerk Auth", "React-Toastify", "Lordicons"],
    image: "/projects/ofds/ofds-01.png",
    liveUrl: "", // Add if available
    repoUrl: "https://github.com/Zeeshanx01/Online-Food-Delivery-System", // Add if available
    projectType: 1, // 1 for portfolio demonstration
    details: {
      timeline: "May 2024 - Ongoing",
      role: "Full-stack Developer",
      client: "University Project",
      status: "In Progress",
      overview:
        "This project demonstrates a scalable full-stack food delivery web application built with Next.js and MySQL. It includes a multi-role system (user/admin), dynamic data fetching, and secure authentication using Clerk. The backend consists of 8 MySQL tables (food items, restaurants, orders, users, etc.), all of which are integrated into the frontend for real-time display and management. Admin users can perform full CRUD operations on all entities through a separate admin dashboard.",
      purpose:
        "To showcase database handling, CRUD operations, multi-role interfaces, and integration of Clerk auth in a real-world-style application.",
      features: [
        "User registration and login with Clerk Auth",
        "Dynamic rendering of food items and restaurant data",
        "Separate admin dashboard for full CRUD operations",
        "MySQL integration with 8 relational tables",
        "Pages for viewing and managing restaurants, orders, and payments",
        "Modular table management for coupons, delivery, and reviews",
        "Under development: item ratings, order tracking, cart features"
      ]
    },
    screenshots: [
      { path: "/projects/ofds/ofds-01.png", orientation: "L" },
      { path: "/projects/ofds/ofds-03.png", orientation: "L" },
      { path: "/projects/ofds/ofds-05.png", orientation: "L" },
      { path: "/projects/ofds/ofds-04.png", orientation: "L" },
      { path: "/projects/ofds/ofds-02.png", orientation: "L" },
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