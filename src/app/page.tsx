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

export default function Home() {
  return (
    <div className=" h-screen scroll-smooth space-y-6">
      <section id="hero" className="w-full font-clashDisplayBold  min-h-screen">
        <HeaderNav></HeaderNav>
        <HeroSection></HeroSection>
        <MarqueeGroup1></MarqueeGroup1>
        <MarqueeGroup2></MarqueeGroup2>
        <MarqueeGroup1></MarqueeGroup1>
      </section>
      <section id="about" className="min-h-screen">
        <ScrollRevealText />

        <div id="services" className="w-full">
          <h2 className="text-center text-3xl my-4">My Services ✨</h2>
          <ScrollRevealAccordion></ScrollRevealAccordion>
        </div>
      </section>
      <section id="projects" className="min-h-screen">
        <Portfolio></Portfolio>
      </section>

      <section id="certificates" className="min-h-screen">
        <Technologies></Technologies>
        <Certificates></Certificates>
      </section>
      <section id="contact" className="min-h-screen">
        <ContactMe />
      </section>

      <footer id="footer" className="h-196"></footer>
      <MenuBar></MenuBar>
    </div>
  );
}
