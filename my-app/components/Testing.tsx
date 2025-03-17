"use client";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const Testing = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.7", "end 0.5"],
  });

  return (
    <motion.div
      ref={targetRef}
      style={{
        opacity: scrollYProgress,
        height: "100px",
        background: "red",
        marginTop: "150vh",
      }}
    />
  );
};
export default Testing;
