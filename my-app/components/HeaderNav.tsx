"use client";
import React from "react";
import ProfilePic from "./ProfilePic";
import ContactMe from "./ContactMe";
import HoverUpAnimationText from "./HoverUpAnimationText";
import StarBorder from "../reactbits/animations/StarBorder/StarBorder";
import Image from "next/image";
import ButtonStyled from "./ButtonStyled";
import Dock from "../reactbits/components/Dock/Dock";

const HeaderNav = () => {
  return (
    <>
      <div className="flex w-full bg-card py-2 px-4 text-sm  flex-center  border-2 border-amber-100">
        <span className="mr-auto">
          <Image
            src="/Icons/TS.svg"
            alt="Troy_Sarinas_Logo"
            width={40}
            height={40}
          ></Image>
        </span>
        {/* <div className="flex gap-2 text-foreground">
          <HoverUpAnimationText
            text="About"
            className="text-muted-foreground"
          ></HoverUpAnimationText>
          <HoverUpAnimationText
            className="text-muted-foreground"
            text="Projects"
          ></HoverUpAnimationText>
          <HoverUpAnimationText
            className="text-muted-foreground"
            text="Contacts"
          ></HoverUpAnimationText>
        </div> */}

        <span className="ml-auto">{/* <ContactMe /> */}</span>
      </div>
    </>
  );
};
export default HeaderNav;
