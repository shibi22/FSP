import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C3531] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <a href="mailto:shibi73201@gmail.com" className="flex items-center gap-2 hover:text-[#D1E8E2] transition-colors">
              <Mail className="w-5 h-5" />
              shibi73201@gmail.com
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <div className="space-y-2">
              <a href="https://instagram.com/cbee..rawj_" className="flex items-center gap-2 hover:text-[#D1E8E2] transition-colors">
                <Instagram className="w-5 h-5" />
                @cbee..rawj_
              </a>
              <a href="https://linkedin.com/in/shibiraj-r" className="flex items-center gap-2 hover:text-[#D1E8E2] transition-colors">
                <Linkedin className="w-5 h-5" />
                Shibiraj R
              </a>
              <a href="https://github.com/Shibi22" className="flex items-center gap-2 hover:text-[#D1E8E2] transition-colors">
                <Github className="w-5 h-5" />
                Shibi22
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Resume Design</li>
              <li>Portfolio Creation</li>
              <li>LinkedIn Optimization</li>
              <li>Project Development</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p>Professional freelancer specializing in digital solutions and personal branding.</p>
          </div>
        </div>
        
        <div className="border-t border-[#D9B08C] pt-8 text-center">
          <p>©{new Date().getFullYear()} 2024 Shibiraj. All rights reserved.</p>
          <p className="text-sm mt-2">Website designed & developed by Shibiraj</p>
        </div>
      </div>
    </footer>
  );
}
