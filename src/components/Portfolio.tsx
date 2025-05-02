"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import PortfolioItemCard from "@/components/PortfolioItemCard";
import { portfolioItems } from "@/data/portfolioData";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalItemsCount = portfolioItems.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const isFullyInView = useInView(containerRef, { amount: 0.5 });

  const handleItemInView = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDotClick = (index: number) => {
    if (scrollRef.current) {
      const scrollPosition = index * scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-4 px-8 py-2">
      <h2>Projects ✨</h2>
      <motion.div
        className="relative w-full min-h-4/5"
        ref={containerRef}
        initial={{ opacity: 0, transform: "translateX(75px)" }}
        animate={{
          opacity: isFullyInView ? 1 : 0,
          transform: isFullyInView ? "translateX(0px)" : "translateX(75px)",
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div
          ref={scrollRef}
          className="flex flex-row gap-16 overflow-x-scroll snap-x snap-mandatory"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
          }}
        >
          {portfolioItems.map((item, index) => (
            <PortfolioItemCard
              key={index}
              item={item}
              index={index}
              setCurrentIndex={handleItemInView}
              isCurrent={currentIndex === index}
            />
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalItemsCount }).map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-accent" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <div className="w-full flex mt-4">
          <Button className="shadow-none text-foreground underline text-md font-serif mx-auto hover:scale-110 active:scale-110 transition-all duration-300">
            See more ↗
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
