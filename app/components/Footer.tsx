import React from "react";

function Footer() {
  return (
    <footer className="text-sky-200 font-extralight text-sm">
      <div className="w-full bg-sky-200 h-px" />
      <div className="bg-black grid grid-cols-1 gap-1 md:grid-cols-3 min-h-10 justify-items-center content-center py-2">
        <span>Contact</span>
        <span>Rate App</span>
        <span>Support</span>
      </div>
    </footer>
  );
}

export default Footer;
