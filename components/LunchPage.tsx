import React from 'react';
import { motion } from 'framer-motion';
import { LUNCH_CONTENT, IMAGE_URLS, LINKS, CONTENT } from '../constants';

interface LunchPageProps {
  onNavigate: (page: string) => void;
}

const LunchPage: React.FC<LunchPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
          src={IMAGE_URLS[12]} // Brunch spread used as placeholder
          alt="Lunch at In Common NYC" 
          className="w-full h-full object-cover"
          // @ts-ignore
          fetchpriority="high"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <h1 className="font-serif text-5xl md:text-7xl text-white tracking-tight drop-shadow-lg mb-4 leading-tight">
                    {LUNCH_CONTENT.TITLE}
                </h1>
                 <div className="h-1 w-24 bg-white/80 mx-auto rounded-full mt-4"></div>
            </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
            <motion.p 
                className="text-text-dark text-xl leading-relaxed font-light font-serif"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {LUNCH_CONTENT.PARAGRAPH_1}
            </motion.p>
        </div>
      </section>

      {/* Explore Options Section */}
      <section className="py-20 bg-white">
         <div className="container px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
               
               {/* Text Content */}
               <motion.div 
                  className="md:w-1/2 space-y-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                   <h2 className="font-serif text-4xl md:text-5xl text-text-dark leading-tight">
                       {LUNCH_CONTENT.SECTION_HEADING_1}
                   </h2>
                   <div className="w-16 h-[2px] bg-accent-clay"></div>
                   
                   <p className="text-text-light text-lg leading-relaxed">
                       {LUNCH_CONTENT.PARAGRAPH_2}
                   </p>
                   <p className="text-text-light text-lg leading-relaxed">
                       {LUNCH_CONTENT.PARAGRAPH_3}
                   </p>
               </motion.div>

               {/* Image Side */}
               <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
               >
                   <div className="relative">
                      <img src={IMAGE_URLS[6]} alt="Healthy Lunch Bowl" className="w-full aspect-[4/5] object-cover rounded-xl shadow-xl" loading="lazy" />
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-soft-tan rounded-full -z-10 hidden md:block"></div>
                   </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Sit-Down Experience (Alternating Layout) */}
      <section className="py-20 bg-background">
         <div className="container px-6">
            <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
               
               {/* Image Side */}
               <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
               >
                   <img src={IMAGE_URLS[10]} alt="Cozy Cafe Interior" className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl" loading="lazy" />
               </motion.div>

               {/* Text Content */}
               <motion.div 
                  className="md:w-1/2 space-y-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
               >
                   <p className="text-text-dark text-lg leading-relaxed">
                       {LUNCH_CONTENT.PARAGRAPH_4}
                   </p>
                   <p className="text-text-dark text-lg leading-relaxed">
                       {LUNCH_CONTENT.PARAGRAPH_5}
                   </p>
               </motion.div>

            </div>
         </div>
      </section>

      {/* Stop By Today Section (Soft Tan) */}
      <section className="py-24 bg-[#D8C3B8]">
         <div className="container px-6 text-center">
             <motion.div 
                className="max-w-3xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
             >
                 <h2 className="font-serif text-4xl md:text-5xl text-text-dark mb-6">
                     {LUNCH_CONTENT.SECTION_HEADING_2}
                 </h2>
                 <p className="text-text-dark/90 text-xl leading-relaxed">
                     {LUNCH_CONTENT.PARAGRAPH_6}
                 </p>
                 <p className="text-text-dark/80 text-lg leading-relaxed">
                     <button 
                         onClick={() => onNavigate('contact')}
                         className="font-bold underline decoration-accent-clay decoration-2 underline-offset-4 hover:text-white transition-colors"
                     >
                         {LUNCH_CONTENT.PARAGRAPH_7_LINK}
                     </button>
                     {LUNCH_CONTENT.PARAGRAPH_7_REST}
                 </p>
                 
                 <div className="pt-8">
                     <button 
                         onClick={() => onNavigate('menu')}
                         className="bg-white text-text-dark px-12 py-4 rounded-full text-lg font-medium hover:bg-text-dark hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 border border-text-dark/10"
                     >
                         {LUNCH_CONTENT.CTA_BUTTON}
                     </button>
                 </div>
             </motion.div>
         </div>
      </section>

      {/* Map Section */}
      <section className="container px-6 pb-24 mt-20">
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

export default LunchPage;