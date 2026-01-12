
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-12 py-16 md:py-20 border-t border-[#D1CEC7]/30 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 items-start">
        <div className="space-y-4">
          <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40">Contact</h4>
          <p className="text-sm font-light">info@atelier-minimalist.com</p>
          <p className="text-sm font-light">+45 20 30 40 50</p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40">Atelier</h4>
          <p className="text-sm font-light">Bredgade 24,<br />1260 Copenhagen, Denmark</p>
        </div>
        
        <div className="space-y-4 md:text-right sm:col-span-2 md:col-span-1">
          <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40">Follow</h4>
          <div className="flex md:justify-end space-x-6">
            <a href="#" className="text-sm font-light hover:opacity-50 transition-opacity">Instagram</a>
            <a href="#" className="text-sm font-light hover:opacity-50 transition-opacity">Journal</a>
          </div>
        </div>
      </div>
      
      <div className="mt-16 md:mt-20 pt-8 border-t border-[#D1CEC7]/10 flex flex-col md:flex-row justify-between opacity-30 text-[8px] md:text-[9px] uppercase tracking-[0.2em] space-y-4 md:space-y-0 text-center md:text-left">
        <p>&copy; 2024 Atelier Minimalist</p>
        <p>Quiet & Timeless</p>
      </div>
    </footer>
  );
};

export default Footer;
