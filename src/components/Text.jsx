import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const texts = [
  "Start Creating!!!",
  "Responsive Design 🪂",
  "Digital Marketing 📊",
  "Web design 👨🏻‍💻",
  "Graphic Designing 🎨",
  "E-Commerce 📲",
];

// Change these to your picture paths
const bottomLeftPicture = "src/assets/note image.png";
const markerPicture = "src/assets/marker.png";
// NEW tab1 picture (right bottom corner)
const tab1Picture = "src/assets/tabpen.png";
// NEW tree picture (right top corner)
const treePicture = "src/assets/tree.png";
// NEW Google picture (center)
const googlePicture = "src/assets/google.png";
// NEW Parker picture (within notes)
const parkerPicture = "src/assets/parker.png";


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
  

  // Background animation (Green -> Blue -> repeat)
  useEffect(() => {
    gsap.timeline({ repeat: -1, yoyo: true })
      .to(bgRef.current, { backgroundColor: "#3ED112FF", duration: 5, ease: "sine.inOut" })
      .to(bgRef.current, { backgroundColor: "#1679F3FF", duration: 5, ease: "sine.inOut" });
  }, []);

  // Picture upward and rotation animation
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
          duration:10,
          ease: "power3.out",
        }
      );
    }
  }, []);
  
  

  // Parker upward and rotation animation (within notes)
  useEffect(() => {
    if (parkerRef.current) {
      gsap.fromTo(
        parkerRef.current,
        { x: -100, y: 100, rotation: 45,opacity: 0 },
        { x: 0, y: -100, rotation: -45,opacity: 1, duration: 10, ease: "power3.out" }
      );
    }
  }, []);
  gsap.fromTo(
  parkerRef.current,
  { y: -500, rotation: -720,opacity: 0 },
  { y: 0, rotation: 0,opacity: 1, duration: 2, ease: "power3.out" }
);


  // Marker animation
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
  { y: -500, rotation: -720,opacity: 0 },
  { y: 0, rotation: 0,opacity: 1, duration: 2, ease: "power3.out" }
);

  

  // tab1 animation
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
   scale: 0, // start small
   filter: "blur(20px)", // add a heavy blur
  },
  {
    y: 0,
    rotation: 0,
   opacity: 1,
   scale: 1,
   filter: "blur(0px)", // clear up
   duration: 2,
   ease: "power4.out",
  }
);


  // tree animation
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
  
  

  // google picture cinematic animation
  useEffect(() => {
    if (googleRef.current) {
      gsap.fromTo(
        googleRef.current,
        { scale: 0, rotation: -720,opacity: 0, x: -500 },
        { scale: 1, rotation: 0,opacity: 1, x: 0, duration: 10, ease: "power1.out" }
      );
    }
  }, []);

  // Text animation
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      );
    }
  }, [textIndex]);
  

  // Loop through texts
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Be Brave "Gun Shooting Text" Animation
  useEffect(() => {
    if (beBraveRef.current) {
      // Split text into spans
      beBraveRef.current.innerHTML = beBraveRef.current.textContent
        .split("")
        .map((letter) => `<span class='letter'>${letter}</span>`) 
        .join("");
        gsap.fromTo(
  beBraveRef.current,
  { y: -500, rotation: -720,opacity: 0 },
  { y: 0, rotation: 0,opacity: 1, duration: 10, ease: "power6.out" }
);


        

      // Animate each letter with upward blast
      gsap.fromTo(
        beBraveRef.current.querySelectorAll('.letter'),
        { y: 100,opacity: 10, rotation: -95 },
        {
          y: 0,
         opacity: 10,
          rotation: 5,
          stagger: 0.1,
          duration: 10,
          ease: "back.out(1.7)", // strong blast upward
        }
      );
    }
  }, []);
  

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center z-0 pt-[160px]">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full z-[-1]" // no gradient
        style={{ backgroundColor: "#0C3DEFFF" }} // starting green color
      ></div>

      {/* Animated Text */}
      <h1
        ref={textRef}
        className="text-black text-1xl md:text-2xl font-semibold leading-tight bottom-0 top-0"
      >
        {texts[textIndex]}
      </h1>

      {/* Picture in bottom left corner with upward and rotation animation */}
      <div className="absolute bottom-0 left-0 ml-5 mb-5 z-10">
        {/* Note Picture */}
        <img
          ref={pictureRef}
          src={bottomLeftPicture}
          alt="Bottom Left Picture"
          className="w-90 h-100 transform"
        />

        {/* Parker placed within the note picture with its own upward rotation animation */}
        <img
          ref={parkerRef}
          src={bottomLeftPicture}
          alt="Bottom Left Picture"
          className="absolute bottom-0 left-0 w-0 h-auto z-10 transform rotate-30"
        />

        {/* Marker placed within the note picture with its own animation */}
        <img
          ref={markerRef}
          src={markerPicture}
          alt="Marker"
          className="absolute bottom-20 left-20 w-60 h-auto z-20 transform rotate-30"
        />
      </div>
      

      {/* tab1 in bottom right corner with upward and rotation animation */}
      <div className="absolute bottom-0 right-0 mr-5 mb-5 z-10">
        <img
          ref={tab1Ref}
          src={tab1Picture}
          alt="Tab 1"
          className="w-90 h-100 transform rotate-12"
        />
      </div>

      {/* tree in top right corner with upward and rotation animation */}
      <div className="absolute top-0 right-0 mr-5 mt-5 z-10">
        <img
          ref={treeRef}
          src={treePicture}
          alt="Tree"
          className="w-90 h-100 transform -rotate-20"
        />
      </div>
      

      {/* Google picture in center with cinematic animation */}
      <div className="absolute transform -translate-x-1/2 -translate-y-1/4 left-1/2 top-1/3 z-50">
        <img
          ref={googleRef}
          src={googlePicture}
          alt="Google"
          className="w-80 h-auto"
        />
      </div>

      {/* Be Brave with gun shooting text animation */}
      <h2
        ref={beBraveRef}
        className="text-black font-extrabold mt-4 text-4xl "
      >
        Be Brave
      </h2>
    </section>
  );
};

export default HeroSection;
