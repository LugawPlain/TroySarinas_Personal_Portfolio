"use client";
import React, { useRef } from "react";
import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionMotionItemProps {
  value: string;
  title: string;
  image: string;
  listItems: string[];
}

const AccordionMotionItem: React.FC<AccordionMotionItemProps> = ({
  value,
  title,
  image,
  listItems,
}) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <AccordionItem
        className="bg-card mb-4 border-none rounded-md overflow-hidden"
        value={value}
      >
        <AccordionTrigger className="text-xl text-center hover:no-underline px-4 py-3">
          {title}
        </AccordionTrigger>
        <AccordionContent className="flex-center py-4 flex-col px-4">
          <div className="relative w-full max-w-[350px] aspect-[350/400] mb-4">
            <Image
              src={image}
              fill
              style={{ objectFit: "contain" }}
              alt={title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
            />
          </div>
          <ul className="text-start w-full text-sm list-disc pl-5 space-y-1">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
};

const ScrollRevealAccordion = () => {
  const accordionData: AccordionMotionItemProps[] = [
    {
      value: "item-1",
      title: "Web Development",
      image: "/services/webdev.svg",
      listItems: [
        "Front-End Development (React, Next.js, Vue)",
        "Back-End Development (Node.js, Express, Databases)",
        "Landing Pages and Business Websites",
        "Portfolio Websites & E-commerce Solutions",
        "API Integration & Development",
      ],
    },
    {
      value: "item-2",
      title: "UI/UX Design",
      image: "/services/uiux.svg",
      listItems: [
        "Responsive & Adaptive Design",
        "Wireframing & Prototyping (Figma)",
        "User Flow & Navigation Optimization",
        "Interaction Design & Microinteractions",
        "Branding, Style Guides & Design Systems",
      ],
    },
    {
      value: "item-3",
      title: "Mobile Application",
      image: "/services/mobile.svg",
      listItems: [
        "Cross-Platform Development (React Native)",
        "Native Module Integration",
        "API Integration & Offline Sync",
        "Performance Optimization & Bug Fixing",
        "App Store Submission & Maintenance",
      ],
    },
    {
      value: "item-4",
      title: "E-Commerce Platform",
      image: "/services/ecommerce.svg",
      listItems: [
        "Platform Setup (Shopify, WooCommerce)",
        "Custom Theme Development & Customization",
        "App/Plugin Integration & Configuration",
        "Conversion Rate Optimization (CRO)",
        "Performance Tuning & SEO for E-commerce",
      ],
    },
    {
      value: "item-5",
      title: "Automation & Integration",
      image: "/services/automation.svg",
      listItems: [
        "Workflow Automation (Zapier, Make)",
        "API Integrations (CRM, Marketing Tools)",
        "Custom Scripting (Python, Node.js)",
        "Data Scraping & Processing",
        "Process Analysis & Optimization Consulting",
      ],
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-card-foreground text-center max-w-3xl mx-auto space-y-4 px-4"
    >
      {accordionData.map((data) => (
        <AccordionMotionItem key={data.value} {...data} />
      ))}
    </Accordion>
  );
};

export default ScrollRevealAccordion;
