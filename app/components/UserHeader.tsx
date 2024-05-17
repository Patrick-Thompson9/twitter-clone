import UserInfo from "@/types/user";
import Link from "next/link";
import React from "react";
import { GiWolfHowl } from "react-icons/gi";

interface props {
  User: UserInfo;
}

function UserHeader({ User }: props) {
  return (
    <Link
      href={"/user?id=" + User._id}
      className="flex items-center justify-start gap-2"
    >
      {User.image ? (
        <img
          src={User.image}
          referrerPolicy="no-referrer"
          className=" size-8 md:size-12 rounded-full border border-sky-200"
        />
      ) : (
        <GiWolfHowl className="size-10 md:size-14 rounded-full border border-sky-200" />
      )}
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col justify-start">
          <span className="md:text-xl">{User.name}</span>
          <span className="text-sky-200/50">{User.username}</span>
        </div>
      </div>
    </Link>
  );
}

export default UserHeader;
