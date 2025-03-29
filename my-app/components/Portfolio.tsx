"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
interface PortfolioItem {
  title: string;
  description: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Sample 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde, impedit dolorem possimus eveniet voluptatum.",
    image: "/Background.jpg",
  },
  {
    title: "Sample 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde, impedit dolorem possimus eveniet voluptatum.",
    image: "/Background.jpg",
  },
  {
    title: "Sample 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde, impedit dolorem possimus eveniet voluptatum.",
    image: "/Background.jpg",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalItems = [...portfolioItems, { title: "See More" }].length;

  // Auto scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (scrollRef.current) {
        let nextIndex = currentIndex + 1;

        // Reset to first item when reaching the end
        if (nextIndex >= totalItems) {
          nextIndex = 0;
        }

        // Explicitly calculate scroll position
        const scrollPosition = nextIndex * scrollRef.current.clientWidth;

        scrollRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
        setCurrentIndex(nextIndex);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, totalItems, isPaused]);

  // Update handleScroll to be more precise
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.clientWidth;
      const newIndex = Math.floor(scrollPosition / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

  const ref = useRef<HTMLDivElement>(null);
  const isFullyInView = useInView(ref, { amount: 0.5 });

  return (
    <div className="space-y-4 px-8">
      <h2>Projects ✨</h2>
      <motion.div
        className="relative w-full"
        ref={ref}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        initial={{ opacity: 0, transform: "translateX(75px)" }}
        animate={{
          opacity: isFullyInView ? 1 : 0,
          transform: isFullyInView ? "translateX(0px)" : "translateX(75px)",
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div
          ref={scrollRef}
          className="flex flex-row gap-16  overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
          }}
          onScroll={handleScroll}
        >
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex-none w-full snap-center">
              <div className="flex-col shadow-md space-y-4">
                <div className="relative h-96 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-fill rounded-lg transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="space-y-4 flex-col">
                  <h3 className="text-center">{item.title}</h3>
                  <p className="text-justify">{item.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* See More Card */}
          <div className="flex-none w-full snap-center relative">
            <div className="relative flex-col shadow-md space-y-4 h-96 blur-sm">
              <div className="relative h-full w-full">
                <Image
                  src="/Background.jpg"
                  alt="See More"
                  fill
                  className="object-fill rounded-lg"
                />
              </div>
              <div className="space-y-4 flex-col">
                <h3 className="text-center">hello</h3>
                <p className="text-justify">hello</p>
              </div>
            </div>
            {/* Overlay with button - moved inside the card container */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => {
                  // Add your "see more" action here
                  console.log("See more clicked");
                }}
              >
                See More
              </button>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {[...portfolioItems, { title: "See More" }].map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-accent" : "bg-gray-300"
              }`}
              onClick={() => {
                scrollRef.current?.scrollTo({
                  left: index * scrollRef.current.clientWidth,
                  behavior: "smooth",
                });
              }}
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
