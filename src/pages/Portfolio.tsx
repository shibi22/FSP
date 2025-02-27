import React from 'react';

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
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
    downloadUrl: '#',
    buttonType: 'download'
  },
  {
    title: 'Zomato Clone',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=800',
    description: 'A fully responsive Zomato-inspired food ordering application',
    demoUrl: 'https://www.zomato.com',
    buttonType: 'demo'
  }
];

export default function Portfolio() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#2C3531] text-center mb-16">
          Featured Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Project</span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <span className="text-sm text-[#116466] font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-[#2C3531] mt-2">
                    {item.title}
                  </h3>
                  <p className="text-[#116466] mt-2">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-6">
                  {item.buttonType === 'demo' ? (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-[#116466] text-white px-6 py-2 rounded-lg font-semibold 
                        hover:bg-[#2C3531] transition-colors duration-300 text-center"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <a
                      href={item.downloadUrl}
                      className="inline-block w-full bg-[#FFCB9A] text-[#2C3531] px-6 py-2 rounded-lg font-semibold 
                        hover:bg-[#D9B08C] transition-colors duration-300 text-center"
                    >
                      Download File
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}