"use client";
import { useState, useEffect } from "react";
import PostData from "@/types/post";
import axios from "axios";
import Post from "@/app/components/Post";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import CommentSection from "@/app/components/CommentSection";
import PostForm from "@/app/components/PostForm";
import useUserInfo from "@/hooks/useUserInfo";
import Widgets from "@/app/components/Widgets";
import BackButton from "@/app/components/BackButton";

function page({ params }: { params: { username: string; id: string } }) {
  const { userInfo, userInfoStatus } = useUserInfo();
  const [post, setPost] = useState<PostData>();
  const [replies, setReplies] = useState<PostData[]>([]);
  const [likedByMe, setLikedByMe] = useState(false);
  const [repliesLikedByMe, setRepliesLikedByMe] = useState<string[]>([]);
  const [commentCount, setCommentCount] = useState(0);

  const fetchPost = async () => {
    const posts = await axios
      .get(`/api/posts?id=${params.id}`)
      .then((res) => {
        setPost(res.data.post);
        setLikedByMe(res.data.likedByMe);
        return res.data.post;
      })
      .then((post) => fetchComments(post._id));
  };

  const fetchComments = async (parentId: string) => {
    const children = await axios
      .get(`/api/posts?parent=${parentId}`)
      .then((res) => {
        setReplies(res.data.posts);
        setRepliesLikedByMe(res.data.idsLikedByMe);
        setCommentCount(res.data.posts.length);
      });
  };

  useEffect(() => {
    fetchPost();
  }, [params]);

  if (post === undefined) return <div>Post not found :/</div>;
  return (
    <section className="grid grid-cols-1 justify-center place-items-center mt-20">
      {/* Post */}
      <BackButton />
      <div>
        {post && (
          <Post noWidgets postData={post} likedByMeDefault={likedByMe} />
        )}
      </div>

      {/* post stats */}
      <Widgets
        offCard
        postData={post}
        likedByMeDefault={likedByMe}
        commentCount={commentCount}
      />

      {/* reply option */}
      <PostForm
        userInfo={userInfo}
        onPost={() => {
          fetchComments(post._id);
        }}
        parent={post?._id}
        defaultText="Reply"
      />

      {/* Comment Section */}
      <CommentSection replies={replies} idsLikedByMe={repliesLikedByMe} />
    </section>
  );
}

export default page;
