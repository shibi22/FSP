import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#D1E8E2] to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-[#2C3531] mb-6">
          Transforming Ideas into Digital Excellence
        </h1>
        <p className="text-xl text-[#116466] mb-8 max-w-2xl mx-auto">
          Professional portfolio creation, resume design, and project development services
          tailored to showcase your unique potential.
        </p>
        <button className="bg-[#FFCB9A] text-[#2C3531] px-8 py-3 rounded-lg font-semibold 
          hover:bg-[#D9B08C] transition-colors duration-300">
          Explore Services
        </button>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#116466]" />
        </div>
      </div>
    </div>
  );
}