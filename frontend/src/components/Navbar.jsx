import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-green-500">
          LFG
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-green-500 transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-green-500 transition-colors">
            Dashboard
          </Link>
          <Link to="/post-ride" className="hover:text-green-500 transition-colors">
            Post Ride
          </Link>
          <Link to="/auth" className="bg-green-500 px-4 py-2 rounded-xl hover:bg-green-600 transition-colors">
            Login/Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;