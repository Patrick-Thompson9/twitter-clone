"use client";
import useUserInfo from "@/hooks/useUserInfo";
import UsernameForm from "./components/UsernameForm";
import ShinyButton from "./components/ShinyButton";
import Spinner from "./components/Spinner";
import { GiWolfHowl } from "react-icons/gi";

export default function Home() {
  const { userInfo, userInfoStatus } = useUserInfo();

  if (userInfoStatus === "loading") return <Spinner />;

  if (userInfo && !userInfo.username) {
    return <UsernameForm />;
  }

  console.log(userInfo?.image);
  return (
    <section>
      <div className="flex flex-col rounded-sm relative border-sky-200/75 border p-14 focus-within:border-sky-200 focus ">
        <div className="flex justify-start gap-2 items-center mb-2">
          <div className="size-10 rounded-full border border-sky-200">
            {userInfo?.image ? (
              <img
                src={userInfo?.image}
                className="rounded-full"
                alt="avatar"
              />
            ) : (
              <GiWolfHowl />
            )}
          </div>
          <span className="font-bold text-xl">What's on your mind?</span>
        </div>
        <form className="focus:border-red-500 focus:">
          <textarea
            className="border-sky-200/75 border resize-none bg-black w-full rounded-md p-4 my-1 focus:outline-none focus:ring-0 focus:border-sky-200 focus:border focus:shadow-md focus:shadow-sky-200/50"
            placeholder="Write something..."
          ></textarea>
          <ShinyButton buttonText="Post" classes={"text-center md:max-w-28"} />
        </form>
      </div>
    </section>
  );
}
