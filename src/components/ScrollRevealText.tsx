"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollRevealTextMotion = () => {
  const headingRef = useRef(null);
  const { scrollYProgress: headingScrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start 0.75", "start 0.7"],
  });
  const headingBackgroundSize = useTransform(
    headingScrollYProgress,
    [0, 1],
    ["0% 100%", "100% 100%"]
  );

  const paragraphRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.72", "start 0.3"],
  });
  const paragraphBackgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 100%", "100% 100%"]
  );

  return (
    <div className="text-center text-lg font-medium tracking-widest py-8 px-2 rounded-lg">
      <h2 className="text-3xl">
        <motion.span
          ref={headingRef}
          style={{
            backgroundSize: headingBackgroundSize,
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "linear-gradient(var(--foreground), var(--foreground))",
          }}
          className="inline text-foreground/10 bg-clip-text"
        >
          About me
        </motion.span>
        <p className="inline">✨</p>
      </h2>
      <p className="">
        <motion.span
          ref={paragraphRef}
          style={{
            backgroundSize: paragraphBackgroundSize,
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "linear-gradient(var(--foreground), var(--foreground))",
          }}
          className="text-foreground/10 bg-clip-text"
        >
          I am a graduate of Computer Engineering with a passion for technology
          and design. Collaborating with companies worldwide to create visually
          stunning, highly functional, and user-friendly digital experiences
          that deliver measurable results and support business growth.
        </motion.span>
      </p>
    </div>
  );
};

const ScrollRevealText = () => {
  return <ScrollRevealTextMotion />;
};

export default ScrollRevealText;
