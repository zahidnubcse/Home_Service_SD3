import React from "react";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";

const services = [
  { id: 1, name: "Home Cleaning", image: service1 },
  { id: 2, name: "Plumbing", image: service2 },
  { id: 3, name: "Electric Service", image: service3 },
  { id: 4, name: "Home Security", image: service4 },
];

const RecommendedService = () => {
  return (
    <div className=" p-6 container mx-auto  py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Recommended <span className="text-primary">Services</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-xl hover:shadow-primary overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-center bg-primary">
              <h3 className="text-lg font-semibold text-white">{service.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 flex items-center justify-center">
  <button className="bg-primary py-3 px-6 rounded-lg text-white items-center">See More</button>
</div>

    </div>
    
  );
};

export default RecommendedService;
