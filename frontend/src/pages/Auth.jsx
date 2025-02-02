import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Auth = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="max-w-md mx-auto bg-zinc-900 p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-white">Login / Register</h1>
          <div className="space-y-4">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 bg-zinc-800 border-0 text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {showOtp && (
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-4 bg-zinc-800 border-0 text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            )}
            <button
              onClick={() => setShowOtp(true)}
              className="w-full p-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-[1.02]"
            >
              {showOtp ? 'Verify OTP' : 'Send OTP'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;