import { initMongoose } from "../auth/[...nextauth]/lib/mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const id = req.nextUrl.searchParams.get("id");
  return NextResponse.json(id);
}
