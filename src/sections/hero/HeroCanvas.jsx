import React, { Suspense } from "react";
import HackerRoom from "../../components/HackerRoom";
import CanvasLoader from "../../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../consts";
import Target from "../../components/Target";
import ReactLogo from "../../components/ReactLogo";
import Cube from "../../components/Cube";
import Rings from "../../components/Rings";
import HeroCamera from "../../components/HeroCamera";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const HeroCanvas = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ minWidth: 441, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sized = calculateSizes(isSmall, isMobile, isTablet);
  return (
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
  );
};

export default HeroCanvas;
