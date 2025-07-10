// src/components/Loading.jsx

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "./assets/logo2.gif"; // ✅ Make sure no spaces in filename

function Loading() {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8 }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.4"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.4"
      )
      .to(loaderRef.current, {
        opacity: 0,
        y: "-100%",
        duration: 1,
        delay: 0.5,
        onComplete: () => setIsVisible(false),
      });
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 bg-black text-gray-50 flex flex-col items-center justify-center space-y-4 text-center"
    >
      {/* Logo first */}
      <img
        ref={logoRef}
        src={logo}
        alt="Logo"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
      />

      {/* Title */}
      <h1 ref={titleRef} className="text-3xl sm:text-5xl font-semibold">
        Code Developers
      </h1>

      {/* Text */}
      <p ref={textRef} className="text-lg sm:text-xl text-gray-300">
        Crafting Modern Websites
      </p>
    </div>
  );
}

export default Loading;
