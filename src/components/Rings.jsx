import { Center, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCallback, useRef } from "react";

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture("textures/rings.png");

  useFrame(() => {
    if (refList.current.length === 0) return;

    refList.current.forEach((r, index) => {
      r.rotation.y += 0.01 + index * 0.002;
      r.rotation.x -= 0.01 + index * 0.002;
    });
  });

  return (
    <Center position={position}>
      <group scale={0.4}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
