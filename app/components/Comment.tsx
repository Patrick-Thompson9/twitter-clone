import React from "react";
import UserHeader from "./UserHeader";
import PostData from "@/types/post";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);

interface props {
  postData: PostData;
}

function Comment({ postData }: props) {
  return (
    <div className="px-4 py-2 bg-slate-900">
      <UserHeader User={postData.author} />
      <div className="p-2">Comment</div>
      <ReactTimeAgo date={postData.createdAt} className="text-sky-200/50" />
    </div>
  );
}

export default Comment;
