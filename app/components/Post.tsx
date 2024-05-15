"use client";
import UserInfo from "@/types/user";
import { useEffect, useState } from "react";
import { GiWolfHowl } from "react-icons/gi";
import { FaHeart, FaPaperPlane } from "react-icons/fa6";
import { SlSpeech } from "react-icons/sl";
import PostData from "@/types/post";
import axios from "axios";

const widgets = [
  { name: "heart", icon: <FaHeart /> },
  { name: "share", icon: <FaPaperPlane /> },
  { name: "comment", icon: <SlSpeech /> },
];

interface props {
  postData: PostData;
}

function Post({ postData }: props) {
  if (!postData) return null;
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const getUserInfo = async (authorID: string) => {
    await axios
      .get("/api/users?id=" + postData.author)
      .then((res) => setUserInfo(res.data));
    console.log(userInfo);
  };

  useEffect(() => {
    getUserInfo(postData.author);
  }, []);

  if (!userInfo) return null;

  return (
    <div className="flex flex-col justify-start place-items-center relative my-3 w-full">
      {/* post card */}
      <div className="flex flex-col justify-start relative bg-slate-950 border-sky-200/75 border p-14 rounded-lg py-4 px-2 w-2/3 md:w-3/5 lg:py-8 lg:px-6 lg:w-2/5 hover:shadow-xl hover:shadow-sky-200/15 transition-shadow duration-300">
        {/* post header */}
        <div className="flex justify-start gap-2 items-center mb-2">
          {userInfo.image ? (
            <img
              src={userInfo.image}
              className="size-6 rounded-full border border-sky-200"
              alt="avatar"
            />
          ) : (
            <GiWolfHowl className="size-10 rounded-full border border-sky-200" />
          )}
          <span className="text-xl">{userInfo.username}</span>
        </div>

        {/* post body */}
        <div className="border border-sky-200/25 w-full min-h-20 rounded-sm py-1 px-2">
          {/* post text */}
          {postData.text}
        </div>

        {/* post widgets */}
        <div className="flex gap-3 mt-2 justify-start items-center">
          {widgets.map((widget, index) => (
            <span
              key={index}
              className="text-xl hover:cursor-pointer"
              aria-description={widget.name}
            >
              {widget.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
