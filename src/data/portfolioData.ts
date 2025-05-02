export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  techStack: string[]; // Added techStack field
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Sample Project 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde, impedit dolorem possimus eveniet voluptatum.",
    image: "/Background.jpg", // Replace with actual image path
    techStack: ["Next.js", "Tailwind", "TypeScript", "Node.js", "Express"], // Example tech stack
  },
  {
    title: "Sample Project 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde, impedit dolorem possimus eveniet voluptatum.",
    image: "/Background.jpg", // Replace with actual image path
    techStack: ["React", "CSS", "JavaScript"], // Example tech stack
  },
  {
    title: "Sample Project 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde, impedit dolorem possimus eveniet voluptatum.",
    image: "/Background.jpg", // Replace with actual image path
    techStack: ["Vue", "Firebase", "Tailwind"], // Example tech stack
  },
  // Add more portfolio items here
];
