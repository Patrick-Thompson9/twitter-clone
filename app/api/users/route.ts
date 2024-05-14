import { NextResponse, NextRequest } from "next/server";
import { initMongoose } from "../auth/[...nextauth]/lib/mongoose";
import User from "../../models/User";

export async function GET(req: NextRequest, res: NextResponse) {
  await initMongoose();
  const id = req.nextUrl.searchParams.get("id");
  const user = await User.findById(id);
  return NextResponse.json(user);
}

export async function PUT(req: NextRequest, res: NextResponse) {
  return NextResponse.json("Okie Dokie :)");
}