import React from "react";
import ShinyText from "../reactbits/textanimations/ShinyText/ShinyText";
import ShinyText2 from "../reactbits/textanimations/ShinyText/ShinyText2";
const HeroSection = () => {
  return (
    <div className="">
      <h2 className="mt-12 motion-translate-x-in-[-100%]">
        Hi, I'm Troy Sarinas
      </h2>
      <h1 className="text-nowrap text-6xl my-4   ">
        <div className="w-fit motion-translate-x-in-[150%] motion-delay-[0.75s]/translate motion-scale-in-[1.1] motion-delay-[1.5s]/scale motion-duration-[0.25s]/scale ">
          <ShinyText text="Full-Stack" speed={5}></ShinyText>
        </div>
        <div className="w-fit motion-translate-x-in-[-150%] motion-delay-[1s]/translate motion-scale-in-[1.1] motion-delay-[1.75s]/scale motion-duration-[0.25s]/scale ">
          <ShinyText2 text="Developer" speed={5}></ShinyText2>
        </div>
      </h1>
      <p className="my-12 text-lg tracking-wide motion-translate-x-in-[150%] motion-delay-[1.75s]/translate motion-scale-in-[1.1] motion-delay-[2.5s]/scale motion-duration-[0.25s]/scale">
        "Bringing visions to life with intuitive, high-performance through
        <span className="text-accent"> innovative </span> design and
        <span className="text-accent"> creative </span> solutions that captivate
        and engage users."
      </p>
      <p className="font-semibold motion-preset-typewriter motion-duration-200 motion-delay-1000 motion-ease-out-back "></p>
    </div>
  );
};

export default HeroSection;
