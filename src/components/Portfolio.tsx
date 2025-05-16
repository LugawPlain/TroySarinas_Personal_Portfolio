"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PortfolioItemCard from "@/components/PortfolioItemCard";
import { portfolioItems } from "@/data/portfolioData";
import { MdArrowOutward } from "react-icons/md";
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
    <motion.div
      initial={{ opacity: 0, transform: "translateX(75px)" }}
      whileInView={{
        opacity: 1,
        transform: "translateX(0px)",
      }}
      exit={{ opacity: 0, transform: "translateX(75px)" }}
      transition={{ duration: 0.5, delay: 0.25 }}
      viewport={{ amount: 0.4 }}
      className="overflow-x-hidden  mx-auto  "
    >
      <h2 className="mb-8 font-bold">
        <span className="text-3xl sm:text-4xl">Projects ✨</span>
      </h2>
      <div className="w-full" ref={containerRef}>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="mx-auto w-full px-4 md:w-lg h-auto"
        >
          <CarouselContent className="">
            {portfolioItems.map((item, index) => (
              <CarouselItem key={index} className="basis-full">
                <PortfolioItemCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="outline" className="hidden md:block  " />
          <CarouselNext variant="outline" className="hidden md:block" />
        </Carousel>

        <div className="flex justify-center gap-2 sm:gap-3 mt-2 sm:mt-4">
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
        <div className="w-full flex  py-8">
          <Button className="mx-auto mt-4 px-4 py-2 rounded-md border border-input bg-primary text-primary-foreground  hover:bg-primary/80 hover:text-primary-foreground text-sm text-nowrap flex">
            See more
            <MdArrowOutward size={24} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
