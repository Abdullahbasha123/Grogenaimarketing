
import React from 'react';

interface NavbarProps {
  scrollY: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const isScrolled = scrollY > 50;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 ${
        isScrolled ? 'bg-[#012929]/95 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section matching the provided image */}
        <div className="flex flex-col items-center gap-1 group cursor-pointer">
          <div className="flex items-center -space-x-1">
            {/* Dark Teal 'G' Shape */}
            <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:-translate-x-1">
              <path d="M10 0L34 13L10 26L0 21L18 13L0 5L10 0Z" fill="#003D3D"/>
            </svg>
            {/* Mint Green 'G' Shape */}
            <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:translate-x-1">
              <path d="M10 0L34 13L10 26L0 21L18 13L0 5L10 0Z" fill="#00D084"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-[0.2em] uppercase leading-none text-white">Grogen</span>
        </div>

        {/* Links removed as per request */}

        <button className="bg-white text-[#012929] px-8 py-2.5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#00D084] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
