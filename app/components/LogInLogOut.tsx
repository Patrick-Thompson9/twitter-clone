"use client";
import { ImExit } from "react-icons/im";
import { GiWolfHowl } from "react-icons/gi";
import { signOut } from "next-auth/react";
import useUserInfo from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface Props {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

function LogInLogOut({ isOpen = false, setIsOpen = () => {} }: Props) {
  const { userInfo, setUserInfo, userInfoStatus } = useUserInfo();
  const router = useRouter();

  const logout = async () => {
    setUserInfo(undefined);
    await signOut();
  };

  return (
    <button
      className={clsx(
        "rounded-lg bg-slate-900 border border-sky-200/75 px-3 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105 mt-10",
        isOpen && "absolute bottom-0 my-4",
        userInfo
          ? "hover:shadow-red-400 hover:border-red-400"
          : "hover:shadow-sky-200"
      )}
      onClick={
        userInfo
          ? () => signOut()
          : () => {
              router.push("/login");
              setIsOpen(false);
            }
      }
    >
      {userInfo ? (
        <div className="flex p-2 justify-center items-center gap-1 hover:text-red-400">
          <ImExit className="size-7" />
          <div className="text-xl font-semibold">Sign out</div>
        </div>
      ) : (
        <div className="flex p-2 justify-center items-center gap-1">
          <GiWolfHowl className="size-7" />
          <div className="text-xl font-semibold">Log In</div>
        </div>
      )}
    </button>
  );
}

export default LogInLogOut;
