"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  const getUserInfo = async () => {
    if (status === "loading" || !session) return;
    fetch("/api/users?id=" + session.user.id);
  };

  useEffect(() => {
    getUserInfo();
  }, [status]);

  return (
    <section className="relative">
      <div>Hello WOrld</div>
    </section>
  );
}
