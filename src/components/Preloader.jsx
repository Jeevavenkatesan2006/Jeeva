import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 5 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50 cursor-pointer"
    >
      <div className="w-100 h-100 rounded-full">
        <img src="src/assets/logo 2.gif" alt="Loading..." className="w-full h-full object-contain  rounded-full" />
      </div>
    </motion.div>
  );
};

export default Preloader;
