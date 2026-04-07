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
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        <h2 id="about-heading" className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background & passion.
        </p>

        {/* image + journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg2}
              alt="Profile Image"
            />
          </div>

          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate{" "}
                <strong>
                  Frontend developer with over 3 years of experience
                </strong>{" "}
                building modern, scalable web applications. My journey began
                with foundational technologies like HTML, CSS, and JavaScript,
                and has grown into working with advanced frameworks to deliver
                seamless and engaging user experiences.
              </p>
              <p className="text-gray-300 mb-6">
                Throughout my career, I’ve focused on creating clean,
                responsive, and user-centric interfaces that solve real-world
                business problems. I enjoy turning complex ideas into intuitive
                digital solutions while maintaining high standards of code
                quality and performance.
                <br />
                <strong>
                  "I believe in writing clean, maintainable code and creating
                  intuitive user experiences that make a difference."
                </strong>
              </p>
              {/* <p className="text-gray-300 font-bold mb-6">
                "I believe in writing clean, maintainable code and creating
                intuitive user experiences that make a difference."
              </p> */}

              {/* Cards */}
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-3 cursor-pointer  hover:border-b-2 hover:border-r-2 hover:border-purple"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 typewriter-white">
                      {data.title}
                    </h3>
                    <h3 className="text-gray-400">{data.description}</h3>
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
