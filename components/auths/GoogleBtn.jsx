import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";

const GoogleBtn = () => {
  return (
    <Button className="w-[100px]" size="sm" onClick={() => signIn("google")}>
      Login
    </Button>
  );
};

export default GoogleBtn;
