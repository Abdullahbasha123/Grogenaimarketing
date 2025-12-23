
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Brands: React.FC = () => {
  return (
    <section className="py-24 bg-[#012929] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
          Brands We <span className="font-serif italic text-[#00D084]">Nurtured</span>
        </h2>
        <p className="text-gray-400 text-lg">Partnering with industry leaders to drive massive scale.</p>
      </div>

      <div className="relative flex overflow-x-hidden group bg-white/5 py-12 border-y border-white/10">
        <div className="flex animate-scroll whitespace-nowrap items-center">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((brand, idx) => (
            <div 
              key={idx} 
              className="mx-12 flex items-center justify-center transition-all duration-500 hover:scale-110"
            >
              <span className="text-3xl md:text-5xl font-black text-white/10 group-hover:text-white/40 transition-colors uppercase tracking-tighter">
                {brand}
              </span>
              <div className="ml-24 w-2 h-2 bg-[#00D084] rounded-full opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
