import { NextResponse, NextRequest } from "next/server";
import { initMongoose } from "../auth/[...nextauth]/lib/mongoose";
import User from "../../models/User";
import { getServerSession, unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: NextRequest, res: NextResponse) {
  await initMongoose();
  const id = req.nextUrl.searchParams.get("id");
  const user = await User.findById(id);
  return NextResponse.json(user);
}

export async function PUT(req: NextRequest, res: NextResponse) {
  await initMongoose();
  const session = await getServerSession(authOptions);
  const data = await req.json();
  const username = data.username;
  console.log(username, session?.user.id);
  await User.findByIdAndUpdate(session?.user.id, { username });
  return NextResponse.json("Okie Dokie :)");
}
