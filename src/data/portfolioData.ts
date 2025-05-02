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
    githubLink: "https://github.com/LugawPlain/JazzilCrizhna",
  },
  {
    title: "SSCRDC VR",
    description:
      "Created a VR educational experience for SSCRDC students focused on microcontrollers and logic gates. The simulation allowed students to interactively build virtual circuits, visualize signal flow, and grasp complex digital logic concepts in an intuitive 3D environment",
    image: "/VRSSCR.png",
    titleLink: "https://vr-sscr.netlify.app/", // Add link if available
    githubLink: "https://github.com/LugawPlain/VR-SSCR",
    techStack: ["HTML5", "CSS", "JavaScript", "Three.js", "A-Frame"],
  },
  {
    title: "Zipto POS/Inventory System",
    description:
      "Developed and implemented a custom Point-of-Sale (POS) and Inventory Management system for a small beverage business, significantly streamlining daily operations by automating sales tracking and stock control.",
    image: "/Background.jpg",
    titleLink: "https://example.com/project3", // Add link if available
    githubLink: "https://github.com/your-username/yorticia-repo",
    techStack: ["Flutter", "Dart", "Firebase", "MongoDB"],
  },
  {
    title: "Onboarding Automation System",
    description:
      " Engineered an automation solution that significantly reduced manual effort in employee onboarding. The system automatically generates new Microsoft Outlook accounts, utilizes Intune for standardized device configuration, and monitors OS versions, ensuring a consistent and efficient setup for new hires.",
    image: "/Background.jpg",
    titleLink: "https://example.com/project3", // Add link if available
    githubLink: "https://github.com/your-username/yorticia-repo",
    techStack: ["Vue", "Firebase", "Tailwind"],
  },
];
