import React from 'react';
import SectionOverlay from '../shared/SectionOverlay';
import { Download } from 'lucide-react';

const Manager = () => {
  const stats = [
    { name: 'React', value: 87 },
    { name: 'JavaScript', value: 82 },
    { name: 'Problem Solving', value: 85 },
    { name: 'Communication', value: 90 },
    { name: 'Learning Speed', value: 88 },
  ];

  return (
    <SectionOverlay title="MANAGER PROFILE">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Column - Avatar & Stats */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="relative aspect-square w-full max-w-[240px] mx-auto rounded-full border-4 border-electric-lime overflow-hidden bg-charcoal flex items-center justify-center p-2 shadow-[0_0_20px_rgba(204,255,0,0.2)] group">
            <div className="w-full h-full rounded-full bg-board-dark flex items-center justify-center overflow-hidden relative">
              {/* Image Placeholder - Place your photo at public/profile-pic.jpeg */}
              <img 
                src="/profile-pic.jpeg" 
                alt="Manager Profile" 
                className="w-full h-full object-cover z-10 absolute inset-0"
                onError={(e) => {
                  e.target.style.display = 'none'; // Hide if image is missing
                }}
              />
              {/* Fallback Text if image is missing */}
              <span className="font-bebas text-6xl text-gray-600 absolute">MA</span>
            </div>
          </div>
          
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            download
            className="mt-2 w-full max-w-[240px] mx-auto py-3 bg-electric-lime text-charcoal font-bebas text-xl text-center hover:bg-white transition-colors flex items-center justify-center gap-2 group"
          >
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            DOWNLOAD RESUME
          </a>
          
          <div className="bg-charcoal border border-outline p-4">
            <h3 className="font-bebas text-2xl text-white mb-4 text-center">MANAGER ATTRIBUTES</h3>
            <div className="flex flex-col gap-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex justify-between font-mono text-xs text-gray-300">
                    <span>{stat.name}</span>
                    <span className="text-electric-lime">{stat.value}</span>
                  </div>
                  <div className="w-full h-1.5 bg-board-dark overflow-hidden">
                    <div 
                      className="h-full bg-electric-lime"
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Story */}
        <div className="w-full md:w-2/3 flex flex-col gap-6 text-gray-300">
          <div>
            <h3 className="font-bebas text-5xl text-white mb-1">MOHAMMED ABDELWHAB</h3>
            <p className="font-mono text-electric-lime tracking-widest text-sm mb-4">HEAD COACH (FRONTEND)</p>
          </div>

          <div className="font-inter space-y-4 text-sm leading-relaxed border-l-2 border-outline pl-4">
            <p>
              My journey started on the hardware side as an ECE grad. I spent my early career as a Robotics Instructor, teaching kids and teens (8-18yo) how to build and code with Arduino, Scratch, Python, and RC cars. 
            </p>
            <p>
              It was there I realized my true passion wasn't just in making things move, but in creating intuitive, interactive interfaces that people could connect with. This led me to dive deep into Web Development.
            </p>
            <p>
              What I love most about the frontend isn't just making things look pretty—it's the data-UI synchronization, the state management architectures, and the complex logic underneath the surface. I treat React like a tactical system: every component has its role, and data flows like the ball.
            </p>
          </div>

          <blockquote className="bg-charcoal p-6 border-l-4 border-electric-lime italic font-inter mt-4 text-white">
            "The best teams are the ones that keep the ball moving — one touch, always forward."
            <footer className="not-italic font-bebas text-electric-lime text-xl mt-2">— Johan Cruyff</footer>
          </blockquote>
        </div>
      </div>
    </SectionOverlay>
  );
};

export default Manager;
