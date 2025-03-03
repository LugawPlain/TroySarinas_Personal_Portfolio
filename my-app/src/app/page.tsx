import Image from "next/image";
import HeaderNav from "../../components/HeaderNav";
import { BsEmojiSunglasses } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import MenuBar from "../../components/MenuBar";
import ShinyText from "../../reactbits/textanimations/ShinyText/ShinyText";
import MarqueeGroup from "../../components/MarqueeGroup";
import AboutMeCard from "../../components/AboutMeCard";
import { Button } from "@/components/ui/button";
import { IoRocketOutline } from "react-icons/io5";
// bg-[url(/Background.svg)]
export default function Home() {
  return (
    <div className="">
      <main className="w-full font-clashDisplayBold bg-kkhair  bg-cover">
        <HeaderNav></HeaderNav>

        <section className="w-full h-fit ">
          <div className="">
            <h2 className="mt-12">Hi, I'm Troy Sarinas</h2>
            <h1 className="text-nowrap text-6xl my-4  NameTitle">
              Full-Stack
              <br />
              <ShinyText text="Developer" speed={4}></ShinyText>
            </h1>
            <p className="NameTitle mt-12 text-lg tracking-wide">
              "Bringing visions to life with intuitive, high-performance through
              <span className="text-kkrudybrown"> innovative </span> design and
              <span className="text-kkrudybrown"> creative </span> solutions
              that captivate and engage users."
            </p>
            <p className="font-semibold motion-preset-typewriter motion-duration-200 motion-delay-1000 motion-ease-out-back NameTitle "></p>
          </div>
          <span className="flex mt-4 py-4 border-t-2 border-kkrudybrown/25 justify-around">
            <Button variant="outline" className="bg-[#7d4e44] text-kkhair">
              Jump on a Call <MdOutlinePhoneInTalk />
            </Button>
            <Button variant="outline" className="bg-kkwindy text-kkhair">
              Know me Better <BsEmojiSunglasses />
            </Button>
          </span>
        </section>

        <MarqueeGroup></MarqueeGroup>
      </main>
      <section className="mt-4">
        <div className="scroll-reveal text-center  text-lg font-medium tracking-widest py-8 px-2 bg-kkwindy/10 rounded-lg  ">
          <h2 className="text-3xl">
            <span className="inline text-kkjaguar/10 bg-clip-text">
              About me
            </span>
            <p className="inline">✨</p>
          </h2>
          <p className=" scroll-reveal-text mt-4">
            <span className="text-kkjaguar/10 bg-clip-text">
              I am a Computer Engineer with a passion for technology and design.
              Collaborating with companies worldwide to create visually
              stunning, highly functional, and user-friendly digital experiences
              that deliver measurable results and support business growth.
            </span>
          </p>
        </div>
      </section>
      <section>
        <div className="p-4">
          <AboutMeCard></AboutMeCard>
        </div>
      </section>
      <section>
        <div className="p-4">
          <AboutMeCard></AboutMeCard>
        </div>
      </section>
      <section>
        <div className="p-4">
          <AboutMeCard></AboutMeCard>
        </div>
      </section>
      <section>
        <div className="p-4">
          <AboutMeCard></AboutMeCard>
        </div>
      </section>
      <section>
        <div className="p-4">
          <AboutMeCard></AboutMeCard>
        </div>
      </section>
      <section>
        <div className="p-4">
          <AboutMeCard></AboutMeCard>
        </div>
      </section>

      <footer className=""></footer>
      <MenuBar></MenuBar>
    </div>
  );
}
