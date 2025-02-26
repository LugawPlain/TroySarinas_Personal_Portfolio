"use client";
import { useEffect } from "react";
import { clashDisplay } from "../public/fonts/Clash_Display";

import React from "react";
import ProfilePic from "./ProfilePic";
import ContactMe from "./ContactMe";
const HeaderNav = () => {
  useEffect(() => {
    console.log("Font Object:", clashDisplay);
    console.log("Hello from the browser!");
    console.log("Font loaded:", document.fonts.check("16px Clash Display"));
  }, []);

  return (
    <div className="flex w-full items-center px-8 py-2 border-b-2 border-red-500">
      <ProfilePic />
      <div className="flex gap-4 text-red-500 mx-auto ">
        <p>Home</p>
        <p>Timeline</p>
        <p>Experience</p>
        <p>Education</p>
      </div>
      <div>
        <ContactMe />
      </div>
    </div>
  );
};

export default HeaderNav;
