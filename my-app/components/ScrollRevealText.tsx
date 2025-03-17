"use client";
import React, { useEffect, useState, useRef } from "react";
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
    offset: ["start 0.72", "start 0.5"],
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
          I am a Computer Engineer with a passion for technology and design.
          Collaborating with companies worldwide to create visually stunning,
          highly functional, and user-friendly digital experiences that deliver
          measurable results and support business growth.
        </motion.span>
      </p>
    </div>
  );
};

const ScrollRevealTextFallback = () => (
  <div className="scroll-reveal-text text-center text-lg font-medium tracking-widest py-8 px-2 rounded-lg">
    <h2 className="text-3xl">
      <span className="inline text-foreground/10 bg-clip-text">About me</span>
      <p className="inline">✨</p>
    </h2>
    <p className="scroll-reveal-text mt-4">
      <span className="text-foreground/10 bg-clip-text">
        I am a Computer Engineer with a passion for technology and design.
        Collaborating with companies worldwide to create visually stunning,
        highly functional, and user-friendly digital experiences that deliver
        measurable results and support business growth.
      </span>
    </p>
  </div>
);

const ScrollRevealText = () => {
  const [supportsAnimationTimeline, setSupportsAnimationTimeline] =
    useState(false);

  useEffect(() => {
    const isSupported = CSS.supports("animation-timeline", "view()");
    setSupportsAnimationTimeline(isSupported);
  }, []);

  useEffect(() => {
    console.log("Updated state:", supportsAnimationTimeline);
  }, [supportsAnimationTimeline]);

  return supportsAnimationTimeline ? (
    <ScrollRevealTextMotion />
  ) : (
    <ScrollRevealTextFallback />
  );
};

export default ScrollRevealText;
