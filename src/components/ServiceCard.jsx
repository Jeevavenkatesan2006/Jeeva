import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    // Parallax scroll effect
    gsap.to(el, {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: 1,
      },
    });

    // Typewriter animation for description
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
    <div
      ref={cardRef}
      onClick={handleClick}
      className="p-5 rounded-2xl shadow-xl bg-pink-400 backdrop-blur-md border border-b-cyan-400 text-blue-900 cursor-pointer transform transition duration-300 hover:scale-105"
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
      <div
  className="p-3 rounded-lg bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/assets/earth-galaxy.jpg')", // Make sure this path is correct
  }}
>
  <p className="text-sm text-rose-100 mb-4 whitespace-pre-line backdrop-blur-sm bg-black/40 p-2 rounded">
    {typedText}
  </p>

  <div className="text-sm text-white underline hover:text-cyan-300 transition backdrop-blur-sm bg-black/30 p-1 inline-block rounded">
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
