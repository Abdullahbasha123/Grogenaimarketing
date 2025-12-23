
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-32 bg-white text-[#012929]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="text-6xl md:text-8xl font-black mb-4 tracking-tighter group-hover:text-[#00c892] transition-colors flex justify-center items-center">
                {stat.value}
                <span className="text-3xl md:text-5xl ml-1">{stat.suffix}</span>
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 max-w-[150px] mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
