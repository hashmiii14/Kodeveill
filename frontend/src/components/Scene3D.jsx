import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Wireframe, MeshDistortMaterial } from "@react-three/drei";
import { useTheme } from "@/context/ThemeContext";

function GeometricCore() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={isDark ? "#FAFAFA" : "#09090B"}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          wireframe={true}
          distort={0.3}
          speed={2}
        />
      </mesh>
      
      {/* Inner solid core */}
      <mesh scale={0.8}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#6366F1"
          metalness={0.5}
          roughness={0.2}
          emissive="#6366F1"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export const Scene3D = () => {
  return (
    <div className="h-full w-full absolute inset-0 cursor-move z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <GeometricCore />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
