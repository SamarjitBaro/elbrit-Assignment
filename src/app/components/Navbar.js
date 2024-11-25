import React from "react";
import Image from "next/image";
export const Navbar = () => {
  return (
    <div>
      <nav className="h-[60px] w-[100%] flex items-center px-[14vw]">
        <Image
          src="/image.png"
          alt="Logo"
          width={313.26}
          height={60}
          className="h-[50px] w-auto"
        />
      </nav>
    </div>
  );
};
