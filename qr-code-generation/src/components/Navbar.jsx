import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex space-x-4">
        <Link to="/" className="hover:text-blue-200">Home</Link>
        <Link to="/QRCodeGenerator" className="hover:text-blue-200">QR Generator</Link>
        {/* Add other navigation links */}
      </div>
    </nav>
  );
};

export default Navbar;