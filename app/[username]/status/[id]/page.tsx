"use client";
import { useState, useEffect } from "react";
import PostData from "@/types/post";
import axios from "axios";
import Post from "@/app/components/Post";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

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
    <section className="flex justify-center mt-20 w-full">
      <div className="flex flex-col justify-start items-start">
        <Link
          href="/"
          className="flex justify-start items-center gap-2 text-xl"
        >
          <FaArrowLeftLong />
          <span>Back</span>
        </Link>
        <div className="w-full">{post && <Post postData={post} />}</div>
      </div>
    </section>
  );
}

export default page;
