export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  techStack: string[]; // Added techStack field
  titleLink?: string; // Added optional titleLink field
  githubLink?: string; // Added optional link to GitHub repo
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Yorticia.com",
    description:
      "Created a stunning personal portfolio website for model Yorticia, enhancing her online presence and providing a dedicated space to display her work and connect with industry professionals. The site features an image-rich gallery and detailed service listings.",
    image: "/Yorticia.jpg",
    titleLink: "https://yorticia.com",
    // Developed a professional online portfolio for Yorticia, a fashion model. The website serves as a central hub to showcase her diverse modeling work through curated galleries, clearly outline her services, and streamline the process for booking inquiries. Key features include [mention 1-2 specific features like 'a dynamic gallery filter', 'an integrated contact form', 'a responsive design optimized for all devices'].
    // Designed and built a bespoke portfolio website for model Yorticia. The goal was to create an elegant and user-friendly platform that effectively presents her visual portfolio and professional services to potential clients and agencies. My role involved [mention your role, e.g., 'full-stack development', 'front-end development and UI design'] using [mention key technologies, e.g., 'Next.js, Tailwind CSS, and Framer Motion']
    techStack: ["Next.js", "Tailwind", "TypeScript", "Node.js", "Express"],
    githubLink: "https://github.com/your-username/yorticia-repo",
  },
  {
    title: "Sample Project 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde, impedit dolorem possimus eveniet voluptatum.",
    image: "/Background.jpg",
    titleLink: "https://example.com/project2", // Add link if available
    githubLink: "https://github.com/your-username/project2-repo",
    techStack: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Sample Project 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde, impedit dolorem possimus eveniet voluptatum.",
    image: "/Background.jpg",
    titleLink: "https://example.com/project3", // Add link if available
    githubLink: "https://github.com/your-username/yorticia-repo",
    techStack: ["Vue", "Firebase", "Tailwind"],
  },
];
