
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Works from './components/Works';
import Services from './components/Services';
import Brands from './components/Brands';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <Marquee />
        
        {/* Intro Section */}
        <section className="py-24 px-6 md:px-12 bg-[#012929]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Architecting <br />
                <span className="font-serif italic text-[#00D084]">Brand Legacies</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Grogen is a high-performance creative crew helping brands, founders, and creators dominate the digital landscape. 
                Whether you need scroll-stopping content or a visual identity that resonates, we ensure you stay sharp, consistent, 
                and unforgettable across every touchpoint.
              </p>
            </div>
            <div className="md:w-1/2 relative">
               <div className="w-full aspect-square bg-[#00D084]/10 rounded-full absolute -top-10 -left-10 animate-pulse" />
               <img 
                 src="https://picsum.photos/id/60/800/800" 
                 alt="Creative Studio" 
                 className="rounded-3xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
               />
            </div>
          </div>
        </section>

        <Works />
        <Services />
        <Brands />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
