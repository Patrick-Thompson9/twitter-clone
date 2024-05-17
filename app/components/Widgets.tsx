"use client";
import clsx from "clsx";
import { useState } from "react";
import { FaHeart, FaPaperPlane } from "react-icons/fa6";
import { SlSpeech } from "react-icons/sl";

interface Props {
  offCard?: boolean;
}

function Widgets({ offCard = false }: Props) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  const widgets = [
    {
      name: "heart",
      icon: <FaHeart />,
      color: "hover:text-red-400",
      state: likes,
      onClick: handleLike,
    },
    {
      name: "comment",
      icon: <SlSpeech />,
      color: "hover:text-sky-200",
      state: comments,
      onClick: handleComment,
    },
    {
      name: "share",
      icon: <FaPaperPlane />,
      color: "hover:text-emerald-200",
      state: shares,
      onClick: handleShare,
    },
  ];

  if (offCard) {
    return (
      <div className="flex justify-between card-size px-4 py-2 items-center">
        {widgets.map((widget, index) => (
          <div
            key={index}
            className={clsx(
              "flex items-center justify-start gap-2",
              widget.color
            )}
          >
            <div className="flex items-center gap-1">
              {widget.icon}
              <span className="hidden md:inline">{`${widget.name}s: `}</span>
              <span>{widget.state}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-3 mt-2 justify-start items-center">
      {widgets.map((widget, index) => (
        <button
          key={index}
          className={clsx("text-xl hover:cursor-pointer", widget.color)}
          onClick={widget.onClick}
          aria-description={widget.name}
        >
          {widget.icon}
        </button>
      ))}
    </div>
  );
}

export default Widgets;
