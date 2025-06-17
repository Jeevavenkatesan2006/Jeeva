import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import webDesignImage from "../assets/web design.png";
import digitalmarketImage from "../assets/digital market.png";
import graphicdesignerImage from "../assets/graphic designer.jpg";
import videoadImg from "../assets/video ad.jpg";
import googlebusinessImage from "../assets/google business.jpg";
import LocalSEOImage from "../assets/Local SEO.jpg";

// NEW: logo for Web Design
import webLogo from "../assets/web logo.png";

const services = [
  { id: 1, title: "Web Design", image: webDesignImage, logo: webLogo },
  { id: 2, title: "Digital Marketing", image: digitalmarketImage },
  { id: 3, title: "Graphic Designing", image: graphicdesignerImage },
  { id: 4, title: "Video AD", image: videoadImg },
  { id: 5, title: "Google My Business", image: googlebusinessImage },
  { id: 6, title: "Local SEO", image: LocalSEOImage },
]

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Title Animation
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector("h1"),
        { y: -100, rotation: -720,opacity: 0 },
        { y: 0, rotation: 0,opacity: 1, duration: 2, ease: "power4.out" }
      );
    }
  }, []);

  // Cards Animation
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 100, scale: 0.5,opacity: 0 },
          { y: 0, scale: 1,opacity: 1, duration: 1, ease: "power4.out", delay: i * 0.2 }
        );
      }
    });
  }, []);

  // Magnet Effect
  useEffect(() => {
    const cards = cardsRef.current;

    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardX = rect.left + rect.width/2;
          const cardY = rect.top + rect.height/2;

          const distanceX = e.clientX - cardX;
          const distanceY = e.clientY - cardY;

          const distance = Math.sqrt(distanceX**2 + distanceY**2);

          if (distance < 100) {
            gsap.to(card, {
              x: distanceX * 0.3,
              y: distanceY * 0.3,
              duration: 0.5,
              ease: "power4.out",
            });
          } else {
            gsap.to(card, {
              x: 0,
              y: 0,
              duration: 0.5,
              ease: "power4.out",
            });
          }
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col items-center justify-center px-5 py-20 relative overflow-hidden z-0">
      {/* Dual gradient background */}
      <div
        className="absolute inset-0 z-[-1]"
        style={{ background: "linear-gradient(45deg, #B90505FF, #6B7171FF)" }}>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-semibold text-fuchsia-600 mb-12">
        Our Services
      </h1>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-gray-100 p-4 rounded-l-4xl shadow-md transform transition transform hover:shadow-2xl hover:-translate-y-2 hover:rotate-x-6 hover:rotate-y-6 hover:bg-gray-50 text-center will-change-transform max-w-xs perspective-1000 relative"
            style={{ transformStyle: "preserve-3d" }}>
            {/* Web logo for Web Design Card */}
            {item.logo && (
              <img src={item.logo}
                   alt={`${item.title} logo`}
                   className="absolute top-2 left-2 w-12 h-12 transform translate-z-20 shadow-md rounded-full" />
            )}

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-2 transform translate-z-20">
              {item.title}
            </h2>

            {/* Image or Description */}
            {item.image ? (
              <img src={item.image} alt={`${item.title}`} className="rounded-3xl top-5 left-5 shadow-md transform translate-z-20" />
            ) : (
              <p className="text-gray-500 transform translate-z-20">
                {item.description}
              </p>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
