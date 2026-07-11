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
  const substitutes = projects.filter(p => p.position === 'substitute' || p.position === 'bench');

  const renderRow = (players) => (
    <div className="flex justify-evenly items-center w-full h-[22%]">
      {players.map((project, idx) => (
        <PlayerToken key={project.id} project={project} index={idx} />
      ))}
    </div>
  );

  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col items-center p-4 pt-20 md:pt-8 gap-4 md:gap-8 overflow-y-auto no-scrollbar">
      
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
      <div className="relative w-full max-w-[580px] h-auto aspect-[3/4] sm:aspect-[4/5] bg-pitch-green bg-pitch-stripes border-4 border-white shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col justify-between py-[5%] shrink-0">
        
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

      {/* Substitutes Bench Container */}
      <div className="w-full max-w-[580px] bg-charcoal/60 backdrop-blur-md border border-outline p-4 rounded-xl flex flex-col gap-3 shrink-0 z-10 mb-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-outline pb-2">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-electric-lime animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-gray-300 font-bold">MATCHDAY BENCH</span>
          </div>
          <span className="font-mono text-[10px] text-gray-500 font-bold uppercase">{substitutes.length} / 5 SUBSTITUTES</span>
        </div>
        
        <div className="flex justify-evenly items-center gap-2 py-2">
          {Array.from({ length: 5 }).map((_, idx) => {
            const sub = substitutes[idx];
            if (sub) {
              return (
                <div key={sub.id} className="flex-1 flex justify-center pointer-events-auto">
                  <PlayerToken project={sub} index={idx} />
                </div>
              );
            } else {
              return (
                <div key={`empty-${idx}`} className="flex-1 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-dashed border-outline/50 flex items-center justify-center bg-charcoal/30 text-gray-600 transition-colors hover:border-electric-lime/30 hover:bg-charcoal/40">
                    <span className="font-mono text-[10px] tracking-tighter select-none font-bold">SUB</span>
                  </div>
                  <span className="mt-2 text-[9px] font-mono font-bold uppercase tracking-wider text-gray-600 text-center select-none">
                    EMPTY
                  </span>
                </div>
              );
            }
          })}
        </div>
      </div>
      
      {/* Bottom padding to allow scrolling past the pitch on small screens */}
      <div className="h-8 shrink-0" />
    </div>
  );
};

export default Pitch;
