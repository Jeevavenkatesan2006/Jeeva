import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Flip from 'gsap/Flip';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
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

gsap.registerPlugin(Flip);

// Dummy categories and project data
const categories = ['All Websites', 'Multi Page Websites', 'Single Page Websites', 'Ecommerce Websites'];
const projects = [
  { id: 1, image: portfolioImg, title:'Portfolio website',category: 'Single Page Websites' },
  { id: 2, image:realestateImg , title:'Real Estate website', category: 'Multi Page Websites' },
  { id: 3, image: fooddeliveryImg, title:'Food delivery website', category: 'Single Page Websites' },
  { id: 4, image:hikingImg , title:'Hiking website', category: 'Ecommerce Websites' },
  { id: 5, image: imageclarifyImg, title:'Imageclarify website',category: 'Ecommerce Websites' },
  { id: 6, image:landingpageImg, title:'landingpage website', category: 'Ecommerce Websites' },
  { id: 7, image: saasImg, title:'saas website', category: 'Ecommerce Websites' },
  { id: 8, image:weatherImg , title:'weather website', category: 'Ecommerce Websites'},
  { id: 9, image:videostreamImg , title:'videostream website', category: 'Single Page Websites' },
  { id: 10, image:travelenjoyImg , title:'travelenjoy website',category: 'Single Page Websites'  },
  { id: 11, image:socialmediaImg ,title:'socialmedia website', category: 'Single Page Websites' },
  { id: 12, image: faceImg,title:'face website',category: 'Single Page Websites'  },
  { id: 13, image: fasionImg,title:'fasion',category: 'Single Page Websites' },
  { id: 14, image: creativedesignImg, title:'creativedesign website',category: 'Single Page Websites'  },
  { id: 15, image: coronoImg, title:'Health website',category: 'Multi Page Websites' },
  { id: 16, image:  musicImg, title:' music website', category: 'Multi Page Websites' },
   { id: 17, image: pricepredictionImg,title:'priceprediction website', category: 'Multi Page Websites' },
    { id: 18, image: electricImg, title:'electric website',category: 'Multi Page Websites'  },
 { id: 19, image: normalImg, title:'web App website', category: 'Multi Page Websites' },
 { id: 20, image:blackmanImg , title:'Land website', category: 'Multi Page Websites' },


  
];

// Floating 3D background
const FloatingCubes = () => {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.getElapsedTime() * 0.08;
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 40,
          ]}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#9333ea" emissive="#a855f7" emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

const Background3D = () => (
  <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={0.6} />
    <FloatingCubes />
    <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
  </Canvas>
);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All Websites');
  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const titleRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);
  useLayoutEffect(() => {
    const state = Flip.getState('.masonry-item');
    const filtered =
      activeFilter === 'All Websites'
        ? projects
        : projects.filter(p => p.category === activeFilter);
    setDisplayedProjects(filtered);

    Flip.from(state, {
      duration: 0.6,
      ease: 'power2.inOut',
      absolute: true,
      stagger: 0.03,
    });
  }, [activeFilter]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <Background3D />
      </div>

      {/* Foreground */}
      <div className="relative z-10 px-6 pt-28 pb-20 backdrop-blur-sm bg-black/60">
  <h1
    ref={titleRef}
    className="text-4xl md:text-5xl font-bold text-center mb-10 text-fuchsia-400"
  >
    Discover Our Web Design Creations
  </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 font-semibold rounded-full transition duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div
          ref={gridRef}
          className="columns-2 sm:columns-3 lg:columns-10 gap-5 space-y-2 space-x-2"
        >
          {displayedProjects.map(project => (
            <div
              key={project.id}
              className="masonry-item break-inside-avoid bg-white rounded-xl shadow-lg overflow-hidden transform-gpu hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
