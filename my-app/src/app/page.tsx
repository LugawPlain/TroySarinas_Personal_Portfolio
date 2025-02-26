import Image from "next/image";
import HeaderNav from "../../components/HeaderNav";
import Orb from "../../reactbits/backgrounds/Orb/Orb";
export default function Home() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <main className="h-svh w-full">
        <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 relative w-fit text-center">
          <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
            <h1 className="text-9xl text-nowrap font-clashDisplay ">
              Troy sarinas
            </h1>
            <p className="opacity-25">Web Developer</p>
          </div>
          <div className="w-[800px] h-[800px] relative">
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
