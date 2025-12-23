
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#012929]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00D084] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF9214] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1 border border-[#00D084] rounded-full bg-[#00D084]/10 text-[#00D084] font-bold text-xs tracking-widest uppercase">
          #GenerationGrowth
        </div>
        
        <h1 className="text-6xl md:text-[100px] font-extrabold leading-[0.9] tracking-tighter mb-8 uppercase">
          We Architect <br />
          <span className="font-serif italic font-normal text-[#00D084]">Digital Dominance</span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-12 font-medium leading-relaxed">
<<<<<<< HEAD
          Grogen blah is a premier creative crew that accelerates visionary brands through elite Branding, Marketing, and Visual Technology.
=======
          Grogen is a premier creative crew that accelerates visionary brands through elite Branding, Marketing, and Visual Technology.
>>>>>>> f415c79871292ac527531b1602540ec84cd29c6a
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-10 py-5 bg-[#00D084] text-[#012929] rounded-full font-black text-lg tracking-wider uppercase overflow-hidden transition-all hover:pr-14">
            <span className="relative z-10">Start Your Growth</span>
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
              →
            </span>
          </button>
          
          <button className="px-10 py-5 border border-white/20 rounded-full font-bold text-lg tracking-wider uppercase hover:bg-white/5 transition-all text-white">
            View Our Work
          </button>
        </div>

        {/* Floating Icons/Elements */}
        <div className="hidden lg:block absolute left-[15%] top-[25%] opacity-50">
           <img src="https://spintadigital.com/wp-content/uploads/2024/01/star-orange.png" width="40" alt="Star" />
        </div>
        <div className="hidden lg:block absolute right-[15%] bottom-[30%] opacity-50">
           <img src="https://spintadigital.com/wp-content/uploads/2024/01/star-green.png" width="60" alt="Star" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
