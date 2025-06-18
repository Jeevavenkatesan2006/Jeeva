import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import serviceData from "../Data/ServiceData";
import ServiceCard from "./ServiceCard";

// Updated Starry Background with Bigger Stars
const StarBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Suspense fallback={null}>
        <Stars
          radius={200}       // How far the stars spread
          depth={80}         // Z-space depth
          count={8000}       // Number of stars
          factor={100}        // ⭐ BIGGER star size factor
          saturation={0}     // White stars
          fade               // Fading edges
          speed={0.6}        // Subtle motion
        />
      </Suspense>
    </Canvas>
  );
};

// Main Service Section Component
const ServiceSection = () => {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background: Star Animation */}
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 py-16 px-8 bg-black/70 backdrop-blur-sm min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
