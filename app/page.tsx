"use client";
import { useEffect, useState } from "react";
import useUserInfo from "@/hooks/useUserInfo";
import UsernameForm from "./components/UsernameForm";
import Spinner from "./components/Spinner";
import PostForm from "./components/PostForm";
import Post from "./components/Post";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const posts = await axios.get("/api/posts").then((res) => {
      console.log(res);
      setPosts(res.data);
    });

    return posts;
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const { userInfo, userInfoStatus } = useUserInfo();

  if (userInfoStatus === "loading") return <Spinner />;

  if (userInfo && !userInfo.username) {
    return <UsernameForm />;
  }

  return (
    <section className="flex flex-col place-items-center justify-center w-full">
      <PostForm userInfo={userInfo} />
      <div className="flex mt-2 text-3xl font-medium">All Posts</div>
      {posts.length === 0 ? (
        <div className="text-xl">No posts yet</div>
      ) : (
        posts.map((post, index) => {
          return <Post key={index} userInfo={userInfo} postData={post} />;
        })
      )}
      {/* <Post userInfo={userInfo} />
      <Post userInfo={userInfo} />
      <Post userInfo={userInfo} />
      <Post userInfo={userInfo} /> */}
    </section>
  );
}
