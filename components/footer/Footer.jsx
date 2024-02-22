import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-16 mt-3 flex flex-col justify-center items-center">
      <p className="text-foreground/50">
        Sparks &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
      <p className="text-xs text-foreground/30">
        Made by Team CSE&apos;20-24
      </p>
    </div>
  );
};

export default Footer;
