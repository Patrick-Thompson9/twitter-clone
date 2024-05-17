import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { initMongoose } from "../auth/[...nextauth]/lib/mongoose";
import Like from "../../models/Like";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json("Likes :)");
}

export async function POST(req: NextRequest, res: NextResponse) {
  await initMongoose();
  const session = await getServerSession(authOptions);
  const data = await req.json();
  const postId = data.id;
  const userId = session?.user.id;

  const existingLike = await Like.findOne({ author: userId, post: postId });
  if (existingLike) {
    await existingLike.remove();
    return NextResponse.json(null);
  } else {
    const like = await Like.create({ author: userId, post: postId });
    return NextResponse.json({ like });
  }
}
