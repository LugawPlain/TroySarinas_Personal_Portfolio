import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="">
        <h2 className="mt-12">Hi, I'm Troy Sarinas</h2>
        <h1 className="text-nowrap text-6xl my-4   ">
          <ShinyText text="Full-Stack" speed={5}></ShinyText>
          <br />
          <ShinyText text="Developer" speed={5}></ShinyText>
        </h1>
        <p className="mt-12 text-lg tracking-wide">
          "Bringing visions to life with intuitive, high-performance through
          <span className="text-accent-foreground"> innovative </span> design
          and
          <span className="text-accent-foreground"> creative </span> solutions
          that captivate and engage users."
        </p>
        <p className="font-semibold motion-preset-typewriter motion-duration-200 motion-delay-1000 motion-ease-out-back "></p>
      </div>
    </div>
  );
};

export default HeroSection;
