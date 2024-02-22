import Project from "@/models/Project";
import { connection } from "@/utils/db";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  const { id } = params;
  const {
    newTitle: title,
    newDesc: desc,
    newOwner: owner,
    newDept: dept,
    newSem: sem,
    newUrl: url,
    newSrcCode: srcCode,
  } = await req.json();
  await connection();
  await Project.findByIdAndUpdate(id, {
    title,
    desc,
    owner,
    dept,
    sem,
    url,
    srcCode,
  });
  return NextResponse.json({ message: "Project Updated" }, { status: 200 });
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    await connection();
    await Project.findByIdAndDelete(id);
    const updatedProjects = await Project.find();
    return new NextResponse(JSON.stringify(updatedProjects), { status: 200 });
  } catch (error) {
    return new NextResponse("Error deleting project: ", error, { status: 500 });
  }
};

export const GET = async (req, { params }) => {
  const { id } = params;
  await connection();
  const project = await Project.findOne({ _id: id });
  return new NextResponse(JSON.stringify(project), { status: 200 });
};
