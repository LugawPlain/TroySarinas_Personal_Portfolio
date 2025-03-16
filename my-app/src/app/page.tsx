import Image from "next/image";

import HeaderNav from "../../components/HeaderNav";
import { BsEmojiSunglasses } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import MenuBar from "../../components/MenuBar";
import ShinyText from "../../reactbits/textanimations/ShinyText/ShinyText";
import MarqueeGroup from "../../components/MarqueeGroup1";
import AboutMeCard from "../../components/AboutMeCard";
import { IoRocketOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LogAccordionHeight from "../../components/LogAccordionHeight";
import ScrollCarousel from "../../components/ScrollCarousel";
import Link from "next/link";
import MarqueeGroup1 from "../../components/MarqueeGroup1";
import MarqueeGroup2 from "../../components/MarqueeGroup2";
import ContactForm from "../../components/ContactForm";
import HeroSection from "../../components/HeroSection";

export default function Home() {
  return (
    <div className="">
      <main className="w-full font-clashDisplayBold  bg-cover">
        <HeaderNav></HeaderNav>
        <section className="w-full h-fit">
          <HeroSection></HeroSection>
        </section>
        <MarqueeGroup1></MarqueeGroup1>
      </main>
      <section className="mt-4">
        <div className="scroll-reveal text-center  text-lg font-medium tracking-widest py-8 px-2 rounded-lg  ">
          <h2 className="text-3xl">
            <span className="inline text-foreground/10 bg-clip-text">
              About me
            </span>
            <p className="inline">✨</p>
          </h2>
          <p className=" scroll-reveal-text mt-4">
            <span className="text-foreground/10 bg-clip-text">
              I am a Computer Engineer with a passion for technology and design.
              Collaborating with companies worldwide to create visually
              stunning, highly functional, and user-friendly digital experiences
              that deliver measurable results and support business growth.
            </span>
          </p>
        </div>
      </section>

      <div className="w-full">
        <h2 className="text-center text-3xl my-4">My Services ✨</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full text-card-foreground text-center"
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
        </Accordion>
      </div>
      <section>
        <ContactForm />
      </section>

      <footer className=""></footer>
      <MenuBar></MenuBar>
      <section className="h-16"></section>
    </div>
  );
}
