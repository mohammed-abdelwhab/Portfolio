import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer' || target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <div 
      className="fixed pointer-events-none z-[100] w-6 h-6 -ml-3 -mt-3 transition-transform duration-150 ease-out flex items-center justify-center"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `scale(${isPointer ? 1.5 : 1}) rotate(${position.x % 360}deg)`
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-lime w-full h-full drop-shadow-[0_0_2px_rgba(204,255,0,0.8)]">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20"></path>
        <path d="M2 12h20"></path>
      </svg>
    </div>
  );
};

export default CustomCursor;
