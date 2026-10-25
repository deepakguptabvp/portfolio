import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-600 text-sm font-medium">
          © {new Date().getFullYear()} Crafted by <span className="text-purple font-semibold">Deepak Gupta</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
