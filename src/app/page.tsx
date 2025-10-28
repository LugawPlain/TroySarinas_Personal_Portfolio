import HeaderNav from "@/components/HeaderNav";

import MenuBar from "@/components/MenuBar";

import MarqueeGroup1 from "@/components/MarqueeGroup1";
import MarqueeGroup2 from "@/components/MarqueeGroup2";
import HeroSection from "@/components/HeroSection";
import ScrollRevealText from "@/components/ScrollRevealText";
import ScrollRevealAccordion from "@/components/ScrollRevealAccordion";
import Portfolio from "@/components/Portfolio";
// import Certificates from "@/components/Certificates";
import ContactMe from "@/components/ContactMe";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";
import MarqueeGroup3 from "@/components/MarqueeGroup3";
import Testing from "@/components/Testing";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative max-w-full">
        <div className="absolute inset-0 z-0 bg-gray-800/80"></div>
        <div className="w-fit h-fit px-4 py-8 fixed -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 z-50 rounded-md bg-white">
          <div className="text-black text-md text-center ">
            <p className="text-2xl mb-8">This is the outdated website</p>
            <p className="mb-4 text-nowrap">Head to the updated website ⬇️</p>
            <Link href="https://www.troysarinas.dev">
              <button className="bg-violet-500 hover:bg-violet-500/80 active:bg-violet-800 px-4 py-2 rounded-full text-white">
                New Website
              </button>
            </Link>
          </div>
        </div>
        <div className="scroll-smooth min-w-screen mx-auto -z-10 relative blur-sm">
          <HeaderNav className=" relative"></HeaderNav>
          <Testing></Testing>

          <section
            id="hero"
            className="w-full font-clashDisplayBold relative py-0 sm:py-16 flex-col flex z-10 "
          >
            <HeroSection></HeroSection>
            <div className="flex-col overflow-hidden bg-background">
              <MarqueeGroup1></MarqueeGroup1>
              <MarqueeGroup2></MarqueeGroup2>
              <MarqueeGroup3></MarqueeGroup3>
            </div>
          </section>

          <section id="about" className="pt-4 md:pt-20">
            <ScrollRevealText />

            <div id="services" className="w-full">
              <div className="">
                <ScrollRevealAccordion></ScrollRevealAccordion>
              </div>
            </div>
          </section>
          <section
            id="projects"
            className="md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto pt-4 md:pt-20 overflow-hidden"
          >
            <Portfolio></Portfolio>
            <Technologies></Technologies>
          </section>

          <section id="contact" className="">
            <ContactMe />
          </section>
          <footer id="footer" className="">
            <Footer></Footer>
          </footer>
          <div className="min-h-14 h-14 md:hidden"></div>

          <MenuBar className="sm:hidden"></MenuBar>
        </div>
      </div>
    </>
  );
}
