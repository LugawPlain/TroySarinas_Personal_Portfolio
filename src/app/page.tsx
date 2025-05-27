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

export default function Home() {
  return (
    <>
      <div className="scroll-smooth min-w-screen  mx-auto relative ">
        <HeaderNav className=" relative"></HeaderNav>
        <Testing></Testing>

        <section
          id="hero"
          className="w-full font-clashDisplayBold relative py-0 sm:py-16 flex-col flex z-10 "
        >
          <HeroSection></HeroSection>
          <div className="flex-col overflow-hidden   bg-background mt-8">
            {/* <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
              <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-background to-transparent z-10"></div> */}
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
          {/* <Certificates></Certificates> */}
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
    </>
  );
}
