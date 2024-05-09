import { initMongoose } from "../auth/[...nextauth]/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json("Hello");
}
//   console.log("/");
//   console.log("/");
//   console.log("/");
//   console.log("/");
//   console.log("Request");
//   console.log(req);
//   try {
//     await initMongoose();
//     const id = req.query.id;
//     return NextResponse.json({ id });
//   } catch (error) {
//     console.error(error);
//     return new NextResponse(500, { error: "An error occurred" });
//   }
// }
