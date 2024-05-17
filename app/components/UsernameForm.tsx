"use client";
import React, { useEffect } from "react";
import ShinyButton from "./ShinyButton";
import { useState } from "react";
import useUserInfo from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";

function UsernameForm() {
  const { userInfo, userInfoStatus } = useUserInfo();
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (userInfoStatus === "loading" || !userInfo) {
      return;
    }
    if (username === "") {
      const defaultUsername = userInfo?.email.split("@")[0] || "";
      setUsername(defaultUsername.replace(/[^a-z]+/gi, ""));
    }
  }, [userInfoStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const usernameInput = form.elements.namedItem(
      "username"
    ) as HTMLInputElement;

    await fetch("/api/users", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username: usernameInput.value }),
    });
    setUsername(usernameInput.value);
    router.refresh();
  };

  if (userInfoStatus === "loading") return <Spinner />;

  return (
    <div className="flex flex-col place-items-center">
      <span className="text-4xl md:text-7xl mt-10 text-center tracking-tight">
        Pick a username
      </span>
      <div className="border-sky-200/45 bg-gray-900 border shadow-xl rounded-lg my-12 py-4 px-2 lg:py-8 lg:px-6 card-size">
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
                placeholder="JohnDoe123"
                defaultValue={username}
                className="border-black bg-slate-600 border rounded-md my-1 w-full py-1 px-2 focus:outline-none focus:ring-0 focus:border-sky-200 focus:border focus:shadow focus:shadow-sky-200 relative z-10 peer"
              />
              <div className="absolute inset-2 opacity-0 bg-sky-200/50 blur-xl filter -z-0 peer-focus:opacity-100 transition-opacity duration-300" />
            </div>
            <button type="submit" className="mt-4 w-full">
              <ShinyButton buttonText="Confirm" />
            </button>
            <span className="text-red-500 w-full text-center mt-1 text-sm font-light hidden">
              <strong>Error:</strong> Invalid username or password
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UsernameForm;
