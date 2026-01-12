
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F9F8F6] min-h-screen flex flex-col">
      <section className="px-6 md:px-16 pt-32 md:pt-48 pb-20 md:pb-32 flex-grow max-w-screen-2xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20">
          
          <div className="lg:col-span-5 space-y-16 md:space-y-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] opacity-40 mb-6 md:mb-10">Collaboration</p>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif italic leading-tight tracking-tighter mb-10 md:mb-16">
                Start a dialog <br /> with our practice.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
              <div className="space-y-4 md:space-y-6">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40">General</p>
                <a href="mailto:info@atelier-minimalist.com" className="text-lg md:text-xl font-light block hover:opacity-50 transition-opacity border-b border-[#D1CEC7] pb-2">
                  info@atelier-minimalist.com
                </a>
              </div>
              <div className="space-y-4 md:space-y-6">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40">Atelier</p>
                <p className="text-sm md:text-base font-light leading-relaxed">
                  Bredgade 24, 3rd Floor<br />
                  Copenhagen, DK
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="space-y-10 md:space-y-16" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-3 md:space-y-4 group">
                  <label className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40 block transition-all group-focus-within:opacity-100 group-focus-within:text-[#2D2D2D]">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-[#D1CEC7] outline-none font-light py-2 md:py-4 text-base md:text-lg focus:border-[#2D2D2D] transition-colors"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-3 md:space-y-4 group">
                  <label className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40 block transition-all group-focus-within:opacity-100">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-[#D1CEC7] outline-none font-light py-2 md:py-4 text-base md:text-lg focus:border-[#2D2D2D] transition-colors"
                    placeholder="example@domain.com"
                  />
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 group">
                <label className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40 block transition-all group-focus-within:opacity-100">Project Nature</label>
                <select className="w-full bg-transparent border-b border-[#D1CEC7] outline-none font-light py-2 md:py-4 text-base md:text-lg focus:border-[#2D2D2D] transition-colors appearance-none rounded-none cursor-pointer">
                  <option>Residential Interior</option>
                  <option>Hospitality & Retail</option>
                  <option>Workplace Design</option>
                  <option>Furniture & Objects</option>
                </select>
              </div>

              <div className="space-y-3 md:space-y-4 group">
                <label className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40 block transition-all group-focus-within:opacity-100">Message</label>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent border-b border-[#D1CEC7] outline-none font-light py-2 md:py-4 text-base md:text-lg resize-none focus:border-[#2D2D2D] transition-colors"
                  placeholder="Describe your vision"
                />
              </div>

              <button className="group relative w-full md:w-auto overflow-hidden border border-[#2D2D2D] px-10 md:px-20 py-4 md:py-6 transition-all duration-700">
                <span className="relative z-10 text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] group-hover:text-[#F9F8F6] transition-colors duration-700">Send Message</span>
                <div className="absolute inset-0 bg-[#2D2D2D] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
