import { connection } from "@/utils/db";
import { NextResponse } from "next/server";
import Project from "@/models/Project";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route.js";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  try {
    const { title, desc, owner, dept, sem, url, srcCode } = await req.json();

    await connection();
    await Project.create({
      email,
      title,
      desc,
      owner,
      dept,
      sem,
      url,
      srcCode,
    });

    return NextResponse.json({ message: "Project added." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while submission." },
      { status: 500 }
    );
  }
}

export const GET = async (req) => {
  try {
    await connection();
    const projects = await Project.find({});

    return new NextResponse(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    return new NextResponse("Error fetching projects: " + error, {
      status: 500,
    });
  }
};
