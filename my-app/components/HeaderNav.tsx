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
          <ProfilePic />
        </span>

        <span className="ml-auto">{/* <ContactMe /> */}</span>
      </div>
    </>
  );
};
export default HeaderNav;
