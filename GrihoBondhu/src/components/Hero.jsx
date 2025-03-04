import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Import the search icon from react-icons

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-14 pb-7 mt-5">
            {/* Hero Heading */}
            <h2 className="font-bold text-[46px] text-center">
                Find The Best Home <span className="text-primary">Services/Repair</span> <br />
                Near You
            </h2>

            {/* Subheading */}
            <h2 className="text-xl text-gray-600 mt-4">
                Explore Our Best Home Service & Repair Near You
            </h2>

            {/* Search Input and Button */}
            <div className="mt-6 flex gap-6 items-center">
                {/* Input field with search icon */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search services..."
                        className="rounded-full md:w-[350px] py-3 pr-12 pl-6 text-gray-700 placeholder-gray-400 border border-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    {/* Search icon inside the input */}
                    <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
