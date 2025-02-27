import React from 'react';

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    description: 'Modern e-commerce solution with advanced features'
  },
  {
    title: 'Portfolio Website',
    category: 'Portfolio Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    description: 'Clean and professional portfolio showcase'
  },
  {
    title: 'AI Chat Application',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    description: 'Intelligent chatbot with natural language processing'
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-[#D1E8E2]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#2C3531] text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.title} className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-[#116466] font-medium">{item.category}</span>
                <h3 className="text-xl font-semibold text-[#2C3531] mt-2">{item.title}</h3>
                <p className="text-[#116466] mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}