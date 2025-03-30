import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    setIsAuthenticated(false);
    setIsDropdownOpen(false);
    navigate("/"); // Redirect to home
  };

  // Close the menu when a menu item is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img src={Logo} className="w-36" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
            <Link to="/" onClick={closeMenu} className="hover:text-primary">Home</Link>
            <Link to="/services" onClick={closeMenu} className="hover:text-primary">Services</Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-primary">Contact</Link>
            <Link to="/about" onClick={closeMenu} className="hover:text-primary">About</Link>
          </div>

          {/* Right Section: Location & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center bg-gray-200 px-3 py-2 rounded-md">
              <MapPin size={18} className="text-primary mr-1" />
              Select Location
            </button>

            {/* Auth Section */}
            {isAuthenticated ? (
              <div 
                className="relative" 
                onMouseEnter={() => setIsDropdownOpen(true)} 
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="bg-primary text-white px-4 py-2 rounded-md">
                  My Account
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 z-10">
                    <Link to="/profile" onClick={closeMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">My Profile</Link>
                    <Link to="/bookings" onClick={closeMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">My Bookings</Link>
                    <button 
                      onClick={handleLogout} 
                      className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                onClick={closeMenu} 
                className="bg-primary text-white px-4 py-2 rounded-md"
              >
                Login
              </Link>
            )}
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
          <Link to="/" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">Home</Link>
          <Link to="/services" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">Services</Link>
          <Link to="/contact" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
          <Link to="/about" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">About</Link>
          <button className="flex items-center px-4 py-2 bg-gray-200 w-full">
            <MapPin size={18} className="text-primary mr-1" />
            Select Location
          </button>

          {isAuthenticated ? (
            <>
              <Link to="/profile" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
              <Link to="/bookings" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">My Bookings</Link>
              <button 
                onClick={handleLogout} 
                className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={closeMenu} className="block px-4 py-2 bg-teal-600 text-white text-center">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
