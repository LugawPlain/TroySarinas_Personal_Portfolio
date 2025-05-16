"use client";
import Particles from "../../reactbits/backgrounds/Particles/Particles";
const Testing = () => {
  return (
    <div className="fixed -z-10 top-0 left-0 w-full h-full">
      <Particles
        particleCount={100}
        particleSpread={10}
        speed={0.2}
        particleColors={["#447d6a", "#5a9c85", "#2e5747"]}
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
