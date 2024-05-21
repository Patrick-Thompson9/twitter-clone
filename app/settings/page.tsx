"use client";
import { signOut } from "next-auth/react";
import { ImExit } from "react-icons/im";

function page() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-start items-start w-full md:w-4/5 bg-slate-950 border border-sky-200/75 mt-20 rounded-lg py-2 px-4 md:py-4 md:px-6 gap-2 font-medium text-lg">
        <span className="text-5xl font-semibold place-self-center">
          Settings
        </span>
        <div className="w-full divide-y divide-sky-200/25">
          <div>Account</div>
          <div>
            <span>Theme (not yet available)</span>
          </div>
          <div>
            <span>Reduce motion</span>
          </div>
          <div>About</div>
        </div>

        <button
          className="flex justify-start items-center gap-1 text-red-400 rounded-lg bg-slate-900 border border-sky-200/75 px-3 py-2 hover:bg-red-950 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-red-700/40 mt-10"
          onClick={() => signOut()}
        >
          <ImExit className="size-6" />
          <span className="font-medium text-xl">Log Out</span>
        </button>
      </div>
    </section>
  );
}

export default page;
