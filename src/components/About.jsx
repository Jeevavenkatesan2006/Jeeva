import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "../assets/mans.png";
import VanillaTilt from "vanilla-tilt";
// Three.js
import * as THREE from "three";
import Loading from "../components/Loading";

gsap.registerPlugin(ScrollTrigger);

const useTypingEffect = (text, speed = 30) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));

      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};

const AboutSection = () => {
  const heading = useTypingEffect("Building Brands, Growing Together.", 25);

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef([]);

  const [startCounts, setStartCounts] = useState([false, false, false, false]);

  // 3D Office Background
  const canvasRef = useRef(null);
  let renderer, camera, scene, cubes, animationId;

  useEffect(() => {
    // Set up scene
    const canvas = canvasRef.current;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.shadowMap.enabled = true;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    scene = new THREE.Scene();

    // Camera
    // eslint-disable-next-line react-hooks/exhaustive-deps
    camera = new THREE.PerspectiveCamera(60, canvas.clientWidth/canvas.clientHeight, 0.1, 1000);
    camera.position.z = 30;
    camera.position.y = 15;

    // Light
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    const point = new THREE.PointLight(0xffcc99, 1);
    point.position.set(10, 20, 10);
    point.castShadow = true;
    scene.add(point);

    // Animated cubes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    cubes = [];

    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshPhongMaterial({ color: new THREE.Color().setHSL(Math.random(), 1, 0.5), shininess: 100 });
      const box = new THREE.Mesh(geometry, material);
      box.position.x = (Math.random() - 0.5) * 50;
      box.position.z = (Math.random() - 0.5) * 50;
      box.position.y = Math.random() * 20;

      box.rotation.x = Math.random() * Math.PI * 2;
      box.rotation.y = Math.random() * Math.PI * 2;

      box.castShadow = true;

      scene.add(box);
      cubes.push(box);
    }

    // Animate
    function animate(now) {
      cubes.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.02;

        // slowly move up and down
        cube.position.y += Math.sin(now * 0.0005) * 0.01;
      });

      renderer.render(scene, camera);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      animationId = requestAnimationFrame(animate);
    }
    animate(performance.now());

    // Handle resize
    window.addEventListener("resize", onResize);

    function onResize(){
      camera.aspect = canvas.clientWidth/canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    }

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useLayoutEffect(() => {
    if (VanillaTilt && imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: 25,
        speed: 500,
        glare: true,
        "max-glare": 0.2,
        perspective: 1000,
        scale: 1.02,
      });
    }

    const ctx = gsap.context(() => {
      // Section wrapper
      gsap.fromTo(sectionRef.current, {opacity: 0, y: 100},
        {opacity: 1, y: 0, duration: 1.5, ease: "power4.out", scrollTrigger: {trigger: sectionRef.current, start: "top 80%"}});

      // Image with coin flip
      gsap.to(imageRef.current, {
        rotationY: 720,
        transformOrigin:'center center',
        ease:'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start:'top bottom',
          end:'bottom top',
          scrub: true,
        },
      });

      // Text elements with flip-up
      gsap.fromTo(contentRef.current.children, 
        {opacity: 0, rotationY: 90, transformOrigin:'left center', filter:'blur(20px)'}, 
        {opacity: 1, rotationY: 0, filter:'blur(0)', duration: 1.5, ease:'power4.out', stagger: 0.5,
          transformOrigin:'left center',
          scrollTrigger: {trigger: sectionRef.current, start:'top 80%'}
        });

      // Animated text fill
      gsap.to(".animated-text", {
        backgroundPosition: "200% center",
        ease: "linear",
        repeat: -1,
        duration: 5,
      });

      // Zoom in and out animation for text
      gsap.to(".animated-text", {
        scale: 1.05,
        transformOrigin: "center center",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        duration: 3,
      });

      // Stats with matte/blur
      statsRef.current.forEach((el, i) => {
        gsap.fromTo(el, 
          {opacity: 0, rotationY: 90, filter:'blur(20px)', transformOrigin:'bottom center'},
          {
           opacity: 1,
            rotationY: 0,
            filter:'blur(0)', 
            transformOrigin:'bottom center',
            duration: 1.5,
            ease:'power4.out',
            delay: i * 0.5,
            scrollTrigger: {
              trigger: el,
              start:'top 90%', 
              toggleActions:'play none none none',
              onEnter: () =>
                setStartCounts((prev) => {
                    const updated = [...prev];
                    updated[i] = true;
                    return updated;
                })
            },
          });
      });

    }, sectionRef);

   
    
  


    return () => ctx.revert();
  }, []);

  //zoom in effects
  gsap.to(".animated-text", {
  scale: 1.07,
  transformOrigin: "center center",
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  duration: 1,
});


  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full min-h-screen px-6 py-32 md:px-20 overflow-hidden bg-[#080014]">
      {/* 3D Office Background Canvas*/}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10 w-full h-full">
      </canvas>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-16 justify-between items-center">
        <div ref={imageRef} className="rounded-2xl shadow-2xl w-full md:w-1/2 max-w-[900px] px-4 transform-gpu">
          <img src={aboutImage} alt="About" className="rounded-2xl shadow-2xl w-full h-auto transform-gpu" />
          {/* Animated Text Fill */}
          <div className="animated-text mt-10 text-5xl md:text-6xl font-extrabold text-center leading-tight">
            10+ Years of Experience
          </div>
        </div>

        <div ref={contentRef} className="w-full md:w-1/2 p-10 rounded-3xl shadow-xl glassmorphism">
          <h2 className="animated-text text-4xl md:text-5xl font-semibold mb-6 leading-snug">
            {heading}
          </h2>
          <p className="animated-text text-cyan-200  mb-4 leading-relaxed">
            At Web Makers, we offer more than just website design and development.
            We enhance your business, online presence, 
            and brand identity through expert web design and digital marketing strategies.
          </p>
          <p className="animated-text text-cyan-200 leading-relaxed">
            I’ve led 150+ digital projects across various industries, collaborating closely with
            startups, SMEs, and global enterprises. My strength lies in balancing aesthetics and
            functionality, ensuring every project resonates with its audience while maintaining
            technical robustness. Clients appreciate my collaborative approach, strategic thinking,
            and commitment to quality — attributes that consistently lead to repeat partnerships.
          </p>
          <p className="animated-text text-cyan-100 leading-relaxed mt-4">
            From implementing GSAP-powered motion to engineering robust React ecosystems with Tailwind,
            I stay at the forefront of modern web practices. Beyond code, I enjoy mentoring young devs,
            contributing to open-source, and pushing the limits of what’s possible.
            Let’s build something remarkable together — something that doesn’t just work, but inspires.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-gray-500">
        {[ 
          { end: 150, suffix: "+", label: "Projects" },
          { end: 10, suffix: "+", label: "Years" },
          { end: 40, suffix: "+", label: "Clients" },
          { end: 12, suffix: "+", label: "Countries" },
        ].map((stat, i) => (
          <div
            key={i}
            ref={(el) => (statsRef.current[i] = el)}
            className="bg-gray-900/60 border border-gray-500/20 rounded-2xl backdrop-blur-md py-8 px-6 text-center shadow-lg">
            <div className="animated-text text-4xl font-semibold">
              {startCounts[i] && (
                <CountUp end={stat.end} duration={10} useEasing={true} separator="," />
              )}

              {stat.suffix}
            </div>
            <div className="animated-text text-gray-50/80 text-lg mt-2">
              {stat.label}
            </div>
          </div>
        ))}

      </div>

      {/* Animated Text CSS */}
      <style>{`
        .animated-text {
          background-image: linear-gradient(90deg, #FB0CB3FF, #85E3F8FF, #ff7676);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientMove 5s linear infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
      `}</style>

    </section>
  );
};

export default AboutSection;
