import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSession } from "next-auth/react";
import { GiHamburgerMenu } from "react-icons/gi";
import GoogleBtn from "../auths/GoogleBtn";
import LogoutBtn from "./LogoutBtn";
import Link from "next/link";

export function HamIcon() {
  const { data: session } = useSession();
  return (
    <Sheet>
      <SheetTrigger>
        <GiHamburgerMenu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="text-center">Menu</SheetTitle>
        </SheetHeader>
        {session ? (
          <div className="mt-4">
            <ul className="list-none mx-0 text-base py-1">
              <div className="text-center py-2">
                <Link href={"/"}>
                  <Button className="w-2/4">Home</Button>
                </Link>
              </div>
              <div className="text-center py-2">
                <Link href={"/projects"}>
                  <Button className="w-2/4">My Projects</Button>
                </Link>
              </div>
              <div className="text-center py-2">
                <p className="font-semibold">{session?.user?.name}</p>
              </div>
              <div className="text-center py-2">
                <LogoutBtn />
              </div>
            </ul>
          </div>
        ) : (
          <div className="mt-4">
            <ul className="list-none mx-0 text-base py-1">
              <div className="text-center py-2">
                <GoogleBtn />
              </div>
            </ul>
          </div>
        )}

        <SheetFooter>
          <div className="w-full mt-7 text-foreground/50">
            <p className="text-center">
              Sparks &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
