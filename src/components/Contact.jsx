import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaCopy,
  FaCheck,
  FaGlobe,
} from "react-icons/fa";
import resume from "../assets/Deepak-Gupta-Frontend-Developer.pdf";
import contactBg from "../assets/contact-bg.jpg";

const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2200);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200/60"
    >
      {/* Balanced Twilight Workspace Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
        style={{ backgroundImage: `url(${contactBg})` }}
      />

      {/* Balanced Semi-Transparent Overlay (Midtones between Light & Dark) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-slate-100/90 to-slate-900/20 backdrop-blur-[0.5px] pointer-events-none" />

      {/* Ambient Pastel Glow Mesh */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Available for Opportunities</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Let's Build Something <span className="text-purple">Remarkable</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether you have an enterprise project, a frontend engineering role, or want to discuss technical architecture — my inbox is always open.
          </p>
        </div>

        {/* Centered Max-W-5xl Contact Hub */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* 1st Div: Unified Contact & Availability Details Card */}
          <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            {/* Top: Live Employment Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Employment Status
                  </h3>
                </div>
                <p className="text-slate-800 font-bold text-base sm:text-lg">
                  Open to Frontend Developer &amp; Full Stack Developer Roles
                </p>
                <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                  Full-time, Contract, or Technical Consulting • Flexible for Global Remote &amp; Relocation
                </p>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available Now
                </span>
              </div>
            </div>

            {/* Bottom: 3 Direct Channels Stacked Vertically */}
            <div className="space-y-3">
              {/* Email */}
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-4.5 flex items-center justify-between hover:bg-white hover:border-purple/40 hover:shadow-xs transition-all duration-200 group">
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-purple/10 text-purple flex items-center justify-center text-lg shrink-0 group-hover:bg-purple group-hover:text-white transition-colors duration-200">
                    <FaEnvelope />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</p>
                    <a
                      href="mailto:deepakgupta.150743@gmail.com"
                      className="text-sm sm:text-base font-bold text-slate-800 hover:text-purple truncate block"
                    >
                      deepakgupta.150743@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy("deepakgupta.150743@gmail.com", "email")}
                  title="Copy email to clipboard"
                  className="p-2.5 sm:px-3 sm:py-2.5 rounded-lg border border-slate-200 hover:border-purple text-slate-500 hover:text-purple hover:bg-purple/5 transition-all duration-200 shrink-0 ml-2 cursor-pointer"
                >
                  {copiedField === "email" ? (
                    <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                      <FaCheck /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                      <FaCopy className="text-sm" />
                      <span className="hidden sm:inline">Copy</span>
                    </span>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-4.5 flex items-center justify-between hover:bg-white hover:border-purple/40 hover:shadow-xs transition-all duration-200 group">
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-purple/10 text-purple flex items-center justify-center text-lg shrink-0 group-hover:bg-purple group-hover:text-white transition-colors duration-200">
                    <FaPhone />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</p>
                    <a
                      href="tel:+919643080715"
                      className="text-sm sm:text-base font-bold text-slate-800 hover:text-purple truncate block"
                    >
                      (+91) 9643080715
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy("+919643080715", "phone")}
                  title="Copy phone to clipboard"
                  className="p-2.5 sm:px-3 sm:py-2.5 rounded-lg border border-slate-200 hover:border-purple text-slate-500 hover:text-purple hover:bg-purple/5 transition-all duration-200 shrink-0 ml-2 cursor-pointer"
                >
                  {copiedField === "phone" ? (
                    <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                      <FaCheck /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                      <FaCopy className="text-sm" />
                      <span className="hidden sm:inline">Copy</span>
                    </span>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-4.5 flex items-center justify-between hover:bg-white hover:border-purple/40 hover:shadow-xs transition-all duration-200 group">
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-purple/10 text-purple flex items-center justify-center text-lg shrink-0 group-hover:bg-purple group-hover:text-white transition-colors duration-200">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-purple transition-colors duration-200">
                      New Delhi, India <span className="text-xs sm:text-sm font-normal text-slate-500">• Open to Relocation</span>
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=New+Delhi,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View New Delhi on Google Maps"
                  className="p-2.5 sm:px-3.5 sm:py-2 rounded-lg border border-slate-200 hover:border-purple text-slate-500 hover:text-purple hover:bg-purple/5 transition-all duration-200 shrink-0 ml-2 cursor-pointer inline-flex items-center gap-1.5"
                >
                  <FaGlobe className="text-sm" />
                  <span className="hidden sm:inline text-xs font-semibold">Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* 2nd Div: Professional Profiles & Resume CTA */}
          <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Professional Profiles &amp; Resume
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/deepakguptabvp?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 font-semibold text-xs sm:text-sm shadow-2xs"
              >
                <FaGithub className="text-base" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/deepakgupta1597/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-200 font-semibold text-xs sm:text-sm shadow-2xs"
              >
                <FaLinkedin className="text-base" />
                <span>LinkedIn</span>
              </a>
            </div>

            <a
              href={resume}
              download="Deepak-Gupta-Frontend-Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple to-indigo-600 hover:from-purple-dark hover:to-indigo-700 text-white font-semibold text-sm shadow-md shadow-purple/20 transition-all duration-200 cursor-pointer"
            >
              <FaDownload className="text-sm" />
              <span>Download Verified Resume</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
