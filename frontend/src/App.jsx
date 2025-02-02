import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import PostRide from './pages/PostRide';
import Profile from './pages/Profile';
import PhoneAuth from './components/Auth/PhoneAuth';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-black pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostRide />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<PhoneAuth />} />
        </Routes>
        <BottomNav />
      </div>
    </AuthProvider>
  );
};

export default App;