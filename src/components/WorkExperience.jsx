import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";
import { div } from "framer-motion/client";

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Professional <span className="text-purple">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My professional journey so far
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((data, index) => (
              <div
                key={index}
                className="relative pl-12 before:content-[''] before:absolute before:left-0
                        before:top-0 before:w-[2px] before:h-full  before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300 "
              >
                {/* timeline */}
                <div className="absolute left-[-0.7rem] top-0 w-6 h-6 rounded-full bg-purple"></div>

                {/* box */}
                <div className="flex flex-col bg-dark-300 rounded-2xl p-6 hover:border-b-3 hover:border-r-2 hover:border-purple">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4 md:mb-2 space-y-4">
                    <h3 className="text-xl font-semibold">{data.role}</h3>
                    <span className="px-3 py-1 bg-purple/20 text-purple rounded-full text-sm md:text-sm">
                      {data.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{data.company}</p>
                  <p className="text-gray-300 mb-2">{data.description}</p>
                  <div className="flex flex-wrap gap-2 my-4">
                    {data.techStack?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-dark-400 rounded-full text-sm border border-gray-600 shadow-white shadow"
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
    </motion.div>
  );
};

export default WorkExperience;
