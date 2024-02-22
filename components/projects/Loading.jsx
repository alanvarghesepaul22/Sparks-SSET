import Lottie from "lottie-react";
import React from "react";
import animationData from "@/public/loading.json";

function Loading() {
  return (
    <div className="h-96 flex flex-col gap-3 justify-center items-center">
      <Lottie animationData={animationData} className="w-[10rem]" />
      <p className="text-2xl font-bold text-neutral-500 animate-pulse">
        Loading...
      </p>
    </div>
  );
}

export default Loading;
