import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, UserRound } from 'lucide-react';
import gsap from 'gsap';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  gender: 'male' | 'female';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya',
    role: 'Software Engineer',
    content: 'The resume design service was exceptional! I received multiple interview calls within a week of updating my resume.',
    gender: 'female'
  },
  {
    id: 2,
    name: 'Swetha',
    role: 'UX Designer',
    content: 'My portfolio website looks amazing and has helped me land several freelance projects. Highly recommended!',
    gender: 'female'
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    role: 'Marketing Specialist',
    content: 'The LinkedIn optimization service transformed my profile. I\'ve seen a 200% increase in profile views and connection requests.',
    gender: 'female'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Startup Founder',
    content: 'Shibiraj developed an e-commerce platform for my business that exceeded all expectations. The attention to detail was impressive.',
    gender: 'male'
  },
  {
    id: 5,
    name: 'Madhan Gowri',
    role: 'Content Creator',
    content: 'The portfolio design perfectly showcases my work. I\'ve received so many compliments on the clean, professional layout.',
    gender: 'male'
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<SVGPathElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Initialize GSAP timeline
    timelineRef.current = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 2
    });

    // Blob animation paths
    const blobPaths = [
      "M50.4,-65.2C64.2,-55.4,73.6,-38.8,78.9,-20.9C84.2,-3,85.3,16.2,77.8,31.1C70.3,46,54.1,56.6,37.4,63.9C20.7,71.2,3.4,75.2,-14.9,74.3C-33.2,73.4,-52.5,67.6,-65.2,54.5C-77.9,41.4,-84,21,-83.1,1.5C-82.2,-18,-74.3,-36,-61.5,-46.9C-48.7,-57.8,-31,-61.6,-14.4,-63.9C2.2,-66.2,36.6,-75,50.4,-65.2Z",
      "M54.3,-67.4C68.5,-55.3,77.2,-36.5,79.8,-17.7C82.4,1.1,78.9,19.9,69.5,34.4C60.1,48.9,44.8,59.1,28.2,66.5C11.6,73.9,-6.2,78.5,-23.4,74.9C-40.6,71.3,-57.2,59.5,-67.8,43.5C-78.4,27.5,-83,7.3,-79.2,-10.9C-75.4,-29.1,-63.2,-45.3,-48,-57.4C-32.8,-69.5,-14.4,-77.5,3.1,-81.3C20.6,-85.1,40.1,-79.6,54.3,-67.4Z",
      "M51.9,-59.4C65.3,-48.7,73.1,-30.5,76.2,-11.5C79.3,7.5,77.7,27.3,67.9,41.3C58.1,55.3,40.1,63.5,21.8,69.1C3.5,74.7,-15.1,77.7,-31.4,71.7C-47.7,65.7,-61.7,50.7,-69.3,33.2C-76.9,15.7,-78.1,-4.3,-72.1,-21.2C-66.1,-38.1,-52.9,-51.9,-38.1,-62.1C-23.3,-72.3,-6.9,-78.9,7.9,-88.1C22.7,-97.3,38.5,-70.1,51.9,-59.4Z"
    ];

    // Animate the blob
    if (blobRef.current) {
      timelineRef.current
        .to(blobRef.current, {
          duration: 8,
          attr: { d: blobPaths[0] },
          ease: "sine.inOut"
        })
        .to(blobRef.current, {
          duration: 8,
          attr: { d: blobPaths[1] },
          ease: "sine.inOut"
        })
        .to(blobRef.current, {
          duration: 8,
          attr: { d: blobPaths[2] },
          ease: "sine.inOut"
        });
    }

    // Cleanup
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-accent-olive mb-4">What Our Clients Say</h2>
          <p className="text-xl text-primary-teal max-w-2xl mx-auto">
            Hear from professionals who have transformed their careers with our services
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* SVG Blob Background */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
            <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
              <path
                ref={blobRef}
                d="M54.6,-67.3C69.4,-55.3,79.5,-37.5,83.5,-18.5C87.5,0.5,85.4,20.7,76.2,36.7C67,52.7,50.8,64.5,33.2,71.2C15.7,77.9,-3.2,79.5,-20.6,74.8C-38,70.1,-53.9,59.1,-65.4,43.8C-76.9,28.5,-84,8.9,-81.7,-9.2C-79.4,-27.3,-67.7,-43.9,-52.8,-56C-37.9,-68.1,-19,-75.7,0.5,-76.3C19.9,-76.9,39.8,-79.3,54.6,-67.3Z"
                fill="url(#gradient)"
                transform="translate(100 100)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D1E8E2" />
                  <stop offset="100%" stopColor="#116466" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="flex overflow-x-hidden">
              <div className="animate-marquee flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-80 flex-shrink-0 mx-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col"
                    >
                      <div className="mb-4">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14.2667 4.73333 12.8667 5.53333 11.5333C6.33333 10.2 7.46667 9.06667 8.93333 8.13333L10.6667 10.1333C9.46667 10.8 8.53333 11.6 7.86667 12.5333C7.2 13.4667 6.86667 14.4667 6.86667 15.5333C6.86667 15.7333 6.86667 15.9333 6.93333 16.1333C7 16.3333 7.06667 16.5333 7.2 16.7333C7.53333 16.4667 7.93333 16.2667 8.4 16.1333C8.86667 16 9.33333 15.9333 9.8 15.9333C11 15.9333 12 16.2667 12.8 16.9333C13.6 17.6 14 18.5333 14 19.7333C14 20.8 13.6 21.7333 12.8 22.4667C12 23.2 11 23.5333 9.8 23.5333L9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 14.2667 16.7333 12.8667 17.5333 11.5333C18.3333 10.2 19.4667 9.06667 20.9333 8.13333L22.6667 10.1333C21.4667 10.8 20.5333 11.6 19.8667 12.5333C19.2 13.4667 18.8667 14.4667 18.8667 15.5333C18.8667 15.7333 18.8667 15.9333 18.9333 16.1333C19 16.3333 19.0667 16.5333 19.2 16.7333C19.5333 16.4667 19.9333 16.2667 20.4 16.1333C20.8667 16 21.3333 15.9333 21.8 15.9333C23 15.9333 24 16.2667 24.8 16.9333C25.6 17.6 26 18.5333 26 19.7333C26 20.8 25.6 21.7333 24.8 22.4667C24 23.2 23 23.5333 21.8 23.5333L21.3333 21.3333Z" fill="#FFCB9A"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow">{testimonial.content}</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary-mint flex items-center justify-center mr-3">
                          {testimonial.gender === 'female' ? (
                            <User className="w-6 h-6 text-primary-teal" />
                          ) : (
                            <UserRound className="w-6 h-6 text-primary-teal" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-accent-olive">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
                
                {/* Duplicate testimonials for infinite scroll effect */}
                {testimonials.map((testimonial) => (
                  <div
                    key={`duplicate-${testimonial.id}`}
                    className="w-80 flex-shrink-0 mx-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col"
                    >
                      <div className="mb-4">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14.2667 4.73333 12.8667 5.53333 11.5333C6.33333 10.2 7.46667 9.06667 8.93333 8.13333L10.6667 10.1333C9.46667 10.8 8.53333 11.6 7.86667 12.5333C7.2 13.4667 6.86667 14.4667 6.86667 15.5333C6.86667 15.7333 6.86667 15.9333 6.93333 16.1333C7 16.3333 7.06667 16.5333 7.2 16.7333C7.53333 16.4667 7.93333 16.2667 8.4 16.1333C8.86667 16 9.33333 15.9333 9.8 15.9333C11 15.9333 12 16.2667 12.8 16.9333C13.6 17.6 14 18.5333 14 19.7333C14 20.8 13.6 21.7333 12.8 22.4667C12 23.2 11 23.5333 9.8 23.5333L9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 14.2667 16.7333 12.8667 17.5333 11.5333C18.3333 10.2 19.4667 9.06667 20.9333 8.13333L22.6667 10.1333C21.4667 10.8 20.5333 11.6 19.8667 12.5333C19.2 13.4667 18.8667 14.4667 18.8667 15.5333C18.8667 15.7333 18.8667 15.9333 18.9333 16.1333C19 16.3333 19.0667 16.5333 19.2 16.7333C19.5333 16.4667 19.9333 16.2667 20.4 16.1333C20.8667 16 21.3333 15.9333 21.8 15.9333C23 15.9333 24 16.2667 24.8 16.9333C25.6 17.6 26 18.5333 26 19.7333C26 20.8 25.6 21.7333 24.8 22.4667C24 23.2 23 23.5333 21.8 23.5333L21.3333 21.3333Z" fill="#FFCB9A"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow">{testimonial.content}</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary-mint flex items-center justify-center mr-3">
                          {testimonial.gender === 'female' ? (
                            <User className="w-6 h-6 text-primary-teal" />
                          ) : (
                            <UserRound className="w-6 h-6 text-primary-teal" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-accent-olive">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}