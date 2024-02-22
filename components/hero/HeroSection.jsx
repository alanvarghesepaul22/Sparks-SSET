"use client";
import React from "react";
import { Button } from "../ui/button";
import animationData from "@/public/rocketlottie.json";
import Lottie from "lottie-react";
import Link from "next/link";
import { GetClientSession } from "@/utils/Sessions";
import { signIn } from "next-auth/react";

const HeroSection = () => {
  const session = GetClientSession();
  return (
    <div className="w-full h-[35rem] sm:h-[30rem] md:h-[22rem] bg-sky-100 flex justify-center">
      <div className="md:w-4/5 flex flex-col-reverse md:flex-row justify-between items-center py-10 px-10">
        <div className="flex flex-col gap-3">
          <p className="text-2xl md:text-4xl font-bold">
            Exploring Boundless Talents
          </p>
          <p className="md:text-lg text-zinc-600">
            Projects showcasing platform for students of SSET
          </p>
          <div className="w-1/2 mt-5">
            {session ? (
              <Link href={"/projects"}>
                <Button>Upload your project</Button>
              </Link>
            ) : (
              <Button onClick={() => signIn("google")}>
                Upload your project
              </Button>
            )}
          </div>
        </div>
        <div>
          <Lottie
            animationData={animationData}
            className="w-[17rem] sm:w-[15rem] md:w-[20rem] lg:w-[22rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
