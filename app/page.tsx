"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data, status } = useSession();

  const getUserInfo = async () => {
    if (status === "loading" || !data) return;
    fetch("/api/users?id=" + data.user.id);
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
