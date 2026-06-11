import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const SectionOverlay = ({ children, title }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end pointer-events-none">
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-board-dark/80 backdrop-blur-sm pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => navigate('/')}
      />

      {/* Slide-in Panel */}
      <motion.div 
        className="relative w-full max-w-2xl h-full bg-[#111] border-l-2 border-outline flex flex-col pointer-events-auto shadow-2xl"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        {/* Header */}
        <div className="h-20 flex items-center justify-between px-8 border-b-2 border-outline shrink-0">
          <h2 className="font-bebas text-4xl text-electric-lime tracking-widest mt-2">{title}</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar relative">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionOverlay;
