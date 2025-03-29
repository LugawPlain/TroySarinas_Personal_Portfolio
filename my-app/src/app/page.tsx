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

import LogAccordionHeight from "../../components/LogAccordionHeight";
import ScrollCarousel from "../../components/ScrollCarousel";
import Link from "next/link";
import MarqueeGroup1 from "../../components/MarqueeGroup1";
import MarqueeGroup2 from "../../components/MarqueeGroup2";
import ContactForm from "../../components/ContactForm";
import HeroSection from "../../components/HeroSection";
import ScrollRevealText from "../../components/ScrollRevealText";
import Testing from "../../components/Testing";
import ScrollRevealAccordion from "../../components/ScrollRevealAccordion";
import Portfolio from "../../components/Portfolio";

export default function Home() {
  return (
    <div className="">
      <main className="w-full  font-clashDisplayBold bg-cover ">
        <HeaderNav></HeaderNav>
        <HeroSection></HeroSection>

        <MarqueeGroup1></MarqueeGroup1>
        <MarqueeGroup2></MarqueeGroup2>
      </main>
      <section className="mt-4">
        <ScrollRevealText />
      </section>

      <div className="w-full">
        <h2 className="text-center text-3xl my-4">My Services ✨</h2>
        <ScrollRevealAccordion></ScrollRevealAccordion>
      </div>
      <section>
        <Portfolio></Portfolio>
      </section>
      <section>
        <ContactForm />
      </section>

      <footer className=""></footer>
      <MenuBar></MenuBar>
      <section className="h-16"></section>
    </div>
  );
}
