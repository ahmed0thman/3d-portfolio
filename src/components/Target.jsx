import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Target = (props) => {
  const { scene } = useGLTF("/models/target.gltf");
  const targetRef = useRef();

  useFrame(() => {
    if (targetRef.current) {
      targetRef.current.position.y += Math.sin(Date.now() * 0.002) * 0.005;
    }
  });

  return (
    <mesh
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      scale={1.25}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
