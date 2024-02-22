import MyProjectsCardsSection from "@/components/projects/MyProjectsCardsSection";
import { Button } from "@/components/ui/button";
import { NoSession } from "@/utils/Sessions";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

const Page = async () => {
  await NoSession();
  return (
    <div>
      <div className="w-full flex justify-center mt-8">
        <div className="w-4/5 flex flex-col items-center gap-5">
          <div className="w-full flex items-center justify-between">
            <p className="text-xl md:text-2xl font-semibold">My Projects</p>
            <Link href={"/add-project"}>
              <Button size="sm" className="flex gap-3 items-center">
                New Project
                <Plus className="h-4 w-4"/>
              </Button>
            </Link>
          </div>
          <Separator />
        </div>
      </div>
      <div className="flex justify-center py-5 mt-10">
        <MyProjectsCardsSection />
      </div>
    </div>
  );
};

export default Page;
