import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-11069.jpg?uid=R159343352&semt=ais_hybrid',
    description: 'Modern e-commerce solution with advanced features',
    demoUrl: 'https://www.amazon.com',
    buttonType: 'demo'
  },
  {
    title: 'Portfolio Website',
    category: 'Portfolio Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    description: 'Clean and professional portfolio showcase',
    demoUrl: 'https://www.behance.net',
    buttonType: 'demo'
  },
  {
    title: 'AI Chat Application',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    description: 'Intelligent chatbot with natural language processing',
    downloadUrl: 'https://drive.google.com/file/d/1qIK-SmHxOTmmSYZdQ819NfYVSneEtfyA/view?usp=drive_link',
    buttonType: 'download'
  },
  {
    title: 'Zomato Clone',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1653389527532-884074ac1c65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8em9tYXRvfGVufDB8fDB8fHww',
    description: 'A fully responsive Zomato-inspired food ordering application',
    demoUrl: 'https://www.zomato.com',
    buttonType: 'demo'
  },
  {
    title: 'Bus Ticket Booking System',
    category: 'Web Development',
    image: 'https://img.freepik.com/premium-photo/big-white-coach-tour-bus-bus-tickets-white-background-3d-rendering_476612-7441.jpg?uid=R159343352&semt=ais_hybrid',
    description: 'A user-friendly bus ticket booking platform',
    demoUrl: 'https://www.redbus.in',
    buttonType: 'demo'
  }
];

export default function Portfolio() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-[#2C3531] text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 See Our Work in Action
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative group">
                <motion.img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={item.demoUrl || item.downloadUrl} className="text-white text-lg font-semibold bg-[#FFCB9A] px-4 py-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                    View Project
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <span className="text-sm text-[#116466] font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-[#2C3531] mt-2">
                    {item.title}
                  </h3>
                  <p className="text-[#116466] mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-6">
                  {item.buttonType === 'demo' ? (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-[#116466] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2C3531] transition-colors duration-300 text-center shadow-md hover:shadow-lg"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <a
                      href={item.downloadUrl}
                      className="inline-block w-full bg-[#FFCB9A] text-[#2C3531] px-6 py-3 rounded-lg font-semibold hover:bg-[#D9B08C] transition-colors duration-300 text-center shadow-md hover:shadow-lg"
                    >
                      Download File
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
