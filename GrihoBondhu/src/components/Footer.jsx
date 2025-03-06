import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaGoogle, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <img src={logo} className="mb-4 w-32 mx-auto md:mx-0 hover:bg-white rounded-lg cursor-pointer" alt="Logo" />
          <p className="max-w-md mx-auto md:mx-0 opacity-90 leading-relaxed">
            Elevate your home service experience with ease. Fast, reliable, and professional solutions at your fingertips.
          </p>
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold mb-4">Company</p>
          <ul className="space-y-2">
            <li className="hover:text-gray-200 transition-all cursor-pointer">Home</li>
            <li className="hover:text-gray-200 transition-all cursor-pointer">Services</li>
            <li className="hover:text-gray-200 transition-all cursor-pointer">Bookings</li>
            <li className="hover:text-gray-200 transition-all cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold mb-4">Get In Touch</p>
          <ul className="space-y-2 opacity-90">
            <li>📞 +8801817844031</li>
            <li>✉️ zahidnubcse@gmail.com</li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-teal-700 hover:bg-blue-600 hover:text-white transition-all">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-teal-700 hover:bg-red-600 hover:text-white transition-all">
              <FaGoogle className="text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-teal-700 hover:bg-black hover:text-white transition-all">
              <FaXTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center">
        <hr className="border-gray-400 opacity-30" />
        <p className="py-5 text-sm opacity-80">© 2025 GrihoBondhu.com - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
