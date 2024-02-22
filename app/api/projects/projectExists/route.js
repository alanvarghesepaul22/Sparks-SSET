import { connection } from "@/utils/db";
import { NextResponse } from "next/server";
import Project from "@/models/Project";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route.js";


export async function POST(req) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  try {
    await connection();
    const { title, owner, url } = await req.json();
    const project = await Project.findOne({ email, title, owner, url }).select(
      "_id"
    );
    return NextResponse.json({ project });
  } catch (error) {
    console.log(error);
  }
}
