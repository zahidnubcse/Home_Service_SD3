import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

// Dummy services data for suggestions
const services = [
  "Home Cleaning",
  "Plumbing Repair",
  "Car Engine Repair",
  "Pest Control",
];

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/services?search=${searchTerm}`);
      setFilteredSuggestions([]); // Clear suggestions on search
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter suggestions based on input
    if (value.trim() !== "") {
      const matches = services.filter((service) =>
        service.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(matches);
    } else {
      setFilteredSuggestions([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-14 pb-7 mt-5">
      {/* Hero Heading */}
      <h2 className="font-bold text-[46px] text-center">
        Find The Best Home <span className="text-primary">Services/Repair</span> <br />
        Near You
      </h2>

      {/* Subheading */}
      <h2 className="p-6 text-xl text-gray-600 mt-4">
        Explore Our Best Home Service & Repair Near You
      </h2>

      {/* Search Input with Suggestions */}
      <div className="mt-6 flex flex-col items-center relative w-full max-w-[400px]">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleSearch} // Search on Enter
            className="rounded-full w-full py-3 pr-12 pl-6 text-gray-700 placeholder-gray-400 border border-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <FiSearch
            className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600 cursor-pointer"
            onClick={() => searchTerm.trim() && navigate(`/services?search=${searchTerm}`)}
          />
        </div>

        {/* Suggestions List */}
        {filteredSuggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-md mt-1 z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearchTerm(suggestion);
                  setFilteredSuggestions([]);
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Hero;
