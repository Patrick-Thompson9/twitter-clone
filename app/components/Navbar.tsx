"use client";
import clsx from "clsx";
import { useState } from "react";
import { FaGear, FaX, FaHouseChimneyCrack, FaTree } from "react-icons/fa6";
import { GiFox, GiStack } from "react-icons/gi";
import SearchBar from "./SearchBar";

const NavLinks = [
  { title: "Home", path: "/", icon: <FaHouseChimneyCrack /> },
  { title: "Account", path: "/account", icon: <GiFox /> },
  { title: "Settings", path: "/settings", icon: <FaGear /> },
  { title: "Contact", path: "/contact", icon: <FaTree /> },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div>
        <div className="relative bg-slate-950 flex items-center justify-center w-full min-h-16">
          <SearchBar />
          {/* Mobile Navbar Button */}
          <div className="md:hidden absolute right-0">
            <button
              type="button"
              className="text-3xl mr-3 my-2"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? <GiStack /> : null}
            </button>

            {/* Mobile Link List */}
            <div
              className={clsx(
                "fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-center gap-4 bg-slate-950/90 transition-transform duration-300 ease-in-out motion-reduce:transition-none",
                isOpen ? "translate-x-0" : "translate-x-[100%]"
              )}
            >
              <button
                type="button"
                className="absolute top-0 right-0 text-3xl mr-3 my-2 "
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? <GiStack /> : <FaX />}
              </button>
              <ul className="w-screen grid justify-items-start mt-2 ml-16 gap-8 divide-y divide-sky-200/70">
                {NavLinks.map((link, index) => (
                  <li key={link.title} className="h-10">
                    <a
                      href={link.path}
                      className="flex items-center justify-center gap-2 pt-4 text-3xl"
                    >
                      <span>{link.icon}</span>
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex w-full justify-center gap-5 lg:gap-10">
            {NavLinks.map((link, index) => (
              <li
                key={link.title}
                className="flex items-center justify-center size-20"
              >
                <a href={link.path}>
                  <span className="size-full text-4xl">{link.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-sky-200 h-px w-full" />
    </nav>
  );
}

export default Navbar;
