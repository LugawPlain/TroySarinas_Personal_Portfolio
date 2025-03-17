"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface ScrollAnimationResult {
  ref: React.RefObject<HTMLDivElement | null>;
  animationValue: MotionValue<number>;
}

const useScrollAnimation = (
  offset: [any, any] = ["start 0.85", "start 0.80"]
): ScrollAnimationResult => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const animationValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return { ref, animationValue };
};
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
  const { ref, animationValue } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      style={{ opacity: animationValue, scale: animationValue }}
      className="scroll-opacity-reveal"
    >
      <AccordionItem className="bg-card" value={value}>
        <AccordionTrigger className="text-2xl text-center">
          {title}
        </AccordionTrigger>
        <AccordionContent className="flex-center py-4 flex-col">
          <Image src={image} width={350} height={400} alt={title} />
          <ul className="text-start w-full mt-2 text-sm list-disc pl-5">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
};

const ScrollRevealAccordionMotion: React.FC = () => {
  const accordionData: AccordionMotionItemProps[] = [
    {
      value: "item-1",
      title: "Web Development",
      image: "/Background.svg",
      listItems: [
        "Front-End Development",
        "Back-End Development",
        "Landing Pages and business websites",
        "Portfolio Websites",
      ],
    },
    {
      value: "item-2",
      title: "UI/UX Design",
      image: "/Background.svg",
      listItems: [
        "Responsive & Adaptive Design",
        "Design Systems, Style Guides",
        "User Flow & Navigation Optimization",
        "Interaction Design",
        "Branding, logo, typography, color pallete and brand personality",
      ],
    },
    {
      value: "item-3",
      title: "Mobile Application",
      image: "/Background.svg",
      listItems: [
        "Native Development",
        "Cross-Platform Development",
        "Back-End and API Integration",
        "Bug Fixing",
      ],
    },
    {
      value: "item-4",
      title: "E-Commerce Platform",
      image: "/Background.svg",
      listItems: [
        "Online Store Theme Set-up",
        "Apps/Plugins Integrations",
        "Search engine and Perfomance optimization",
        "Convertion Rate Optimization",
        "E-commerce Maintenance and Support",
      ],
    },
    {
      value: "item-5",
      title: "Automations",
      image: "/Background.svg",
      listItems: [
        "Online Store Theme Set-up",
        "Apps/Plugins Integrations",
        "Search engine and Perfomance optimization",
        "Convertion Rate Optimization",
        "E-commerce Maintenance and Support",
      ],
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-card-foreground text-center"
    >
      {accordionData.map((data) => (
        <AccordionMotionItem key={data.value} {...data} />
      ))}
    </Accordion>
  );
};

const ScrollRevealAccordionFallback = () => (
  <Accordion
    type="single"
    collapsible
    className="w-full text-card-foreground text-center"
  >
    <AccordionItem className="bg-card  scroll-opacity-reveal" value="item-1">
      <AccordionTrigger className="text-2xl text-center ">
        Web Development
      </AccordionTrigger>
      <AccordionContent className="flex-center p-8 flex-col">
        <Image
          src="/Background.svg"
          width={350}
          height={400}
          alt="Web Development"
        />
        <ul className="text-start w-full mt-2 text-sm list-disc pl-5">
          <li> Front-End Development </li>
          <li> Back-End Development </li>
          <li> Landing Pages and business websites</li>
          <li> Portfolio Websites </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem className="bg-card  scroll-opacity-reveal" value="item-2">
      <AccordionTrigger className="text-2xl text-center ">
        UI/UX Design
      </AccordionTrigger>
      <AccordionContent className="flex-center py-4 flex-col">
        <Image
          src="/Background.svg"
          width={350}
          height={400}
          alt="Web Development"
        />
        <ul className="text-start w-full mt-2 text-sm list-disc pl-5">
          <li> Responsive & Adaptive Design </li>
          <li> Design Systems, Style Guides </li>
          <li> User Flow & Navigation Optimization</li>
          <li> Interaction Design </li>
          <li>Branding,logo,typography,color pallete and brand personality</li>
        </ul>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem className="bg-card  scroll-opacity-reveal" value="item-3">
      <AccordionTrigger className="text-2xl text-center ">
        Mobile Application
      </AccordionTrigger>
      <AccordionContent className="flex-center py-4 flex-col">
        <Image
          src="/Background.svg"
          width={350}
          height={400}
          alt="Web Development"
        />
        <ul className="text-start w-full mt-2 text-sm list-disc pl-5">
          <li> Native Development </li>
          <li> Cross-Platform Development </li>
          <li> Back-End and API Integration</li>
          <li> Bug Fixing </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem className="bg-card  scroll-opacity-reveal" value="item-4">
      <AccordionTrigger className="text-2xl text-center ">
        E-Commerce Platform
      </AccordionTrigger>
      <AccordionContent className="flex-center py-4 flex-col">
        <Image
          src="/Background.svg"
          width={350}
          height={400}
          alt="Web Development"
        />
        <ul className="text-start w-full mt-2 text-sm list-disc pl-5">
          <li> Online Store Theme Set-up </li>
          <li> Apps/Plugins Integrations </li>
          <li> Search engine and Perfomance optimization</li>
          <li> Convertion Rate Optimization </li>
          <li> E-commerce Maintenance and Support </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem className="bg-card  scroll-opacity-reveal" value="item-5">
      <AccordionTrigger className="text-2xl text-center ">
        Automations
      </AccordionTrigger>
      <AccordionContent className="flex-center py-4 flex-col">
        <Image
          src="/Background.svg"
          width={350}
          height={400}
          alt="Web Development"
        />
        <ul className="text-start w-full mt-2 text-sm list-disc pl-5">
          <li> Online Store Theme Set-up </li>
          <li> Apps/Plugins Integrations </li>
          <li> Search engine and Perfomance optimization</li>
          <li> Convertion Rate Optimization </li>
          <li> E-commerce Maintenance and Support </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const ScrollRevealAccordion = () => {
  const [supportsAnimationTimeline, setSupportsAnimationTimeline] =
    useState(false);

  useEffect(() => {
    const isSupported = CSS.supports("animation-timeline", "view()");
    setSupportsAnimationTimeline(isSupported);
  }, []);

  useEffect(() => {
    console.log("Updated state accordion:", supportsAnimationTimeline);
  }, [supportsAnimationTimeline]);

  return supportsAnimationTimeline ? (
    <ScrollRevealAccordionFallback />
  ) : (
    <ScrollRevealAccordionMotion />
  );
};

export default ScrollRevealAccordion;
