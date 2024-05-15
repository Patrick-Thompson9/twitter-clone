import { NextResponse, NextRequest } from "next/server";
import { initMongoose } from "../auth/[...nextauth]/lib/mongoose";
import Post from "../../models/Post";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest, res: NextResponse) {
  await initMongoose();
  const session = await getServerSession(authOptions);
  const data = await req.json();
  const text = data.text;
  const newPost = await Post.create({
    author: session?.user.id,
    text: text,
  });

  return NextResponse.json(newPost);
}
