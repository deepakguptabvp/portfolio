import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";

const WorkExperience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 bg-dark-200 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 id="experience-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-3">
          Professional <span className="text-purple">Experience</span>
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16 text-sm sm:text-base">
          3+ years of building enterprise-grade applications, scalable UI systems, and client solutions.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((data, index) => (
              <div
                key={index}
                className="relative pl-10 md:pl-12 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[2px] before:h-full before:bg-purple/30 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-2.5 top-2 w-5 h-5 rounded-full bg-purple border-4 border-white shadow-md shadow-purple/30 group-hover:scale-125 transition-transform duration-200"></div>

                {/* Experience Card */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-purple/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{data.role}</h3>
                      <p className="text-purple font-semibold text-sm mt-0.5">{data.company}</p>
                    </div>
                    <span className="inline-block self-start sm:self-auto px-3.5 py-1 bg-purple/10 text-purple-dark border border-purple/20 rounded-full text-xs font-bold shrink-0">
                      {data.duration}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-5 leading-relaxed text-sm sm:text-base">
                    {data.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                    {data.techStack?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-100/80 text-slate-700 rounded-md text-xs font-medium border border-slate-200/80 hover:bg-purple-50 hover:text-purple hover:border-purple-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
