import React from "react";
import { useParams, Link } from "react-router-dom";
import serviceData from "../components/Data/ServiceData.js";
import { motion } from "framer-motion";


const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData.find((item) => item.id === parseInt(id));

  if (!service) return <div className="p-8 text-center text-red-500">Service not found!</div>;

  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 bg-pink-700"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-fuchsia-700 mb-6">{service.title}</h1>
        <img src={service.image} alt={service.title} className="w-full rounded-lg mb-6" />
        <p className="text-gray-700 text-lg mb-6">{service.description}</p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Customer Benefits:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          {service.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <Link
          to="/"
          className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Back to Services
        </Link>
      </div>
    </motion.section>
  );
};

export default ServiceDetail;