"use client";
import { useState, useEffect } from "react";
import PostData from "@/types/post";
import axios from "axios";

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
    <div className="mt-40">
      page {params.username}
      {params.id}
    </div>
  );
}

export default page;
