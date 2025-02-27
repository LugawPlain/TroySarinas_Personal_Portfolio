import Image from "next/image";
import HeaderNav from "../../components/HeaderNav";
import Orb from "../../reactbits/backgrounds/Orb/Orb";
import DecryptedText from "../../reactbits/textanimations/DecryptedText/DecryptedText";
import TrueFocus from "../../reactbits/textanimations/TrueFocus/TrueFocus";
export default function Home() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <main className="h-svh w-full">
        <div className="top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 relative w-full text-center">
          <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute ">
            <h1 className="text-nowrap text-5xl NameTitle font-clashDisplayBold text-accent ">
              Troy sarinas
            </h1>
            {/* <TrueFocus sentence="Troy Sarinas" borderColor="red"></TrueFocus> */}
            <p className="text-muted-foreground font-semibold motion-preset-typewriter motion-duration-200 motion-delay-1000 motion-ease-out-back NameTitle ">
              Web Developer
            </p>
          </div>
          <div className="h-svh relative">
            <Orb
              hue={0}
              hoverIntensity={0.2}
              rotateOnHover={true}
              forceHoverState={true}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
