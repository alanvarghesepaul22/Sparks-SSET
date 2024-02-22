import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export async function GetServerSession() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
}

export async function NoSession() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
}

export function GetClientSession() {
  const { data: session } = useSession();
  return session;
}
