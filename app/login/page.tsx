import React from "react";
import LoginForm from "../components/LoginForm";
import moonSVG from "../assets/moon.svg";

async function page() {
  const res = await fetch("http://localhost:3000/api/auth/providers");
  const providers = await res.json();
  console.log(providers);

  return (
    <section className="flex flex-col place-items-center">
      {/* <img src={moonSVG} alt="moon" className="w-32 md:w-64 mt-20" /> */}
      <span className="text-4xl md:text-7xl mt-4 text-center tracking-tight">
        Login
      </span>
      <div className="border-sky-200/45 bg-gray-900 border shadow-xl rounded-lg mt-16 py-4 px-2 w-2/3 md:w-3/5 lg:py-8 lg:px-6 lg:w-2/5">
        <LoginForm providers={providers} />
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
