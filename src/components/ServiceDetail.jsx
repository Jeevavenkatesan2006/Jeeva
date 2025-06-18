import { useParams } from "react-router-dom";
import serviceData from "../Data/ServiceData"; // ✅ FIXED


const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData.find((s) => s.id === id);

  if (!service) {
    return <div className="text-center text-red-500 py-20">Service not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <img src={service.icon} alt={service.title} className="w-20 h-20 mb-6" />
      <p className="max-w-xl text-center">{service.description}</p>
    </div>
  );
};

export default ServiceDetail;
