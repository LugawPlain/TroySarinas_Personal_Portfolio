"use client";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const MarqueeGroup1 = () => {
  return (
    <div className="relative max-w-screen max-h-16 min-h-16 flex-center">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100vw" }}
        transition={{ delay: 1.75, duration: 1, ease: "easeIn" }}
        className="absolute top-[-1] w-screen h-20 bg-nude z-10 "
      ></motion.div>
      <Marquee className="relative flex-center top-0 bg-card/80 h-16 text-card-foreground py-4 ">
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/html5">
          <Image
            className="transition-transform group-hover/html5:scale-150"
            src="/Icons/HTML5.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">HTML5</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/css">
          <Image
            className="transition-transform group-hover/css:scale-150"
            src="/Icons/CSS3.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">CSS</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/javascript">
          <Image
            className="transition-transform group-hover/javascript:scale-150"
            src="/Icons/javaScript.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">JavaScript</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/typescript">
          <Image
            className="transition-transform group-hover/typescript:scale-150"
            src="/Icons/typeScript.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">TypeScript</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/react">
          <Image
            className="animate-[spin_4s_linear_infinite] transition-transform group-hover/react:scale-150"
            src="/Icons/react.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">React</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/nodejs">
          <Image
            className="transition-transform group-hover/nodejs:scale-150"
            src="/Icons/nodejs.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">NodeJS</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/next">
          <Image
            className="transition-transform group-hover/next:scale-150"
            src="/Icons/next.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Next</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/python">
          <Image
            className="transition-transform group-hover/python:scale-150"
            src="/Icons/python.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Python</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/go">
          <Image
            className="transition-transform group-hover/go:scale-150"
            src="/Icons/go-svgrepo-com.svg"
            alt="s"
            width={28}
            height={28}
          ></Image>
          <h1 className="cursor-default">Go</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/rust">
          <Image
            className="transition-transform group-hover/rust:scale-150"
            src="/Icons/rust-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Rust</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/svelte">
          <Image
            className="transition-transform group-hover/svelte:scale-150"
            src="/Icons/svelte-icon-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Svelte</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/jest">
          <Image
            className="transition-transform group-hover/jest:scale-150"
            src="/Icons/jest-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Jest</h1>
        </div>
        <div className="flex-center gap-1 md:gap-2 px-2 py-4 group/docker">
          <Image
            className="transition-transform group-hover/docker:scale-150"
            src="/Icons/docker-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Docker</h1>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeGroup1;
