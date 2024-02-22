import { connection } from "@/utils/db";
import { NextResponse } from "next/server";
import Project from "@/models/Project";

export async function POST(req) {
  try {
    const ProjectData = await req.json();
    await connection();

    await Project.insertMany(ProjectData);

    return NextResponse.json({ message: "Project added." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while submission." },
      { status: 500 }
    );
  }
}
