import Image from "next/image";
import React from "react";

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
];

const Portfolio = () => {
  return (
    <div className="">
      <h2>Projects </h2>
      {portfolioItems.map((item, index) => (
        <div
          key={index}
          className="flex-col space-y-4 py-4 odd:bg-gray-100 even:bg-gray-200"
        >
          <div className="relative h-96 w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-fill rounded-lg"
            />
          </div>
          <div className="space-y-4 flex-col">
            <h3 className="text-center">{item.title}</h3>
            <p className="text-justify">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
