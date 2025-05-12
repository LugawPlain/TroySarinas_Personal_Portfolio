"use client";
import React from "react";
import ShinyText from "@/../reactbits/textanimations/ShinyText/ShinyText";
import ShinyText2 from "@/../reactbits/textanimations/ShinyText/ShinyText2";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="overflow-hidden px-8 py-8 max-w-7xl mx-auto sm:px-16 ">
      <motion.h3
        initial={{ x: "-100vw", scale: 1.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          x: {
            delay: 0,
            type: "spring",
            stiffness: 30,
            damping: 4.5,
            mass: 0.5,
          },
          scale: { delay: 2, duration: 1 },
          ease: "easeInOut",
        }}
        className="text-base sm:text-xl relative z-10"
      >
        Hi, I&apos;m Troy Sarinas
        <motion.h3
          initial={{ left: 20, y: 5 }}
          animate={{ left: 0, y: 0 }}
          transition={{
            left: { delay: 2, duration: 1 },
            y: { delay: 2, duration: 0.75 },
            ease: "easeInOut",
          }}
          className="text-base sm:text-xl absolute top-0 -z-10 opacity-10"
        >
          Hi, I&apos;m Troy Sarinas
        </motion.h3>
      </motion.h3>

      <h1 className="text-nowrap text-6xl sm:text-7xl my-4 ">
        <motion.div
          initial={{ x: "100vw", scale: 1.1 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            x: {
              delay: 0.25,
              type: "spring",
              stiffness: 30,
              damping: 4.5,
              mass: 0.5,
            },
            scale: { delay: 2, duration: 0.75 },
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <ShinyText text="Software" speed={5}></ShinyText>
          <motion.h1
            initial={{ left: 20, y: 10 }}
            animate={{ left: 0, y: 0 }}
            transition={{
              left: { delay: 2, duration: 1 },
              y: { delay: 2, duration: 0.75 },
              ease: "easeInOut",
            }}
            className="text-6xl sm:text-7xl absolute top-0 -z-10 opacity-10"
          >
            Software
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", scale: 1.1 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            x: {
              delay: 0.5,
              type: "spring",
              stiffness: 30,
              damping: 4.5,
              mass: 0.5,
            },
            scale: { delay: 2, duration: 0.75 },
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <ShinyText2 text="Engineer" speed={5}></ShinyText2>
          <motion.h1
            initial={{ left: 20, y: 10 }}
            animate={{ left: 0, y: 0 }}
            transition={{
              left: { delay: 2, duration: 1 },
              y: { delay: 2, duration: 0.75 },
              ease: "easeInOut",
            }}
            className="text-6xl sm:text-7xl absolute top-0 -z-10 opacity-10"
          >
            Engineer
          </motion.h1>
        </motion.div>
      </h1>
      <motion.p
        className="my-8 text-md sm:text-lg tracking-wide relative z-10"
        initial={{ x: "120%", scale: 1.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          x: {
            delay: 0.75,
            type: "spring",
            stiffness: 30,
            damping: 4.5,
            mass: 0.5,
          },
          scale: { delay: 2, duration: 0.75 },
          ease: "easeInOut",
        }}
      >
        &quot;Bringing visions to life with intuitive, high-performance through
        <span className="text-accent"> innovative </span> design and
        <span className="text-accent"> creative </span> solutions that captivate
        and engage users.&quot;
        <motion.p
          className="absolute top-0 -z-10 opacity-10"
          initial={{ left: 10, y: 5 }}
          animate={{ left: 0, y: 0 }}
          transition={{
            left: { delay: 2, duration: 1 },
            y: { delay: 2, duration: 0.75 },
            ease: "easeInOut",
          }}
        >
          &quot;Bringing visions to life with intuitive, high-performance
          through
          <span className="text-accent"> innovative </span> design and
          <span className="text-accent"> creative </span> solutions that
          captivate and engage users.&quot;
        </motion.p>
      </motion.p>
      <motion.p
        className="font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.2, ease: "backOut" }}
      ></motion.p>
      {/* <Button variant="outline">Contact Me</Button> */}
    </div>
  );
};

export default HeroSection;
