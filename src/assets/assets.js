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

import { FaXTwitter } from "react-icons/fa6";

import profileImg from "../assets/profile.jpg";
import profileImg1 from "../assets/profileImg1.avif";
import profileImg2 from "../assets/profileImg2.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg4 from "../assets/project4.avif";
import weatherImg3 from "../assets/weather-3.jpg";
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
    tags: ["JavaScript", "React", "Angular", "TypeScript"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
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
    tags: ["ChatGPT", "Claude", "GitHub Copilot", "Cursor"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Webpack", "Figma", "Jest"],
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
    role: "Software Engineer - Frontend Developer",
    company: "Big Brand Bucket Pvt. Ltd.",
    duration: "Apr 2024 - Nov 2025",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    techStack: [
      "Html",
      "CSS",
      "Tailwind CSS",
      "Javascript",
      "Reat.Js",
      "Next.Js",
      "MongoDB",
      "MySQL",
      "Git",
      "NodeJs",
      "ExpressJs",
      "ChatGpt",
      "Claude",
      "Framer Motion",
    ],
  },
  {
    role: "Jr. Software Engineer",
    company: "Cognizant, Noida (Hybrid)",
    duration: "Aug 2023 - Feb 2024",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    techStack: [
      "Html",
      "CSS",
      "Javascript",
      "Reat.Js",
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
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    techStack: [
      "Html",
      "CSS",
      "Material UI",
      "Java",
      "SpringBoot",
      "Angular",
      "MongoDb",
      "Typescript",
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
  {
    title: "Twitter",
    icon: FaXTwitter,
    link: "https://twitter.com",
  },
  {
    title: "Resume Download",
    icon: FaDownload,
    link: "/DeepakGupta- FE Fev.pdf",
  },
];
