import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { CONTENT, LINKS } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section className="container px-6 -mt-8 relative z-10 mb-20">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-soft-tan/30 flex flex-col md:flex-row gap-12 justify-between items-start md:items-center max-w-5xl mx-auto">
        
        {/* Hours */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3 text-accent-clay mb-2">
            <Clock size={24} />
            <h3 className="font-serif text-2xl font-semibold text-text-dark">Hours</h3>
          </div>
          <div className="space-y-1 text-text-light font-medium">
             <p className="flex justify-between max-w-[200px]">
               <span>Mon–Fri</span> <span>7:30am – 3pm</span>
             </p>
             <p className="flex justify-between max-w-[200px]">
               <span>Sat–Sun</span> <span>8:30am – 3pm</span>
             </p>
          </div>
          <p className="text-xs text-text-light/70 italic mt-2 max-w-sm">
            {CONTENT.HOURS_NOTE}
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-24 bg-soft-tan/50"></div>

        {/* Address */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3 text-accent-clay mb-2">
            <MapPin size={24} />
            <h3 className="font-serif text-2xl font-semibold text-text-dark">Location</h3>
          </div>
          <a 
            href={LINKS.GOOGLE_MAPS} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-text-light hover:text-accent-clay transition-colors font-medium text-lg leading-snug group"
          >
            <p>{CONTENT.ADDRESS_LINE_1}</p>
            <p>{CONTENT.ADDRESS_LINE_2}</p>
            <span className="inline-block mt-2 text-sm text-accent-clay border-b border-accent-clay/30 group-hover:border-accent-clay pb-0.5">
              Get Directions
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;