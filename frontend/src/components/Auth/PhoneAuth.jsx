import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PhoneAuth = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible'
      });
    }
  };

  const requestOTP = async () => {
    try {
      setLoading(true);
      setupRecaptcha();
      const formatPhone = `+91${phone}`; // Add country code
      const confirmation = await signInWithPhoneNumber(
        auth,
        formatPhone,
        window.recaptchaVerifier
      );
      window.confirmationResult = confirmation;
      setShowOTP(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    try {
      setLoading(true);
      const result = await window.confirmationResult.confirm(otp);
      setUser(result.user);
      navigate('/');
    } catch (error) {
      console.error('Error verifying OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black px-4 py-6">
      <div className="max-w-md mx-auto bg-zinc-900 p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-8">Login</h1>
        <div className="space-y-6">
          {!showOTP ? (
            <>
              <div className="relative">
                <label className="absolute left-4 top-2 text-xs text-gray-400">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="w-full pt-7 pb-3 px-4 bg-zinc-800 text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter phone number"
                  maxLength="10"
                />
              </div>
              <button
                onClick={requestOTP}
                disabled={loading || phone.length !== 10}
                className="w-full p-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </>
          ) : (
            <>
              <div className="relative">
                <label className="absolute left-4 top-2 text-xs text-gray-400">
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="w-full pt-7 pb-3 px-4 bg-zinc-800 text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                />
              </div>
              <button
                onClick={verifyOTP}
                disabled={loading || otp.length !== 6}
                className="w-full p-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </>
          )}
        </div>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default PhoneAuth;