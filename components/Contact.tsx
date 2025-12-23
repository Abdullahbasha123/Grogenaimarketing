
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#012929]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase leading-none">
            Let's <br />
            <span className="font-serif italic text-[#00D084]">Collaborate</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ready to build your stack to success? Whether it's a rebranding, a content strategy, 
            or a high-converting landing page, our crew is ready to deploy.
          </p>
          
          <div className="space-y-6">
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Direct Access</div>
              <a href="mailto:basha@grogen.in" className="text-3xl md:text-4xl font-black text-white hover:text-[#00D084] transition-colors break-all">
                basha@grogen.in
              </a>
            </div>
            <div className="pt-8 border-t border-white/5">
              <p className="text-gray-500 font-medium italic">Available for remote partnerships and on-site mandates.</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10 backdrop-blur-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#00D084] transition-colors text-lg text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@vision.com" 
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#00D084] transition-colors text-lg text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Which service interests you?</label>
              <select className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#00D084] transition-colors text-lg appearance-none cursor-pointer text-white">
                <option className="bg-[#012929]">Social Media Marketing</option>
                <option className="bg-[#012929]">Personal Branding</option>
                <option className="bg-[#012929]">Graphic Design</option>
                <option className="bg-[#012929]">Web & UI/UX</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Brief Project Details</label>
              <textarea 
                rows={4} 
                placeholder="Tell us about your brand vision..." 
                className="w-full bg-transparent border border-white/20 p-4 rounded-2xl focus:outline-none focus:border-[#00D084] transition-colors text-lg resize-none text-white"
              ></textarea>
            </div>
            <button className="w-full bg-[#00D084] text-[#012929] py-5 rounded-full font-black text-lg tracking-widest uppercase hover:bg-white transition-all transform hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
