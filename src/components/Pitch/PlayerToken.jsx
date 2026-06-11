import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PlayerToken = ({ project, index }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center cursor-pointer pointer-events-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20, 
        delay: index * 0.15 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/project/${project.id}`)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -8 }}
            exit={{ opacity: 0, y: 0 }}
            className="absolute bottom-full mb-2 whitespace-nowrap bg-charcoal border border-outline px-3 py-1.5 flex gap-1.5 shadow-lg pointer-events-none"
          >
            {project.stack.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-[10px] font-mono text-electric-lime uppercase">
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="text-[10px] font-mono text-gray-400 uppercase">
                +{project.stack.length - 3}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Token Body */}
      <motion.div
        className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-white flex items-center justify-center bg-charcoal text-white relative shadow-md"
        whileHover={{
          scale: 1.15,
          boxShadow: '0 0 15px rgba(204, 255, 0, 0.6)',
          borderColor: '#ccff00',
          color: '#ccff00'
        }}
      >
        <span className="font-bebas text-xl md:text-3xl mt-1">
          {project.jerseyNumber}
        </span>
      </motion.div>

      {/* Project Name */}
      <motion.span 
        className="mt-2 text-[10px] md:text-[12px] font-mono font-bold uppercase tracking-wider text-white text-center drop-shadow-md bg-board-dark/80 px-2 py-0.5"
        animate={{ color: isHovered ? '#ccff00' : '#ffffff' }}
      >
        {project.name}
      </motion.span>
    </motion.div>
  );
};

export default PlayerToken;
