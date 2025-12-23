
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#012929] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-md">
            <div className="flex flex-col items-start gap-2 mb-6 group cursor-default">
              <div className="flex items-center -space-x-1">
                <svg width="40" height="30" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0L34 13L10 26L0 21L18 13L0 5L10 0Z" fill="#003D3D"/>
                </svg>
                <svg width="40" height="30" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0L34 13L10 26L0 21L18 13L0 5L10 0Z" fill="#00D084"/>
                </svg>
              </div>
              <span className="text-3xl font-black tracking-[0.2em] uppercase text-white">Grogen</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              We are the catalysts of digital transformation, propelling visionary brands to new heights through elite branding, media, and tech.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-sm tracking-[0.2em] uppercase text-[#00D084] mb-6">Solutions</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Creative Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-[0.2em] uppercase text-[#00D084] mb-6">Explore</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-sm tracking-[0.2em] uppercase text-[#00D084] mb-6">Follow</h4>
              <div className="flex gap-4">
                {['LinkedIn', 'Instagram', 'Twitter'].map(social => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:border-[#00D084] hover:text-[#00D084] transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-1 h-1 bg-current rounded-full" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
          <div>© 2025 Grogen. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
