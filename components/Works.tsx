
import React from 'react';
import { PROJECTS } from '../constants';

const Works: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#012929] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#00c892] mb-6">Portfolio</h2>
            <h3 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter">
              Glimpse of <br />
              <span className="font-serif italic text-[#FF9214]">Our Works</span>
            </h3>
          </div>
          <button className="group text-lg font-bold uppercase tracking-widest border-b-2 border-[#00c892] pb-1 hover:text-[#00c892] transition-all">
            View All Projects <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-gray-900 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012929] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <div className="text-[#00c892] text-xs font-bold uppercase tracking-[0.2em] mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.category}
                  </div>
                  <h4 className="text-3xl font-bold uppercase tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
