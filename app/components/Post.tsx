"use client";
import { GiWolfHowl } from "react-icons/gi";
import { FaHeart, FaPaperPlane } from "react-icons/fa6";
import { SlSpeech } from "react-icons/sl";
import PostData from "@/types/post";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Link from "next/link";

TimeAgo.addLocale(en);

const widgets = [
  { name: "heart", icon: <FaHeart /> },
  { name: "comment", icon: <SlSpeech /> },
  { name: "share", icon: <FaPaperPlane /> },
];

interface props {
  postData: PostData;
}

function Post({ postData }: props) {
  console.log("PostData", postData);
  return (
    <div className="flex flex-col justify-center my-3 w-[67vw] md:w-[50vw] lg:w-[40vw]">
      {/* post card */}
      <div className="flex flex-col justify-start bg-slate-950 border-sky-200/75 border p-14 rounded-lg py-4 px-2 lg:py-8 lg:px-6 overflow-auto hover:shadow-xl hover:shadow-sky-200/20 transition-shadow duration-300">
        {/* post header */}
        <Link href={"/user?id=" + postData.author._id}>
          <div className="flex justify-start gap-2 items-center mb-2">
            {postData.author.image ? (
              <img
                src={postData.author.image}
                referrerPolicy="no-referrer"
                className=" size-8 md:size-12 rounded-full border border-sky-200"
              />
            ) : (
              <GiWolfHowl className="size-10 md:size-14 rounded-full border border-sky-200" />
            )}
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col justify-start">
                <span className="md:text-xl">{postData.author.name}</span>
                <span className="text-sky-200/50">
                  {postData.author.username}
                </span>
              </div>
              <span className="text-sky-200/50">
                <ReactTimeAgo date={postData.createdAt} />
              </span>
            </div>
          </div>
        </Link>

        {/* post body */}
        <Link href={`/${postData.author.username}/status/${postData._id}`}>
          <div className="border border-sky-200/25 w-full min-h-20 rounded-sm py-1 px-2">
            {/* post text */}
            {postData.text}
          </div>
        </Link>

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
