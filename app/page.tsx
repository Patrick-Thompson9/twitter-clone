"use client";
import useUserInfo from "@/hooks/useUserInfo";
import UsernameForm from "./components/UsernameForm";
import ShinyButton from "./components/ShinyButton";
import Spinner from "./components/Spinner";

export default function Home() {
  const { userInfo, userInfoStatus } = useUserInfo();

  if (userInfoStatus === "loading") return <Spinner />;

  if (userInfo && !userInfo.username) {
    console.log(userInfo);
    return <UsernameForm />;
  }

  return (
    <section>
      <div className="flex flex-col rounded-sm relative border-sky-200/75 border p-14 focus-within:border-sky-200 focus ">
        <span className="font-bold">What's on your mind?</span>
        <form className="focus:border-red-500 focus:">
          <textarea
            className="border-sky-200/75 border resize-none bg-black w-full rounded-md p-4 my-1 focus:outline-none focus:ring-0 focus:border-sky-200 focus:border focus:shadow-md focus:shadow-sky-200/50"
            placeholder="Write something..."
          ></textarea>
          <ShinyButton buttonText="Post" classes={"w-fit"} />
        </form>
      </div>
    </section>
  );
}
