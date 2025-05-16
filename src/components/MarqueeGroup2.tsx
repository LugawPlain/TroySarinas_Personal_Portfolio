"use client";

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MarqueeGroup2 = () => {
  return (
    <div className="relative max-w-screen max-h-16 z-10 min-h-16 flex-center">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{ delay: 1.75, duration: 1, ease: "easeIn" }}
        className="absolute top-[-1] w-screen h-20 bg-primary/80 text-primary-foreground z-20"
      ></motion.div>
      <Marquee className="flex-center " reverse={true}>
        <div className="flex-center gap1 md:gap-2 group/figma px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/figma:scale-150"
            src="/Icons/figma-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Figma</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/framer px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/framer:scale-150"
            src="/Icons/framer-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Framer</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/tailwind px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/tailwind:scale-150"
            src="/Icons/tailwindcss.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Tailwind</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/threejs px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/threejs:scale-150"
            src="/Icons/three-js-icon.svg"
            alt="s"
            width={30}
            height={30}
          ></Image>
          <h1 className="cursor-default">Three.js</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/ruby px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/ruby:scale-150"
            src="/Icons/ruby-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Ruby</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/github px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/github:scale-150"
            src="/Icons/github-142-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">GitHub</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/git px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/git:scale-150"
            src="/Icons/git-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Git</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/mongodb px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/mongodb:scale-150"
            src="/Icons/mongodb.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">MongoDB</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/mysql px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/mysql:scale-150"
            src="/Icons/mysql.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">MySQL</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/postgresql px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/postgresql:scale-150"
            src="/Icons/postgresql-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">PostgreSQL</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/prisma px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/prisma:scale-150"
            src="/Icons/light-prisma-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Prisma</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/firebase px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/firebase:scale-150"
            src="/Icons/firebase-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Firebase</h1>
        </div>
        <div className="flex-center gap1 md:gap-2 group/cloudflare px-2 py-4">
          <Image
            className="transition-transform duration-500 group-hover/cloudflare:scale-150"
            src="/Icons/cloudflare-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Cloudflare</h1>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeGroup2;
