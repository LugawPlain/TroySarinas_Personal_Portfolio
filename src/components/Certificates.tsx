"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"; // Adjust import path if needed
import { Card, CardContent } from "@/components/ui/card"; // Adjust import path if needed
import Link from "next/link";
import { ExternalLink } from "lucide-react"; // Example icon

// Placeholder data - replace with your actual certificate data
const certificateData = [
  {
    icon: ExternalLink, // Example icon component
    title: "Awesome Certificate 1",
    description: "Achieved excellence in placeholder studies.",
    link: "#",
  },
  {
    icon: ExternalLink,
    title: "Super Certification 2",
    description: "Demonstrated mastery of example concepts.",
    link: "#",
  },
  {
    icon: ExternalLink,
    title: "Mega Qualification 3",
    description: "Recognized for outstanding achievement in demos.",
    link: "#",
  },
  {
    icon: ExternalLink,
    title: "Hyper Award 4",
    description: "Completed the rigorous training in sample data.",
    link: "#",
  },
];

const Certificates = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-lg mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        My Certificates 🏆
      </h2>
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {certificateData.map((cert, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                {" "}
                {/* Ensure card clips the absolute icon if needed */}
                <CardContent className="relative flex flex-col items-center justify-center p-6 aspect-video">
                  {" "}
                  {/* Added aspect-video for consistent height */}
                  {/* Top Right Icon */}
                  <cert.icon className="absolute top-4 right-4 h-5 w-5 text-muted-foreground" />
                  {/* Link wrapping Title and Description */}
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center group"
                  >
                    <h3 className="text-xl font-semibold group-hover:underline mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
      </Carousel>

      {/* Bottom Center Index Indicator */}
      <div className="py-4 text-center text-sm text-muted-foreground">
        <div className="flex justify-center space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full ${
                current === index + 1 ? "bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
