 import React, { useEffect } from "react";
import about from "../assets/about.jpg";
import { motion } from "framer-motion"; // for smooth animations

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-6 mt-20">
      
      {/* Left Side - Animated Image with Gradient Glow */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-[90%] md:w-[80%] lg:w-[70%] rounded-3xl overflow-hidden relative group">
          <img
            src={about}
            alt="About Us"
            className="w-full rounded-3xl transform transition duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
          />
          {/* Gradient Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        </div>
      </motion.div>

      {/* Right Side - Animated Content */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-4">
          Your Trusted <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Home Service Partner</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          Welcome to <strong className="text-teal-500">[Your Website Name]</strong>, your go-to platform for reliable and professional home services. We specialize in a wide range of services, including{" "}
          <strong className="text-teal-600">
            home cleaning, car repair, AC servicing, fridge repair, security guard services, painting, and more.
          </strong>
        </p>
        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          Our mission is to make your life easier by connecting you with skilled professionals who ensure <span className="font-semibold text-teal-500">top-quality service</span>, every time. With a commitment to <span className="font-semibold text-teal-500">excellence, trust, and convenience</span>, we bring hassle-free home maintenance solutions right to your fingertips.
        </p>
        <p className="mt-6 text-2xl font-bold text-teal-600">
          Experience seamless home service booking <span className="text-blue-500">today!</span>
        </p>
      </motion.div>
    </div>
  );
};

export default About;
