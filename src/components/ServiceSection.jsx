import React from "react";
import serviceData from "../Data/ServiceData"; // ✅ FIXED
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-br from-white to-slate-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
