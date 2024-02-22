import React from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import DeleteBtn from "./DeleteBtn";
import { useSession } from "next-auth/react";
import { generateUniqueGradientColor } from "@/utils/ColorGen";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

const Cards = ({ data }) => {
  const { data: session } = useSession();
  const uniqueColor = generateUniqueGradientColor(data._id);
  return (
    <div className="w-[300px] h-fit flex flex-col p-3 hover:bg-zinc-200/50 transition-all duration-500 hover:shadow-md">
      <Link href={data.url} target="_blank">
        <div
          Style={`background-color:${uniqueColor}`}
          className="w-[280px] h-[200px] flex flex-col justify-center items-center gap-2 opacity-80"
        >
          <p className="text-white font-extrabold text-4xl bg-black/50 p-4 rounded">
            SPARKS
          </p>
          <p className="text-white/50 animate-pulse">INNOVATE</p>
        </div>
      </Link>
      <div className="mt-3">
        <div className="flex justify-between">
          <p className="font-bold">{data.title}</p>
          <div className="hidden items-center gap-2">
            <p>3</p>
            <FaHeart className="text-red-300 hover:text-red-400" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start text-sm font-semibold text-zinc-500 gap-2">
            <p>{data.owner}</p>
            <p>
              {data.dept} {data.sem}
            </p>
          </div>
          <div>
            <HoverCard>
              <HoverCardTrigger>
                <Info className="h-4 w-4" />
              </HoverCardTrigger>
              <HoverCardContent>{data.desc}</HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
      {session?.user?.email === data.email ? (
        <div className="flex justify-end gap-3 items-center">
          <Link href={`/edit-project/${data._id}`}>
            <Button className="h-5 bg-green-400 hover:bg-green-500">
              Edit
            </Button>
          </Link>
          <DeleteBtn id={data._id} />
        </div>
      ) : null}
    </div>
  );
};

export default Cards;
