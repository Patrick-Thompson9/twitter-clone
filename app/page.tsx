"use client";
import UserInfo from "@/types/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import UsernameForm from "./components/UsernameForm";

export default function Home() {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [userInfoStatus, setUserInfoStatus] = useState("loading");

  const { data: session, status } = useSession();

  const getUserInfo = async () => {
    if (status === "loading" || !session) return;
    fetch("/api/users?id=" + session.user.id)
      .then((res) => res.json())
      .then((json) => {
        setUserInfo(json.user);
        setUserInfoStatus("loaded");
      });
  };

  useEffect(() => {
    getUserInfo();
    console.log(userInfo);
  }, [status]);

  if (userInfoStatus === "loading") return <div>Loading...</div>;

  if (!userInfo?.username) {
    return (
      <div className="flex flex-col place-items-center">
        <span className="text-4xl md:text-7xl mt-20 text-center tracking-tight">
          Pick a username
        </span>
        <UsernameForm />
      </div>
    );
  }

  return (
    <section className="relative">
      <div>Hello WOrld</div>
    </section>
  );
}
