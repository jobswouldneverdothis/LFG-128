import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiHome, HiPlus, HiUser } from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';

const BottomNav = () => {
  const { user } = useAuth();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 z-50">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => `flex flex-col items-center px-4 py-2 ${isActive ? 'text-green-500' : 'text-gray-400'}`}
        >
          <HiHome className="text-2xl" />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        
        {user ? (
          <>
            <NavLink 
              to="/post" 
              className={({ isActive }) => `flex flex-col items-center px-4 py-2 ${isActive ? 'text-green-500' : 'text-gray-400'}`}
            >
              <HiPlus className="text-2xl" />
              <span className="text-xs mt-1">Post</span>
            </NavLink>
            
            <NavLink 
              to="/profile" 
              className={({ isActive }) => `flex flex-col items-center px-4 py-2 ${isActive ? 'text-green-500' : 'text-gray-400'}`}
            >
              <HiUser className="text-2xl" />
              <span className="text-xs mt-1">Profile</span>
            </NavLink>
          </>
        ) : (
          <NavLink 
            to="/auth" 
            className={({ isActive }) => `flex flex-col items-center px-4 py-2 ${isActive ? 'text-green-500' : 'text-gray-400'}`}
          >
            <HiUser className="text-2xl" />
            <span className="text-xs mt-1">Login</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default BottomNav;