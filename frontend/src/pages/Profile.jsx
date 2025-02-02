import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-md mx-auto bg-zinc-900 p-6 rounded-2xl shadow-xl">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-20 h-20 bg-zinc-800 rounded-full"></div>
          <div>
            <h1 className="text-2xl font-bold text-white">Your Profile</h1>
            <p className="text-gray-400">+91 XXXXXXXXXX</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-zinc-800 p-4 rounded-xl">
            <h2 className="text-lg font-semibold text-white mb-2">Your Rides</h2>
            <p className="text-gray-400">No rides yet</p>
          </div>
          
          <div className="bg-zinc-800 p-4 rounded-xl">
            <h2 className="text-lg font-semibold text-white mb-2">Posted Rides</h2>
            <p className="text-gray-400">No rides posted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;