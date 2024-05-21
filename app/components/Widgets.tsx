"use client";
import PostData from "@/types/post";
import axios from "axios";
import clsx from "clsx";
import { useState } from "react";
import { FaHeart, FaPaperPlane } from "react-icons/fa6";
import { SlSpeech } from "react-icons/sl";

interface Props {
  postData: PostData;
  offCard?: boolean;
  likedByMeDefault?: boolean;
}

interface Widget {
  name: string;
  icon: JSX.Element;
  color: string;
  state: number;
  onClick: () => void;
}

function Widgets({
  postData,
  offCard = false,
  likedByMeDefault = false,
}: Props) {
  const [likedByMe, setLikedByMe] = useState(likedByMeDefault);
  const [likeCount, setLikeCount] = useState(postData.likeCount);

  const handleLike = async () => {
    const res = await axios.post("/api/like", { id: postData._id });
    if (res.data) {
      setLikedByMe(true);
      setLikeCount(likeCount + 1);
    } else {
      setLikedByMe(false);
      setLikeCount(likeCount - 1);
    }
  };

  const handleComment = () => {};

  const handleShare = () => {};

  const widgets: Widget[] = [
    {
      name: "heart",
      icon: <FaHeart />,
      color: "hover:text-red-300",
      state: likeCount,
      onClick: handleLike,
    },
    {
      name: "comment",
      icon: <SlSpeech />,
      color: "hover:text-sky-200",
      state: postData.commentCount,
      onClick: handleComment,
    },
    {
      name: "share",
      icon: <FaPaperPlane />,
      color: "hover:text-emerald-200",
      state: postData.shareCount,
      onClick: handleShare,
    },
  ];

  if (offCard) {
    return (
      <div className="flex justify-between card-size px-4 py-2 items-center">
        {widgets?.map((widget, index) => (
          <div
            key={index}
            className={clsx(
              "flex items-center justify-start gap-2",
              widget.color
            )}
          >
            <button
              key={`button ${index}`}
              className={clsx(
                "flex items-center gap-1",
                widget.name === "heart" && likedByMe && "text-red-400"
              )}
              onClick={widget.onClick}
            >
              {widget.icon}
              <span className="hidden md:inline">{`${widget.name}s: `}</span>
              <span>{widget.state}</span>
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex gap-3 mt-2 justify-start items-center">
        <div className="text-sky-200/50 font-light">{likeCount}</div>
        {widgets?.map((widget, index) => (
          <button
            key={index}
            className={clsx(
              "text-xl hover:cursor-pointer",
              widget.color,
              widget.name === "heart" && likedByMe && "text-red-400"
            )}
            onClick={widget.onClick}
            aria-description={widget.name}
          >
            {widget.icon}
          </button>
        ))}
      </div>
    );
  }
}

export default Widgets;
