import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { initMongoose } from "../auth/[...nextauth]/lib/mongoose";
import User from "@/app/models/User";
import Post from "../../models/Post";
import Like from "@/app/models/Like";

export async function GET(req: NextRequest, res: NextResponse) {
  await initMongoose();
  User.init();
  const session = await getServerSession(authOptions);
  const id = req.nextUrl.searchParams.get("id");
  const parent = req.nextUrl.searchParams.get("parent");

  if (id) {
    const post = await Post.findById(id).populate("author");
    const liked = await Like.find({
      author: session?.user.id,
      post: post._id,
    }).exec();
    const likedByMe = liked.length === 0 ? false : true;
    return NextResponse.json({ post, likedByMe });
  }

  if (parent) {
    const posts = await Post.find({ parent: parent })
      .populate("author")
      .sort({ createdAt: -1 })
      .limit(20)
      .exec();
    const liked = await Like.find({
      author: session?.user.id,
      post: posts.map((p) => p._id),
    }).exec();
    const likedByMe = liked.length === 0 ? false : true;
    return NextResponse.json({ posts, likedByMe });
  }

  const posts = await Post.find({ parent: null })
    .populate("author")
    .sort({ createdAt: -1 })
    .limit(20)
    .exec();

  const postsLikedByMe = await Like.find({
    author: session?.user.id,
    post: posts.map((p) => p._id),
  }).exec();
  const idsLikedByMe = postsLikedByMe.map((like) => like.post);
  return NextResponse.json({ posts, idsLikedByMe });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authOptions);
  const data = await req.json();
  const newPost = await Post.create({
    author: session?.user.id,
    text: data.text,
    parent: data.parent,
  });

  return NextResponse.json(newPost);
}
