import React from "react";
import Image from "next/image";
import { PortfolioItem } from "@/data/portfolioData"; // Import the interface
import Link from "next/link";

interface PortfolioItemCardProps {
  item: PortfolioItem; // Use the imported interface
}

const PortfolioItemCard: React.FC<PortfolioItemCardProps> = ({ item }) => {
  return (
    <div className="w-full  h-full flex flex-col">
      <div className="flex gap-2 scroll-x-auto overflow-auto text-nowrap py-2 text-sm">
        {item.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-accent text-card-foreground px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex-col space-y-4 flex-grow flex ">
        <div className="relative  w-96 h-96 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-lg mx-auto transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex-col flex ">
          <Link href={item.titleLink || ""}>
            <h3 className="text-start text-2xl font-semibold">{item.title}</h3>
          </Link>
          <p className="text-justify mt-4 flex-grow">{item.description}</p>
          <div className="flex-row  flex justify-between">
            <Link
              href={item.titleLink || ""}
              className="text-accent flex items-start gap-2 underline text-md font-serif mt-4 hover:scale-110  active:scale-110 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-link-icon lucide-link"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              View Project
            </Link>
            <Link
              href={item.githubLink || ""}
              className="text-accent flex items-start gap-2 underline text-md font-serif mt-4 hover:scale-110  active:scale-110 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-link-icon lucide-link"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemCard;
