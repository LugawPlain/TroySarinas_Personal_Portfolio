"use client";
import Particles from "../../reactbits/backgrounds/Particles/Particles";
const Testing = () => {
  return (
    <div className="absolute -z-10 top-0 left-0 w-full h-full">
      <Particles
        particleCount={2000}
        particleSpread={5}
        speed={0.1}
        particleColors={["#FD1F1A", "#FA3316", "#F4AE18", "#FDA316"]}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        particleHoverFactor={1}
        alphaParticles={false}
        disableRotation={true}
        cameraDistance={20}
        sizeRandomness={1}
        className="w-full h-full"
      ></Particles>
    </div>
  );
};
export default Testing;
