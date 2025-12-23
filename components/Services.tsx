
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#012929]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
              Our <span className="font-serif italic text-[#FF9214]">Toolkit</span> <br /> For Growth
            </h2>
            <p className="text-xl text-gray-400">
              Four pillars of digital excellence designed to elevate your brand from noise to necessity.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 border-2 border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">
                Scroll to <br /> Explore
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="group relative bg-[#023535] p-10 rounded-3xl border border-white/5 hover:border-[#00c892]/50 transition-all duration-500 overflow-hidden"
            >
              <div 
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10 transition-all duration-500 group-hover:scale-150" 
                style={{ backgroundColor: service.color }}
              />
              
              <div className="relative z-10">
                <div className="text-gray-500 font-bold mb-4">0{idx + 1}</div>
                <h3 className="text-3xl font-bold mb-6 group-hover:text-[#00c892] transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00c892]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
