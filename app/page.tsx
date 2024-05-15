"use client";
import useUserInfo from "@/hooks/useUserInfo";
import UsernameForm from "./components/UsernameForm";
import Spinner from "./components/Spinner";
import PostForm from "./components/PostForm";
import Post from "./components/Post";

export default function Home() {
  const { userInfo, userInfoStatus } = useUserInfo();

  if (userInfoStatus === "loading") return <Spinner />;

  if (userInfo && !userInfo.username) {
    return <UsernameForm />;
  }

  return (
    <section className="flex flex-col place-items-center justify-center w-full">
      <PostForm userInfo={userInfo} />
      <div className="flex mt-2 text-3xl font-medium">All Posts</div>
      <Post userInfo={userInfo} />
      <Post userInfo={userInfo} />
      <Post userInfo={userInfo} />
      <Post userInfo={userInfo} />
    </section>
  );
}
