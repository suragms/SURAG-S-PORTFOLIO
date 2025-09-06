
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleGetInTouchClick = () => {
    // Scroll to top first, then navigate
    window.scrollTo(0, 0);
  };
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Hello, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Surag M S
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in animation-delay-500">
        Ai + Full Stack Developer
        </p>
        
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-1000">
        I blend artificial intelligence with full-stack development to create intelligent, scalable web applications. 
        Specializing in React.js, Django, and Python, I build smart solutions that combine cutting-edge AI capabilities with robust backend systems and intuitive user interfaces. From AI-powered stress detection systems to intelligent finance trackers, I transform complex ideas into seamless digital experiences that make a real impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
          <Link
            to="/projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            onClick={handleGetInTouchClick}
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
