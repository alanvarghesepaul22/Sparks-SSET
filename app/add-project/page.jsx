import AddProjectsForm from "@/components/forms/AddProjectsForm";
import { NoSession } from "@/utils/Sessions";

const Page = async () => {
  await NoSession();
  return (
    <div>
      <div className="w-full flex justify-center mt-8">
        <div className="w-4/5 flex items-center justify-between">
          <p className="text-xl md:text-2xl font-semibold">Add new project</p>
        </div>
      </div>
      <AddProjectsForm />
    </div>
  );
};

export default Page;
