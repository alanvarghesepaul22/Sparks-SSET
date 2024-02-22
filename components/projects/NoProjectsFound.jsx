import Lottie from "lottie-react";
import React from "react";
import animationData from "@/public/norecordslottie.json";

const NoProjectsFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div>
        <Lottie
          animationData={animationData}
          className="w-[17rem] sm:w-[15rem] md:w-[20rem] lg:w-[22rem]"
        />
      </div>
      <p className="text-2xl font-bold text-neutral-600">No Data Found</p>
      <p className="font-medium text-neutral-400">Create a new project</p>
    </div>
  );
};

export default NoProjectsFound;
