import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Utility to safely load image from assets folder
const getImage = (imageName) => {
  try {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  } catch (err) {
    return "";
  }
};

const ServiceCard = ({ service }) => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsVisible(false);  // trigger exit
    setTimeout(() => {
      navigate(`/services/${service.id}`);
    }, 500);  // wait for exit animation
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={{ scale: 1.05 }}
          className="p-5 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-white/10 text-white cursor-pointer"
          onClick={handleClick}
        >
          <img
            src={getImage(service.image)}
            alt={service.title}
            className="w-16 h-16 object-contain mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-sm text-white/80 mb-4">{service.description}</p>
          <div className="text-sm text-blue-400 underline hover:text-blue-600 transition">
            Read More →
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;
