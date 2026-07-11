import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  // Config for random pulsing tactical LED lights on the grid
  const ledLights = [
    { top: '20%', left: '15%', delay: 0 },
    { top: '35%', left: '80%', delay: 1.5 },
    { top: '65%', left: '25%', delay: 3 },
    { top: '75%', left: '70%', delay: 0.8 },
    { top: '50%', left: '85%', delay: 2.2 },
    { top: '10%', left: '60%', delay: 4.1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-board-dark">
      {/* 1. Ambient Moving Blobs (Mesh Gradients) */}
      
      {/* Lime Glow Blob */}
      <motion.div
        className="absolute w-[40vw] h-[40vw] min-w-[300px] rounded-full bg-electric-lime/5 blur-[120px]"
        style={{ top: '10%', right: '5%' }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, 80, -30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Dark Forest Green Glow Blob */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] min-w-[400px] rounded-full bg-pitch-green/40 blur-[150px]"
        style={{ bottom: '-10%', left: '-10%' }}
        animate={{
          x: [0, -80, 50, 0],
          y: [0, -50, 70, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Center Ambient Glow */}
      <motion.div
        className="absolute w-[30vw] h-[30vw] min-w-[250px] rounded-full bg-electric-lime/3 blur-[100px]"
        style={{ top: '40%', left: '30%' }}
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 2. Tactical Digital Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ccff00 1px, transparent 1px),
            linear-gradient(to bottom, #ccff00 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 3. Glowing Grid Dots Overlay (Radial Mask to fade edges) */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(#ccff00 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at 50% 50%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 60%, transparent 100%)',
        }}
      />

      {/* 4. Pulsing Tactical LED Lights (Grid Intersections) */}
      {ledLights.map((light, idx) => (
        <motion.div
          key={idx}
          className="absolute w-1 h-1 rounded-full bg-electric-lime"
          style={{
            top: light.top,
            left: light.left,
            boxShadow: '0 0 8px #ccff00, 0 0 16px #ccff00',
          }}
          animate={{
            opacity: [0.1, 0.7, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            delay: light.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
