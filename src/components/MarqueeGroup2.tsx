"use client";

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MarqueeGroup2 = () => {
  return (
    <div className="relative  max-w-screen ">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{ delay: 1.75, duration: 1, ease: "easeIn" }}
        className="absolute top-[-1] w-screen h-20 bg-nude z-10"
      ></motion.div>
      <Marquee className="py-4" reverse={true}>
        <div className="flex-center gap-1">
          <Image
            className="transition-transform hover:scale-110"
            src="/Icons/HTML5.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1>HTML5</h1>
        </div>
        <div className="flex-center gap-1">
          <Image
            className="transition-transform hover:scale-110"
            src="/Icons/CSS3.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1>CSS</h1>
        </div>
        <div className="flex-center gap-1">
          <Image
            className="transition-transform hover:scale-110"
            src="/Icons/javaScript.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1>JavaScript</h1>
        </div>
        <div className="flex-center gap-1 ">
          <Image
            className="animate-[spin_4s_linear_infinite] transition-transform hover:scale-110"
            src="/Icons/react.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1>React</h1>
        </div>
        <div className="flex-center gap-1 ">
          <Image
            className="transition-transform hover:scale-110"
            src="/Icons/next.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1>Next</h1>
        </div>
        <div className="flex-center gap-1 ">
          <Image
            className="transition-transform hover:scale-110"
            src="/Icons/tailwindcss.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1>Tailwind</h1>
        </div>
        <div className="flex-center gap-1 ">
          <Image
            className="transition-transform hover:scale-110"
            src="/Icons/mysql.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1>MySQL</h1>
        </div>

        <div className="flex-center gap-1 ">
          <Image
            className="transition-transform hover:scale-110"
            src="/Icons/mongodb.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1>MongoDB</h1>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeGroup2;
