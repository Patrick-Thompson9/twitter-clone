import React from "react";
import Post from "./Post";
import PostData from "@/types/post";
import Comment from "./Comment";

interface props {
  postData: PostData;
}

function CommentSection({ postData }: props) {
  // TODO: Make comments come from db instead of hard code
  const comments = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col justify-center card-size">
      <span className="text-xl font-medium my-4 mx-2 ">Comments</span>
      <ul className="divide-y divide-slate-200/25 border border-sky-200/75 rounded-lg">
        {comments.map((comment, index) => (
          <Comment postData={postData} />
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;
