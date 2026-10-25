import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const getDomain = (url, fallbackTitle) => {
  try {
    if (url && url !== "#") {
      const parsed = new URL(url);
      return parsed.hostname.replace("www.", "");
    }
  } catch (e) {
    // ignore
  }
  return `${fallbackTitle.toLowerCase().replace(/[^a-z0-9]/g, "")}.dev`;
};

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  const domain = getDomain(demo, title);

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-purple/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
      {/* Browser Window Header */}
      <div className="bg-slate-100/90 border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between">
        {/* Window controls (traffic lights) */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
        </div>

        {/* Address bar mockup */}
        <div className="bg-white text-slate-600 text-xs px-3 py-0.5 rounded-md border border-slate-200/80 font-mono truncate max-w-[170px] sm:max-w-[200px] text-center shadow-2xs">
          {domain}
        </div>

        {/* Spacer for symmetry */}
        <div className="w-8"></div>
      </div>

      {/* Project Image Preview */}
      <div className="relative w-full h-48 sm:h-52 bg-slate-100 overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple transition-colors duration-200">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-slate-100/90 text-slate-700 rounded-md text-xs font-semibold border border-slate-200/80 hover:bg-purple-50 hover:text-purple hover:border-purple-200 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Bottom Action Bar */}
        <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-slate-100">
          {code && code !== "#" ? (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code on GitHub`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 hover:text-purple hover:border-purple/50 hover:bg-purple/5 text-sm font-semibold transition duration-200"
            >
              <FaGithub className="text-base" />
              <span>Code</span>
            </a>
          ) : (
            <div></div>
          )}

          {demo && demo !== "#" && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple to-indigo-600 hover:from-purple-dark hover:to-indigo-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md hover:shadow-purple/20 transition duration-200 ml-auto"
            >
              <span>Live Demo</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
