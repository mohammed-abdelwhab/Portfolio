import React from 'react';
import SectionOverlay from '../shared/SectionOverlay';
import { GraduationCap, Code2, Zap, Shield, BookOpen, Rocket, MapPin } from 'lucide-react';

const History = () => {
  const timeline = [
    {
      year: '2020',
      title: 'ECE Graduation',
      subtitle: 'Mansoura University',
      icon: GraduationCap,
      color: 'text-gray-400',
      borderColor: 'border-gray-600',
    },
    {
      year: '2021',
      title: 'Robotics Instructor',
      subtitle: 'Taught youth coding & hardware',
      icon: Code2,
      color: 'text-gray-400',
      borderColor: 'border-gray-600',
    },
    {
      year: '2022',
      title: 'Power Platform Internship',
      subtitle: 'Power Apps, Automate, D365',
      icon: Zap,
      color: 'text-[#ffb4ab]', // Use error color from palette as a "card" color
      borderColor: 'border-[#93000a]',
    },
    {
      year: '2022-2023',
      title: 'Military Service',
      subtitle: 'Completed duty',
      icon: Shield,
      color: 'text-gray-400',
      borderColor: 'border-gray-600',
    },
    {
      year: '2023',
      title: 'Started React',
      subtitle: 'Jonas Schmedtmann\'s course, Udemy',
      icon: BookOpen,
      color: 'text-electric-lime',
      borderColor: 'border-electric-lime',
    },
    {
      year: '2024',
      title: 'First Live Projects',
      subtitle: 'MAG Design, ABC Clinic',
      icon: Rocket,
      color: 'text-electric-lime',
      borderColor: 'border-electric-lime',
    },
    {
      year: 'Now',
      title: 'Building SPAs',
      subtitle: 'Learning Next.js & TypeScript',
      icon: MapPin,
      color: 'text-white',
      borderColor: 'border-white',
    },
  ];

  return (
    <SectionOverlay title="CAREER HISTORY">
      <div className="relative mt-8 w-full">
        
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-outline -translate-x-1/2" />

        <div className="flex flex-col gap-10 w-full pb-10">
          {timeline.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = item.icon;
            
            const Card = () => (
              <div className={`bg-charcoal border ${item.borderColor} p-4 w-full max-w-[280px] hover:scale-[1.02] transition-transform shadow-lg ${isEven ? 'text-right' : 'text-left'}`}>
                <span className={`font-mono text-xs font-bold tracking-widest ${item.color} mb-1 block`}>
                  {item.year}
                </span>
                <h3 className="font-bebas text-xl md:text-2xl text-white tracking-wide leading-none">{item.title}</h3>
                <p className="font-inter text-xs md:text-sm text-gray-400 mt-2 leading-snug">{item.subtitle}</p>
              </div>
            );

            return (
              <div key={idx} className="relative flex items-center justify-between w-full">
                
                {/* Left Side Container */}
                <div className="w-[45%] flex justify-end pr-4 md:pr-8">
                  {isEven && <Card />}
                </div>

                {/* Center Marker */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-board-dark border-2 rounded-full flex items-center justify-center z-10" style={{ borderColor: item.borderColor }}>
                  <Icon size={16} className={item.color} />
                </div>

                {/* Right Side Container */}
                <div className="w-[45%] flex justify-start pl-4 md:pl-8">
                  {!isEven && <Card />}
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </SectionOverlay>
  );
};

export default History;
