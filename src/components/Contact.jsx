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
import { FaXTwitter } from "react-icons/fa6";

/**
 * Contact Component
 * Displays a contact section with a contact form and contact information
 * Features:
 * - Contact form for visitors to send messages
 * - Contact details (location, email, phone)
 * - Social media links (GitHub, LinkedIn, Twitter, Resume download)
 * - Smooth scroll animation using Framer Motion
 */
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        {/* Main Grid: Contact Form (Left) & Contact Info (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form Section */}
          <div>
            <form className="space-y-6">
              {/* Name Input Field */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  {" "}
                  Your name
                </label>
                <input
                  type="text"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              {/* Email Input Field */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  {" "}
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              {/* Message Textarea Field */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  {" "}
                  Your Message
                </label>
                <textarea
                  type="text"
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                {" "}
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8 md:mt-10 md:ml-16">
            {/* Location Info */}
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">New Delhi, India</p>
              </div>
            </div>

            {/* Email Info */}
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">deepakgupta.150743@gmail.com</p>
              </div>
            </div>

            {/* Phone Info */}
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">(+91) 9643080715</p>
              </div>
            </div>

            {/* Social Media Links Section */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow me</h3>
              <div className="flex space-x-4">
                {/* GitHub Link */}
                <a
                  title="Github"
                  href="#"
                  className="w-12 h-12  rounded-full flex items-center justify-center bg-dark-300  text-white hover:bg-purple  hover:text-white  transition duration-300"
                >
                  <FaGithub />
                </a>

                {/* LinkedIn Link */}
                <a
                  title="Linkedin Profile"
                  href="#"
                  className="w-12 h-12  rounded-full flex items-center justify-center bg-dark-300  text-white hover:bg-blue  hover:text-white  transition duration-300"
                >
                  <FaLinkedin />
                </a>

                {/* Twitter/X Link */}
                <a
                  title="Twitter"
                  href="#"
                  className="w-12 h-12  rounded-full flex items-center justify-center bg-dark-300  text-blue hover:bg-blue  hover:text-white  transition duration-300"
                >
                  <FaXTwitter />
                </a>

                {/* Resume Download Link */}
                <a
                  title="Download Resume"
                  href="/src/assets/DeepakGupta- FE Dev.pdf"
                  className="w-12 h-12  rounded-full flex items-center justify-center bg-dark-300  text-pink hover:bg-pink  hover:text-white  transition duration-300"
                >
                  <FaDownload />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
