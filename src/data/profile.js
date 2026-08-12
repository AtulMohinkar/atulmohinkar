/**
 * Single source of truth for all portfolio content.
 * Edit this file to personalise the portfolio — no component changes needed.
 */

import resumeAsset from "../assets/resume.pdf.asset.json";
import CareerImg from "../assets/Career.png";
import EcommerceImg from "../assets/E-com.png";

export const profile = {
  name: "Atul Mohinkar",
  role: "MERN Stack Developer",
  tagline:
    "Full stack developer building responsive, production-minded web apps with MongoDB, Express.js, React.js and Node.js.",
  typingWords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React.js Developer",
    "Node.js Backend Builder",
  ],
  location: "Nagpur, India",
  email: "atulmohinkar5603@gmail.com",
  phone: "+91 95273 76340",
  availability: "Open to Internships & Full-time",
  degree: "B.Tech (AI), RTMNU — 2027",
  experienceLabel: "MERN internship + full-stack projects",
  languages: "English, Hindi, Marathi",
  resumeUrl: resumeAsset.url,
  githubUsername: "AtulMohinkar",
  socials: {
    github: "https://github.com/AtulMohinkar",
    linkedin: "https://linkedin.com/in/atulmohinkar",
    leetcode: "https://leetcode.com/u/AtulMohinkar",
  },
  mapEmbed: "https://www.google.com/maps?q=buddha vihar,Kawrapeth,Umred,Nagpur,Maharashtra,India&output=embed",
};

export const about = {
  summary:
    "I'm a MERN Stack Developer with internship experience building full-stack web applications using MongoDB, Express.js, React.js and Node.js. I enjoy turning ideas into clean REST APIs, well-designed MongoDB schemas and responsive interfaces that feel fast on any device.",
  journey:
    "I started with JavaScript, HTML and CSS fundamentals alongside my B.Tech in Artificial Intelligence, then went deep on React.js and Node.js. During my internship at Edvercity (LiveTechSkills) I shipped reusable React components, integrated RESTful APIs and worked with Git and GitHub in an Agile team.",
  objective:
    "Looking for a MERN / full-stack role where I can own features end-to-end, learn from senior engineers and grow into a well-rounded product engineer, where i can deal and solve real-world problem through my skills.",
  facts: [
    { label: "Location", value: "Nagpur, India" },
    { label: "Degree", value: "B.Tech — Artificial Intelligence" },
    { label: "Availability", value: "Open to opportunities" },
    { label: "Experience", value: "MERN Stack Intern" },
    { label: "Languages", value: "English, Hindi, Marathi" },
    { label: "Focus", value: "React · Node · MongoDB" },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "Java", level: 74 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", level: 88 },
      { name: "Vite", level: 82 },
      { name: "React Router", level: 84 },
      { name: "Axios", level: 84 },
      { name: "Redux", level: 74 },
      { name: "Responsive Design", level: 88 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 82 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", level: 84 },
      { name: "Mongoose", level: 82 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", level: 86 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 84 },
      { name: "Figma", level: 72 },
    ],
  },
  {
    title: "Concepts",
    items: [
      { name: "MVC Architecture", level: 82 },
      { name: "JWT Authentication", level: 84 },
      { name: "CRUD Operations", level: 88 },
      { name: "Express Middleware", level: 80 },
      { name: "Agile & SDLC", level: 78 },
      { name: "CORS & RBAC", level: 76 },
      { name: "Core DSA", level: 78 },
    ],
  },
];

export const projects = [
  {
    id: "career-guidance",
    img: CareerImg,
    title: "Career Guidance Platform",
    category: "Frontend",
    description:
      "A responsive career guidance platform featuring 10+ career domains with dynamic, API-driven content.",
    features: [
      "10+ career domains with structured guidance content",
      "Reusable React components with REST API integration",
      "Improved navigation, accessibility and responsiveness",
    ],
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "REST API"],
    challenges:
      "Keeping content dynamic across many domains — solved with a data-driven component structure and shared API layer.",
    role: "Frontend developer — UI, components and API integration.",
    metrics: [
      { label: "Career domains", value: "10+" },
      { label: "Responsive", value: "100%" },
      { label: "Components", value: "Reusable" },
    ],
    demo: "https://next-step-brown.vercel.app",
    code: "https://github.com/AtulMohinkar/NextStep",
    accent: "blue",
  },
  {
    id: "ecommerce",
    img: EcommerceImg,
    title: "E-Commerce Website",
    category: "Full Stack",
    description:
      "A full-stack e-commerce platform supporting 50+ products with authentication, search, filtering and cart.",
    features: [
      "Authentication and protected user routes",
      "Product search, category filtering and shopping cart",
      "REST APIs with Express.js and MongoDB data models",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
    challenges:
      "Efficient product querying at scale — solved with indexed MongoDB queries and paginated API responses.",
    role: "Full-stack developer — schema design, API and UI.",
    metrics: [
      { label: "Products", value: "50+" },
      { label: "Stack", value: "MERN" },
      { label: "Auth", value: "JWT" },
    ],
    demo: "https://github.com/AtulMohinkar",
    code: "https://github.com/AtulMohinkar",
    accent: "violet",
  },
];

export const experience = [
  {
    title: "MERN Stack Developer Intern",
    org: "Edvercity (LiveTechSkills)",
    period: "Dec 2025 — Jun 2026",
    type: "Internship",
    points: [
      "• Developed responsive full-stack web applications using the MERN stack.",
      "• Built reusable React components and integrated RESTful APIs for seamless frontend-backend communication.",
      "• Designed MongoDB schemas and implemented CRUD operations using Mongoose.",
      "• Collaborated with developers using Git and GitHub in an Agile environment.",
      "• Optimized application performance and enhanced UX through efficient component design.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech — Artificial Intelligence",
    school: "Priyadarshini Bhagwati College of Engineering (RTMNU)",
    period: "2023 — Present",
    score: "CGPA 7.54",
    courses: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
      "Artificial Intelligence",
    ],
  },
  {
    degree: "HSC — Maharashtra State Board",
    school: "Maharashtra State Board",
    period: "2023",
    score: "70.83%",
    courses: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    degree: "SSC — Maharashtra State Board",
    school: "Maharashtra State Board",
    period: "2021",
    score: "83.40%",
    courses: ["Science", "Mathematics", "English"],
  },
];

export const certifications = [
  {
    name: "Diploma in MERN Stack",
    issuer: "AICSM",
    year: "2026",
  },
   {
    name: "ServiceNow Virtual Internship Program",
    issuer: "ServiceNow University & SmartBridge",
    year: "2025",
  },
  {
    name: "Java Programming for Beginners",
    issuer: "Simplilearn",
    year: "2025",
  },
 
];

export const achievements = [
  {
    title: "MERN Stack Internship",
    detail:
      "Shipped full-stack features at Edvercity (LiveTechSkills) in an Agile team.",
    tag: "Experience",
  },
  {
    title: "DSA Completion Certification",
    detail: "Basics of Data Structures and Algorithms.",
    tag: "Certification",
  },
  {
    title: "Kabbadi Tournament",
    detail: "Runner Up in College Kabbadi Tournament-2025",
    tag: "Sports",
  },
  {
    title: "Full-Stack Projects",
    detail:
      "Built an e-commerce platform with 50+ products and a 10+ domain career guidance platform.",
    tag: "Projects",
  },
];

export const githubFallback = {
  login: "AtulMohinkar",
  name: "Atul Mohinkar",
  bio: "Final Year AI Student | MERN stack developer | Software Developer",
  followers: 0,
  following: 0,
  public_repos: 0,
  html_url: "https://github.com/AtulMohinkar",
  avatar_url: "https://avatars.githubusercontent.com/u/298112498?v=4",
};


export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
