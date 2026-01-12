
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = PROJECTS.findIndex(p => p.id === id);
  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="p-20 text-center font-serif text-2xl">Project not found</div>;

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#F9F8F6]"
    >
      {/* Immersive Hero */}
      <section className="h-[70vh] md:h-screen w-full relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          src={project.heroImage} 
          className="w-full h-full object-cover brightness-90" 
          alt={project.title} 
        />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-16 bg-gradient-to-t from-black/50 to-transparent flex justify-between items-end">
          <div className="text-[#F9F8F6]">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-80 mb-2 md:mb-4">{project.category}</p>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-serif italic leading-none mb-1 md:mb-2">{project.title}</h1>
          </div>
          <div className="hidden sm:block text-[#F9F8F6]/60 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium">
            {project.location} &bull; {project.year}
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-16 py-16 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          
          {/* Sidebar Narrative */}
          <div className="lg:col-span-4 space-y-12 md:space-y-20">
            <div className="lg:sticky lg:top-40 space-y-10 md:space-y-16">
              <div className="space-y-4 md:space-y-8">
                <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-40">The Concept</h4>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif leading-snug text-[#2D2D2D]">
                  {project.description}
                </p>
              </div>

              <div className="pt-8 md:pt-16 border-t border-[#D1CEC7]/40 space-y-6 md:space-y-8">
                <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-40">Atmosphere</h4>
                <p className="text-xs md:text-sm font-light leading-relaxed opacity-60 italic">
                  "{project.philosophy}"
                </p>
              </div>

              <div className="pt-8 md:pt-16 grid grid-cols-2 gap-4 md:gap-8">
                <div>
                  <h5 className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] opacity-40 mb-1 md:mb-2">Location</h5>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest">{project.location}</p>
                </div>
                <div>
                  <h5 className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] opacity-40 mb-1 md:mb-2">Year</h5>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest">{project.year}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Image Gallery */}
          <div className="lg:col-span-8 space-y-16 md:space-y-32">
            {project.gallery.map((img, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full overflow-hidden ${idx % 2 === 1 ? 'lg:pr-12' : 'lg:pl-12'}`}
              >
                <img src={img} className="w-full object-cover aspect-[4/5] md:aspect-auto" alt={`${project.title} detail ${idx}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project Link */}
      <section className="px-6 md:px-16 py-24 md:py-64 bg-[#2D2D2D] text-[#F9F8F6] group overflow-hidden relative">
        <Link to={`/project/${nextProject.id}`} className="block relative z-10">
          <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] opacity-40 group-hover:opacity-100 transition-opacity duration-700">Next Project</p>
            <h2 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-serif italic tracking-tighter transition-all duration-1000 group-hover:scale-105">
              {nextProject.title}
            </h2>
            <div className="flex items-center space-x-4 opacity-30 group-hover:opacity-100 transition-all duration-700">
              <span className="text-[10px] uppercase tracking-[0.3em]">View details</span>
              <div className="w-8 md:w-12 h-[1px] bg-[#F9F8F6]" />
            </div>
          </div>
        </Link>
        <img 
          src={nextProject.heroImage} 
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-all duration-1000 scale-110 group-hover:scale-100" 
          alt="Next"
        />
      </section>

      {/* Archive Nav */}
      <div className="px-6 md:px-16 py-8 md:py-12 flex flex-col sm:flex-row justify-between items-center border-t border-[#D1CEC7]/10 bg-[#F9F8F6] space-y-4 sm:space-y-0">
        <Link to="/" className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-all duration-500 flex items-center">
          <span className="mr-3">&larr;</span> Project Archive
        </Link>
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-20">Atelier Minimalist &copy; 2024</span>
      </div>
    </motion.main>
  );
};

export default ProjectDetail;
