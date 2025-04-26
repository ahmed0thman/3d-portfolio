import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../../components/HackerRoom";
import CanvasLoader from "../../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes, words } from "../../consts";
import Target from "../../components/Target";
import ReactLogo from "../../components/ReactLogo";
import Cube from "../../components/Cube";
import Rings from "../../components/Rings";
import HeroCamera from "../../components/HeroCamera";
import Button from "../../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ minWidth: 441, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sized = calculateSizes(isSmall, isMobile, isTablet);

  useGSAP(() => {
    gsap.fromTo(
      ".hero_tag span.block",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2.5, stagger: 0.35, ease: "power2.inOut" }
    );
  });
  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="w-full mx-auto flex flex-col sm:mt-[112px] mt-20 c-space gap-6">
        <p className="sm:text-2xl text-1xl font-medium text-white text-center font-generalsans">
          <span className="mx-1">Welcome, to my Portfolio</span>
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag hero-layout space-y-2">
          <span className="block text-gray-gradient">
            <span className="ms-[-8rem] xl:ms-[-10rem]">Shaping</span>
            <span className="slide">
              <span className="wrapper">
                {words.map((word, key) => (
                  <span
                    key={`${key}-${word.text}`}
                    className="flex items-center md:gap-3 gap-1 pb-2"
                  >
                    <img
                      src={word.imgPath}
                      alt={word.text}
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-gray-gradient"
                    />
                    <span className="text-gray-gradient capitalize">
                      {word.text}
                    </span>
                  </span>
                ))}
              </span>
            </span>
          </span>
          <span className="block text-gray-gradient">
            into Real Projects that Deliver Results
          </span>
        </p>
      </div>
      <div className="w-full h-full absolute flex-grow inset-0">
        <Canvas className="w-full h-full flex-grow">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 18]} />
            <HeroCamera isMobile={isMobile || isSmall}>
              <HackerRoom
                scale={sized.deskScale}
                position={sized.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={sized.targetPosition} />
              <ReactLogo position={sized.reactLogoPosition} />
              <Cube position={sized.cubePosition} />
              <Rings position={sized.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-10 left-0 right-0 w-full z-10 c-space ">
        <a href="#about" className="w-fit">
          <Button
            name="let's work together"
            isBeam
            className="sm:w-fit w-full sm:min-w-96 hover:bg-gray-800 "
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
