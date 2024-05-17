import UserInfo from "@/types/user";
import React from "react";
import UserHeader from "./UserHeader";

interface props {
  User: UserInfo;
}

function Comment({ User }: props) {
  return (
    <div className="card-size px-4 py-2 rounded-lg bg-slate-900 border-x border-t border-t-sky-200/25 border-x-sky-200/75">
      <UserHeader User={User} />
      Comment
    </div>
  );
}

export default Comment;
