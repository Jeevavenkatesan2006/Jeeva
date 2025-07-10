import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Delay 2s + fade duration 1s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2, duration: 3 }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999] text-white"
        >
          <div className="w-[500px] h-[500px]  ">
            <img
              src="src/assets/logo 2.gif"
              alt="Loading..."
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text tracking-wide top-0">
            Code Developers
          
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
