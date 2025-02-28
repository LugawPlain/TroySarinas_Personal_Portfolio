import Link from "next/link";
import React from "react";
import HomeIcon from "../Assets/Icons/HomeIcon";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { GiMapleLeaf } from "react-icons/gi";
const MenuBar = () => {
  return (
    <div className="fixed w-full  bottom-0 py-2 bg-white shadow-[0_-1px_10px_rgba(0,0,0,0.25)] rounded-t-3xl">
      <ul className="flex justify-evenly">
        <li>
          <Link href="" className="flex-center flex-col">
            <HomeIcon></HomeIcon>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="" className="flex-center flex-col">
            <GiMapleLeaf size={24} />
            <p>Maple Leaf</p>
          </Link>
        </li>
        <li>
          <Link href="" className="flex-center flex-col">
            <GoProject size={24} />
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link href="" className="flex-center flex-col">
            <PiPaperPlaneTilt size={24} />
            <p>Home</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
