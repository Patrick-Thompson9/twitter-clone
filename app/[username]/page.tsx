"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import UserInfo from "@/types/user";
import { useRouter } from "next/navigation";
import { GiWolfHowl } from "react-icons/gi";
import PostData from "@/types/post";
import Post from "../components/Post";
import Timeline from "../components/Timeline";

function page({ params }: { params: { username: string } }) {
  const router = useRouter();
  const [profile, setProfile] = useState<UserInfo>();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [postsLikedByMe, setPostsLikedByMe] = useState<string[]>([]);

  const getUser = async () => {
    try {
      const res = await axios.get(`/api/users?username=${params.username}`);
      setProfile(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getPosts = async () => {
    if (!profile) return;
    try {
      const res = await axios.get(`/api/posts?author=${profile._id}`);
      setPosts(res.data.posts);
      setPostsLikedByMe(res.data.idsLikedByMe);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [params]);

  useEffect(() => {
    getPosts();
  }, [profile]);

  if (!profile && !isLoading) {
    router.push("/error/404");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (!profile) {
    return <div>No user found :/</div>;
  }

  return (
    <section className="mt-20">
      <BackButton />
      <div className="flex flex-col place-items-center">
        <div className="flex flex-col justify-center items-start">
          <span className="text-5xl">{profile?.name}</span>
          <span className="text-sky-200/50 text-2xl">{profile?.username}</span>
          <div className="relative my-2 w-full">
            {/* Timeline photo */}
            <Timeline timeline={profile?.timeline} />

            {/* Profile Pic */}
            {profile?.image ? (
              <img
                src={profile?.image}
                className="absolute bottom-0 size-20 rounded-full border border-sky-200 box"
                style={{ boxShadow: "0 0 0 5px #0f172a" }}
              />
            ) : (
              <GiWolfHowl
                className="size-20 absolute bottom-0 rounded-full border border-sky-200 box bg-slate-950"
                style={{ boxShadow: "0 0 0 5px #0f172a" }}
              />
            )}

            {/* Widgets */}
            <div className="absolute bottom-1 right-0 flex place-self-end justify-center items-center px-2 gap-2">
              <button className="bg-black rounded-full text-sm px-2 py-1 border border-sky-200/50 hover:shadow hover:shadow-sky-200/75 focus:outline-none focus:ring-0 focus:border-sky-200 focus:border-2">
                Follow
              </button>
              <button className="bg-black rounded-full text-sm px-3 py-1 border border-sky-200/50 hover:shadow hover:shadow-sky-200/75 focus:outline-none focus:ring-0 focus:border-sky-200 focus:border-2">
                ...
              </button>
            </div>
          </div>
        </div>
        <span>{profile?.bio ? profile.bio : "Howl's biggest supporter!"}</span>
      </div>
      <div className="flex flex-col place-items-center justify-center w-full">
        <div className="flex mt-2 text-3xl font-medium">Posts</div>
        {posts?.length === 0 ? (
          <div className="text-xl">No posts yet</div>
        ) : (
          posts.map((post, index) => {
            return (
              <Post
                key={index}
                postData={post}
                likedByMeDefault={postsLikedByMe.includes(post._id)}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export default page;
