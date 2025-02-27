import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-16">
      <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#D1E8E2] to-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2C3531] mb-6">
            Creative Resumes, Portfolios & Projects
            <span className="block text-[#116466] mt-2">
              Build Your Bridge to Success!
            </span>
          </h1>
          <p className="text-xl text-[#116466] mb-12 max-w-2xl mx-auto">
            Professional freelancer specializing in resume design, portfolio creation,
            LinkedIn optimization, and custom project development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-[#FFCB9A] text-[#2C3531] px-8 py-3 rounded-lg font-semibold 
                hover:bg-[#D9B08C] transition-colors duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="bg-[#116466] text-white px-8 py-3 rounded-lg font-semibold 
                hover:bg-[#2C3531] transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#116466]" />
          </div>
        </div>
      </div>
      
    </div>
  );
}