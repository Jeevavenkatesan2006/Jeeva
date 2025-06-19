// ServiceCard.jsx
import React, { useEffect, useRef, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

// 3D Galaxy Background Component
const GalaxyBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Stars
          radius={80}
          depth={50}
          count={5000}
          factor={8}
          saturation={0}
          fade
          speed={2}
        />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

const ServiceCard = ({ service }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(el, {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: 1,
      },
    });

    let index = 0;
    const interval = setInterval(() => {
      setTypedText(service.description.slice(0, index));
      index++;
      if (index > service.description.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [service.description]);

  const handleClick = () => {
    gsap.to(cardRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.5,
      onComplete: () => navigate(`/services/${service.id}`),
    });
  };

  return (
    <div className="relative min-h-[200px] rounded-2xl overflow-hidden shadow-xl">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <GalaxyBackground />
      </div>

      {/* Card Content */}
      <div
        ref={cardRef}
        onClick={handleClick}
        className="relative z-10 p-5 bg-black/60 backdrop-blur-sm border border-cyan-400 text-white cursor-pointer transform transition duration-300 hover:scale-105 h-full flex flex-col justify-between"
      >
        {/* Title and icon */}
        <div className="flex items-center gap-3 mb-4">
          {service.titleImage && (
            <img
              src={service.titleImage}
              alt={`${service.title} icon`}
              className="w-20 h-20 object-contain"
            />
          )}
          <h2 className="text-2xl font-semibold">{service.title}</h2>
        </div>

        {/* Typewriter description */}
        <p className="text-sm text-rose-200 mb-4 whitespace-pre-line">{typedText}</p>

        <div className="text-sm text-cyan-300 underline hover:text-white transition">
          Read More →
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    titleImage: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};

export default ServiceCard;
