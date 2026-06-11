import React from 'react';
import { motion } from 'framer-motion';

const PitchLines = () => {
  // Animation for the paths to draw in
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: i => ({
      pathLength: 1,
      opacity: 0.3, // Keep them subtle as per design
      transition: {
        pathLength: { duration: 1.5, ease: "easeOut", delay: i * 0.15 },
        opacity: { duration: 0.2, delay: i * 0.15 }
      }
    })
  };

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      {/* Outer Boundary */}
      <motion.rect
        x="2" y="2" width="96" height="96"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        custom={0}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Halfway Line */}
      <motion.line
        x1="2" y1="50" x2="98" y2="50"
        stroke="#ffffff"
        strokeWidth="0.5"
        custom={1}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Center Circle */}
      <motion.circle
        cx="50" cy="50" r="10"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        custom={2}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Center Dot */}
      <motion.circle
        cx="50" cy="50" r="0.5"
        fill="#ffffff"
        opacity="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
      />

      {/* Top Penalty Box */}
      <motion.rect
        x="25" y="2" width="50" height="15"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        custom={3}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Top Goal Area */}
      <motion.rect
        x="38" y="2" width="24" height="5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        custom={4}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Top Penalty Arc */}
      <motion.path
        d="M 40 17 A 10 10 0 0 0 60 17"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        custom={5}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Bottom Penalty Box */}
      <motion.rect
        x="25" y="83" width="50" height="15"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        custom={6}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Bottom Goal Area */}
      <motion.rect
        x="38" y="93" width="24" height="5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        custom={7}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Bottom Penalty Arc */}
      <motion.path
        d="M 40 83 A 10 10 0 0 1 60 83"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        custom={8}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      
      {/* Corner Arcs */}
      <motion.path d="M 2 5 A 3 3 0 0 0 5 2" fill="none" stroke="#ffffff" strokeWidth="0.5" custom={9} variants={pathVariants} initial="hidden" animate="visible" />
      <motion.path d="M 98 5 A 3 3 0 0 1 95 2" fill="none" stroke="#ffffff" strokeWidth="0.5" custom={9} variants={pathVariants} initial="hidden" animate="visible" />
      <motion.path d="M 2 95 A 3 3 0 0 1 5 98" fill="none" stroke="#ffffff" strokeWidth="0.5" custom={9} variants={pathVariants} initial="hidden" animate="visible" />
      <motion.path d="M 98 95 A 3 3 0 0 0 95 98" fill="none" stroke="#ffffff" strokeWidth="0.5" custom={9} variants={pathVariants} initial="hidden" animate="visible" />

    </svg>
  );
};

export default PitchLines;
