import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-400 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <span className="text-white font-bold text-lg">Maxx</span>
    <div className="flex space-x-4">
      <Link to="/" className="text-black-300 hover:text-white">Home</Link>
      <Link to="/about" className="text-black-300 hover:text-white">About</Link>
      <Link to="/login" className="text-black-300 hover:text-white">Login</Link>
      <Link to="/data" className="text-black-300 hover:text-white">Data</Link>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
