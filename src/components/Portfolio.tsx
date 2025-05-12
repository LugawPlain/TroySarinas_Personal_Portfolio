"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import PortfolioItemCard from "@/components/PortfolioItemCard";
import { portfolioItems } from "@/data/portfolioData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItemsCount = portfolioItems.length;
  const [api, setApi] = useState<CarouselApi>();

  const containerRef = useRef<HTMLDivElement>(null);
  const isFullyInView = useInView(containerRef, { amount: 0.5 });

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentIndex(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect); // Provide the listener function to remove
    };
  }, [api]);

  return (
    <div className="px-8 py-2 overflow-x-hidden  mx-auto  ">
      <h2 className="py-2">Projects ✨</h2>
      <motion.div
        className="w-full"
        ref={containerRef}
        initial={{ opacity: 0, transform: "translateX(75px)" }}
        animate={{
          opacity: isFullyInView ? 1 : 0,
          transform: isFullyInView ? "translateX(0px)" : "translateX(75px)",
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="mx-auto px-4 w-lg"
        >
          <CarouselContent className="-ml-4 ">
            {portfolioItems.map((item, index) => (
              <CarouselItem key={index} className="basis-full pl-4">
                <PortfolioItemCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="outline" className="hidden md:block  " />
          <CarouselNext variant="outline" className="hidden md:block" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalItemsCount }).map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-accent" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="w-full flex mt-4 ">
          <Button className="shadow-none text-foreground underline text-lg font-serif mx-auto hover:scale-110 active:scale-110 transition-all duration-300">
            See more ↗
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
