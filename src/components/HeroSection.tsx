"use client";
import React from "react";
import ShinyText from "@/../reactbits/textanimations/ShinyText/ShinyText";
import ShinyText2 from "@/../reactbits/textanimations/ShinyText/ShinyText2";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="overflow-hidden px-8 py-8 ">
      <motion.h3
        initial={{ x: "-100vw", scale: 1.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          x: { delay: 0, duration: 1 },
          scale: { delay: 1, duration: 0.25 },
        }}
      >
        Hi, I&apos;m Troy Sarinas
      </motion.h3>
      <h1 className="text-nowrap text-6xl my-4 ">
        <motion.div
          initial={{ x: "150vw", scale: 1.1 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            x: { delay: 0.25, duration: 1 },
            scale: { delay: 1.25, duration: 0.25 },
          }}
        >
          <ShinyText text="Software" speed={5}></ShinyText>
        </motion.div>
        <motion.div
          initial={{ x: "-150vw", scale: 1.1 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            x: { delay: 0.5, duration: 1 },
            scale: { delay: 1.5, duration: 0.25 },
          }}
        >
          <ShinyText2 text="Engineer" speed={5}></ShinyText2>
        </motion.div>
      </h1>
      <motion.p
        className="my-12 text-lg tracking-wide"
        initial={{ x: "150vw", scale: 1.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          x: { delay: 1, duration: 1.5 },
          scale: { delay: 2.5, duration: 0.25 },
        }}
      >
        &quot;Bringing visions to life with intuitive, high-performance through
        <span className="text-accent"> innovative </span> design and
        <span className="text-accent"> creative </span> solutions that captivate
        and engage users.&quot;
      </motion.p>
      <motion.p
        className="font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.2, ease: "backOut" }}
      ></motion.p>
      <Button variant="outline">Contact Me</Button>
    </div>
  );
};

export default HeroSection;
