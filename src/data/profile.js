/**
 * Single source of truth for all portfolio content.
 * Edit this file to personalise the portfolio — no component changes needed.
 */

export const profile = {
  name: "Aarav Sharma",
  role: "MERN Stack Developer",
  tagline:
    "Fresher developer building fast, accessible and production-minded web apps with MongoDB, Express, React and Node.js.",
  typingWords: [
    "MERN Stack Developer",
    "React Enthusiast",
    "Node.js Backend Builder",
    "Open Source Contributor",
  ],
  location: "Pune, India",
  email: "aarav.sharma.dev@gmail.com",
  phone: "+91 90000 00000",
  availability: "Open to Internships & Full-time",
  degree: "B.E. Computer Engineering, 2025",
  experienceLabel: "1 yr of project & internship work",
  languages: "English, Hindi, Marathi",
  resumeUrl: "/resume.pdf",
  githubUsername: "aarav-sharma",
  socials: {
    github: "https://github.com/aarav-sharma",
    linkedin: "https://linkedin.com/in/aarav-sharma",
    leetcode: "https://leetcode.com/aarav-sharma",
  },
  mapEmbed:
    "https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed",
};

export const about = {
  summary:
    "I'm a final-year Computer Engineering graduate who fell in love with the web the day I shipped my first CRUD app. Since then I have built 10+ full-stack projects, contributed to open source and completed a frontend internship where I owned real features used by real users.",
  journey:
    "I started with HTML and CSS in my second year, moved into JavaScript fundamentals and DSA, then went deep on React and Node.js. I now focus on writing clean, testable code, designing sensible REST APIs and shipping interfaces that feel fast on a mid-range phone.",
  objective:
    "Looking for an internship or entry-level MERN role where I can learn from senior engineers, take ownership of features end-to-end and grow into a well-rounded product engineer.",
  facts: [
    { label: "Location", value: "Pune, India" },
    { label: "Degree", value: "B.E. Computer Engineering" },
    { label: "Availability", value: "Immediately (Full-time)" },
    { label: "Experience", value: "Internship + 10 projects" },
    { label: "Languages", value: "English, Hindi, Marathi" },
    { label: "Focus", value: "React · Node · MongoDB" },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 88 },
      { name: "Redux", level: 75 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 82 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", level: 84 },
      { name: "MySQL", level: 72 },
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      { name: "Git", level: 86 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 84 },
      { name: "Vite", level: 82 },
      { name: "Render", level: 76 },
      { name: "Vercel", level: 80 },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Communication", level: 88 },
      { name: "Problem Solving", level: 90 },
      { name: "Teamwork", level: 86 },
      { name: "Leadership", level: 78 },
    ],
  },
];

export const projects = [
  {
    id: "shopnest",
    title: "ShopNest — MERN E-commerce",
    category: "Full Stack",
    description:
      "A complete storefront with cart, JWT auth, Razorpay test checkout and an admin dashboard for inventory and orders.",
    features: [
      "JWT auth with refresh tokens and role-based admin routes",
      "Cart, wishlist and order history persisted per user",
      "Admin analytics: revenue, top products, low stock alerts",
    ],
    stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    challenges:
      "Race conditions on concurrent stock updates — solved with atomic MongoDB findOneAndUpdate operations and optimistic UI rollback.",
    role: "Sole developer — schema design, API, UI and deployment.",
    metrics: [
      { label: "API routes", value: "38" },
      { label: "Lighthouse", value: "96" },
      { label: "Test users", value: "120+" },
    ],
    demo: "https://example.com",
    code: "https://github.com/aarav-sharma",
    accent: "blue",
  },
  {
    id: "taskflow",
    title: "TaskFlow — Team Task Manager",
    category: "Full Stack",
    description:
      "Real-time kanban board with drag-and-drop, comments and activity feed powered by Socket.IO.",
    features: [
      "Live board sync across clients with Socket.IO rooms",
      "Drag-and-drop columns with optimistic updates",
      "Email digests via Nodemailer cron job",
    ],
    stack: ["React", "Socket.IO", "Express", "MongoDB", "JWT"],
    challenges:
      "Keeping ordering stable during simultaneous drags — solved with fractional index ordering instead of integer positions.",
    role: "Backend lead in a 3-person college team.",
    metrics: [
      { label: "Boards", value: "500+" },
      { label: "Latency", value: "<80ms" },
      { label: "Uptime", value: "99.4%" },
    ],
    demo: "https://example.com",
    code: "https://github.com/aarav-sharma",
    accent: "violet",
  },
  {
    id: "devnotes",
    title: "DevNotes — Markdown Knowledge Base",
    category: "Frontend",
    description:
      "Offline-first note app with markdown preview, tag search and IndexedDB persistence.",
    features: [
      "Instant fuzzy search across thousands of notes",
      "Offline-first with IndexedDB + service worker",
      "Keyboard-first navigation and command palette",
    ],
    stack: ["React", "IndexedDB", "CSS3", "Vite"],
    challenges:
      "Search stayed responsive at 5k notes only after moving indexing to a Web Worker.",
    role: "Solo project, design and build.",
    metrics: [
      { label: "Bundle", value: "48kb" },
      { label: "Notes tested", value: "5k" },
      { label: "TTI", value: "0.9s" },
    ],
    demo: "https://example.com",
    code: "https://github.com/aarav-sharma",
    accent: "cyan",
  },
  {
    id: "weatherlens",
    title: "WeatherLens — Forecast Dashboard",
    category: "Frontend",
    description:
      "Geolocation weather dashboard with 7-day charts, saved cities and animated condition backgrounds.",
    features: [
      "Recharts-based temperature and precipitation graphs",
      "Debounced city autocomplete with caching",
      "Fully keyboard accessible and screen-reader labelled",
    ],
    stack: ["React", "REST APIs", "CSS3"],
    challenges:
      "Third-party API rate limits — added a client cache layer with stale-while-revalidate behaviour.",
    role: "Solo project.",
    metrics: [
      { label: "API calls saved", value: "70%" },
      { label: "A11y score", value: "100" },
      { label: "Cities", value: "Global" },
    ],
    demo: "https://example.com",
    code: "https://github.com/aarav-sharma",
    accent: "blue",
  },
  {
    id: "apivault",
    title: "APIVault — Node Auth Starter",
    category: "Backend",
    description:
      "Production-style Express boilerplate with auth, rate limiting, validation and OpenAPI docs.",
    features: [
      "Argon2 password hashing and refresh-token rotation",
      "Zod request validation and centralised error handling",
      "Swagger docs generated from route schemas",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Zod"],
    challenges:
      "Designing a token rotation flow that survives parallel requests from the same client.",
    role: "Solo, used as the base for my other projects.",
    metrics: [
      { label: "Stars", value: "34" },
      { label: "Forks", value: "11" },
      { label: "Endpoints", value: "22" },
    ],
    demo: "https://example.com",
    code: "https://github.com/aarav-sharma",
    accent: "violet",
  },
  {
    id: "campusconnect",
    title: "CampusConnect — Event Portal",
    category: "Full Stack",
    description:
      "College event registration portal with QR check-in, organiser dashboard and CSV exports.",
    features: [
      "QR ticket generation and scanner-based check-in",
      "Role-based organiser and student dashboards",
      "CSV export of attendance for each event",
    ],
    stack: ["React", "Express", "MongoDB", "MySQL"],
    challenges:
      "Handling 800 registrations in one hour during the fest — added indexes and pagination to fix slow queries.",
    role: "Full-stack developer, team of 4.",
    metrics: [
      { label: "Registrations", value: "800+" },
      { label: "Events", value: "24" },
      { label: "Check-in time", value: "3s" },
    ],
    demo: "https://example.com",
    code: "https://github.com/aarav-sharma",
    accent: "cyan",
  },
];

export const experience = [
  {
    title: "Frontend Developer Intern",
    org: "Nexweb Solutions",
    period: "Jan 2025 — Jun 2025",
    type: "Internship",
    points: [
      "Built 12+ reusable React components used across three client dashboards.",
      "Cut initial bundle size 34% with route-level code splitting and lazy images.",
      "Worked in weekly sprints with design reviews and PR-based code review.",
    ],
  },
  {
    title: "Freelance Web Developer",
    org: "Self-employed",
    period: "Aug 2024 — Dec 2024",
    type: "Freelance",
    points: [
      "Delivered 4 responsive business sites for local clients on fixed deadlines.",
      "Handled hosting, domain setup and basic SEO for each delivery.",
    ],
  },
  {
    title: "MERN Stack Training Program",
    org: "Coding Bootcamp (200 hrs)",
    period: "May 2024 — Aug 2024",
    type: "Training",
    points: [
      "Intensive training on Node, Express, MongoDB and React with weekly builds.",
      "Graduated in the top 5% of a 180-student cohort.",
    ],
  },
  {
    title: "College Technical Team — Web Lead",
    org: "Department Tech Club",
    period: "2023 — 2025",
    type: "College",
    points: [
      "Led a 4-person team building the annual fest website and event portal.",
      "Mentored juniors on Git workflow and React fundamentals.",
    ],
  },
];

export const education = [
  {
    degree: "B.E. Computer Engineering",
    school: "Savitribai Phule Pune University",
    period: "2021 — 2025",
    score: "CGPA 8.6 / 10",
    courses: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
      "Software Engineering",
    ],
  },
  {
    degree: "Higher Secondary (Science)",
    school: "New Horizon Junior College",
    period: "2019 — 2021",
    score: "88.4%",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
];

export const certifications = [
  {
    name: "Meta Front-End Developer",
    issuer: "Coursera · Meta",
    year: "2025",
    id: "MFE-2025-4471",
  },
  {
    name: "The Complete Node.js Developer Course",
    issuer: "Udemy",
    year: "2024",
    id: "UC-NODE-8821",
  },
  {
    name: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    year: "2024",
    id: "MDB-ADEV-2211",
  },
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    id: "FCC-JS-1042",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    id: "FCC-RWD-0918",
  },
  {
    name: "Git & GitHub Essentials",
    issuer: "LinkedIn Learning",
    year: "2023",
    id: "LI-GIT-3390",
  },
];

export const achievements = [
  {
    title: "Winner — Smart Campus Hackathon",
    detail: "1st of 42 teams for a 24-hour build of a campus logistics tracker.",
    tag: "Hackathon",
  },
  {
    title: "LeetCode 350+ problems solved",
    detail: "Top 15% contest rating, consistent daily streak of 180 days.",
    tag: "Coding",
  },
  {
    title: "Open Source Contributor",
    detail: "6 merged PRs across docs and bug fixes in React ecosystem repos.",
    tag: "Open Source",
  },
  {
    title: "Best Final Year Project",
    detail: "Departmental award for CampusConnect event portal.",
    tag: "Award",
  },
  {
    title: "Hacktoberfest 2024 Finisher",
    detail: "Completed all four qualifying pull requests.",
    tag: "Badge",
  },
  {
    title: "Runner-up — State Level Code Sprint",
    detail: "2nd place in an inter-college competitive programming contest.",
    tag: "Coding",
  },
];

export const githubFallback = {
  login: "aarav-sharma",
  name: "Aarav Sharma",
  bio: "MERN stack developer · building in public",
  followers: 128,
  following: 96,
  public_repos: 34,
  html_url: "https://github.com/aarav-sharma",
  avatar_url: "",
};

export const topLanguages = [
  { name: "JavaScript", percent: 52 },
  { name: "CSS", percent: 18 },
  { name: "HTML", percent: 14 },
  { name: "TypeScript", percent: 10 },
  { name: "Other", percent: 6 },
];

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
