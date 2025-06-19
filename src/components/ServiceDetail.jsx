import React, { Suspense, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import serviceData from "../Data/ServiceData";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Floating digital flower-like particles
const FloatingFlowers = () => {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  const count = 120;
  const positions = Array.from({ length: count }, () => [
    (Math.random() - 0.5) * 40,
    (Math.random() - 0.5) * 30,
    (Math.random() - 0.5) * 40,
  ]);

  return (
    <group ref={groupRef}>
      {positions.map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <dodecahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial
            color="#FD1AC4FF"
            emissive="#F014ECFF"
            emissiveIntensity={1}
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
};


// Canvas 3D background
const FlowerBackground = () => (
  <Canvas camera={{ position: [0, 0, 25], fov: 70 }}>
    <ambientLight intensity={0.4} />
    <directionalLight intensity={0.6} position={[5, 10, 5]} />
    <Suspense fallback={null}>
      <FloatingFlowers />
    </Suspense>
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
  </Canvas>
);

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-center text-red-500 py-20">
        Service not found
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-visible bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <FlowerBackground />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center backdrop-blur-sm bg-black/70">
        <h1 className="text-4xl font-bold mb-6 text-pink-600">{service.title}</h1>
        {service.icon && (
          <img
            src={service.icon}
            alt={service.title}
            className="w-20 h-20 mb-6"
          />
        )}
        <p className="max-w-2xl text-pink-100 text-lg leading-relaxed mb-6">
          {service.description}
        </p>
        {service.benefits && (
  <div className="mt-10 text-left max-w-2xl text-pink-100">
    <h2 className="text-2xl font-bold text-pink-400 mb-4">Benefits</h2>
    <ul className="space-y-3">
      {service.benefits.map((point, idx) => (
        <li
          key={idx}
          className="relative pl-6 animate-fade-in-up"
          style={{ animationDelay: `${idx * 0.3}s` }}
        >
          <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-pink-400"></span>
          {point}
        </li>
      ))}
    </ul>
  </div>
)}


        {/* Previous Page Button */}
        <button
  onClick={() => navigate(-1)}
  className="mt-6 px-6 py-2 text-white font-semibold rounded-full transition-all duration-500 
             bg-gradient-to-r from-pink-500 to-purple-600 
             hover:from-purple-600 hover:to-blue-600 
             hover:scale-105 hover:text-yellow-200 shadow-lg"
>
  ← Back to Services
</button>

      </div>
    </div>
  );
};

export default ServiceDetail;
