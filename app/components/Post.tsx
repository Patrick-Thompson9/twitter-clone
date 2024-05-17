"use client";
import PostData from "@/types/post";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Link from "next/link";
import UserHeader from "./UserHeader";
import Widgets from "./Widgets";

TimeAgo.addLocale(en);

interface props {
  postData: PostData;
}

function Post({ postData }: props) {
  if (!postData) return <div>Post not found :/</div>;
  return (
    <div className="flex flex-col justify-center mt-3 card-size">
      {/* post card */}
      <div className="flex flex-col justify-start bg-slate-950 border-sky-200/75 border p-14 rounded-lg py-4 pb-2 px-2 lg:py-8 lg:pb-4 lg:px-6 overflow-auto hover:shadow-xl hover:shadow-sky-200/20 hover:border-sky-200 transition-all duration-300">
        <UserHeader User={postData.author} />
        <Link href={`/${postData.author.username}/status/${postData._id}`}>
          {/* post header */}

          {/* post body */}
          <div className="border border-sky-200/25 w-full min-h-20 rounded-sm py-1 px-2 ">
            {/* post text */}
            {postData.text}
          </div>

          {/* post widgets */}
          <div className="flex flex-col gap-4">
            <Widgets />
            <span className="text-sky-200/50">
              <ReactTimeAgo date={postData.createdAt} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Post;
