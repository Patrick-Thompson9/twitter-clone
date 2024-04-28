"use client";
import clsx from "clsx";
import { useState } from "react";
import {
  FaGear,
  FaSistrix,
  FaX,
  FaHouseChimneyCrack,
  FaTree,
} from "react-icons/fa6";
import { GiWolfHowl, GiFox, GiStack } from "react-icons/gi";

const NavLinks = [
  { title: "Home", path: "/", icon: <FaHouseChimneyCrack /> },
  { title: "Account", path: "/account", icon: <GiFox /> },
  { title: "Settings", path: "/settings", icon: <FaGear /> },
  { title: "Contact", path: "/contact", icon: <FaTree /> },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      {/* Mobile Header */}
      <nav>
        <div className="relative bg-slate-950 flex items-center justify-center w-full md:hidden">
          <search className="flex items-center gap-1 text-xl mx-3 my-2">
            <div className="text-3xl">
              <FaSistrix />
            </div>
            <label htmlFor="search" className="sr-only relative" />
            <input
              id="search"
              type="text"
              placeholder="Search..."
              className="bg-slate-800 text-white border border-white/40 rounded-md px-2 py-1 w-40 font-extralight"
            />
          </search>
          <div className="absolute right-0">
            <button
              type="button"
              className="text-3xl mr-3 my-2"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? <GiStack /> : null}
            </button>
          </div>

          {/* Mobile Navbar */}
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
      </nav>

      {/* Desktop Header */}
      <nav>
        <div className="hidden relative md:flex bg-slate-950 justify-center">
          <search className="absolute flex gap-1 left-0 top-[50%] text-xl translate-y-[-50%] mx-3">
            <div className="text-4xl">
              <FaSistrix />
            </div>
            <label htmlFor="search" className="sr-only relative" />
            <input
              id="search"
              type="text"
              placeholder="Search..."
              className="bg-slate-800 text-white border border-white/40 rounded-sm px-2 py-1 w-40 font-extralight"
            />
          </search>

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
      </nav>
      <div className="bg-sky-200 h-px w-full" />
    </section>
  );
}

export default Navbar;
