import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 id="projects-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-3">
          Featured <span className="text-purple">Projects</span>
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16 text-sm sm:text-base">
          A showcase of scalable web applications, modern UI platforms, and fullstack solutions I've built.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/deepakguptabvp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-300 bg-white text-slate-800 rounded-xl px-7 py-3.5 font-semibold hover:border-purple hover:text-purple hover:bg-purple-50 shadow-xs transition duration-300"
          >
            <span>View More on GitHub</span>
            <FaArrowRight className="text-xs" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
