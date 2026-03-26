"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
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
            <meshStandardMaterial color="#ffffff" wireframe opacity={0.2} transparent />
          </Icosahedron>
        </Float>

        <Float speed={2.5} rotationIntensity={1} floatIntensity={1}>
          <Icosahedron args={[3, 4]} position={[-2, 3, -5]}>
             <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
          </Icosahedron>
        </Float>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
    </div>
  );
}
