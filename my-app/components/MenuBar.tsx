"use client";
import Link from "next/link";
import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { GiMapleLeaf } from "react-icons/gi";
import { delay, motion } from "framer-motion";
interface MenuBarProps {
  className?: string;
}
const MenuBar: React.FC<MenuBarProps> = ({ className }) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.75, duration: 2, type: "spring" }}
      className={` ${className} fixed w-screen bg-accent/80  bottom-0  py-2 z-30  shadow-[0_-1px_10px_rgba(0,0,0,0.25)] rounded-t-3xl backdrop-blur `}
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
    </motion.div>
  );
};

export default MenuBar;
