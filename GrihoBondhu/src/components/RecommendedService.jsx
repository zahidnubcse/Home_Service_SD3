import React from "react";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";

const services = [
  { id: 1, name: "Service 1", image: service1 },
  { id: 2, name: "Service 2", image: service2 },
  { id: 3, name: "Service 3", image: service3 },
  { id: 4, name: "Service 4", image: service4 },
];

const RecommendedService = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Recommended Services
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedService;
