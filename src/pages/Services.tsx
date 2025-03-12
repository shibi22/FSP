import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  price: string;
  image: string;
  details: string[];
}

const services : ServiceItem[] = [
  {
    title: 'Resume Designing',
    description: 'Professional ATS-friendly resumes tailored to your career goals',
    price: '₹75 - ₹250',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    details: [
      'Chronological Resume',
      'Functional Resume',
      'Combination Resume',
      'Infographic Resume',
      'Targeted Resume',
      'Minimalist Resume',
      'Portfolio Resume',
      'Video Resume'
    ]
  },
  {
    title: 'Portfolio Designing',
    description: 'Showcase your work with a stunning portfolio',
    price: '₹250 - ₹500',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    details: [
      'LinkedIn Portfolio',
      'GitHub Portfolio',
      'PDF Portfolio',
      'Social Media Portfolio',
      'Cloud-Based Portfolio'
    ]
  },
  {
    title: 'LinkedIn Optimization',
    description: 'Stand out in the professional world with an optimized LinkedIn presence',
    price: '₹350 - ₹500',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800',
    details: [
      'Profile Optimization',
      'Network Optimization',
      'Content Optimization',
      'Skill Endorsements & Recommendations',
      'SEO Optimization',
      'Activity Optimization',
      'Portfolio/Media Optimization',
      'Job Search Optimization',
      'Analytics Optimization'
    ]
  },
  {
    title: 'Project Development',
    description: 'Custom software solutions for your business needs',
    price: '₹750 - ₹4000',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2plY3QlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D',
    details: [
      'Web Development (E-Commerce, Online Bookstore)',
      'App Development (Language Translator, Slides Remote)',
      'Cybersecurity (SpyGen, Web Scraping)',
      'AI/ML (Pong AI Game, Chatbot Development)',
      'Java Projects (Bus Ticketing, Management Systems)',
      'Health Systems (HealthPlus, Train Booking)'
    ]
  },
  {
    title: 'Chatbot Development',
    description: 'Automate customer support with AI-powered chatbots',
    price: '₹500 - ₹1000',
    
    image: 'https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D',
    details: [
      'Voice flow',
      'React Chatbot', 
      'Python Chatbot',
    ]
  },
  {
    title: 'Domain & Hosting',
    description: 'Complete hosting solutions for your digital presence',
    price: '₹300 - ₹500',
    image: 'https://plus.unsplash.com/premium_photo-1661386261378-8ed99f4e37ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zdGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    details: [
      'Website Hosting',
      'Custom Domain Registration',
      'Portfolio Hosting'
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (title: string) => {
    setSelectedService(selectedService === title ? null : title);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen relative">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#2C3531] text-center mb-16">
          Professional Services
        </h1>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
          selectedService ? 'opacity-40 pointer-events-none' : 'opacity-100'
        }`}>
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Click to Explore</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2C3531] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#116466] mb-4">{service.description}</p>
                <span className="inline-block bg-[#D1E8E2] text-[#116466] px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Service View */}
        {selectedService && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setSelectedService(null)} />
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 transform transition-all duration-500 animate-slideUp">
              {services.map((service) => service.title === selectedService && (
                <div key={service.title} className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-bold text-[#2C3531]">{service.title}</h2>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-2 hover:bg-[#D1E8E2] rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-[#2C3531]" />
                    </button>
                  </div>
                  
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  
                  <div className="space-y-6">
                    <p className="text-lg text-[#116466]">{service.description}</p>
                    <div className="bg-[#D1E8E2] text-[#116466] px-4 py-2 rounded-lg inline-block">
                      <span className="font-semibold">Price Range:</span> {service.price}
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-[#2C3531] mb-4">Services Offered</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-center gap-3 p-3 bg-[#D1E8E2] bg-opacity-30 rounded-lg"
                          >
                            <div className="w-2 h-2 rounded-full bg-[#FFCB9A]" />
                            <span className="text-[#116466]">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}