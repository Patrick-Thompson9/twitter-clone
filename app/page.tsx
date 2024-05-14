"use client";
import UserInfo from "@/types/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useUserInfo from "@/hooks/useUserInfo";
import UsernameForm from "./components/UsernameForm";

export default function Home() {
  const { userInfo, userInfoStatus } = useUserInfo();

  if (userInfoStatus === "loading") return <div>Loading...</div>;

  if (!userInfo?.username) {
    return <UsernameForm />;
  }

  return (
    <section className="relative">
      <div>Hello WOrld</div>
    </section>
  );
}
