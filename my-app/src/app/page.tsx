import Image from "next/image";
import HeaderNav from "../../components/HeaderNav";
import Orb from "../../reactbits/backgrounds/Orb/Orb";
import DecryptedText from "../../reactbits/textanimations/DecryptedText/DecryptedText";
import TrueFocus from "../../reactbits/textanimations/TrueFocus/TrueFocus";
import MenuBar from "../../components/MenuBar";
import { Marquee } from "@/components/magicui/marquee";
import { Card } from "@/components/ui/card";
import ShinyText from "../../reactbits/textanimations/ShinyText/ShinyText";
export default function Home() {
  return (
    <div>
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

        <Marquee className="bg-kkrudybrown text-kkhair py-4 ">
          <div className="flex-center gap-1">
            <Image
              src="/Icons/HTML5.svg"
              alt="s"
              width={24}
              height={24}
            ></Image>
            <h1>HTML5</h1>
          </div>
          <div className="flex-center gap-1">
            <Image src="/Icons/CSS3.svg" alt="s" width={24} height={24}></Image>
            <h1>CSS</h1>
          </div>
          <div className="flex-center gap-1">
            <Image
              src="/Icons/javaScript.svg"
              alt="s"
              width={24}
              height={24}
            ></Image>
            <h1>JavaScript</h1>
          </div>
          <div className="flex-center gap-1 ">
            <Image
              className="animate-[spin_4s_linear_infinite] "
              src="/Icons/react.svg"
              alt="s"
              width={24}
              height={24}
            ></Image>
            <h1>React</h1>
          </div>
          <div className="flex-center gap-1 ">
            <Image src="/Icons/next.svg" alt="s" width={24} height={24}></Image>
            <h1>Next</h1>
          </div>
          <div className="flex-center gap-1 ">
            <Image
              src="/Icons/tailwindcss.svg"
              alt="s"
              width={24}
              height={24}
            ></Image>
            <h1>Tailwind</h1>
          </div>
          <div className="flex-center gap-1 ">
            <Image
              src="/Icons/mysql.svg"
              alt="s"
              width={24}
              height={24}
            ></Image>
            <h1>MySQL</h1>
          </div>

          <div className="flex-center gap-1 ">
            <Image
              src="/Icons/mongodb.svg"
              alt="s"
              width={24}
              height={24}
            ></Image>
            <h1>MongoDB</h1>
          </div>
        </Marquee>
      </main>

      <footer>
        <MenuBar></MenuBar>
      </footer>
    </div>
  );
}
