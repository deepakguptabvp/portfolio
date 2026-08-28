import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaTools,
  FaDatabase,
  FaRobot,
  FaRocket,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


import profileImg from "../assets/profile.jpg";
import profileImg1 from "../assets/profileImg1.avif";
import profileImg2 from "../assets/profileImg2.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg4 from "../assets/project4.avif";
import weatherImg3 from "../assets/weather-3.jpg";
import { SiGmail } from "react-icons/si";
// import projectImg1 from "../assets/project1.avif";
// import projectImg3 from "../assets/project3.avif";
// import projectImg5 from "../assets/project5.avif";
// import projectImg6 from "../assets/project6.avif";
// import weatherImg1 from "../assets/weather-1.avif";
// import weatherImg2 from "../assets/weather-2.jpg";

export const assets = {
  profileImg,
  profileImg1,
  profileImg2,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
  {
    icon: FaRocket,
    title: "Performance Driven",
    description:
      "I focus on building fast, optimized applications that deliver smooth user experiences.",
    color: "text-green",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["HTML5", "CSS3", "JavaScriptES6", "Tailwind CSS", "TypeScript", "React.js", "Next.js"],
  },
  {
  title: "Backend & Database Development",
  icon: FaServer,
  description:
    "Building RESTful APIs and managing scalable databases for reliable and efficient web applications.",
  tags: ["Node.js", "Express.js", "MongoDB", "MySQL"],
},
  // {
  //   title: 'Mobile Development',
  //   icon: FaMobileAlt,
  //   description: 'Building cross-platform mobile applications with modern tools.',
  //   tags: ['React Native', 'Flutter']
  // },
  {
    title: "AI Tools",
    icon: FaRobot,
    description:
      "Leveraging AI tools to boost productivity, automate tasks, and enhance development workflows.",
    tags: ["ChatGPT", "Claude", "Antigravity", "Cursor"],
  },
{
  title: "Development Tools & Workflow",
  icon: FaTools,
  description:
    "Tools and technologies I use to build, manage, test, and deliver scalable web applications.",
  tags: [
    "Figma",
    "Git",
    "GitHub",
    "SonarQube",
    "Azure DevOps",
    "ESLint",
  ],
},
];

export const projects = [
  {
    title: "UrbanStayz",
    description:
      "A modern PG discovery platform enabling users to find affordable accommodations with a clean, responsive UI and optimized browsing experience.",
    image: "https://bookmypg.co.in/assets/front/images/about.png",
    tech: ["React.js", "Tailwind CSS", "HTML", "JavaScript"],
    demo: "https://urbanstayz-gray.vercel.app/",
    code: "https://github.com/deepakguptabvp/UrbanStayz-Frontend",
  },

  {
    title: "TuneMasters - Academy",
    description:
      "An interactive music learning platform built with modern UI and smooth animations, delivering an engaging and scalable user experience.",
    image: "https://calarts.edu/sites/default/files/2024-11/music.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demo: "https://tune-masters-academy.vercel.app/",
    code: "https://github.com/deepakguptabvp/TuneMasters-Academy",
  },

  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio showcasing projects and skills with clean UI, smooth animations, and optimized performance.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    demo: "https://portfolio-deepak-gupta.vercel.app/",
    code: "https://github.com/deepakguptabvp/portfolio",
  },

  {
    title: "Hunting - Coder Blog Website",
    description:
      "A responsive tech blog platform featuring dynamic content, fast performance, and a user-friendly reading experience.",
    image:
      "https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.webp",
    tech: ["Next.js", "Tailwind CSS", "JavaScript"],
    demo: "https://huntingcoder-delta.vercel.app/",
    code: "https://github.com/deepakguptabvp/huntingcoder",
  },

  {
    title: "Task Management App",
    description:
      "A productivity app with real-time updates and interactive UI, designed to efficiently manage tasks with a smooth user experience.",
    image: projectImg2,
    tech: ["Next.js", "JavaScript", "Tailwind CSS"],
    demo: "https://task-management-deepak.vercel.app/",
    code: "https://github.com/deepakguptabvp/task-management",
  },

  {
    title: "5-day Weather Forecast App",
    description:
      "A mobile-responsive weather app providing 5-day forecasts with intuitive UI and seamless temperature unit conversion.",
    image: weatherImg3,
    tech: ["Next.js", "JavaScript", "Tailwind CSS"],
    demo: "https://weather-forecast-app-beige.vercel.app/",
    code: "https://github.com/deepakguptabvp/weather-forecast-app",
  },
];


export const workData = [
  {
    role: "Frontend Developer",
    company: "Cetpa Infotech Pvt. Ltd.",
    duration: "Apr 2026 - Present",
    description:
      "Working on enterprise-level business applications for a government client (DFCCIL), contributing to the development and enhancement of scalable frontend solutions.",
    techStack: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "TypeScript",
      "React.js",
      "Redux Toolkit",
      "Zod",
      "REST APIs",
      "Axios",
      "React Hook Form",
      "SonarQube",
      "Git",
      "Azure DevOps",
    ],
  },
  {
    role: "Software Engineer - Frontend Developer",
    company: "Big Brand Bucket Pvt. Ltd.",
    duration: "Apr 2024 - Nov 2025",
    description:
      "Developed multiple websites for a single client, handling the complete frontend development lifecycle from understanding business requirements to delivering the final product.",
    techStack: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "REST APIs",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Git",
      "Framer Motion",
    ],
  },
  {
    role: "Jr. Software Engineer",
    company: "Cognizant, Noida (Hybrid)",
    duration: "Aug 2023 - Feb 2024",
    description:
      "Developed and maintained web applications using modern frontend technologies, with a focus on responsive UI development, reusable components, API integration, and performance optimization. Worked closely with team members to deliver functional and user-centric solutions aligned with project requirements.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Angular",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "Git",
      "GitLab",
    ],
  },
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant, Noida (Hybrid)",
    duration: "Aug 2022 - Aug 2023",
    description:
      "Started my professional journey by developing web applications and building a strong foundation in frontend and backend technologies. Worked with Angular, TypeScript, Java, and Spring Boot while gaining experience in application development, debugging, database integration, and software development practices.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Angular",
      "Material UI",
      "Java",
      "Spring Boot",
      "MongoDB",
      "MySQL",
      "Git",
    ],
  },
];

export const mediaLinks = [
  {
    title: "GitHub",
    icon: FaGithub,
    link: "https://github.com/deepakguptabvp",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/deepakgupta1597/",
  },
  // {
  //   title: "Gmail",
  //   icon: SiGmail ,
  //   link: "deepakgupta.150743@gmail.com",
  // },
  {
    title: "Resume Download",
    icon: FaDownload,
    link: "/Deepak-Gupta-Frontend-Developer.pdf",
  },
];
