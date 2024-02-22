import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-16 mt-3 flex justify-center items-center">
      <p className="text-foreground/30">
        Sparks &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
