
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F9F8F6] pt-32 md:pt-48 pb-0">
      {/* Manifesto */}
      <section className="px-6 md:px-16 mb-24 md:mb-48 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          <div className="lg:col-span-8">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] opacity-40 mb-8 md:mb-12"
            >
              The Atelier Narrative
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-7xl font-serif italic leading-[1.1] md:leading-[1.05] tracking-tight mb-10 md:mb-16"
            >
              We believe in the power <br className="hidden md:block" /> of restraint.
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-base md:text-lg font-light leading-relaxed text-[#2D2D2D]/80">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Founded on the principles of modernist reduction, Atelier Minimalist is a Copenhagen-based practice dedicated to the architectural interior. We don't just decorate spaces; we sculpt them.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                Our philosophy is centered on the 'sensory architectural'. We prioritize the tactile over the visual, the permanent over the trend, and the silence over the noise.
              </motion.p>
            </div>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <motion.div 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className="w-full aspect-[4/3] lg:aspect-[3/4] overflow-hidden grayscale brightness-110 shadow-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&q=80&w=1200" 
                alt="Material and light study" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services blueprint style */}
      <section className="bg-[#2D2D2D] text-[#F9F8F6] py-20 md:py-64 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-48 border-b border-[#F9F8F6]/10 pb-10 md:pb-16">
            <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] opacity-40">Expertise</h3>
            <p className="text-2xl sm:text-3xl md:text-5xl font-serif italic mt-4 md:mt-0">The Architecture of Detail</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className="group space-y-6 md:space-y-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] md:text-[10px] font-medium opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  <div className="w-6 md:w-8 h-[1px] bg-[#F9F8F6]/20" />
                </div>
                <h4 className="text-lg md:text-xl tracking-widest uppercase font-medium">{service.title}</h4>
                <p className="text-xs md:text-sm font-light leading-relaxed opacity-50 group-hover:opacity-80 transition-opacity">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Visual */}
      <section className="h-[60vh] md:h-screen w-full relative">
        <img 
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=2400" 
          alt="Atelier interior" 
          className="w-full h-full object-cover grayscale brightness-95"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
           <p className="text-[#F9F8F6] text-xs md:text-lg uppercase tracking-[0.6em] md:tracking-[1em] font-light">Built on Precision</p>
        </div>
      </section>
    </main>
  );
};

export default About;
