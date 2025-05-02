import { icons } from "lucide-react"; // Or your specific icon import method

// Define the structure for a list item, potentially including a URL
export interface ServiceListItem {
  text: string;
  url?: string; // Optional URL for the list item
}

// Define the structure for a service item
export interface ServiceItemData {
  value: string;
  title: string;
  iconName: keyof typeof icons; // Use keyof typeof icons for type safety with lucide-react
  image: string;
  listItems: ServiceListItem[];
  ctaText?: string; // Optional text for a Call to Action button
  ctaUrl?: string; // Optional URL for the CTA button
}

// Export the array of service data
export const servicesData: ServiceItemData[] = [
  {
    value: "item-1",
    title: "Web Development",
    iconName: "Code", // Example icon name from lucide-react
    image: "/services/webdev.svg",
    listItems: [
      {
        text: "Front-End Development (React, Next.js, Vue)",
        url: "/portfolio?filter=frontend",
      },
      { text: "Back-End Development (Node.js, Express, Databases)" },
      { text: "Landing Pages and Business Websites" },
      {
        text: "Portfolio Websites & E-commerce Solutions",
        url: "/portfolio?filter=ecommerce",
      },
      { text: "API Integration & Development" },
    ],
    ctaText: "View Web Projects",
    ctaUrl: "/portfolio?filter=web",
  },
  {
    value: "item-2",
    title: "UI/UX Design",
    iconName: "PenTool", // Example icon name
    image: "/services/uiux.svg",
    listItems: [
      { text: "Responsive & Adaptive Design" },
      { text: "Wireframing & Prototyping (Figma)" },
      { text: "User Flow & Navigation Optimization" },
      { text: "Interaction Design & Microinteractions" },
      { text: "Branding, Style Guides & Design Systems" },
    ],
    ctaText: "See Design Work",
    ctaUrl: "/portfolio?filter=design",
  },
  {
    value: "item-3",
    title: "Mobile Application",
    iconName: "Smartphone", // Example icon name
    image: "/services/mobile.svg",
    listItems: [
      { text: "Cross-Platform Development (React Native)" },
      { text: "Native Module Integration" },
      { text: "API Integration & Offline Sync" },
      { text: "Performance Optimization & Bug Fixing" },
      { text: "App Store Submission & Maintenance" },
    ],
    ctaText: "Explore App Projects",
    ctaUrl: "/portfolio?filter=mobile",
  },
  {
    value: "item-4",
    title: "E-Commerce Platform",
    iconName: "ShoppingCart", // Example icon name
    image: "/services/ecommerce.svg",
    listItems: [
      { text: "Platform Setup (Shopify, WooCommerce)" },
      { text: "Custom Theme Development & Customization" },
      { text: "App/Plugin Integration & Configuration" },
      { text: "Conversion Rate Optimization (CRO)" },
      { text: "Performance Tuning & SEO for E-commerce" },
    ],
  },
  {
    value: "item-5",
    title: "Automation & Integration",
    iconName: "Zap", // Example icon name
    image: "/services/automation.svg",
    listItems: [
      { text: "Workflow Automation (Zapier, Make)" },
      { text: "API Integrations (CRM, Marketing Tools)" },
      { text: "Custom Scripting (Python, Node.js)" },
      { text: "Data Scraping & Processing" },
      { text: "Process Analysis & Optimization Consulting" },
    ],
  },
];
