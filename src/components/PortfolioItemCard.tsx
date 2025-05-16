import React from "react";
import Image from "next/image";
import { PortfolioItem } from "@/data/portfolioData"; // Import the interface
import Link from "next/link";
import { CiLink } from "react-icons/ci";
import { PiGithubLogoLight } from "react-icons/pi";
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
      <div className="flex-col space-y-4 flex-grow flex bg-muted max-h-[100svh] overflow-y-auto p-4 rounded-lg ">
        <div className="relative  w-full h-96 overflow-hidden mx-auto rounded-lg">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-lg mx-auto transition-transform duration-300 hover:scale-110 hover:rounded-lg overflow-hidden"
          />
        </div>
        <div className="flex-col flex ">
          <Link href={item.titleLink || ""}>
            <h3 className="text-start text-xl sm:text-2xl font-semibold">
              {item.title}
            </h3>
          </Link>
          <p className="text-justify indent-4 text-muted-foreground mt-2 sm:mt-4 text-md sm:text-lg flex-grow">
            {item.description}
          </p>
          <div className="flex-row flex justify-between mt-2 sm:mt-4">
            <Link
              href={item.titleLink || ""}
              className="text-accent flex-center  gap-1 underline text-sm md:text-md font-serif hover:scale-110  active:scale-110 transition-all duration-300"
            >
              <CiLink size={32} />
              View Project
            </Link>
            <Link
              href={item.githubLink || ""}
              className="text-accent flex-center gap-1 underline text-sm md:text-md font-serif hover:scale-110  active:scale-110 transition-all duration-300"
            >
              <PiGithubLogoLight size={28} />
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemCard;
