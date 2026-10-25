import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-white border-y border-slate-200/60"
    >
      <div className="container mx-auto px-6">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-3">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16 text-sm sm:text-base">
          Get to know more about my background, core values, and passion for craft.
        </p>

        {/* Image + Journey */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-auto object-cover hover:scale-102 transition duration-500"
              src={assets.profileImg2}
              alt="Deepak Gupta - Profile"
            />
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">My Journey</h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-base">
                I'm a{" "}
                <strong className="text-slate-900 font-semibold">
                  Frontend developer with over 3+ years of professional experience
                </strong>{" "}
                building scalable, responsive, and business-focused web applications. My expertise lies in React.js, JavaScript, TypeScript, Next.js, Redux Toolkit, Tailwind CSS, and REST API integrations, with a strong focus on developing maintainable and high-performance user interfaces.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                Throughout my career, I’ve worked on enterprise-level business applications, complex role-based workflow systems, and API-driven architectures.
                <br />
                <span className="block mt-3 font-medium text-purple-dark bg-purple/10 px-4 py-2.5 rounded-lg border-l-4 border-purple italic text-sm">
                  "I believe in writing clean, maintainable code and creating intuitive user experiences that make a tangible difference."
                </span>
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-200/70 border border-slate-200/80 rounded-xl p-5 hover:border-purple/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple/10 text-purple flex items-center justify-center text-xl mb-3">
                      <data.icon />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      {data.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
