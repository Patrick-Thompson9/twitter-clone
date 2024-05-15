"use client";
import useUserInfo from "@/hooks/useUserInfo";
import UsernameForm from "./components/UsernameForm";
import Spinner from "./components/Spinner";
import PostForm from "./components/PostForm";

export default function Home() {
  const { userInfo, userInfoStatus } = useUserInfo();

  if (userInfoStatus === "loading") return <Spinner />;

  if (userInfo && !userInfo.username) {
    return <UsernameForm />;
  }

  return (
    <section>
      <PostForm userInfo={undefined} />
    </section>
  );
}
