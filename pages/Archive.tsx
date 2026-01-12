
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Archive: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

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
          className="mb-20 md:mb-32"
        >
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] opacity-40 mb-6">Archive</p>
          <h2 className="text-4xl md:text-7xl font-serif italic leading-none tracking-tight">Project Index</h2>
        </motion.div>

        {/* Project Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 border-b border-[#2D2D2D]/10 pb-6 text-[9px] uppercase tracking-[0.3em] font-medium opacity-30">
          <div className="col-span-1">No.</div>
          <div className="col-span-4">Project Title</div>
          <div className="col-span-3">Location</div>
          <div className="col-span-2">Year</div>
          <div className="col-span-2 text-right">Category</div>
        </div>

        {/* Project List */}
        <div className="relative">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 + 0.5 }}
              onMouseEnter={() => setHoveredProject(project.heroImage)}
              onMouseLeave={() => setHoveredProject(null)}
              className="border-b border-[#2D2D2D]/5 last:border-0"
            >
              <Link 
                to={`/project/${project.id}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-8 md:py-10 group items-center"
              >
                <div className="col-span-1 text-[10px] font-light opacity-30">0{idx + 1}</div>
                <div className="col-span-4 text-xl md:text-2xl font-serif italic group-hover:translate-x-4 transition-transform duration-700">
                  {project.title}
                </div>
                <div className="col-span-3 text-[10px] md:text-xs uppercase tracking-widest opacity-40">
                  {project.location}
                </div>
                <div className="col-span-2 text-[10px] md:text-xs font-light opacity-40">
                  {project.year}
                </div>
                <div className="col-span-2 text-right text-[10px] uppercase tracking-[0.2em] opacity-30 group-hover:opacity-100 transition-opacity">
                  {project.category}
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Floating Hover Preview (Desktop Only) */}
          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="fixed pointer-events-none z-50 w-64 h-80 hidden lg:block overflow-hidden shadow-2xl"
                style={{
                   top: '50%',
                   left: '75%',
                   transform: 'translate(-50%, -50%)'
                }}
              >
                <img src={hoveredProject} alt="Preview" className="w-full h-full object-cover" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Archive;
