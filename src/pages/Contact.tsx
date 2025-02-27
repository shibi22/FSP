import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:shibi73201@gmail.com?subject=Service Inquiry from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#2C3531] text-center mb-16">
          Get in Touch
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-[#D9B08C] focus:outline-none focus:border-[#116466]"
              required
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-[#D9B08C] focus:outline-none focus:border-[#116466]"
              required
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-[#D9B08C] focus:outline-none focus:border-[#116466]"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <select
              className="w-full px-4 py-3 rounded-lg border border-[#D9B08C] focus:outline-none focus:border-[#116466]"
              required
              onChange={(e) => setFormData({...formData, service: e.target.value})}
            >
              <option value="">Select Service</option>
              <option value="resume">Resume Design</option>
              <option value="portfolio">Portfolio Creation</option>
              <option value="linkedin">LinkedIn Optimization</option>
              <option value="project">Project Development</option>
              <option value="project">Chatbot Development</option>
              <option value="hosting">Domain & Hosting</option>
            </select>
          </div>
          
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-[#D9B08C] focus:outline-none focus:border-[#116466]"
            required
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
          
          <button
            type="submit"
            className="w-full bg-[#FFCB9A] text-[#2C3531] py-3 rounded-lg font-semibold hover:bg-[#D9B08C] 
              transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Send Message
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}