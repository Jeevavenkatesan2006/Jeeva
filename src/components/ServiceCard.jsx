import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-500 text-white"
  >
    <Link to={'/services/${service.id}'}>
      <h3 className="text-xl font-semibold drop-shadow-sm">
        {service.title}
      </h3>
      <p className="mt-2 text-white/80">
        {service.description.slice(0, 70)}...
      </p>
    </Link>
  </motion.div>
);

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;