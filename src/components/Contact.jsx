import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import resume from "../assets/Deepak-Gupta-Frontend-Developer.pdf";

/**
 * Contact Component
 * Displays a streamlined contact section with direct contact cards,
 * social profile links, and resume download.
 */
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 id="contact-heading" className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind, open to new opportunities, or want to collaborate? Let's connect!
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {/* Email Card */}
          <a
            href="mailto:deepakgupta.150743@gmail.com"
            className="bg-dark-300 rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 hover:border-b-2 hover:border-r-2 hover:border-purple group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-purple/10 text-purple flex items-center justify-center text-2xl mb-4 group-hover:bg-purple group-hover:text-white transition duration-300">
              <FaEnvelope />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-white">Email</h3>
            <p className="text-gray-400 text-sm break-all">
              deepakgupta.150743@gmail.com
            </p>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+919643080715"
            className="bg-dark-300 rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 hover:border-b-2 hover:border-r-2 hover:border-purple group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-purple/10 text-purple flex items-center justify-center text-2xl mb-4 group-hover:bg-purple group-hover:text-white transition duration-300">
              <FaPhone />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-white">Phone</h3>
            <p className="text-gray-400 text-sm">(+91) 9643080715</p>
          </a>

          {/* Location Card */}
          <div className="bg-dark-300 rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 hover:border-b-2 hover:border-r-2 hover:border-purple group">
            <div className="w-14 h-14 rounded-full bg-purple/10 text-purple flex items-center justify-center text-2xl mb-4 group-hover:bg-purple group-hover:text-white transition duration-300">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-white">Location</h3>
            <p className="text-gray-400 text-sm">New Delhi, India</p>
          </div>
        </div>

        {/* Connect & Social Profiles Box */}
        <div className="bg-dark-300 rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-3 text-white">
            Connect & Explore
          </h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm md:text-base">
            Check out my GitHub repositories, connect with me on LinkedIn, or download my latest resume.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* GitHub Link */}
            <a
              title="GitHub Profile"
              href="https://github.com/deepakguptabvp?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-400 text-white hover:bg-purple transition duration-300 shadow-sm"
            >
              <FaGithub className="text-xl" />
              <span className="text-sm font-medium">GitHub</span>
            </a>

            {/* LinkedIn Link */}
            <a
              title="LinkedIn Profile"
              href="https://www.linkedin.com/in/deepakgupta1597/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-400 text-white hover:bg-blue transition duration-300 shadow-sm"
            >
              <FaLinkedin className="text-xl" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            {/* Resume Download Link */}
            <a
              title="Download Resume"
              href={resume}
              download="Deepak-Gupta-Frontend-Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-400 text-pink hover:bg-pink hover:text-white transition duration-300 shadow-sm"
            >
              <FaDownload className="text-xl" />
              <span className="text-sm font-medium">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
