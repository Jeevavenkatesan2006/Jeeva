import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

// === 3D Animated Sea Background ===
const SeaPlane = () => {
  const meshRef = useRef();
  const [geometry] = useState(() => new THREE.PlaneGeometry(100, 100, 100, 100));
  const [positions] = useState(() => {
    const pos = geometry.attributes.position.array;
    const original = Float32Array.from(pos);
    return original;
  });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const pos = geometry.attributes.position.array;
    for (let i = 0; i < pos.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      pos[i + 2] = Math.sin(x * 0.2 + time) * 0.5 + Math.cos(y * 0.2 + time) * 0.5;
    }
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <primitive object={geometry} attach="geometry" />
      <meshStandardMaterial
        color="#3b82f6"
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  );
};

const SeaBackground = () => (
  <Canvas camera={{ position: [0, 10, 20], fov: 50 }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <SeaPlane />
    <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
  </Canvas>
);

// === Pricing Table Content ===
const pricingPlans = [
  {
    price: "₹6000",
    title: "Single Page Website",
    timeline: "Timeline to Complete: 2 Days",
    features: [
      "Free Domain Name",
      "Free Hosting",
      "Free Responsive Design",
      "Google My Business Integration",
      "SEO Setup",
      "1-Year Maintenance",
      "Premium Friendly Layout",
      "One Page Website",
      "Digital Visiting Card",
    ],
    buttonText: "Choose Plan",
  },
  {
    price: "₹8000",
    title: "Multi Page Website 5 Pages",
    timeline: "Timeline to Complete: 3 Days",
    features: [
      "Free Domain Name",
      "Free Hosting",
      "Free Responsive Design",
      "Google My Business Integration",
      "SEO Setup",
      "1-Year Maintenance",
      "Enquiry Form",
      "Premium Friendly Layout",
      "Digital Visiting Card",
    ],
    buttonText: "Choose Plan",
  },
  {
    price: "₹12000",
    title: "Premium Website 10 Pages",
    timeline: "Timeline to Complete: 5 Days",
    features: [
      "Free Domain Name",
      "Free Hosting",
      "Free Responsive Design",
      "Google My Business Integration",
      "Strong Keyword SEO Setup",
      "1-Year Maintenance",
      "WhatsApp Button Integration",
      "Enquiry Form",
      "Premium Friendly Layout",
      "Digital Visiting Card",
    ],
    buttonText: "Choose Plan",
  },
];

// === Main Component ===
const PricingTable = () => {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* 3D Sea Background */}
      <div className="absolute inset-0 z-0">
        <SeaBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-20 backdrop-blur-md bg-black/60">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-2 text-center text-fuchsia-400"
        >
          We give you best
          <br />
          <span className="text-white">Price Table Package</span>
        </h2>
        <p className="text-center text-gray-300 mb-4">
          Best Plan for Website Design & Branding & Business Presence
        </p>
        <div className="flex justify-center gap-4 mb-10 flex-wrap text-sm font-semibold">
          <span className="text-pink-400 underline cursor-pointer">Combo Website Designing</span>
          <span className="text-purple-400 underline cursor-pointer">Combo Website Renewal</span>
        </div>

        {/* Cards */}
        <div className="flex justify-center flex-wrap gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-black/80 text-white w-full max-w-sm rounded-xl shadow-2xl p-6 border-2 border-transparent hover:border-fuchsia-500 transition duration-300 backdrop-blur"
            >
              <div className="text-3xl font-bold mb-2 text-fuchsia-400">{plan.price}</div>
              <div className="text-lg font-semibold mb-1">{plan.title}</div>
              <div className="text-xs text-gray-400 mb-4">{plan.timeline}</div>
              <ul className="text-left mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-md font-semibold hover:opacity-90 transition">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
