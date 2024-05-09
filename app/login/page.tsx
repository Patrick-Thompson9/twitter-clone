import React from "react";
import LoginForm from "../components/LoginForm";
import AnimatedContent from "./AnimatedContent";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
// import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

async function page() {
  const res = await fetch("http://localhost:3000/api/auth/providers");
  const providers = await res.json();

  const session = await getServerSession(authOptions);
  // const router = useRouter();
  // if (session?.user) {
  //   router.push("/");
  // }

  return (
    <section className="flex flex-col place-items-center">
      <AnimatedContent />
      <span className="text-4xl md:text-7xl mt-20 text-center tracking-tight">
        Login
      </span>
      <LoginForm providers={providers} />
      <div>
        {/* <h2>My Amazing App</h2>
          {session && (
            <div>
              <p>Signed in as {session.user && session.user.name}</p>
              <a href="/api/auth/signout">Sign out by link</a>
            </div>
          )}
          {!session && <p>Not signed in</p>} */}
      </div>
    </section>
  );
}

export default page;
