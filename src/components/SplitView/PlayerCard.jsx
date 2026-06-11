import React from 'react';
import { ExternalLink, Code2, ArrowLeft } from 'lucide-react';

const PlayerCard = ({ project, onBack }) => {
  return (
    <div className="relative w-full h-full flex flex-col p-6 md:p-8 overflow-y-auto no-scrollbar">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="self-start mb-6 text-gray-400 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors"
      >
        <ArrowLeft size={16} /> BACK TO PITCH
      </button>

      {/* Background large jersey number */}
      <div className="absolute top-20 right-4 text-[12rem] font-bebas text-white/5 select-none pointer-events-none leading-none">
        {project.jerseyNumber}
      </div>

      {/* Position Badge */}
      <div className="inline-block px-3 py-1 bg-electric-lime text-charcoal font-mono text-[10px] font-bold uppercase tracking-widest self-start mb-4">
        {project.position}
      </div>

      {/* Title */}
      <h2 className="font-bebas text-5xl md:text-6xl text-white mb-6 relative z-10">
        {project.name}
      </h2>

      {/* Match Report (Description) */}
      <div className="mb-8 relative z-10">
        <h3 className="font-bebas text-xl text-gray-400 mb-2 border-b border-outline pb-2">MATCH REPORT</h3>
        <p className="font-inter text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Kit (Tech Stack) */}
      <div className="mb-8 relative z-10">
        <h3 className="font-bebas text-xl text-gray-400 mb-3 border-b border-outline pb-2">KIT</h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 border border-outline rounded-full font-mono text-xs text-electric-lime bg-charcoal">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-grow" />

      {/* Actions */}
      <div className="flex flex-col gap-3 relative z-10 mt-8">
        {project.liveUrl && project.liveUrl !== '#' && !project.liveUrl.includes('github.com') && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-4 bg-electric-lime text-charcoal font-bebas text-2xl flex items-center justify-center gap-2 hover:bg-white transition-colors uppercase"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }} // Ticket stub effect
          >
            OPEN LIVE <ExternalLink size={20} />
          </a>
        )}
        
        {project.repoUrl && project.repoUrl !== '#' && (
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-3 border-2 border-outline text-white font-bebas text-xl flex items-center justify-center gap-2 hover:border-electric-lime hover:text-electric-lime transition-colors"
          >
            VIEW CODE <Code2 size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
