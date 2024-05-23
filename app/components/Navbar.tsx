"use client";
import clsx from "clsx";
import { useState } from "react";
import { FaGear, FaX, FaHouseChimneyCrack, FaTree } from "react-icons/fa6";
import { GiFox, GiStack } from "react-icons/gi";
import SearchBar from "./SearchBar";
import useUserInfo from "@/hooks/useUserInfo";
import LogInLogOut from "./LogInLogOut";

const NavLinks = [
  { title: "Home", path: "/", icon: <FaHouseChimneyCrack /> },
  { title: "Account", path: "/account", icon: <GiFox /> },
  { title: "Settings", path: "/settings", icon: <FaGear /> },
  { title: "About", path: "/About", icon: <FaTree /> },
];

function Navbar() {
  const { userInfo, setUserInfo, userInfoStatus } = useUserInfo();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div>
        <div className="relative bg-slate-950 flex items-center justify-center w-full min-h-16">
          <SearchBar />
          {/* Mobile Navbar Button */}
          <div className="absolute right-0">
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
                "fixed bottom-0 right-0 top-0 flex flex-col items-center gap-4 bg-slate-950/90 transition-transform duration-300 ease-in-out motion-reduce:transition-none w-screen md:w-[25vw] lg:w-[15vw]",
                isOpen ? "translate-x-100" : "translate-x-[100%]"
              )}
            >
              <button
                type="button"
                className="absolute top-0 right-0 text-3xl mr-3 my-2"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? <GiStack /> : <FaX className="size-6 lg:size-8" />}
              </button>
              <ul className="grid justify-items-center mt-2 gap-8 divide-y divide-sky-200/70 w-screen md:w-fit">
                {NavLinks.map((link, index) => (
                  <li key={index} className="h-10 w-[70%] hover:text-sky-200">
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
              <LogInLogOut isOpen={isOpen} setIsOpen={setIsOpen} />
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
                  <span className="size-full text-4xl hover:filter hover:text-sky-200">
                    {link.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-sky-200 h-px w-full" />
      <div className="text-white bg-gradient-to-b from-sky-200/10 to-sky-200/0 h-10" />
    </nav>
  );
}

export default Navbar;
