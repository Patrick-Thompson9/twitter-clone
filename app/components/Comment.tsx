import React from "react";
import UserHeader from "./UserHeader";
import PostData from "@/types/post";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Link from "next/link";
import Widgets from "./Widgets";

TimeAgo.addLocale(en);

interface props {
  postData: PostData;
}

function Comment({ postData }: props) {
  return (
    <div className="px-4 py-2 bg-slate-900">
      <UserHeader User={postData.author} />
      <div className="flex justify-between items-center">
        <Link
          href={`/${postData.author.username}/status/${postData._id}`}
          className="flex grow flex-col justify-start items-start rounded-lg hover:shadow-xl hover:border hover:border-sky-200 hover:shadow-sky-200/20 transition-shadow duration-300 p-2 mr-2"
        >
          <span>{postData.text}</span>
          <ReactTimeAgo date={postData.createdAt} className="text-sky-200/50" />
        </Link>
        <Widgets postData={postData} />
      </div>
    </div>
  );
}

export default Comment;
