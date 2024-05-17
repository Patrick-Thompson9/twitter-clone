import UserInfo from "@/types/user";
import React from "react";
import UserHeader from "./UserHeader";
import TimeAgo from "javascript-time-ago";

interface props {
  User: UserInfo;
}

function Comment({ User }: props) {
  return (
    <div className="px-4 py-2 bg-slate-900">
      <UserHeader User={User} />
      <div className="p-2">Comment</div>
      {/* <TimeAgo date={} /> */}
    </div>
  );
}

export default Comment;
