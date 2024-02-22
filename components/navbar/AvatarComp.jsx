"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSession } from "next-auth/react";

const AvatarComp = () => {
  const { data: session } = useSession();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Avatar>
            {session && <AvatarImage src={session?.user?.image} />}
            {session && (
              <AvatarFallback>{session?.user?.name.charAt(0)}</AvatarFallback>
            )}
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          <p>{session?.user?.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AvatarComp;
