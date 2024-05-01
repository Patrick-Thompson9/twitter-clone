"use client";
import React from "react";
import { getProviders, signIn } from "next-auth/react";
import ShinyButton from "../components/ShinyButton";
import moonSVG from "../assets/moon.svg";

interface Provider {
  name: string;
  id: string;
  signinUrl: string;
}

async function page() {
  // const res = await fetch("http://localhost:3000/api/auth/providers");
  // const providers = await res.json();
  // console.log(providers);
  const providers = {
    github: {
      id: "github",
      name: "GitHub",
      type: "oauth",
      signinUrl: "http://localhost:3000/api/auth/signin/github",
      callbackUrl: "http://localhost:3000/api/auth/callback/github",
    },
    google: {
      id: "google",
      name: "Google",
      type: "oauth",
      signinUrl: "http://localhost:3000/api/auth/signin/google",
      callbackUrl: "http://localhost:3000/api/auth/callback/google",
    },
  };

  return (
    <section className="flex flex-col place-items-center">
      {/* <img src={moonSVG} alt="moon" className="w-32 md:w-64 mt-20" /> */}
      <span className="text-4xl md:text-7xl mt-4 text-center tracking-tight">
        Login
      </span>
      <div className="border-sky-200/45 bg-gray-900 border shadow-xl rounded-lg mt-16 py-4 px-2 w-2/3 md:w-3/5 lg:py-8 lg:px-6 lg:w-2/5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            return false;
          }}
        >
          <div className="flex flex-col items-start justify-center px-14 -z-20">
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

            {/* "Or" separator */}
            <div className="flex items-center justify-center w-full gap-4">
              <div className="bg-sky-200/75 h-px w-full place-self-center my-10"></div>
              <span className="font-medium tracking-wide">Or</span>
              <div className="bg-sky-200/75 h-px w-full place-self-center my-10"></div>
            </div>

            {/* Sign in With Providers Options */}
            <div className="flex flex-col items-center justify-center w-full gap-4">
              <span className="text-lg">Sign in with:</span>
              <div className="flex flex-col items-center justify-center w-full">
                {(Object.values(providers) as Provider[]).map(
                  (provider: Provider) => (
                    <button
                      key={provider.id}
                      type="submit"
                      className="mt-4 w-full"
                      onClick={async () => await signIn(provider.id)}
                    >
                      <ShinyButton buttonText={provider.name} />
                    </button>
                  )
                )}
              </div>
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
