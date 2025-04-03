import React from "react";
import mobile from "../assets/mobile_app.png";
import App_store from "../assets/app_store.png";
import Play_store from "../assets/play_store.png";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto p-6 rounded-lg">
      {/* Left Side - Mobile Image */}
      <div className="w-full md:w-1/2 flex justify-center -mb-4">
        <img src={mobile} alt="Mobile App" className="w-62 md:w-80 h-90" />
      </div>

      {/* Right Side - Text & Store Icons */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-2xl font-bold text-gray-800">Download Our <span className="text-primary">Mobile App</span></h2>
        <p className="text-gray-600 mt-3">
          Get exclusive discounts and seamless booking with our mobile app. Enjoy a faster and more convenient experience!
        </p>
        <div className="flex gap-4 justify-center md:justify-start mt-5">
        <Link to="/app">
        <img
            src={App_store}
            alt="App Store"
            className="w-36 cursor-pointer transition-all duration-300  rounded-lg hover:shadow-[0px_0px_15px_#008080]"
          />
        </Link>
         <Link to="/app">
         <img
            src={Play_store}
            alt="Play Store"
            className="w-36 cursor-pointer transition-all duration-300 rounded-lg hover:shadow-[0px_0px_15px_#008080]"
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
