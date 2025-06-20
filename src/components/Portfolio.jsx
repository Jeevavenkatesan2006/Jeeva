import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';

import portfolioImg from "../assets/portfolio.jpg";
import realestateImg from "../assets/real estate.jpg";
import fooddeliveryImg from "../assets/food delivery.jpg";
import hikingImg from "../assets/hiking.jpg";
import imageclarifyImg from "../assets/image clarify.jpg";
import landingpageImg from "../assets/landing page.jpg";
import saasImg from "../assets/saas.jpg";
import weatherImg from "../assets/weather.jpg";
import videostreamImg from "../assets/video stream.jpg";
import travelenjoyImg from "../assets/travel enjoy.jpg";
import socialmediaImg from "../assets/social media.jpg";
import faceImg from "../assets/face.jpg";
import fasionImg from "../assets/fasion.jpg";
import creativedesignImg from "../assets/creative design.jpg";
import coronoImg from "../assets/corono.jpg";
import musicImg from "../assets/music.jpg";
import pricepredictionImg from "../assets/price prediction.jpg";
import electricImg from "../assets/electric .jpg";
import normalImg from "../assets/normal.jpg";
import blackmanImg from "../assets/black man.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, image: portfolioImg, title: 'Portfolio website', category: 'Single Page Websites' },
  { id: 2, image: realestateImg, title: 'Real Estate website', category: 'Multi Page Websites' },
  { id: 3, image: fooddeliveryImg, title: 'Food delivery website', category: 'Single Page Websites' },
  { id: 4, image: hikingImg, title: 'Hiking website', category: 'Ecommerce Websites' },
  { id: 5, image: imageclarifyImg, title: 'Image clarify website', category: 'Ecommerce Websites' },
  { id: 6, image: landingpageImg, title: 'Landing page website', category: 'Ecommerce Websites' },
  { id: 7, image: saasImg, title: 'SaaS website', category: 'Ecommerce Websites' },
  { id: 8, image: weatherImg, title: 'Weather website', category: 'Ecommerce Websites' },
  { id: 9, image: videostreamImg, title: 'Video stream website', category: 'Single Page Websites' },
  { id: 10, image: travelenjoyImg, title: 'Travel enjoy website', category: 'Single Page Websites' },
  { id: 11, image: socialmediaImg, title: 'Social media website', category: 'Single Page Websites' },
  { id: 12, image: faceImg, title: 'Face recognition website', category: 'Single Page Websites' },
  { id: 13, image: fasionImg, title: 'Fashion', category: 'Single Page Websites' },
  { id: 14, image: creativedesignImg, title: 'Creative design website', category: 'Single Page Websites' },
  { id: 15, image: coronoImg, title: 'Health website', category: 'Multi Page Websites' },
  { id: 16, image: musicImg, title: 'Music website', category: 'Multi Page Websites' },
  { id: 17, image: pricepredictionImg, title: 'Price prediction website', category: 'Multi Page Websites' },
  { id: 18, image: electricImg, title: 'Electric website', category: 'Multi Page Websites' },
  { id: 19, image: normalImg, title: 'Web App website', category: 'Multi Page Websites' },
  { id: 20, image: blackmanImg, title: 'Land website', category: 'Multi Page Websites' },
];

const FloatingCubes = () => {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          position={[(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 30]}
        >
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#9333ea" emissive="#a855f7" emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

const Background3D = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="absolute inset-0 z-0">
      {inView && (
        <Canvas camera={{ position: [0, 0, 20], fov: 60 }} dpr={0.6}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 5]} intensity={0.6} />
          <FloatingCubes />
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        </Canvas>
      )}
    </div>
  );
};

const Portfolio = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.defaults({ ease: "expo.out", duration: 2 });
    cardRefs.current.forEach((el, i) => {
      const x = (Math.random() - 0.5) * 800;
      const y = (Math.random() - 0.5) * 400;
      const rotation = (Math.random() - 0.5) * 360;
      gsap.fromTo(
        el,
        { opacity: 0, x, y, rotationZ: rotation, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotationZ: 0,
          scale: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1.5,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Background3D />

      <div className="relative z-10 backdrop-blur-sm bg-black/70 pt-28 pb-20 px-4 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-fuchsia-400 mb-20">
          My Portfolio – Web Design Creations
        </h1>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={el => (cardRefs.current[i] = el)}
              className="flex justify-center items-center min-h-[65vh]"
            >
              <div className="w-11/12 sm:w-4/5 md:w-3/4 bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-700 hover:scale-105">
                <div className="w-full h-[50vh] mx-auto mt-4 rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-extrabold text-gray-800">{project.title}</h3>
                  <p className="text-md text-gray-600 mt-2">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
