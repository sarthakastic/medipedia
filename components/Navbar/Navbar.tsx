import { useRouter } from "next/router";
import React from "react";
import Maps from "../../pages/Maps";
import Mode from "../Navbar/mode/Mode";
import Search from "./search/Search";
export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between px-10 h-16 bg-primary   ">
      <div>
        <img
          src="/logo.png"
          className="w-28 hover:cursor-pointer "
          onClick={() => router.push("/")}
        />
      </div>
      <div className="   ">
        <Search />
      </div>
      <div className=" ">
        <Mode />
      </div>
      <div onClick={() => router.push("/Maps")}>Maps</div>
    </div>
  );
};
