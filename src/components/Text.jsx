/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

// ✅ Import images properly
import bottomLeftPicture from "../assets/noteimage.png";
import markerPicture from "../assets/marker.png";
import tab1Picture from "../assets/tabpen.png";
import treePicture from "../assets/tree.png";
import googlePicture from "../assets/google.png";
import parkerPicture from "../assets/parker.png";

const texts = [
  "Start Creating!!!",
  "Responsive Design 🪂",
  "Digital Marketing 📊",
  "Web design 👨🏻‍💻",
  "Graphic Designing 🎨",
  "E-Commerce 📲",
];

const HeroSection = () => {
  const bgRef = useRef(null);
  const pictureRef = useRef(null);
  const markerRef = useRef(null);
  const tab1Ref = useRef(null);
  const treeRef = useRef(null);
  const googleRef = useRef(null);
  const textRef = useRef(null);
  const parkerRef = useRef(null);
  const beBraveRef = useRef(null);

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    gsap.timeline({ repeat: -1, yoyo: true })
      .to(bgRef.current, { backgroundColor: "#3ED112FF", duration: 5, ease: "sine.inOut" })
      .to(bgRef.current, { backgroundColor: "#1679F3FF", duration: 5, ease: "sine.inOut" });
  }, []);

  useEffect(() => {
    if (pictureRef.current) {
      gsap.fromTo(
        pictureRef.current,
        { x: -300, y: 500, opacity: 0, rotate: -45 },
        {
          x: -100,
          y: 100,
          opacity: 1,
          rotate: 0,
          duration: 10,
          ease: "power3.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    if (parkerRef.current) {
      gsap.fromTo(
        parkerRef.current,
        { x: -100, y: 100, rotation: 45, opacity: 0 },
        { x: 0, y: -100, rotation: -45, opacity: 1, duration: 10, ease: "power3.out" }
      );
    }
  }, []);

  gsap.fromTo(
    parkerRef.current,
    { y: -500, rotation: -720, opacity: 0 },
    { y: 0, rotation: 0, opacity: 1, duration: 2, ease: "power3.out" }
  );

  useEffect(() => {
    if (markerRef.current) {
      gsap.fromTo(
        markerRef.current,
        { x: -300, y: 500, opacity: 0, rotate: -45 },
        {
          x: -80,
          y: 80,
          opacity: 1,
          rotate: 0,
          duration: 10,
          ease: "power3.out",
        }
      );
    }
  }, []);

  gsap.fromTo(
    markerRef.current,
    { y: -500, rotation: -720, opacity: 0 },
    { y: 0, rotation: 0, opacity: 1, duration: 2, ease: "power3.out" }
  );

  useEffect(() => {
    if (tab1Ref.current) {
      gsap.fromTo(
        tab1Ref.current,
        { x: 300, y: 500, opacity: 0, rotate: -45 },
        {
          x: 100,
          y: 100,
          opacity: 1,
          rotate: 0,
          duration: 10,
          ease: "power3.out",
        }
      );
    }
  }, []);

  gsap.fromTo(
    tab1Ref.current,
    {
      y: -500,
      rotation: -720,
      opacity: 0,
      scale: 0,
      filter: "blur(20px)",
    },
    {
      y: 0,
      rotation: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 2,
      ease: "power4.out",
    }
  );

  useEffect(() => {
    if (treeRef.current) {
      gsap.fromTo(
        treeRef.current,
        { x: 300, y: -500, opacity: 10, rotate: 45 },
        {
          x: 100,
          y: -110,
          opacity: 10,
          rotate: 40,
          duration: 10,
          ease: "power3.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    if (googleRef.current) {
      gsap.fromTo(
        googleRef.current,
        { scale: 0, rotation: -720, opacity: 0, x: -500 },
        { scale: 1, rotation: 0, opacity: 1, x: 0, duration: 10, ease: "power1.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      );
    }
  }, [textIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (beBraveRef.current) {
      beBraveRef.current.innerHTML = beBraveRef.current.textContent
        .split("")
        .map((letter) => `<span class='letter'>${letter}</span>`)
        .join("");

      gsap.fromTo(
        beBraveRef.current,
        { y: -500, rotation: -720, opacity: 0 },
        { y: 0, rotation: 0, opacity: 1, duration: 10, ease: "power6.out" }
      );

      gsap.fromTo(
        beBraveRef.current.querySelectorAll(".letter"),
        { y: 100, opacity: 10, rotation: -95 },
        {
          y: 0,
          opacity: 10,
          rotation: 5,
          stagger: 0.1,
          duration: 10,
          ease: "back.out(1.7)",
        }
      );
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center z-0 pt-[160px]">
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full z-[-1]"
        style={{ backgroundColor: "#0C3DEFFF" }}
      ></div>

      <h1
        ref={textRef}
        className="text-black text-1xl md:text-2xl font-semibold leading-tight bottom-0 top-0"
      >
        {texts[textIndex]}
      </h1>

      <div className="absolute bottom-0 left-0 ml-5 mb-5 z-10">
        <img
          ref={pictureRef}
          src={bottomLeftPicture}
          alt="Bottom Left Picture"
          className="w-90 h-100 transform"
        />
        <img
          ref={parkerRef}
          src={parkerPicture}
          alt="Parker"
          className="absolute bottom-0 left-0 w-0 h-auto z-10 transform rotate-30"
        />
        <img
          ref={markerRef}
          src={markerPicture}
          alt="Marker"
          className="absolute bottom-20 left-20 w-60 h-auto z-20 transform rotate-30"
        />
      </div>

      <div className="absolute bottom-0 right-0 mr-5 mb-5 z-10">
        <img
          ref={tab1Ref}
          src={tab1Picture}
          alt="Tab 1"
          className="w-90 h-100 transform rotate-12"
        />
      </div>

      <div className="absolute top-0 right-0 mr-5 mt-5 z-10">
        <img
          ref={treeRef}
          src={treePicture}
          alt="Tree"
          className="w-90 h-100 transform -rotate-20"
        />
      </div>

      <div className="absolute transform -translate-x-1/2 -translate-y-1/4 left-1/2 top-1/3 z-50">
        <img
          ref={googleRef}
          src={googlePicture}
          alt="Google"
          className="w-80 h-auto"
        />
      </div>

      <h2
        ref={beBraveRef}
        className="text-black font-extrabold mt-4 text-4xl"
      >
        Be Brave
      </h2>
    </section>
  );
};

export default HeroSection;
