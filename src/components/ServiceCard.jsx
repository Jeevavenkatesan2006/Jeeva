import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

// Utility to safely load image from assets folder
const getImage = (imageName) => {
  try {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  } catch (err) {
    return ""; // fallback if image not found
  }
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="p-5 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-white/10 text-white"
    >
      <img
        src={getImage(service.image)}
        alt={service.title}
        className="w-16 h-16 object-contain mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-sm text-white/80 mb-4">{service.description}</p>
      <Link
        to={`/services/${service.id}`}
        className="text-sm text-blue-400 underline hover:text-blue-600 transition"
      >
        Read More →
      </Link>
    </motion.div>
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
