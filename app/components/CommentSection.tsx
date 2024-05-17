import UserInfo from "@/types/user";
import React from "react";
import Comment from "./Comment";

interface props {
  User: UserInfo;
}

function CommentSection({ User }: props) {
  const comments = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col justify-center card-size">
      <span className="text-xl font-medium my-4 mx-2 ">Comments</span>
      <ul className="divide-y divide-slate-200/25 border border-sky-200/75 rounded-lg">
        {comments.map((comment, index) => (
          <Comment User={User} />
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;
