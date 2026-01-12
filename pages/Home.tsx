
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F9F8F6]">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2400" 
            alt="Architectural space" 
            className="w-full h-full object-cover brightness-[0.8]"
            fetchpriority="high"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="relative z-10 text-center text-[#F9F8F6] px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif italic mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-none">
              In pursuit of <br /> the essential.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-4 sm:space-y-0">
              <span className="hidden sm:block h-[1px] w-12 bg-[#F9F8F6]/40" />
              <p className="text-[9px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] font-light opacity-80">
                Architectural Practice &bull; Copenhagen
              </p>
              <span className="hidden sm:block h-[1px] w-12 bg-[#F9F8F6]/40" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 md:space-y-4"
        >
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-medium text-[#F9F8F6]">Scroll</span>
          <div className="w-[1px] h-10 md:h-16 bg-[#F9F8F6] origin-top animate-pulse" />
        </motion.div>
      </section>

      {/* Intro Narrative */}
      <section className="px-6 md:px-16 py-24 md:py-64 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 md:mb-10"
            >
              The Philosophy
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl md:text-6xl font-serif leading-[1.2] md:leading-[1.1] text-[#2D2D2D]"
            >
              We believe architecture is a frame for living. Our design language is rooted in quietness, raw materiality, and the choreography of light.
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Selected Projects Grid */}
      <section className="px-6 md:px-16 pb-24 md:pb-64 max-w-screen-2xl mx-auto">
        <div className="mb-12 md:mb-32 border-t border-[#D1CEC7]/30 pt-10 md:pt-16 flex flex-col md:flex-row justify-between items-start md:items-end">
          <h2 className="text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] font-semibold opacity-40">Portfolio Archive</h2>
          <p className="text-3xl md:text-5xl font-serif italic mt-4 md:mt-0 opacity-80">Recent Explorations</p>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-[#2D2D2D] text-[#F9F8F6] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale" 
            loading="lazy"
            decoding="async"
            alt=""
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-12"
          >
            <h3 className="text-2xl sm:text-4xl md:text-6xl font-serif italic leading-tight">
              "To create architecture is to create silence in a world that never stops talking."
            </h3>
            <div className="flex flex-col items-center space-y-4">
              <span className="w-12 md:w-16 h-[1px] bg-[#F9F8F6]/20" />
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-light opacity-50">Practice Mandate</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
