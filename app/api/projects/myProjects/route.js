import { getServerSession } from "next-auth";
import { connection } from "@/utils/db";
import { NextResponse } from "next/server";
import Project from "@/models/Project";
import { authOptions } from "../../auth/[...nextauth]/route.js";
export const GET = async (req) => {
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;

    await connection();

    const projects = await Project.find({ email });

    return new NextResponse(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    return new NextResponse("Error fetching projects: " + error, {
      status: 500,
    });
  }
};
