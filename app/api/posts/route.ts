import { NextResponse, NextRequest } from "next/server";
import Post from "../../models/Post";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: NextRequest, res: NextResponse) {
  const posts = await Post.find().sort({ createdAt: -1 }).exec();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authOptions);
  const data = await req.json();
  const text = data.text;
  const newPost = await Post.create({
    author: session?.user.id,
    text: text,
  });

  return NextResponse.json(newPost);
}
