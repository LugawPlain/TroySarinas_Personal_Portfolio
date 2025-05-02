"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";
import { motion } from "framer-motion";

const HeaderNav = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.75, duration: 2, type: "spring" }}
        className="flex w-full py-2 px-6 text-sm items-center bg-transparent shadow-md justify-between border-b-2 border-border"
      >
        <span className="p-0.5 rounded-lg bg-status  shadow-sm ">
          <Avatar className="w-[40px] h-[40px] rounded-md  ">
            <AvatarImage src="/Icons/Troy_Sarinas_Pfp3.jpg" />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
        </span>

        <div className="flex-center gap-2 rounded-full bg-green-500/10 px-4 py-2 shadow-sm">
          <span className="relative flex h-[6px] w-[6px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/80 opacity-75"></span>
            <span className="relative inline-flex h-full w-full rounded-full bg-green-500"></span>
          </span>
          <p className="text-xs text-text-primary">Available for work</p>
        </div>
      </motion.div>
    </>
  );
};
export default HeaderNav;
