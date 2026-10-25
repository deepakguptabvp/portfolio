import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FaArrowRight, FaCode, FaCheckCircle, FaLaptopCode } from "react-icons/fa";

const roles = [
  "Frontend Developer",
  "React & Next.js Developer",
  "Fullstack Engineer",
  "Prompt Engineer"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const stats = [
    { label: "Experience", value: "3+ Years", icon: FaCheckCircle },
    { label: "Completed Projects", value: "5+", icon: FaLaptopCode },
    { label: "Code Architecture", value: "Enterprise", icon: FaCode },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center pt-28 pb-20 bg-dark-200 overflow-hidden"
    >
      {/* Soft Ambient Pastel Mesh Blobs */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-5">
            {/* Senior Experience Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple animate-ping" />
              <span>Frontend Developer • 3+ Years</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Hi, I'm <span className="text-purple">Deepak Gupta</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-purple flex items-center min-h-[2.25rem] sm:min-h-[2.5rem]">
              <span>{displayText}</span>
              <span className="inline-block text-purple font-light ml-0.5 animate-pulse">
                |
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Passionate about architecting responsive, ultra-fast, and accessible web solutions. Bringing{" "}
              <strong className="text-slate-900 font-semibold">3+ years of enterprise experience</strong> turning complex
              business requirements into clean, scalable interfaces.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple to-indigo-600 hover:from-purple-dark hover:to-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-purple/25 hover:shadow-lg hover:shadow-purple/35 transition-all duration-200"
              >
                <span>View Featured Work</span>
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold rounded-xl shadow-xs hover:border-purple hover:text-purple transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 max-w-lg">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-white/80 border border-slate-200/80 rounded-xl p-3 shadow-xs">
                  <p className="text-lg sm:text-xl font-bold text-slate-900">{s.value}</p>
                  <p className="text-xs text-slate-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple via-pink-400 to-blue-400 opacity-60 blur-xl"></div>

              <div className="relative w-full h-full p-2.5 rounded-full bg-gradient-to-tr from-purple via-purple-300 to-indigo-400 shadow-2xl">
                <motion.img
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="rounded-full w-full h-full object-cover bg-white shadow-inner"
                  src={assets.profileImg2}
                  alt="Deepak Gupta - Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
