"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const ScrollRevealAccordionMotion = () => {
  const headingRef = useRef(null);
  const { scrollYProgress: headingScrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start 0.75", "start 0.7"],
  });
  const headingBackgroundSize = useTransform(
    headingScrollYProgress,
    [0, 1],
    ["0% 100%", "100% 100%"]
  );

  const paragraphRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.72", "start 0.5"],
  });
  const paragraphBackgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 100%", "100% 100%"]
  );

  return (
    <div className="text-center text-lg font-medium tracking-widest py-8 px-2 rounded-lg">
      <h2 className="text-3xl">
        <motion.span
          ref={headingRef}
          style={{
            backgroundSize: headingBackgroundSize,
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "linear-gradient(var(--foreground), var(--foreground))",
          }}
          className="inline text-foreground/10 bg-clip-text"
        >
          About me
        </motion.span>
        <p className="inline">✨</p>
      </h2>
      <p className="">
        <motion.span
          ref={paragraphRef}
          style={{
            backgroundSize: paragraphBackgroundSize,
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "linear-gradient(var(--foreground), var(--foreground))",
          }}
          className="text-foreground/10 bg-clip-text"
        >
          I am a Computer Engineer with a passion for technology and design.
          Collaborating with companies worldwide to create visually stunning,
          highly functional, and user-friendly digital experiences that deliver
          measurable results and support business growth.
        </motion.span>
      </p>
    </div>
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
    // setSupportsAnimationTimeline(isSupported);
  }, []);

  useEffect(() => {
    console.log("Updated state:", supportsAnimationTimeline);
  }, [supportsAnimationTimeline]);

  return supportsAnimationTimeline ? (
    <ScrollRevealAccordionMotion />
  ) : (
    <ScrollRevealAccordionFallback />
  );
};

export default ScrollRevealAccordion;
