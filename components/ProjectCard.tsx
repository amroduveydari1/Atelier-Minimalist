
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`relative group w-full mb-12 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center`}
    >
      <div className={`lg:col-span-8 ${isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-5'}`}>
        <Link to={`/project/${project.id}`} className="block overflow-hidden relative group/img">
          <div className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/10] overflow-hidden bg-[#E5E2DB]">
            <motion.img 
              initial={{ scale: 1, filter: "grayscale(20%) contrast(1) brightness(0.95)" }}
              whileHover={{ 
                scale: 1.06, 
                filter: "grayscale(0%) contrast(1.08) brightness(1.02)",
                transition: { duration: 3, ease: [0.16, 1, 0.3, 1] }
              }}
              src={project.heroImage} 
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-all duration-1000 ease-out"
            />
          </div>
          {/* Subtle inner shadow/frame effect that fades on hover */}
          <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover/img:border-white/20 transition-colors duration-1000" />
          <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover/img:bg-transparent transition-colors duration-1000" />
        </Link>
      </div>
      
      <div className={`lg:col-span-4 ${isEven ? 'lg:order-2 text-left' : 'lg:order-1 lg:text-right'}`}>
        <div className="space-y-4 md:space-y-6 px-2 sm:px-0">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em]"
          >
            {project.category} &mdash; {project.year}
          </motion.p>
          <div className="space-y-2 md:space-y-4">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif italic tracking-tight leading-none text-[#2D2D2D]">
              {project.title}
            </h3>
            <p className="text-[10px] md:text-xs font-light tracking-wide uppercase opacity-30">
              {project.location}
            </p>
          </div>
          <p className="text-xs md:text-sm font-light leading-relaxed opacity-60 max-w-sm mx-auto lg:mx-0">
            {project.description.substring(0, 120)}...
          </p>
          <Link 
            to={`/project/${project.id}`} 
            className="inline-flex items-center pt-2 md:pt-4 text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium border-b border-transparent hover:border-[#2D2D2D] transition-all duration-500 group/link"
          >
            Explore Project
            <motion.span 
              className="ml-2 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-500"
            >
              &rarr;
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
