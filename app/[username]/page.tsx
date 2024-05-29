"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import UserInfo from "@/types/user";
import { useRouter } from "next/navigation";

function page({ params }: { params: { username: string } }) {
  const router = useRouter();
  const [profile, setProfile] = useState<UserInfo>();
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    const user = await axios
      .get(`/api/users?username=${params.username}`)
      .then((res) => {
        setProfile(res.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUser();
  }, [params]);

  if (!profile && !isLoading) {
    router.push("/error/404");
  }

  return (
    <section className="mt-20">
      <BackButton />
      <div className="flex flex-col place-items-center ">
        <div className="flex flex-col justify-center items-start">
          <span className="text-5xl">{profile?.name}</span>
          <span className="text-sky-200/50 text-2xl">{profile?.username}</span>
          <div className="relative my-2 w-full">
            <img
              src={
                profile?.timeline ? profile.timeline : "default-timeline.jpg"
              }
              className="w-full h-20 md:h-40"
            />
            <img
              src={profile?.image}
              className="absolute bottom-0 size-20 rounded-full border border-sky-200 box"
              style={{ boxShadow: "0 0 0 5px #0f172a" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
