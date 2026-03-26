"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function AnimatedGeometry() {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // 1. Scroll-based Rotation
      const targetRotationY = scrollY * 0.002;
      const targetRotationX = scrollY * 0.001;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      
      // 2. Mouse-based Parallax
      const mouseX = (state.pointer.x * Math.PI) / 8;
      const mouseY = (state.pointer.y * Math.PI) / 8;
      
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouseX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, (scrollY * 0.003) + mouseY, 0.05);
    }
    
    if (materialRef.current) {
      // 3. Dynamic mesh distort based on scroll + continuous time
      const targetDistort = 0.3 + (scrollY * 0.00015) + (Math.sin(state.clock.elapsedTime) * 0.1);
      materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, Math.min(targetDistort, 0.8), 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <Icosahedron args={[2, 0]} position={[3, 1, -2]}>
          <meshStandardMaterial color="#2563eb" wireframe opacity={0.3} transparent />
        </Icosahedron>
      </Float>

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <Icosahedron args={[1.5, 0]} position={[-4, -2, -4]}>
          <meshStandardMaterial color="#8b5cf6" wireframe opacity={0.4} transparent />
        </Icosahedron>
      </Float>

      <Float speed={3} rotationIntensity={2.5} floatIntensity={2}>
        <Icosahedron args={[1, 0]} position={[0, -3, 2]}>
          <meshStandardMaterial color="#ffffff" wireframe opacity={0.3} transparent />
        </Icosahedron>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron args={[3, 4]} position={[-2, 3, -5]}>
           <MeshDistortMaterial ref={materialRef} color="#3b82f6" attach="material" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
        </Icosahedron>
      </Float>
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <AnimatedGeometry />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </div>
  );
}
