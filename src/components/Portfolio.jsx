import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";


// === Flythrough 3D Background ===
const FlythroughScene = () => {
  const cameraRef = useRef();
  const meshRefs = useRef([]);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z -= 0.1;
      if (cameraRef.current.position.z < -100) {
        cameraRef.current.position.z = 10;
      }
    }
  });

  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 0, 10]} fov={75} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {[...Array(150)].map((_, i) => (
        <mesh
          key={i}
          ref={(ref) => (meshRefs.current[i] = ref)}
          position={[
            Math.random() * 20 - 10,
            Math.random() * 20 - 10,
            -Math.random() * 100,
          ]}
        >
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color={`hsl(${Math.random() * 360}, 100%, 70%)`}
          />
        </mesh>
      ))}
    </>
  );
};

// === Image Assets ===
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

const categories = [
  "All Websites",
  "Multi Page Websites",
  "Single Page Websites",
  "Ecommerce Websites",
];

const projects = [
  { id: 1, image: portfolioImg, title: "Portfolio website", category: "Single Page Websites" },
  { id: 2, image: realestateImg, title: "Real Estate website", category: "Multi Page Websites" },
  { id: 3, image: fooddeliveryImg, title: "Food delivery website", category: "Single Page Websites" },
  { id: 4, image: hikingImg, title: "Hiking website", category: "Ecommerce Websites" },
  { id: 5, image: imageclarifyImg, title: "Image clarify website", category: "Ecommerce Websites" },
  { id: 6, image: landingpageImg, title: "Landing page website", category: "Ecommerce Websites" },
  { id: 7, image: saasImg, title: "SaaS website", category: "Ecommerce Websites" },
  { id: 8, image: weatherImg, title: "Weather website", category: "Ecommerce Websites" },
  { id: 9, image: videostreamImg, title: "Video stream website", category: "Single Page Websites" },
  { id: 10, image: travelenjoyImg, title: "Travel enjoy website", category: "Single Page Websites" },
  { id: 11, image: socialmediaImg, title: "Social media website", category: "Single Page Websites" },
  { id: 12, image: faceImg, title: "Face recognition website", category: "Single Page Websites" },
  { id: 13, image: fasionImg, title: "Fashion website", category: "Single Page Websites" },
  { id: 14, image: creativedesignImg, title: "Creative design website", category: "Single Page Websites" },
  { id: 15, image: coronoImg, title: "Health website", category: "Multi Page Websites" },
  { id: 16, image: musicImg, title: "Music website", category: "Multi Page Websites" },
  { id: 17, image: pricepredictionImg, title: "Price prediction website", category: "Multi Page Websites" },
  { id: 18, image: electricImg, title: "Electric website", category: "Multi Page Websites" },
  { id: 19, image: normalImg, title: "Web App website", category: "Multi Page Websites" },
  { id: 20, image: blackmanImg, title: "Land website", category: "Multi Page Websites" },
];

const scatteredVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: [-80, 80, -40, 40, 0][i % 5],
    y: [-60, -60, 60, 60, 100][i % 5],
    rotate: [-15, 15, -10, 10, 0][i % 5],
    scale: 0.9,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All Websites");
  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const containerRef = useRef();

  useLayoutEffect(() => {
    const filtered =
      activeFilter === "All Websites"
        ? projects
        : projects.filter((p) => p.category === activeFilter);
    setDisplayedProjects(filtered);
  }, [activeFilter]);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        <FlythroughScene />
      </Canvas>

      <div
        ref={containerRef}
        className="relative z-10 pt-28 pb-20 px-4 md:px-10 bg-[#0d0d0d]/90"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-fuchsia-400 mb-12">
          My Portfolio – Web Design Creations
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 font-semibold rounded-full transition duration-300 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Scattered Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          initial="hidden"
          animate="visible"
        >
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={scatteredVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="rounded-3xl"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <div className="w-full h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
