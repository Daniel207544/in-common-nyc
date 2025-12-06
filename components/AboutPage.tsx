import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT, IMAGE_URLS, LINKS } from '../constants';
import { Users, Laptop, Ban } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1525351463629-487050f7528a?q=80&w=2000&auto=format&fit=crop" 
          alt="In Common NYC Interior" 
          className="w-full h-full object-cover"
          // @ts-ignore
          fetchpriority="high"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif text-6xl md:text-7xl text-white tracking-tight drop-shadow-md"
            >
                About Us
            </motion.h1>
        </div>
      </section>

      {/* Main Content & House Rules */}
      <section className="container px-6 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
            
            {/* Left Column: Text & Rules */}
            <div className="lg:w-1/2 flex flex-col space-y-20">
                
                {/* About Text */}
                <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-serif text-2xl md:text-3xl text-text-dark leading-snug">
                       {CONTENT.ABOUT_TEXT_1}
                    </p>
                    <div className="space-y-6 text-text-light text-lg font-light leading-relaxed">
                        <p>{CONTENT.ABOUT_TEXT_2}</p>
                        <p>{CONTENT.ABOUT_TEXT_3}</p>
                        {/* Modified Paragraph 4 with clickable 'espresso' */}
                        <p>
                          We’re excited to bring our experience to NYC accentuating quality coffee and <button onClick={() => onNavigate('espresso')} className="text-accent-clay hover:underline font-medium hover:text-accent-clay-dark transition-colors">espresso</button>, food and service.
                        </p>
                        <p className="font-medium text-text-dark">{CONTENT.ABOUT_TEXT_5}</p>
                    </div>
                </motion.div>

                {/* House Rules Card */}
                <motion.div 
                    className="bg-white border border-soft-tan/40 p-8 md:p-10 rounded-xl shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-accent-clay"></div>
                        <h3 className="font-serif text-xl tracking-widest uppercase text-text-dark">House Rules</h3>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <Users className="text-accent-clay shrink-0 mt-1" size={20} />
                            <p className="text-text-light font-light leading-relaxed">
                                {CONTENT.HOUSE_RULES_1}
                            </p>
                        </div>
                        <div className="w-full h-[1px] bg-soft-tan/30"></div>
                        
                        <div className="flex gap-4 items-start">
                            <Laptop className="text-accent-clay shrink-0 mt-1" size={20} />
                            <p className="text-text-light font-light leading-relaxed">
                                {CONTENT.HOUSE_RULES_2}
                            </p>
                        </div>
                        <div className="w-full h-[1px] bg-soft-tan/30"></div>

                        <div className="flex gap-4 items-start">
                            <Ban className="text-accent-clay shrink-0 mt-1" size={20} />
                            <p className="text-text-light font-light leading-relaxed">
                                {CONTENT.HOUSE_RULES_3}
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Right Column: Image Stack (Vertical) */}
            <div className="lg:w-1/2 flex flex-col gap-8 md:mt-12 lg:mt-0">
                <motion.img 
                    src={IMAGE_URLS[5]} 
                    alt="Breakfast Plate" 
                    className="w-full aspect-[4/5] object-cover rounded-lg shadow-md"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    loading="lazy"
                />
                <motion.img 
                    src={IMAGE_URLS[9]} 
                    alt="Latte Art" 
                    className="w-3/4 self-end aspect-square object-cover rounded-lg shadow-md -mt-12 md:-mt-24 border-8 border-background z-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    loading="lazy"
                />
                 <motion.img 
                    src={IMAGE_URLS[1]} 
                    alt="Avocado Toast Details" 
                    className="w-full aspect-video object-cover rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    loading="lazy"
                />
            </div>
        </div>
      </section>

      {/* Collage Section */}
      <section className="container px-6 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
              <div className="col-span-1 md:col-span-2 row-span-2 rounded-xl overflow-hidden">
                  <img src={IMAGE_URLS[3]} alt="Cafe Vibes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
                  <img src={IMAGE_URLS[7]} alt="Coffee Cup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="col-span-1 row-span-2 rounded-xl overflow-hidden">
                  <img src={IMAGE_URLS[0]} alt="Pastry" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
                  <img src={IMAGE_URLS[11]} alt="Interior Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
          </div>
      </section>

      {/* Map Section */}
      <section className="container px-6 pb-24">
         <div className="relative h-64 rounded-2xl overflow-hidden border border-soft-tan/50 shadow-inner group">
            <a href={LINKS.GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
               <img 
                 src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" 
                 alt="In Common NYC Location Map" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                 loading="lazy"
               />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                   <span className="text-accent-clay font-medium flex items-center gap-2">
                     Open in Google Maps
                   </span>
                 </div>
               </div>
            </a>
         </div>
      </section>

    </div>
  );
};

export default AboutPage;