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
      <div className="flex w-full py-2 px-6 text-sm items-center bg-transparent justify justify-between border-b-2 border-kkbone">
        <span className="p-0.5 rounded-lg bg-kkrudybrown ">
          <Avatar className="w-[40px] h-[40px] rounded-md">
            <AvatarImage src="/Icons/Troy_Sarinas_Pfp.jpg" />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
        </span>

        <span className="">
          <Button variant="outline" className="bg-kkdarkburgundy text-kkhair">
            Contact Me
          </Button>
        </span>
      </div>
    </>
  );
};
export default HeaderNav;
