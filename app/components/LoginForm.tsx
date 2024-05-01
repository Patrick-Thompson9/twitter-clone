"use client";
import React from "react";
import ShinyButton from "./ShinyButton";
import { signIn } from "next-auth/react";
import { useState } from "react";
import clsx from "clsx";

type Provider = {
  name: string;
  id: string;
  signinUrl: string;
};

interface Props {
  providers: Provider[];
}

function LoginForm({ providers }: Props) {
  const [wrongCredentials, setWrongCredentials] = useState(false);
  console.log(wrongCredentials);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const username = form.elements.namedItem("username") as HTMLInputElement;

    signIn("credentials", {
      username: username.value,
      password: password.value,
      redirect: false,
    }).then((result) => {
      if (result?.error) {
        setWrongCredentials(true);
        console.error(result.error);
      } else {
        setWrongCredentials(false);
      }
    });
  };

  return (
    <div className="border-sky-200/45 bg-gray-900 border shadow-xl rounded-lg my-12 py-4 px-2 w-2/3 md:w-3/5 lg:py-8 lg:px-6 lg:w-2/5">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start justify-center px-14 -z-20">
          <label htmlFor="username" className="">
            Username
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="username"
              name="username"
              className="border-black bg-slate-600 border rounded-md my-1 w-full py-1 px-2 focus:outline-none focus:ring-0 focus:border-sky-200 focus:border focus:shadow-sm focus:shadow-sky-200 relative z-10 peer"
            />
            <div className="absolute inset-2 opacity-0 bg-sky-200/50 blur-xl filter -z-0 peer-focus:opacity-100 transition-opacity duration-300" />
          </div>
          <label htmlFor="password" className="mt-6">
            Password
          </label>
          <div className="relative w-full">
            <input
              type="password"
              id="password"
              name="password"
              className="border-black bg-slate-600 border rounded-md my-1 w-full py-1 px-2 focus:outline-none focus:ring-0 focus:border-sky-200 focus:border focus:shadow-sm focus:shadow-sky-200 relative z-10 peer"
            />
            <div className="absolute inset-2 opacity-0 bg-sky-200/50 blur-xl filter -z-0 peer-focus:opacity-100 transition-opacity duration-300" />
          </div>
          <button type="submit" className="mt-4 w-full">
            <ShinyButton buttonText="Login" />
          </button>
          {/* <div
            className={clsx(
              "w-full bg-red-500/30 text-white font-medium text-center py-2 mt-1 rounded-md",
              wrongCredentials ? "visible" : "hidden"
            )}
          > */}
          <span className="text-red-500 w-full text-center mt-1 text-sm font-light">
            <strong>Error:</strong> wrong username or password
          </span>
          {/* Error: Wrong Username or Password
          </div> */}

          {/* "Or" separator */}
          <div className="flex items-center justify-center w-full gap-4">
            <div className="bg-sky-200/75 h-px w-full place-self-center my-10"></div>
            <span className="font-medium tracking-wide">Or</span>
            <div className="bg-sky-200/75 h-px w-full place-self-center my-10"></div>
          </div>

          {/* Sign in With Providers Options */}
          <div className="flex flex-col items-center justify-center w-full">
            {(Object.values(providers) as Provider[]).map(
              (provider: Provider) => (
                <button
                  key={provider.id}
                  type="button"
                  className="mt-4 w-full"
                  onClick={async () => await signIn(provider.id)}
                >
                  <ShinyButton
                    buttonText={`Sign in with ${provider.name}`}
                    image={`${provider.name}-logo.svg`}
                  />
                </button>
              )
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
