import Image from "next/image";
import HeaderNav from "../../components/HeaderNav";
import Orb from "../../reactbits/backgrounds/Orb/Orb";
import DecryptedText from "../../reactbits/textanimations/DecryptedText/DecryptedText";
import TrueFocus from "../../reactbits/textanimations/TrueFocus/TrueFocus";
import MenuBar from "../../components/MenuBar";
import { Marquee } from "@/components/magicui/marquee";
import { Card } from "@/components/ui/card";
import ShinyText from "../../reactbits/textanimations/ShinyText/ShinyText";
import MarqueeGroup from "../../components/MarqueeGroup";
export default function Home() {
  return (
    <div className="">
      <main className="h-svh w-full font-clashDisplayBold bg-[url(/Background.svg)] bg-cover">
        <HeaderNav></HeaderNav>

        <div className="w-full h-fit min-h-1/2 py-8 px-12 ">
          <div className="">
            <h2 className="mt-4">Hi, I'm Troy Sarinas</h2>
            <h1 className="text-nowrap text-5xl my-4  NameTitle">
              Website
              <br />
              <ShinyText text="Developer" speed={5}></ShinyText>
            </h1>
            <p className="NameTitle">
              "Bringing visions to life with intuitive, high-performance through
              <span className="text-kkrudybrown"> innovative </span> design and
              <span className="text-kkrudybrown"> creative </span> solutions
              that captivate and engage users."
            </p>
            <p className="font-semibold motion-preset-typewriter motion-duration-200 motion-delay-1000 motion-ease-out-back NameTitle "></p>
          </div>
        </div>
        <MarqueeGroup></MarqueeGroup>
      </main>

      <footer className=""></footer>
      <MenuBar></MenuBar>
    </div>
  );
}
