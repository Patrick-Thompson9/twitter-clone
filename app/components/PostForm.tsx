"use client";
import { useState } from "react";
import { GiWolfHowl } from "react-icons/gi";
import { BsArrowReturnRight } from "react-icons/bs";
import ShinyButton from "./ShinyButton";
import UserInfo from "@/types/user";
import axios from "axios";
import { useRouter } from "next/navigation";

interface props {
  userInfo: UserInfo | undefined;
  onPost: () => void;
  defaultText?: "What's on your mind?" | "Reply";
  parent?: string | null;
}

function PostForm({
  userInfo,
  onPost,
  defaultText = "What's on your mind?",
  parent = null,
}: props) {
  const router = useRouter();
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInfo) {
      router.push("/login");
      return;
    }

    const json = await axios.post("/api/posts", { text, parent });
    setText("");
    if (onPost) onPost();
  };

  return (
    <div className="flex flex-col rounded-sm relative border-sky-200/75 border p-14 focus-within:border-sky-200 w-full">
      <div className="flex justify-start gap-2 items-center mb-2">
        {defaultText === "Reply" && <BsArrowReturnRight className="size-6" />}
        {userInfo?.image ? (
          <img
            src={userInfo?.image}
            className="size-10 rounded-full border border-sky-200"
            referrerPolicy="no-referrer"
            alt="avatar"
          />
        ) : (
          <GiWolfHowl className="size-10 rounded-full border border-sky-200" />
        )}
        <span className="font-bold text-xl">{defaultText}</span>
      </div>
      <form className="focus:border-red-500 focus:" onSubmit={handleSubmit}>
        <textarea
          className="border-sky-200/75 border resize-none bg-black w-full rounded-md p-4 my-1 focus:outline-none focus:ring-0 focus:border-sky-200 focus:border focus:shadow-md focus:shadow-sky-200/50"
          placeholder="Write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit" disabled={!text}>
          <ShinyButton buttonText="Post" classes={"text-center md:max-w-28"} />
        </button>
      </form>
    </div>
  );
}

export default PostForm;
