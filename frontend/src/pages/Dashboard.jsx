import React from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto bg-zinc-900 p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-white">Dashboard</h1>
          <div className="grid gap-6">
            <div className="bg-zinc-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Your Rides</h2>
              <p className="text-gray-400">No rides booked yet.</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Posted Rides</h2>
              <p className="text-gray-400">No rides posted yet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;