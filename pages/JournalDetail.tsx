
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { JOURNAL_ENTRIES } from '../constants';

const JournalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const entry = JOURNAL_ENTRIES.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!entry) return <div className="p-20 text-center font-serif text-2xl">Entry not found</div>;

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#F9F8F6] pt-32 md:pt-48 pb-32"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        {/* Editorial Header */}
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="flex items-center justify-center space-x-4">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-40">{entry.category}</span>
              <span className="w-8 h-[1px] bg-black/10"></span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-40">{entry.date}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif italic tracking-tight leading-tight">
              {entry.title}
            </h1>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] opacity-30">Written by {entry.author}</p>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-20 md:mb-32 grayscale brightness-105"
        >
          <img src={entry.image} alt={entry.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Article Body */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="prose prose-lg prose-stone"
          >
            {entry.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-base md:text-lg font-light leading-relaxed text-[#2D2D2D]/80 mb-10 first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <div className="mt-20 pt-16 border-t border-black/5 flex flex-col items-center">
            <Link to="/journal" className="group flex flex-col items-center space-y-4">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] opacity-40 group-hover:opacity-100 transition-opacity">Return to Journal</span>
              <div className="w-12 h-[1px] bg-black/10 group-hover:w-24 transition-all duration-700"></div>
            </Link>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default JournalDetail;
