import React from "react";
import LoginForm from "../components/LoginForm";
import AnimatedContent from "./AnimatedContent";

async function Page() {
  const res = await fetch("http://localhost:3000/api/auth/providers");
  const providers = await res.json();

  return (
    <section className="relative flex flex-col place-items-center">
      <AnimatedContent />
      <span className="text-4xl md:text-7xl mt-20 text-center tracking-wide Z-50 text-sky-100 drop-shadow-[0_3px_6px_rgba(0,0,0,1)]">
        Login
      </span>
      <LoginForm providers={providers} />
    </section>
  );
}

export default Page;
