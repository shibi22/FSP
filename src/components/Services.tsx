import React from 'react';
import { FileText, Briefcase, LinkedinIcon, Code, Server } from 'lucide-react';

const services = [
  {
    title: 'Resume Designing',
    icon: FileText,
    description: 'Professional ATS-friendly resumes in various styles',
    price: '₹75 - ₹250',
    styles: ['Chronological', 'Infographic', 'Minimalist', 'Functional', 'Targeted']
  },
  {
    title: 'Portfolio Creation',
    icon: Briefcase,
    description: 'Stunning portfolios that showcase your work',
    price: '₹250 - ₹500',
    features: ['Custom Design', 'Responsive Layout', 'SEO Optimization']
  },
  {
    title: 'LinkedIn Optimization',
    icon: LinkedinIcon,
    description: 'Stand out with an optimized LinkedIn presence',
    price: '₹350 - ₹500',
    features: ['Profile Setup', 'Content Strategy', 'Network Growth']
  },
  {
    title: 'Project Development',
    icon: Code,
    description: 'Custom software development solutions',
    price: '₹750 - ₹4000',
    categories: ['Web Dev', 'App Dev', 'AI/ML', 'Cybersecurity', 'Chatbots']
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#2C3531] text-center mb-16">
          Professional Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-[#D1E8E2] rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <service.icon className="w-12 h-12 text-[#116466] mb-4" />
              <h3 className="text-xl font-semibold text-[#2C3531] mb-2">{service.title}</h3>
              <p className="text-[#116466] mb-4">{service.description}</p>
              <p className="font-bold text-[#2C3531]">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}