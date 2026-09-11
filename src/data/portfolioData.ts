export interface Project {
  id: string;
  title: string;
  category: 'fullstack' | 'mobile' | 'ai' | 'frontend';
  client?: string;
  period?: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  metrics?: string;
  imageBgColor?: string;
}

export interface PersonalProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  techStack: string[];
  gradient: string;
  accentColor: string;
  iconName: string;
  metrics: string;
  githubUrl: string;
  liveUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  details: string[];
  link?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  link: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'state' | 'visualization' | 'tools' | 'mobile';
  level: 'Expert' | 'Advanced' | 'Proficient';
  pillColor?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Choppari Madhu",
    role: "React & Frontend Developer",
    subtitle: "React • Next.js • React Native • Flutter • Redux Toolkit",
    statusBadge: "Available for Senior Frontend & React Roles",
    shortBio: "React Developer with 4 years of experience designing, developing, and maintaining high-performance, scalable web and mobile applications. Specialized in building modern UI with Three.js, React Flow, ECharts, Redux Toolkit, and seamless REST API integrations.",
    resumeUrl: "chopparimadhu.dev",
    email: "madhuch155@gmail.com",
    phone: "+91 8501056461",
    location: "Pune, Maharashtra, India",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    yearsOfExperience: "6+",
    projectsCompleted: "12+",
    happyClients: "Banking & Enterprise",
    codeQualityRating: "100%"
  },

  skills: [
    // Frontend
    { name: "React.js", category: "frontend", level: "Expert", pillColor: "#61dafb" },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Expert", pillColor: "#f7df1e" },
    { name: "Next.js", category: "frontend", level: "Advanced", pillColor: "#ffffff" },
    { name: "HTML5 & CSS3", category: "frontend", level: "Expert", pillColor: "#e34f26" },
    { name: "SCSS / SASS", category: "frontend", level: "Expert", pillColor: "#cf649a" },
    { name: "Tailwind CSS", category: "frontend", level: "Expert", pillColor: "#38bdf8" },
    { name: "Material UI", category: "frontend", level: "Advanced", pillColor: "#007fff" },
    { name: "Bootstrap", category: "frontend", level: "Advanced", pillColor: "#7952b3" },

    // State Management
    { name: "Redux Toolkit", category: "state", level: "Expert", pillColor: "#764abc" },
    { name: "Context API", category: "state", level: "Expert", pillColor: "#61dafb" },
    { name: "Zustand", category: "state", level: "Advanced", pillColor: "#443e38" },
    { name: "MobX", category: "state", level: "Proficient", pillColor: "#ff9955" },
    { name: "Riverpod", category: "state", level: "Advanced", pillColor: "#02569b" },

    // Visualization & 3D
    { name: "Three.js (3D)", category: "visualization", level: "Advanced", pillColor: "#049ef4" },
    { name: "React Flow", category: "visualization", level: "Expert", pillColor: "#ff0072" },
    { name: "ECharts", category: "visualization", level: "Advanced", pillColor: "#e43961" },

    // Mobile & Backend
    { name: "Flutter & Dart", category: "mobile", level: "Advanced", pillColor: "#02569b" },
    { name: "React Native", category: "mobile", level: "Advanced", pillColor: "#61dafb" },
    { name: "Node.js & Express", category: "tools", level: "Proficient", pillColor: "#68a063" },

    // Tools & Testing
    { name: "RESTful APIs", category: "tools", level: "Expert", pillColor: "#00d2ff" },
    { name: "Git & GitHub", category: "tools", level: "Expert", pillColor: "#f05032" },
    { name: "Postman", category: "tools", level: "Expert", pillColor: "#ff6c37" },
    { name: "Webpack & Vite", category: "tools", level: "Advanced", pillColor: "#8dd6f9" },
    { name: "Jest Testing", category: "tools", level: "Proficient", pillColor: "#99425b" }
  ] as SkillItem[],

  experiences: [
    {
      id: "exp-1",
      role: "React & Frontend Developer",
      company: "Credentek Software & Consultancy Pvt. Ltd",
      location: "Pune, Maharashtra",
      period: "Sep 2022 – Present",
      current: true,
      description: [
        "Architected and developed enterprise-grade React and Flutter applications with seamless voice, AI chatbot, and real-time visualization features.",
        "Built interactive 3D dashboards using Three.js and dynamic workflow diagrams with React Flow for major banking clients (Yes Bank, IDFC FIRST Bank, IDBI Bank, L&T).",
        "Engineered scalable global state management architectures with Redux Toolkit and Context API across multi-tenant banking applications.",
        "Delivered responsive, cross-browser web apps with high performance, rigorous Postman API validation, and production deployments across Dev, QA, and Live environments.",
        "Collaborated closely with UI/UX designers on Figma implementations and mentored junior developers on frontend best practices."
      ],
      skills: ["React", "Next.js", "Flutter", "Redux Toolkit", "Three.js", "React Flow", "ECharts", "REST APIs", "Tailwind CSS"]
    }
  ] as Experience[],

  projects: [
    {
      id: "proj-1",
      title: "Kitty & Tenali (Voice & AI Chatbot System)",
      category: "ai",
      client: "Credentek Enterprise",
      period: "May 2025 – Present",
      description: "Developed 'Kitty', a dual voice and text-based chatbot for Web (React) and Mobile (Flutter), along with 'Tenali', an AI assistant web application for automated customer calling and real-time voice interactions with REST API integration.",
      techStack: ["React", "Flutter", "REST APIs", "Voice AI", "WebSockets", "CSS3 / SCSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://madhu.dev/#projects",
      featured: true,
      metrics: "Voice & Text AI Web + Flutter Mobile",
      imageBgColor: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)"
    },
    {
      id: "proj-2",
      title: "FanTail-P (Secure File Transfer & 3D Dashboard)",
      category: "fullstack",
      client: "Yes Bank, IDFC FIRST, IDBI, L&T",
      period: "July 2023 – May 2025",
      description: "Secure enterprise file transfer system between banking agents. Engineered an interactive 3D dashboard using Three.js, visual workflow graphs with React Flow, state management with Redux, and operational analytics with ECharts.",
      techStack: ["React", "Three.js", "React Flow", "ECharts", "Redux Toolkit", "SCSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://madhu.dev/#projects",
      featured: true,
      metrics: "Interactive Three.js 3D & React Flow",
      imageBgColor: "linear-gradient(135deg, #064e3b 0%, #047857 100%)"
    },
    {
      id: "proj-3",
      title: "Group Loan Processing System (GLPS)",
      category: "frontend",
      client: "Jana Small Finance Bank",
      period: "Sep 2022 – July 2023",
      description: "Responsive web application for processing group loans supporting women entrepreneurs in agriculture and small businesses. Features document upload/download (PDF, ZIP, images), advanced customer search, and secure REST APIs.",
      techStack: ["React", "Redux", "REST APIs", "File Upload / Download", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://madhu.dev/#projects",
      featured: true,
      metrics: "Empowering 10k+ Women Entrepreneurs",
      imageBgColor: "linear-gradient(135deg, #701a75 0%, #a21caf 100%)"
    }
  ] as Project[],

  personalProjects: [
    {
      id: "pers-voice-assistant",
      title: "Voice Assistant",
      category: "AI & Audio Stream",
      tagline: "Real-time AI Voice Assistant & Speech Hub",
      description: "Smart voice assistant web application featuring real-time bidirectional audio streaming, Web Speech API speech-to-text recognition, and conversational AI voice responses.",
      techStack: ["React", "WebRTC", "Web Audio API", "WebSockets", "Tailwind CSS"],
      gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",
      accentColor: "#06b6d4",
      iconName: "Mic",
      metrics: "Live Audio Streaming & Voice AI",
      githubUrl: "https://github.com",
      liveUrl: "https://madhu.dev/#projects"
    },
    {
      id: "pers-balloon-shooting",
      title: "Balloon Shooting Game",
      category: "Game & Canvas",
      tagline: "Interactive 2D Physics Arcade Shooter",
      description: "Fast-paced browser arcade game built on HTML5 Canvas with realistic projectile physics, particle blast effects, combo multipliers, sound effects, and local high scores.",
      techStack: ["HTML5 Canvas", "JavaScript (ES6+)", "Web Audio API", "CSS3 Animations"],
      gradient: "linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)",
      accentColor: "#f43f5e",
      iconName: "Gamepad2",
      metrics: "60 FPS Canvas Physics Engine",
      githubUrl: "https://github.com",
      liveUrl: "https://madhu.dev/#projects"
    },
    {
      id: "pers-budget-planner",
      title: "Budget Planner",
      category: "Fintech & Finance",
      tagline: "Smart Income & Expense Analytics",
      description: "Modern financial tracker featuring interactive budget envelopes, income vs expense breakdowns, monthly trend visualizers, and savings milestone projections.",
      techStack: ["React", "Redux Toolkit", "ECharts / Chart.js", "LocalForage"],
      gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)",
      accentColor: "#10b981",
      iconName: "PieChart",
      metrics: "Interactive Visual Spending Charts",
      githubUrl: "https://github.com",
      liveUrl: "https://madhu.dev/#projects"
    },
    {
      id: "pers-nutrition-planner",
      title: "Nutrition Planner",
      category: "Health & Fitness",
      tagline: "Macro & Calorie Diet Tracker",
      description: "Personalized nutrition planning application calculating BMR/TDEE caloric targets, macronutrient split (Protein, Carbs, Fats), daily meal schedules, and hydration logs.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.2) 100%)",
      accentColor: "#f59e0b",
      iconName: "Utensils",
      metrics: "Target Macro & Calorie Calculator",
      githubUrl: "https://github.com",
      liveUrl: "https://madhu.dev/#projects"
    },
    {
      id: "pers-personal-storage",
      title: "Personal Storage",
      category: "Cloud & Vault",
      tagline: "Secure File Vault & Cloud Drive",
      description: "Private file storage repository featuring drag-and-drop file uploads, nested directory trees, quick multimedia previews (video, audio, PDF), and encrypted local caching.",
      techStack: ["React", "Node.js", "IndexedDB", "REST APIs", "Tailwind CSS"],
      gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.2) 100%)",
      accentColor: "#8b5cf6",
      iconName: "HardDrive",
      metrics: "Encrypted Multi-format File Vault",
      githubUrl: "https://github.com",
      liveUrl: "https://madhu.dev/#projects"
    },
    {
      id: "pers-privacy-chat",
      title: "Privacy Chat",
      category: "Security & WebRTC",
      tagline: "End-to-End Encrypted Messenger",
      description: "Secure peer-to-peer messaging application featuring client-side WebCrypto encryption keys, self-destructing ephemeral messages, and zero chat history logs on servers.",
      techStack: ["React", "WebCrypto API", "WebSockets", "Tailwind CSS"],
      gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%)",
      accentColor: "#3b82f6",
      iconName: "ShieldCheck",
      metrics: "Zero-Knowledge E2E Encryption",
      githubUrl: "https://github.com",
      liveUrl: "https://madhu.dev/#projects"
    },
    {
      id: "pers-music-app",
      title: "Music App",
      category: "Audio & Streaming",
      tagline: "Dynamic Audio Player & Visualizer",
      description: "Sleek web music streaming player with real-time frequency audio wave visualizer, interactive playlist queue, seek scrubbing, volume equalizer, and dark mode glassmorphism UI.",
      techStack: ["React", "Web Audio API", "HTML5 Audio", "CSS Glassmorphism"],
      gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)",
      accentColor: "#ec4899",
      iconName: "Music",
      metrics: "Live Frequency Audio Visualizer",
      githubUrl: "https://github.com",
      liveUrl: "https://madhu.dev/#projects"
    }
  ] as PersonalProject[],

  certifications: [
    {
      id: "cert-1",
      title: "Developing Mobile App With Flutter",
      issuer: "Coursera Specialization",
      link: "https://www.coursera.org/account/accomplishments/specialization/P5U898C3YL52"
    },
    {
      id: "cert-2",
      title: "Developing Back-End Apps with Node.js and Express",
      issuer: "Coursera Verification",
      link: "https://www.coursera.org/account/accomplishments/verify/N8J97S1P8BFL"
    },
    {
      id: "cert-3",
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta / Coursera",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/YQYC3BR27HBG"
    }
  ] as Certification[],

  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Computer Science / Engineering",
      institution: "Samskruthi College of Engineering and Technology (JNTUH)",
      period: "Hyderabad, Telangana",
      details: [
        "Affiliated with Jawaharlal Nehru Technological University Hyderabad (JNTUH).",
        "Strong academic foundation in Data Structures, Algorithms, Web Technologies, and Software Engineering."
      ]
    }
  ] as Education[]
};
