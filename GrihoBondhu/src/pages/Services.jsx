import React, { useEffect } from "react";
import clean from '../assets/clean_1.jpg' 
import plumbing from '../assets/plum_1.jpg'
import car from '../assets/car_1.jpg'

const services = [
  {
    id: 1,
    name: "Home Cleaning",
    category: "Home Cleaning",
    description: "Professional cleaning services for your home.",
    rating: 4.8,
    image: clean,
  },
  {
    id: 2,
    name: "Plumbing Repair",
    category: "Plumbing",
    description: "Expert plumbing repair services.",
    rating: 4.7,
    image: plumbing,
  },
  {
    id: 3,
    name: "Car Engine Repair",
    category: "Car Repair",
    description: "Reliable car repair services at your location.",
    rating: 4.9,
    image: car,
  },
];


const ServicesPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when page loads
  }, []);
  
  return (
    <div className="min-h-screen p-6 mt-20">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Our <span className="text-primary">Services</span></h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-primary">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{service.name}</h2>
            <p className="text-gray-600">Category: {service.category}</p>
            <p className="mt-2 text-gray-600">{service.description}</p>
            <p className="mt-2 text-yellow-500 font-semibold">⭐ {service.rating}</p>
            <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg w-full hover:bg-teal-600">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;