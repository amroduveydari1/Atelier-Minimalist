
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Projects', path: '/', id: '01' },
    { name: 'Archive', path: '/archive', id: '02' },
    { name: 'About', path: '/about', id: '03' },
    { name: 'Journal', path: '/journal', id: '04' },
    { name: 'Contact', path: '/contact', id: '05' },
  ];

  const isLightPage = ['/about', '/contact', '/archive', '/journal'].includes(location.pathname);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 sm:px-12 md:px-16 py-6 md:py-10 flex justify-between items-center text-white ${
          isScrolled 
            ? 'bg-[#1A1A1A]/95 backdrop-blur-md py-4 md:py-6 border-b border-white/5 shadow-xl' 
            : (isLightPage && !isOpen) ? 'bg-[#1A1A1A]/40 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="group flex items-center space-x-3 z-[110]">
          <div className="hidden sm:block w-8 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          <h1 className="text-sm md:text-base tracking-[0.25em] md:tracking-[0.3em] font-medium uppercase">
            Atelier <span className="font-serif italic lowercase tracking-normal text-lg md:text-xl">Minimalist</span>
          </h1>
        </Link>
        
        <div className="hidden lg:flex space-x-10 xl:space-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative py-2 group overflow-hidden"
            >
              <span className={`text-[10px] uppercase tracking-[0.25em] transition-all duration-500 block ${
                location.pathname === link.path ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'
              }`}>
                {link.name}
              </span>
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-white transition-transform duration-500 origin-right ${
                location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:origin-left'
              }`} />
            </Link>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-end space-y-2 z-[110] w-8 h-8 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <motion.div 
            animate={isOpen ? { rotate: 45, y: 5, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
            className="h-[1px] bg-white transition-all duration-500"
          />
          <motion.div 
            animate={isOpen ? { rotate: -45, y: -5, width: '100%' } : { rotate: 0, y: 0, width: '60%' }}
            className="h-[1px] bg-white transition-all duration-500"
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#1A1A1A] z-[90] lg:hidden flex flex-col justify-center px-12"
          >
            <div className="space-y-12">
              <p className="text-[9px] uppercase tracking-[0.5em] text-white/30 mb-8">Navigation</p>
              <nav className="flex flex-col space-y-6 md:space-y-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx + 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link 
                      to={link.path}
                      className="group flex items-baseline space-x-6 text-white"
                    >
                      <span className="text-[10px] font-light opacity-30 tracking-[0.2em]">{link.id}</span>
                      <span className={`text-4xl md:text-5xl font-serif italic tracking-tight transition-all duration-500 ${
                        location.pathname === link.path ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
                      }`}>
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 0.8 }}
                className="pt-20 border-t border-white/10"
              >
                <div className="grid grid-cols-2 gap-8 text-[9px] uppercase tracking-[0.3em] text-white font-light">
                  <div className="space-y-2">
                    <p className="opacity-40">Contact</p>
                    <p>Copenhagen, DK</p>
                  </div>
                  <div className="space-y-2">
                    <p className="opacity-40">Social</p>
                    <p>Instagram</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
