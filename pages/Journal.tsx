
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { JOURNAL_ENTRIES } from '../constants';

const Journal: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F9F8F6] pt-32 md:pt-48 pb-20">
      <section className="px-6 md:px-16 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-baseline"
        >
          <div>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] opacity-40 mb-6">Thoughts & Process</p>
            <h2 className="text-4xl md:text-7xl font-serif italic leading-none tracking-tight">Journal</h2>
          </div>
          <p className="max-w-xs text-xs font-light leading-relaxed opacity-40 mt-8 md:mt-0 italic">
            Reflections on the intersection of space, light, and materiality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {JOURNAL_ENTRIES.map((entry, idx) => (
            <Link 
              key={entry.id}
              to={`/journal/${entry.id}`}
              className="flex flex-col group cursor-pointer"
            >
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1 }}
              >
                <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    src={entry.image} 
                    alt={entry.title} 
                    className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute top-4 left-4 text-[8px] uppercase tracking-[0.3em] bg-white/80 px-2 py-1 backdrop-blur-sm">
                    {entry.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <span className="text-[9px] uppercase tracking-[0.3em] opacity-30">{entry.date}</span>
                  <h3 className="text-2xl font-serif italic group-hover:translate-x-2 transition-transform duration-500">
                    {entry.title}
                  </h3>
                  <p className="text-xs md:text-sm font-light leading-relaxed opacity-60">
                    {entry.excerpt}
                  </p>
                  <div className="pt-4 flex items-center space-x-4">
                    <span className="text-[9px] uppercase tracking-[0.4em] font-medium border-b border-black/10">Read Essay</span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Journal;
