"use client";
import { GiWolfHowl } from "react-icons/gi";
import { FaHeart, FaPaperPlane } from "react-icons/fa6";
import { SlSpeech } from "react-icons/sl";
import PostData from "@/types/post";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

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
  return (
    <div className="flex flex-col justify-start place-items-center relative my-3 w-full">
      {/* post card */}
      <div className="flex flex-col justify-start relative bg-slate-950 border-sky-200/75 border p-14 rounded-lg py-4 px-2 w-2/3 md:w-3/5 lg:py-8 lg:px-6 lg:w-2/5 hover:shadow-xl hover:shadow-sky-200/20 transition-shadow duration-300">
        {/* post header */}
        <div className="flex justify-start gap-2 items-center mb-2">
          {postData.author.image ? (
            <img
              src={postData.author.image}
              className="size-12 rounded-full border border-sky-200"
              alt="avatar"
            />
          ) : (
            <GiWolfHowl className="size-14 rounded-full border border-sky-200" />
          )}
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col justify-start">
              <span className="text-xl">{postData.author.name}</span>
              <span className="text-sky-200/50">
                {postData.author.username}
              </span>
            </div>
            <span className="text-sky-200/50">
              <ReactTimeAgo date={postData.createdAt} />
            </span>
          </div>
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
