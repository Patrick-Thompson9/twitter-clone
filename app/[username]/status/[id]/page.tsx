"use client";
import { useState, useEffect } from "react";
import PostData from "@/types/post";
import axios from "axios";
import Post from "@/app/components/Post";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import Comment from "@/app/components/Comment";
import CommentSection from "@/app/components/CommentSection";

function page({ params }: { params: { username: string; id: string } }) {
  const [post, setPost] = useState<PostData>();

  const fetchPost = async () => {
    const posts = await axios.get(`/api/posts?id=${params.id}`).then((res) => {
      setPost(res.data);
    });

    return posts;
  };

  useEffect(() => {
    fetchPost();
  }, [params]);

  console.log("Post", post);
  return (
    <section className="grid grid-cols-1 justify-center place-items-center mt-20">
      {/* Post */}
      <Link
        href="/"
        className="flex justify-start items-center gap-2 text-xl sticky top-20 z-50 bg-slate-900 border-sky-200/25 border p-2 rounded-md place-self-start ml-2 mt-2"
      >
        <FaArrowLeftLong />
        <span>Back</span>
      </Link>
      <div>{post && <Post postData={post} />}</div>

      {/* Comment Section */}
      {post?.author && <CommentSection User={post.author} />}
    </section>
  );
}

export default page;
