import React from "react";

function Footer() {
  return (
    <footer className="relative text-sky-200 font-extralight text-sm mt-40">
      <img
        src="/hills.svg"
        className="absolute bottom-0 -z-10 w-full h-auto opacity-25"
      />
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
