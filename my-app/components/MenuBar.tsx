import Link from "next/link";
import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { GiMapleLeaf } from "react-icons/gi";

interface MenuBarProps {
  className?: string;
}
const MenuBar: React.FC<MenuBarProps> = (className) => {
  return (
    <div
      className={` ${className} fixed w-full  bottom-0 bg-accent/80 py-2  shadow-[0_-1px_10px_rgba(0,0,0,0.25)] rounded-t-3xl backdrop-blur-xs `}
    >
      <ul className="flex justify-evenly text-accent-foreground">
        <li>
          <Link href="" className="flex-center flex-col text-foreground">
            <RiHome3Line size={24} />

            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="" className="flex-center flex-col">
            <GiMapleLeaf className="rotate-20" size={24} />
            <p>About Me </p>
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
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
