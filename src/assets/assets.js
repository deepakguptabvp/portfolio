import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaRocket,
} from "react-icons/fa";

import profileImg from "../assets/profile.jpg";
import profileImg1 from "../assets/profileImg1.avif";
import profileImg2 from "../assets/profileImg2.avif";
import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg3 from "../assets/project3.avif";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.avif";
import projectImg6 from "../assets/project6.avif";

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
      "Discover comfortable and affordable PG accommodations across the city. Your new home is just a search away.",
    image: "https://bookmypg.co.in/assets/front/images/about.png",
    tech: ["React", "Tailwind CSS", "Html", "JavaScript"],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "TuneMasters - Academy",
    description:
      "Join our interactive platform to master instruments or vocals with expert courses. Connect with us and start your musical journey today!",
    image: "https://calarts.edu/sites/default/files/2024-11/music.jpg",
    tech: ["ReactJs", "NextJs", "Typescript", "Framer motion"],
    icons: [FaReact, FaDatabase],
    demo: "https://tune-masters-academy.vercel.app/",
    code: "https://github.com/deepakguptabvp/TuneMasters-Academy",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "https://urbanstayz-gray.vercel.app/",
    code: "https://github.com/deepakguptabvp/UrbanStayz-Frontend",
  },
  {
    title: "Hunting - Coder Blog Website",
    description:
      "Created a responsive blog website focused on the latest technologies. Features dynamic content updates and an engaging user-friendly design.",
    image:
      "https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.webp",
    tech: ["ReactJs", "NextJs", "Tailwind CSS", "Javascript"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://huntingcoder-delta.vercel.app/",
    code: "https://github.com/deepakguptabvp/huntingcoder",
  },
  {
    title: "5-day Weather Forecast App",
    description:
      "Developed a mobile-responsive 5-day weather forecast app with a sleek UI. Includes temperature switching between Celsius and Fahrenheit for user convenience.",
    image:
      "https://www.livemint.com/lm-img/img/2025/05/03/optimize/IRAQ-WEATHER--1_1746282079678_1746282089850.JPG",
    tech: ["ReactJs", "JavaScript", "NextJs"],
    icons: [FaRobot, FaReact, FaCloud],
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
