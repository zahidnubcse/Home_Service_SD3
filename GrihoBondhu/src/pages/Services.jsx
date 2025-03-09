import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clean from "../assets/clean_1.jpg";
import plumbing from "../assets/plum_1.jpg";
import car from "../assets/car_1.jpg";
import pest from "../assets/pest_1.jpg";
import clean1 from "../assets/clean_2.jpg";

// Dummy services data
const services = [
  {
    id: 1,
    name: "Home Cleaning",
    category: "Home Cleaning",
    description: "Professional home cleaning services.",
    rating: 4.8,
    image: clean,
    price: { regular: 20, standard: 35, premium: 50 },
  },
  {
    id: 2,
    name: "Plumbing Repair",
    category: "Plumbing",
    description: "Expert plumbing repair services.",
    rating: 4.7,
    image: plumbing,
    price: { regular: 25, standard: 40, premium: 60 },
  },
  {
    id: 3,
    name: "Car Engine Repair",
    category: "Car Repair",
    description: "Reliable car repair services.",
    rating: 4.9,
    image: car,
    price: { regular: 30, standard: 50, premium: 70 },
  },
  {
    id: 4,
    name: "Pest Control",
    category: "Pest Control",
    description: "Safe pest control services.",
    rating: 4.6,
    image: pest,
    price: { regular: 15, standard: 30, premium: 45 },
  },
  {
    id: 5,
    name: "Kitchen Cleaning",
    category: "Home Cleaning",
    description: "Professional home cleaning services.",
    rating: 4.8,
    image: clean1,
    price: { regular: 20, standard: 35, premium: 50 },
  },
];

const ServicesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get search query from URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  // Filter services based on search query
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery)
  );

  // Navigate to the service details page
  const handleServiceClick = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on render
  }, []);

  return (
    <div className="min-h-screen p-6 mt-20">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {searchQuery ? `Search Results for "${searchQuery}"` : "Our Services"}
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-primary"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{service.name}</h2>
              <p className="text-gray-600">Category: {service.category}</p>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <p className="mt-2 text-yellow-500 font-semibold">
                ⭐ {service.rating}
              </p>
              <button
                className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg w-full hover:bg-teal-600"
                onClick={() => handleServiceClick(service.id)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No services found for "{searchQuery}".
          </p>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
