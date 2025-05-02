import HeaderNav from "../../components/HeaderNav";

import MenuBar from "../../components/MenuBar";

import MarqueeGroup1 from "../../components/MarqueeGroup1";
import MarqueeGroup2 from "../../components/MarqueeGroup2";
import HeroSection from "../../components/HeroSection";
import ScrollRevealText from "../../components/ScrollRevealText";
import ScrollRevealAccordion from "../../components/ScrollRevealAccordion";
import Portfolio from "../../components/Portfolio";
import Certificates from "../../components/Certificates";
import ContactMe from "../../components/ContactMe";

export default function Home() {
  return (
    <div className=" h-screen scroll-smooth">
      <section
        id="hero"
        className="w-full px-0 font-clashDisplayBold bg-cover  "
      >
        <HeaderNav></HeaderNav>
        <HeroSection></HeroSection>
        <MarqueeGroup1></MarqueeGroup1>
        <MarqueeGroup2></MarqueeGroup2>
      </section>
      <section id="about" className=" mt-4 px-0">
        <ScrollRevealText />

        <div id="services" className="w-full">
          <h2 className="text-center text-3xl my-4">My Services ✨</h2>
          <ScrollRevealAccordion></ScrollRevealAccordion>
        </div>
      </section>
      <section id="projects" className="  max-w-screen overflow-hidden px-0">
        <Portfolio></Portfolio>
      </section>
      <section id="contact" className="">
        <ContactMe />
      </section>
      <section id="certificates" className="min-h-96">
        <Certificates></Certificates>
      </section>

      <footer id="footer" className="h-196"></footer>
      <MenuBar></MenuBar>
    </div>
  );
}
