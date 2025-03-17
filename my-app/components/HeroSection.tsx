import React from "react";
import ShinyText from "../reactbits/textanimations/ShinyText/ShinyText";
import ShinyText2 from "../reactbits/textanimations/ShinyText/ShinyText2";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <div className="overflow-hidden ">
      <h2 className="mt-12 motion-translate-x-in-[-100vw] motion-scale-in-[1.05] motion-delay-[0.75s]/scale motion-duration-[0.25s]/scale ">
        Hi, I'm Troy Sarinas
      </h2>
      <h1 className="text-nowrap text-6xl my-4 ">
        <div
          className="motion-translate-x-in-[150vw] motion-delay-[0.75s]/translate motion-duration-[1.5s]/translate 
                     motion-scale-in-[1.05] motion-delay-[2.25s]/scale motion-duration-[0.25s]/scale "
        >
          <ShinyText text="Full-Stack" speed={5}></ShinyText>
        </div>
        <div
          className="motion-translate-x-in-[-150vw] motion-delay-[1.5s]/translate motion-duration-[1.5s]/translate 
                      motion-scale-in-[1.05] motion-delay-[3s]/scale motion-duration-[0.25s]/scale "
        >
          <ShinyText2 text="Developer" speed={5}></ShinyText2>
        </div>
      </h1>
      <p
        className="my-12 text-lg tracking-wide motion-translate-x-in-[150vw] motion-delay-[2.25s]/translate motion-duration-[1.5s]/translate  
                    motion-scale-in-[1.05] motion-delay-[3.75s]/scale motion-duration-[0.25s]/scale"
      >
        "Bringing visions to life with intuitive, high-performance through
        <span className="text-accent"> innovative </span> design and
        <span className="text-accent"> creative </span> solutions that captivate
        and engage users."
      </p>
      <p className="font-semibold motion-preset-typewriter motion-duration-200 motion-delay-1000 motion-ease-out-back "></p>
      <Button variant="outline">Contact Me</Button>
    </div>
  );
};

export default HeroSection;
