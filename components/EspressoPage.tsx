import React from 'react';
import { motion } from 'framer-motion';
import { ESPRESSO_CONTENT, IMAGE_URLS, LINKS, CONTENT } from '../constants';

interface EspressoPageProps {
  onNavigate: (page: string) => void;
}

const EspressoPage: React.FC<EspressoPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={IMAGE_URLS[9]} // Latte Art / Espresso placeholder
          alt="Espresso at In Common NYC" 
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
                    {ESPRESSO_CONTENT.TITLE}
                </h1>
                <div className="h-1 w-24 bg-white/80 mx-auto rounded-full mt-4"></div>
            </motion.div>
        </div>
      </section>

      {/* Story Section: Coffee Lover */}
      <section className="container px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                 <p className="text-text-dark text-xl leading-relaxed font-light font-serif">
                    {ESPRESSO_CONTENT.PARAGRAPH_1}
                 </p>
            </motion.div>
            <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <img 
                    src={IMAGE_URLS[7]} // Coffee cup
                    alt="Perfect cup of espresso" 
                    className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                />
            </motion.div>
        </div>
        <div className="w-full h-[1px] bg-soft-tan/40 mt-16 md:mt-24"></div>
      </section>

      {/* Drink Options */}
      <section className="bg-white py-20">
         <div className="container px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
               
               {/* Text Content */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
               >
                   <h2 className="font-serif text-4xl text-text-dark">
                       {ESPRESSO_CONTENT.SECTION_HEADING_1}
                   </h2>
                   <p className="text-text-light text-lg leading-relaxed">
                       {ESPRESSO_CONTENT.PARAGRAPH_2}
                   </p>
               </motion.div>

               {/* Images Grid */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-2 gap-4"
               >
                  <img src={IMAGE_URLS[2]} alt="Latte" className="w-full aspect-square object-cover rounded-xl shadow-lg" loading="lazy" />
                  <img src={IMAGE_URLS[4]} alt="Coffee Beans" className="w-full aspect-square object-cover rounded-xl shadow-lg" loading="lazy" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* Extensive Menu Section */}
      <section className="py-20 bg-background">
         <div className="container px-6">
             <motion.div 
                className="max-w-3xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
             >
                 <h2 className="font-serif text-4xl text-text-dark mb-6">
                     {ESPRESSO_CONTENT.SECTION_HEADING_2}
                 </h2>
                 <p className="text-text-light text-lg leading-relaxed">
                     {ESPRESSO_CONTENT.PARAGRAPH_3}
                 </p>
             </motion.div>

             <div className="grid md:grid-cols-3 gap-6">
                 {[IMAGE_URLS[2], IMAGE_URLS[7], IMAGE_URLS[9]].map((img, idx) => (
                    <motion.div
                       key={idx}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: idx * 0.1 }}
                    >
                        <img src={img} alt="Espresso Drink" className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow" loading="lazy" />
                    </motion.div>
                 ))}
             </div>
         </div>
      </section>

      {/* Quality & Atmosphere */}
      <section className="py-20 bg-white">
          <div className="container px-6">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                  <motion.div 
                     className="md:w-1/2"
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                  >
                       <img src={IMAGE_URLS[10]} alt="Cafe Interior" className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl" loading="lazy" />
                  </motion.div>
                  <motion.div 
                     className="md:w-1/2 space-y-6"
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                  >
                       <h2 className="font-serif text-4xl text-text-dark">
                           {ESPRESSO_CONTENT.SECTION_HEADING_3}
                       </h2>
                       <p className="text-text-light text-lg leading-relaxed">
                           {ESPRESSO_CONTENT.PARAGRAPH_4}
                       </p>
                  </motion.div>
              </div>
          </div>
      </section>

      {/* Final CTA (Soft Tan) */}
      <section className="py-24 bg-[#D8C3B8]">
         <div className="container px-6 text-center">
             <motion.div 
                className="max-w-3xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
             >
                 <p className="text-text-dark/90 text-xl leading-relaxed">
                     {ESPRESSO_CONTENT.FINAL_PARAGRAPH_START}
                     <button 
                         onClick={() => onNavigate('menu')}
                         className="font-bold underline decoration-accent-clay decoration-2 underline-offset-4 hover:text-white transition-colors"
                     >
                         {ESPRESSO_CONTENT.FINAL_PARAGRAPH_LINK}
                     </button>
                     {ESPRESSO_CONTENT.FINAL_PARAGRAPH_END}
                 </p>
                 
                 <div className="pt-4">
                     <button 
                         onClick={() => onNavigate('menu')}
                         className="bg-white text-text-dark px-12 py-4 rounded-full text-lg font-medium hover:bg-text-dark hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 border border-text-dark/10"
                     >
                         {ESPRESSO_CONTENT.CTA_BUTTON}
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

export default EspressoPage;