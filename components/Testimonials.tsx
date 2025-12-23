
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-[#023535] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#00D084] mb-4">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Their Words, Our Fuel</h3>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={testimonial.id}
              className={`absolute top-0 left-0 w-full transition-all duration-1000 transform flex flex-col items-center text-center ${
                activeIndex === idx 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : idx < activeIndex 
                    ? 'opacity-0 -translate-x-full scale-90 pointer-events-none' 
                    : 'opacity-0 translate-x-full scale-90 pointer-events-none'
              }`}
            >
              <div className="text-6xl md:text-9xl font-serif italic text-white/5 mb-4 select-none">
                &ldquo;
              </div>
              
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-12 px-4 md:px-12">
                {testimonial.quote}
              </p>

              <div className="flex flex-col items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-6 border-4 border-[#00D084]/20 grayscale hover:grayscale-0 transition-all duration-500 object-cover"
                />
                <h4 className="text-2xl font-bold">{testimonial.name}</h4>
                <p className="text-[#00D084] font-bold text-sm tracking-widest uppercase mt-1">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 transition-all duration-700 rounded-full ${
                activeIndex === idx ? 'w-16 bg-[#00D084]' : 'w-4 bg-white/10 hover:bg-white/20'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
