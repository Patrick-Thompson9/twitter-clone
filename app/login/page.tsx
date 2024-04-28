import React from "react";
import { getProviders } from "next-auth/react";
import ShinyButton from "../components/ShinyButton";
import moonSVG from "../assets/moon.svg";

function page() {
  const props = getServerSidePropx();

  return (
    <section className="flex flex-col place-items-center">
      {/* <img src={moonSVG} alt="moon" className="w-32 md:w-64 mt-20" /> */}
      <span className="text-4xl md:text-7xl mt-4 text-center tracking-tight">
        Login
      </span>
      <div className="border-sky-200/45 bg-gray-900 border shadow-xl rounded-lg mt-16 py-4 px-2 w-2/3 md:w-3/5 lg:py-8 lg:px-6 lg:w-2/5 relative">
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

            {/* Sign in With Providers Options */}
            <div className="relative bg-sky-200/75 h-px w-[350px] place-self-center my-10">
              <span className="absolute mt-4 bg-sky-200/0 inset-0">Or</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export async function getServerSidePropx() {
  const res = await fetch("http://localhost:3000/api/auth/providers");
  const providers = await res.json();
  console.log(providers);
  return {
    props: { providers },
  };
}

export default page;
