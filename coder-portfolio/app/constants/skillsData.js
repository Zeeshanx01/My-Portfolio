import { SiReact, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiDocker, SiTailwindcss, SiJavascript, SiMysql, SiShadcnui, SiFramer, SiClerk, SiScrollreveal, SiStorybook, SiStreamlit, SiThreedotjs, SiExpress, SiVercel } from 'react-icons/si';
import { HiOutlineCube } from 'react-icons/hi2';
import { FaAws } from 'react-icons/fa';

export const skillsData = [
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: 'text-white',
    level: 85,
    url: 'https://nextjs.org',
    description: 'Next.js is a React framework for building fast, scalable web applications with server-side rendering, static site generation, and API routes. Use it for production-grade React apps.'
  },
  {
    name: 'React',
    icon: SiReact,
    color: 'text-blue-400',
    level: 75,
    url: 'https://react.dev',
    description: 'React is a JavaScript library for building user interfaces. It lets you create reusable UI components and manage state efficiently in web and mobile apps.'
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: 'text-green-400',
    level: 65,
    url: 'https://nodejs.org',
    description: 'Node.js is a runtime for executing JavaScript on the server. It is used for building scalable backend services and APIs.'
  },
  {
    name: 'ExpressJS',
    icon: SiExpress,
    color: 'text-green-400',
    level: 65,
    url: 'https://expressjs.com',
    description: 'Express is a minimal and flexible Node.js web application framework for building APIs and web servers.'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: 'text-yellow-400',
    level: 55,
    url: 'https://developer.mozilla.org/docs/Web/JavaScript',
    description: 'JavaScript is the programming language of the web, used for client-side and server-side development.'
  },
  {
    name: 'Clerk',
    icon: SiClerk,
    color: 'text-blue-400',
    level: 75,
    url: 'https://clerk.com',
    description: 'Clerk provides authentication and user management for modern web apps, making it easy to add sign-in, sign-up, and user profiles.'
  },
  {
    name: 'Stream',
    icon: SiStreamlit,
    color: 'text-green-400',
    level: 70,
    url: 'https://getstream.io',
    description: 'Stream offers APIs for scalable activity feeds and chat messaging in web and mobile apps.'
  },
  {
    name: 'LordIcons',
    icon: SiStorybook,
    color: 'text-yellow-400',
    level: 95,
    url: 'https://lordicon.com',
    description: 'LordIcons is a library of animated icons for modern web and mobile interfaces.'
  },
  {
    name: 'TailwindCSS',
    icon: SiTailwindcss,
    color: 'text-cyan-400',
    level: 90,
    url: 'https://tailwindcss.com',
    description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.'
  },
  {
    name: 'HeroUI',
    icon: HiOutlineCube,
    color: 'text-pink-400',
    level: 75,
    url: 'https://www.heroicons.com/',
    description: 'HeroUI (Heroicons) is a set of free MIT-licensed high-quality SVG icons for you to use in your web projects.'
  },
  {
    name: 'shadcn/ui',
    icon: SiShadcnui,
    color: 'text-purple-400',
    level: 75,
    url: 'https://ui.shadcn.com',
    description: 'shadcn/ui is a collection of beautifully designed components built with Radix UI and Tailwind CSS.'
  },
  {
    name: 'ReactBits',
    icon: SiReact,
    color: 'text-blue-400',
    level: 80,
    url: 'https://reactbits.com',
    description: 'ReactBits is a collection of React patterns, techniques, tips, and tricks.'
  },
  {
    name: 'React-Scroll',
    icon: SiScrollreveal,
    color: 'text-orange-400',
    level: 65,
    url: 'https://www.npmjs.com/package/react-scroll',
    description: 'React-Scroll is a React component for animating vertical scrolling.'
  },
  {
    name: 'FlowBite',
    icon: SiTailwindcss,
    color: 'text-cyan-400',
    level: 85,
    url: 'https://flowbite.com',
    description: 'FlowBite is a library of UI components built on top of Tailwind CSS.'
  },
  {
    name: 'Three.js',
    icon: SiThreedotjs,
    color: 'text-purple-400',
    level: 35,
    url: 'https://threejs.org',
    description: 'Three.js is a JavaScript 3D library that makes WebGL simpler.'
  },
  {
    name: 'Framer-Motion',
    icon: SiFramer,
    color: 'text-blue-400',
    level: 65,
    url: 'https://www.framer.com/motion/',
    description: 'Framer Motion is a production-ready motion library for React to power animations.'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: 'text-green-500',
    level: 80,
    url: 'https://www.mongodb.com',
    description: 'MongoDB is a NoSQL database for modern, scalable applications.'
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    color: 'text-blue-500',
    level: 25,
    url: 'https://www.mysql.com',
    description: 'MySQL is a popular open-source relational database.'
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    color: 'text-white',
    level: 80,
    url: 'https://vercel.com',
    description: 'Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host websites and web services that deploy instantly and scale automatically.'
  },
  {
    name: 'AWS Amplify',
    icon: FaAws,
    color: 'text-orange-400',
    level: 60,
    url: 'https://aws.amazon.com/amplify/',
    description: 'AWS Amplify is a set of tools and services that helps you build full-stack applications, with the flexibility to use the web or mobile platforms of your choice.'
  }
];

// Helper function to get skill by name
export const getSkillByName = (skillName) => {
  return skillsData.find(skill => skill.name.toLowerCase() === skillName.toLowerCase());
};

// Helper function to get multiple skills by names
export const getSkillsByNames = (skillNames) => {
  return skillNames.map(name => getSkillByName(name)).filter(Boolean);
}; 