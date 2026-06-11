import React from 'react';
import SectionOverlay from '../shared/SectionOverlay';
import { Code2, Briefcase, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <SectionOverlay title="SUBSTITUTION BOARD (CONTACT)">
      <div className="flex flex-col items-center justify-center h-full gap-12 pb-20">

        <div className="text-center">
          <p className="font-bebas text-4xl md:text-5xl text-white tracking-widest leading-tight max-w-md mx-auto">
            WANT TO TALK? I'M ALWAYS UP FOR IT.
          </p>
          <div className="w-20 h-1 bg-electric-lime mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          <a
            href="https://github.com/mohammed-abdelwhab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-charcoal border-2 border-outline hover:border-electric-lime hover:text-electric-lime text-white flex flex-col items-center justify-center p-8 transition-colors group"
          >
            <Code2 size={40} className="mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bebas text-xl tracking-wider">GITHUB</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-abdelwhab/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-charcoal border-2 border-outline hover:border-electric-lime hover:text-electric-lime text-white flex flex-col items-center justify-center p-8 transition-colors group"
          >
            <Briefcase size={40} className="mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bebas text-xl tracking-wider">LINKEDIN</span>
          </a>

          <a
            href="mailto:mohamedabdelwhab197@gmail.com"
            className="flex-1 bg-charcoal border-2 border-outline hover:border-electric-lime hover:text-electric-lime text-white flex flex-col items-center justify-center p-8 transition-colors group"
          >
            <Mail size={40} className="mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bebas text-xl tracking-wider">EMAIL</span>
          </a>

          <a
            href="https://wa.me/201001999675"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-charcoal border-2 border-outline hover:border-electric-lime hover:text-electric-lime text-white flex flex-col items-center justify-center p-8 transition-colors group"
          >
            <MessageCircle size={40} className="mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bebas text-xl tracking-wider">WHATSAPP</span>
          </a>
        </div>

      </div>
    </SectionOverlay>
  );
};

export default Contact;
