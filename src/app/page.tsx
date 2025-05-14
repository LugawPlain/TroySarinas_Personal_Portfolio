import HeaderNav from "@/components/HeaderNav";

import MenuBar from "@/components/MenuBar";

import MarqueeGroup1 from "@/components/MarqueeGroup1";
import MarqueeGroup2 from "@/components/MarqueeGroup2";
import HeroSection from "@/components/HeroSection";
import ScrollRevealText from "@/components/ScrollRevealText";
import ScrollRevealAccordion from "@/components/ScrollRevealAccordion";
import Portfolio from "@/components/Portfolio";
import Certificates from "@/components/Certificates";
import ContactMe from "@/components/ContactMe";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";
import MarqueeGroup3 from "@/components/MarqueeGroup3";

export default function Home() {
  return (
    <div className="scroll-smooth min-w-screen space-y-6 z-10 bg-nude mx-auto ">
      <HeaderNav className=" relative block"></HeaderNav>
      <section
        id="hero"
        className="w-full font-clashDisplayBold py-0 sm:py-16 flex-col flex"
      >
        <HeroSection></HeroSection>
        <div className="flex-col flex w-screen  sm:mt overflow-hidden relative">
          <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-nude to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-nude to-transparent z-10"></div>
          <MarqueeGroup1></MarqueeGroup1>
          <MarqueeGroup2></MarqueeGroup2>
          <MarqueeGroup3></MarqueeGroup3>
        </div>
      </section>
      <section id="about" className="pt-4 md:pt-20">
        <ScrollRevealText />

        <div id="services" className="w-full">
          <h2 className="text-center  my-4 font-bold pt-10 sm:pt-20 mb-8">
            <span className="text-3xl sm:text-4xl">My Services ✨</span>
          </h2>
          <ScrollRevealAccordion></ScrollRevealAccordion>
        </div>
      </section>
      <section
        id="projects"
        className="md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto pt-4 md:pt-20"
      >
        <Portfolio></Portfolio>
        <Technologies></Technologies>
        <Certificates></Certificates>
      </section>

      <section id="contact" className="max-w-7xl mx-auto pt-4 md:pt-20">
        <ContactMe />
      </section>
      <footer id="footer" className="">
        <Footer></Footer>
      </footer>
      <div className="min-h-4 md:hidden"></div>

      <MenuBar className="sm:hidden"></MenuBar>
    </div>
  );
}
