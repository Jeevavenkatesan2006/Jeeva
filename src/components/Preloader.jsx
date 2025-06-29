import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Total: delay (2s) + duration (1s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
        >
          <div className="w-[500px] h-[500px] rounded-full overflow-hidden">
            <img
              src="src/assets/logo 2.gif"
              alt="Loading..."
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
