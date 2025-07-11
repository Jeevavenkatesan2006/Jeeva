import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const emailInfoRef = useRef();
  const phoneInfoRef = useRef();
  const locationInfoRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const buttonRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(titleRef.current, { x: -300, y: -150, opacity: 0 })
        .from(descRef.current, { x: -150, y: 80, opacity: 0 }, "-=0.6")
        .from(emailInfoRef.current, { x: -200, opacity: 0 }, "-=0.5")
        .from(phoneInfoRef.current, { x: -200, opacity: 0 }, "-=0.5")
        .from(locationInfoRef.current, { x: -200, opacity: 0 }, "-=0.5")
        .from(nameRef.current, { x: -500, opacity: 0 }, "-=0.4")
        .from(emailRef.current, { x: 500, opacity: 0 }, "-=0.6")
        .from(messageRef.current, { y: 300, rotate: 4, opacity: 0 }, "-=0.7")
        .from(buttonRef.current, { y: -200, scale: 0.5, rotate: -15, opacity: 0 }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Optional: reset form
    setFormData({ name: "", email: "", message: "" });

    // Optional: hide success after 3s
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-20 bg-gradient-to-r from-current-500 via-current-500 to-blue-500 bg-[length:200%_200%] animate-[gradientMove_12s_ease_infinite]"
    >
      <div className="absolute top-16 left-12 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-2xl opacity-30 z-0" />

      <div className="relative z-10 w-full max-w-6xl bg-black/30 backdrop-blur-2xl border border-white/20 shadow-xl rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 ref={titleRef} className="text-4xl font-bold mb-4">Contact Us</h2>
            <p ref={descRef} className="text-white/80 text-lg">
              Let's work together — we love building beautiful things.
            </p>
          </div>
          <div className="mt-10 space-y-6">
            <div ref={emailInfoRef} className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-pink-300" />
              <span>hello@Codedevelopers.in</span>
            </div>
            <div ref={phoneInfoRef} className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-purple-300" />
              <span>+91 98765 43210</span>
            </div>
            <div ref={locationInfoRef} className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl text-indigo-300" />
              <span>Chennai, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div ref={nameRef}>
            <label className="block mb-1 font-medium">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div ref={emailRef}>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div ref={messageRef}>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div ref={buttonRef}>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold rounded-xl shadow-md transition duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>

          {/* ✅ Success message */}
          {isSubmitted && (
            <p className="text-center text-green-400 font-semibold">
              Submitted successfully!
            </p>
          )}
        </form>
      </div>

      {/* Gradient animation keyframe */}
      <style>{`
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
