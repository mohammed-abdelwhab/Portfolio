import React from 'react';
import PitchLines from './PitchLines';
import PlayerToken from './PlayerToken';
import { projects } from '../../data/projects';

const Pitch = () => {
  // Group projects by position
  const forwards = projects.filter(p => p.position === 'forward');
  const midfielders = projects.filter(p => p.position === 'midfielder');
  const defenders = projects.filter(p => p.position === 'defender');
  const goalkeepers = projects.filter(p => p.position === 'goalkeeper');

  const renderRow = (players) => (
    <div className="flex justify-evenly items-center w-full h-[22%]">
      {players.map((project, idx) => (
        <PlayerToken key={project.id} project={project} index={idx} />
      ))}
    </div>
  );

  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col items-center p-4 pt-20 md:pt-8 gap-4 md:gap-8 overflow-y-auto">
      
      {/* Welcome Banner */}
      <div className="text-center z-10 flex flex-col items-center gap-2 mt-2 md:mt-4 shrink-0">
        <div className="flex items-center gap-2 text-electric-lime mb-1">
          <div className="w-2 h-2 rounded-full bg-electric-lime animate-pulse shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase font-bold">Live Match: Career Portfolio</span>
        </div>
        
        <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-widest leading-none drop-shadow-lg">
          TACTICAL DEVELOPER BOARD
        </h2>
        
        <p className="font-inter text-gray-400 max-w-lg text-xs md:text-sm mt-2 px-4 leading-relaxed">
          Welcome to the manager's office. Here you'll find our starting XI—the core projects and codebases that make the system work. Every player has a role.
        </p>
        
        <div className="mt-4 bg-electric-lime text-charcoal px-4 py-2 font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase inline-block border border-transparent shadow-[0_0_15px_rgba(204,255,0,0.15)] hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all cursor-default">
          SELECT A PLAYER BELOW TO VIEW MATCH REPORT
        </div>
      </div>

      {/* The pitch container maintains a fixed vertical aspect ratio */}
      <div className="relative w-full max-w-[500px] h-auto aspect-[2/3] sm:aspect-[3/4] bg-pitch-green bg-pitch-stripes border-4 border-white shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col justify-between py-[5%] shrink-0">
        
        {/* Pitch Markings SVG */}
        <PitchLines />

        {/* Formation Rows using Flexbox */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between py-[8%] px-2 pointer-events-none">
          {renderRow(forwards)}
          {renderRow(midfielders)}
          {renderRow(defenders)}
          {renderRow(goalkeepers)}
        </div>
      </div>
      
      {/* Bottom padding to allow scrolling past the pitch on small screens */}
      <div className="h-8 shrink-0" />
    </div>
  );
};

export default Pitch;
