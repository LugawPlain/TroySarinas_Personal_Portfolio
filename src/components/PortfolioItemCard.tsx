import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { PortfolioItem } from "@/data/portfolioData"; // Import the interface

interface PortfolioItemCardProps {
  item: PortfolioItem; // Use the imported interface
  index: number;
  setCurrentIndex: (index: number) => void;
  isCurrent: boolean; // To potentially apply different styles/logic if needed
}

const PortfolioItemCard: React.FC<PortfolioItemCardProps> = ({
  item,
  index,
  setCurrentIndex,
  isCurrent, // Currently unused, but available
}) => {
  const ref = useRef<HTMLDivElement>(null);
  // Track when the center of the item is in the viewport
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    // When this specific item card comes into view, update the parent's current index
    if (isInView) {
      setCurrentIndex(index);
    }
  }, [isInView, index, setCurrentIndex]);

  return (
    <div ref={ref} className="flex-none w-full snap-center">
      <div className="flex gap-2 scroll-x-auto overflow-auto text-nowrap py-2">
        {item.techStack.map((tech, idx) => (
          <span key={idx} className="bg-white text-black px-2 py-1 rounded-md">
            {tech}
          </span>
        ))}
      </div>
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
  );
};

export default PortfolioItemCard;
