import React from "react";
import ShinyButton from "../components/ShinyButton";
import moonSVG from "../assets/moon.svg";

function page() {
  return (
    <section className="flex flex-col place-items-center">
      {/* <img src={moonSVG} alt="moon" className="w-32 md:w-64 mt-20" /> */}
      <span className="text-4xl md:text-7xl mt-4 text-center tracking-tight">
        Login
      </span>
      <div className="border-sky-200/45 bg-gray-900 border shadow-xl rounded-lg mt-16 py-8 px-6 w-1/3 relative">
        <form>
          <div className="flex flex-col items-start justify-center px-14">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-black bg-slate-600 border rounded-md my-1 w-full"
            />
            <label htmlFor="password" className="mt-6">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-black bg-slate-600 border rounded-md my-1 pr-10 w-full"
            />
            <button type="submit" className="mt-4 w-full">
              <ShinyButton buttonText="Login" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default page;
