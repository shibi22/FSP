import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-primary-mint to-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold text-accent-olive mb-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#2C3531] mb-6">
            Creative Resumes, Portfolios & Projects
            <span className="block text-[#116466] mt-2">
              Build Your Bridge to Success!
            </span>
          </h1>

          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-primary-teal mb-8 max-w-2xl mx-auto"
          >
            If You Want to Crack the System,
            First Understand It.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
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
          

          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-primary-teal" />
          </motion.div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-accent-olive text-center mb-16"
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary-mint rounded-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-accent-olive mb-4">Resume Design</h3>
              <p className="text-primary-teal mb-4">Professional ATS-friendly resumes tailored to your career goals.</p>
              <Link to="/services" className="text-accent-olive hover:text-primary-teal transition-colors duration-300">
                Learn More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-primary-mint rounded-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-accent-olive mb-4">Portfolio Creation</h3>
              <p className="text-primary-teal mb-4">Showcase your work with a stunning portfolio website.</p>
              <Link to="/services" className="text-accent-olive hover:text-primary-teal transition-colors duration-300">
                Learn More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-primary-mint rounded-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-accent-olive mb-4">Project Development</h3>
              <p className="text-primary-teal mb-4">Custom software solutions for your business needs.</p>
              <Link to="/services" className="text-accent-olive hover:text-primary-teal transition-colors duration-300">
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}