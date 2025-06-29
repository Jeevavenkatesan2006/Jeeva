import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import serviceData from "../Data/ServiceData";
import ServiceCard from "./ServiceCard";
import CustomCusor from "./CustomCursor";

// Starry 3D Background
const StarBackground = () => {
  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Suspense fallback={null}>
        <Stars
          radius={150}      // Radius of star field
          depth={50}        // Depth into z-space
          count={6000}      // Number of stars
          factor={80}       // Size of stars
          saturation={0}    // White stars
          fade              // Smooth fade on edges
          speed={0.5}       // Slow drift
        />
      </Suspense>
    </Canvas>
  );
};

const ServiceSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* Starry Animated Background */}
      <div className="absolute inset-0 -z-10">
        <StarBackground />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-6 py-20 bg-black/70 backdrop-blur-sm">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-300 mb-12">
          Our Services
        </h2>

        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
