import React from "react";
import ServiceCard from "../components/ServiceCard";
import serviceData from "../Data/ServiceData";


const Services = () => {
  return (
    <section className="py-16 px-6 min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 mb-2">Our Services</h2>
        <p className="text-blue-700 text-lg">What we offer</p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
