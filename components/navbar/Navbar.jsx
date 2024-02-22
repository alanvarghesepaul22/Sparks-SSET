"use client";
import React from "react";
import Link from "next/link";
import { HamIcon } from "./HamIcon";
import GoogleBtn from "../auths/GoogleBtn";
import { useSession } from "next-auth/react";
import AvatarComp from "./AvatarComp";
import LogoutBtn from "./LogoutBtn";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <nav
      className={`flex justify-between items-center w-full py-4 px-10 ${
        pathname === "/" ? "bg-sky-100" : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex justify-center items-center gap-2">
        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-blue-500">
          Sparks
        </h1>
      </Link>

      <div className="flex gap-8 items-center">
        <div className="ml-4 mr-1 flex lg:hidden gap-5">
          <HamIcon />
        </div>
        {session ? (
          <div className="hidden lg:flex gap-3">
            <div className="flex gap-5 items-center font-semibold text-zinc-600">
              <Link href={"/"}>Home</Link>
              <Link href={"/projects"}>My Projects</Link>
              <LogoutBtn />
              <AvatarComp />
            </div>
          </div>
        ) : (
          <>
            <div className="hidden lg:flex gap-3">
              <GoogleBtn />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
