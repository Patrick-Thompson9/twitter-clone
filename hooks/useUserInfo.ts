import UserInfo from "@/types/user";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function useUserInfo() {
  const { data: session, status: sessionStatus } = useSession();
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [userInfoStatus, setUserInfoStatus] = useState("null");

  const getUserInfo = () => {
    setUserInfoStatus("loading");
    if (sessionStatus === "loading" || !session) {
      return;
    }
    fetch("/api/users?id=" + session.user.id)
      .then((res) => res.json())
      .then((json) => {
        setUserInfo(json);
        setUserInfoStatus("loaded");
      });
  };

  useEffect(() => {
    getUserInfo();
  }, [sessionStatus]);

  return { userInfo, userInfoStatus };
}
