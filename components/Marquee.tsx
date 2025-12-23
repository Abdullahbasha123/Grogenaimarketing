
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-[#00c892] py-8 overflow-hidden relative border-y border-white/10">
      <div className="flex whitespace-nowrap animate-scroll items-center">
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
          <div key={idx} className="flex items-center mx-12">
            <span className="text-4xl font-black text-[#012929] uppercase tracking-tighter opacity-80 hover:opacity-100 transition-opacity cursor-default">
              {logo}
            </span>
            <div className="ml-12 w-3 h-3 bg-[#012929] rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
