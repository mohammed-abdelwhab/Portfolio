import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Scoreboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'PITCH', path: '/' },
    { name: 'MANAGER', path: '/about' },
    { name: 'SQUAD', path: '/skills' },
    { name: 'HISTORY', path: '/timeline' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-charcoal border-b-2 border-pitch-green z-50 flex items-center justify-between px-6 shadow-md">
        <div className="flex flex-col">
          <h1 className="font-bebas text-2xl tracking-widest text-white leading-none mt-1">
            MOHAMMED ABDELWHAB
          </h1>
          <span className="font-mono text-[10px] text-electric-lime tracking-widest uppercase">
            Frontend Developer
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex h-full">
          {navItems.map((item, idx) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                h-full flex items-center px-6 font-bebas text-xl tracking-wider transition-colors duration-200 border-l-2 border-board-dark
                ${isActive && item.path !== '/' ? 'text-electric-lime bg-board-dark/50' : 'text-gray-400 hover:text-white'}
                ${item.path === '/' && isActive ? 'text-white' : ''}
                ${idx === navItems.length - 1 ? 'border-r-2' : ''}
              `}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        {/* Mobile Menu Trigger */}
        <button className="md:hidden text-white hover:text-electric-lime transition-colors" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 top-16 bg-board-dark/95 backdrop-blur-md z-40 flex flex-col md:hidden border-b-2 border-electric-lime"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  w-full py-6 text-center font-bebas text-3xl tracking-widest border-b border-outline/50
                  ${isActive && item.path !== '/' ? 'text-electric-lime bg-charcoal' : 'text-white hover:text-electric-lime hover:bg-charcoal/50'}
                  ${item.path === '/' && isActive ? 'text-white bg-charcoal' : ''}
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Scoreboard;
