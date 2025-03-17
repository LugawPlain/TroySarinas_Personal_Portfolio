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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.80"],
  });
  const divSizeOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const ref2 = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start 0.85", "start 0.80"],
  });
  const divSizeOpacity2 = useTransform(scrollYProgress2, [0, 1], [0, 1]);

  const ref3 = useRef(null);
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: ref3,
    offset: ["start 0.85", "start 0.80"],
  });
  const divSizeOpacity3 = useTransform(scrollYProgress3, [0, 1], [0, 1]);

  const ref4 = useRef(null);
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: ref4,
    offset: ["start 0.85", "start 0.80"],
  });
  const divSizeOpacity4 = useTransform(scrollYProgress4, [0, 1], [0, 1]);

  const ref5 = useRef(null);
  const { scrollYProgress: scrollYProgress5 } = useScroll({
    target: ref5,
    offset: ["start 0.85", "start 0.80"],
  });
  const divSizeOpacity5 = useTransform(scrollYProgress5, [0, 1], [0, 1]);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-card-foreground text-center"
    >
      <motion.div
        ref={ref}
        initial={{ scale: 0, opacity: 0 }}
        style={{ opacity: divSizeOpacity, scale: divSizeOpacity }}
        className="scroll-opacity-reveal"
      >
        <AccordionItem className="bg-card " value="item-1">
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
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ scale: 0, opacity: 0 }}
        style={{ opacity: divSizeOpacity2, scale: divSizeOpacity2 }}
        className="scroll-opacity-reveal"
      >
        <AccordionItem className="bg-card " value="item-2">
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
              <li>
                Branding,logo,typography,color pallete and brand personality
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </motion.div>
      <motion.div
        ref={ref3}
        initial={{ scale: 0, opacity: 0 }}
        style={{ opacity: divSizeOpacity3, scale: divSizeOpacity3 }}
        className="scroll-opacity-reveal"
      >
        <AccordionItem className="bg-card " value="item-3">
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
      </motion.div>
      <motion.div
        ref={ref4}
        initial={{ scale: 0, opacity: 0 }}
        style={{ opacity: divSizeOpacity4, scale: divSizeOpacity4 }}
        className="scroll-opacity-reveal"
      >
        <AccordionItem className="bg-card " value="item-4">
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
      </motion.div>
      <motion.div
        ref={ref5}
        initial={{ scale: 0, opacity: 0 }}
        style={{ opacity: divSizeOpacity5, scale: divSizeOpacity5 }}
        className="scroll-opacity-reveal"
      >
        <AccordionItem className="bg-card " value="item-5">
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
      </motion.div>
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
    // setSupportsAnimationTimeline(isSupported);
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
