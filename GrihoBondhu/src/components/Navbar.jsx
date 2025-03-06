import  { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} className="w-36" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/services" className="hover:text-primary ">Services</Link>
            <Link to="/bookings" className="hover:text-primary">Bookings</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>

          {/* Right Section: Location & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center bg-gray-200 px-3 py-2 rounded-md">
              <MapPin size={18} className="text-primary mr-1" />
              Select Location
            </button>
            <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-md">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
          <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">Services</Link>
          <Link to="/bookings" className="block px-4 py-2 hover:bg-gray-100">Bookings</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
          <button className="flex items-center px-4 py-2 bg-gray-200 w-full">
            <MapPin size={18} className="text-primary mr-1" />
            Select Location
          </button>
          <Link to="/login" className="block px-4 py-2 bg-teal-600 text-white text-center">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
