import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";
import skillsBg from "../assets/skills-bg.jpg";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 relative overflow-hidden bg-slate-950"
    >
      {/* Background Developer Workspace Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
        style={{ backgroundImage: `url(${skillsBg})` }}
      />

      {/* Semi-Transparent Dark Gradient Overlay (matching reference design) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/85 to-slate-950/90 backdrop-blur-[2px] pointer-events-none" />

      {/* Subtle Purple & Cyan Ambient Neon Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 id="skills-heading" className="text-3xl md:text-5xl font-extrabold text-white text-center mb-3 tracking-tight">
          Technical <span className="text-purple">Skills</span>
        </h2>
        <p className="text-slate-300 text-center max-w-2xl mx-auto mb-16 text-sm sm:text-base leading-relaxed">
          Core technologies, libraries, and tools I use daily to build high-performance products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-purple/50 hover:shadow-purple/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple/20 text-purple flex items-center justify-center text-2xl mr-4 shrink-0 group-hover:bg-purple group-hover:text-white transition-colors duration-200">
                    <skill.icon />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple transition-colors duration-200">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-slate-200 rounded-lg text-xs font-semibold border border-white/10 hover:bg-purple hover:text-white hover:border-purple transition-all duration-200 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
