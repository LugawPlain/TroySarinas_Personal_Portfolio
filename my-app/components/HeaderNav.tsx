"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";
import ProfilePic from "./ProfilePic";
import ContactMe from "./ContactMe";
import HoverUpAnimationText from "./HoverUpAnimationText";
import StarBorder from "../reactbits/animations/StarBorder/StarBorder";
import Image from "next/image";
import ButtonStyled from "./ButtonStyled";
import Dock from "../reactbits/components/Dock/Dock";
import { Button } from "@/components/ui/button";

const HeaderNav = () => {
  return (
    <>
      <div className="flex w-full py-2 px-6 text-sm items-center bg-transparent justify-between border-b-2 border-kkbone">
        <span className="p-0.5 rounded-lg bg-kkrudybrown ">
          <Avatar className="w-[40px] h-[40px] rounded-md">
            <AvatarImage src="/Icons/Troy_Sarinas_Pfp.jpg" />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
        </span>

        <div className="flex-center gap-2 rounded-full bg-kkwindy/10 px-4 py-2">
          <span className="relative flex h-[6px] w-[6px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-kkwindy opacity-75"></span>
            <span className="relative inline-flex h-full w-full rounded-full bg-kkanemo"></span>
          </span>
          <p className="text-xs text-text-primary">Available for work</p>
        </div>
      </div>
    </>
  );
};
export default HeaderNav;
