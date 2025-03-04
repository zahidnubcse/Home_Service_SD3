import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src= {Logo} className="w-36" alt="Logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
