import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";

const SkillModel = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  //   useEffect(function(){},[])
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 15, 20]} intensity={2} />
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
      <Float speed={8.5} rotationIntensity={0.5} floatIntensity={1}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default SkillModel;
