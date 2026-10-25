import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed w-full z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-4 px-6 md:px-8 shadow-xs"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex flex-row gap-2.5 justify-center items-center">
          <div className="w-3.5 h-3.5 bg-purple rounded-full shadow-sm shadow-purple/50 animate-pulse" />
          <a href="#home" className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Deepak<span className="text-purple">Gupta</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-purple group py-1"
            >
              <span>{link.name}</span>
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-purple text-white text-sm font-semibold rounded-lg hover:bg-purple-dark shadow-sm hover:shadow-md hover:shadow-purple/20 transition-all duration-200"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-700 hover:text-purple focus:outline-none"
          >
            {showMenu ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMenu && (
        <div className="md:hidden mt-3 bg-white border border-slate-200 rounded-2xl p-6 shadow-xl flex flex-col space-y-4 text-center animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              onClick={() => setShowMenu(false)}
              href={link.href}
              className="text-base font-semibold text-slate-700 hover:text-purple py-2 border-b border-slate-100 last:border-none"
            >
              {link.name}
            </a>
          ))}
          <a
            onClick={() => setShowMenu(false)}
            href="#contact"
            className="w-full py-2.5 bg-purple text-white font-semibold rounded-lg shadow-sm"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
