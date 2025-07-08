import React from 'react';
import { Link } from 'react-router-dom';

// LED Ambient Lights Background Component
const LedAmbientBackground = () => (
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
    {/* Blue ambient light */}
    <div className="absolute bg-blue-400 opacity-30 rounded-full blur-3xl animate-ambient1"
      style={{ width: 320, height: 320, left: '-8%', top: '10%' }} />
    {/* Purple ambient light */}
    <div className="absolute bg-purple-400 opacity-30 rounded-full blur-3xl animate-ambient2"
      style={{ width: 280, height: 280, right: '-6%', top: '30%' }} />
    {/* Pink ambient light */}
    <div className="absolute bg-pink-400 opacity-20 rounded-full blur-3xl animate-ambient3"
      style={{ width: 260, height: 260, left: '20%', bottom: '-10%' }} />
    {/* Yellow ambient light */}
    <div className="absolute bg-yellow-200 opacity-20 rounded-full blur-3xl animate-ambient4"
      style={{ width: 200, height: 200, right: '18%', bottom: '-8%' }} />
  </div>
);

const Welcome = () => (
  <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
    <LedAmbientBackground />
    <div className="relative z-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-6">Welcome to My Portfolio!</h1>
      <p className="text-xl text-gray-700 mb-8 max-w-xl text-center">
        Discover the projects I've built, the skills I've honed, and the journey I'm on as a full-stack developer. Feel free to explore and connect—glad to have you here!
      </p>
      <Link
        to="/home"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
      >
        Get Started
      </Link>
    </div>
  </div>
);

export default Welcome; 