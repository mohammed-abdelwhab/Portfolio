import React from 'react';
import SectionOverlay from '../shared/SectionOverlay';

const Squad = () => {
  const startingXI = [
    { name: 'React', level: 5 },
    { name: 'JavaScript', level: 5 },
    { name: 'HTML/CSS', level: 5 },
    { name: 'Tailwind CSS', level: 4 },
    { name: 'Git/GitHub', level: 4 },
    { name: 'Firebase', level: 3 },
    { name: 'Supabase', level: 3 },
    { name: 'n8n', level: 3 },
    { name: 'Power Platform', level: 3 },
  ];

  const bench = [
    { name: 'Next.js', level: 2 },
    { name: 'TypeScript', level: 2 },
    { name: 'RAG', level: 2 },
    { name: 'MCP Servers', level: 2 },
    { name: 'Backend Basics', level: 2 },
  ];

  const renderDots = (level) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <div 
        key={i} 
        className={`w-2 h-2 rounded-full ${i < level ? 'bg-electric-lime' : 'bg-charcoal border border-outline'}`}
      />
    ));
  };

  return (
    <SectionOverlay title="MATCHDAY SQUAD (SKILLS)">
      <div className="flex flex-col gap-10">
        
        {/* Starting XI */}
        <div>
          <div className="flex items-center justify-between border-b-2 border-white pb-2 mb-4">
            <h3 className="font-bebas text-3xl text-white">STARTING XI</h3>
            <span className="font-mono text-xs text-electric-lime">MATCH READY</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {startingXI.map((skill, idx) => (
              <div key={idx} className="bg-charcoal border border-outline p-3 flex justify-between items-center hover:border-electric-lime transition-colors">
                <span className="font-mono text-sm text-gray-200 uppercase tracking-widest">{skill.name}</span>
                <div className="flex gap-1">
                  {renderDots(skill.level)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bench */}
        <div>
          <div className="flex items-center justify-between border-b-2 border-outline pb-2 mb-4">
            <h3 className="font-bebas text-3xl text-gray-400">ON THE BENCH</h3>
            <span className="font-mono text-xs text-gray-500">IN TRAINING</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-80">
            {bench.map((skill, idx) => (
              <div key={idx} className="bg-[#1a1a1a] border border-outline p-3 flex justify-between items-center">
                <span className="font-mono text-sm text-gray-400 uppercase tracking-widest">{skill.name}</span>
                <div className="flex gap-1">
                  {renderDots(skill.level)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionOverlay>
  );
};

export default Squad;
