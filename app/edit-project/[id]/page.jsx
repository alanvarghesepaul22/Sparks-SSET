import EditProjectsForm from "@/components/forms/EditProjectsForm";
import { NoSession } from "@/utils/Sessions";
import React from "react";

const getPaperById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
      catch: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Paper");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Page = async ({ params }) => {
  await NoSession();
  const { id } = params;
  const projectData = await getPaperById(id);
  return (
    <div>
      <div className="w-full flex justify-center mt-8">
        <div className="w-4/5 flex items-center justify-between">
          <p className="text-xl md:text-2xl font-semibold">
            Edit project details
          </p>
        </div>
      </div>
      <EditProjectsForm data={projectData} />
    </div>
  );
};

export default Page;
