import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BREAKFAST_CONTENT, IMAGE_URLS, LINKS, CONTENT } from '../constants';

interface BreakfastPageProps {
  onNavigate: (page: string) => void;
}

const BreakfastPage: React.FC<BreakfastPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
          src={IMAGE_URLS[12]} // Brunch spread
          alt="Breakfast spread at In Common NYC" 
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
                <h1 className="font-serif text-5xl md:text-7xl text-white tracking-tight drop-shadow-lg mb-6 leading-tight">
                    {BREAKFAST_CONTENT.TITLE}
                </h1>
                <p className="text-white/90 text-lg md:text-xl font-light tracking-wide uppercase drop-shadow-md">
                   Best Breakfast in Hudson Yards
                </p>
            </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                 <p className="text-text-dark text-xl md:text-2xl leading-relaxed font-light font-serif">
                    {BREAKFAST_CONTENT.PARAGRAPH_1}
                 </p>
                 <div className="h-1 w-24 bg-accent-clay mt-8"></div>
            </motion.div>
            <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <img 
                    src={IMAGE_URLS[5]} // Food plate
                    alt="Delicious Breakfast Plate" 
                    className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                />
            </motion.div>
        </div>
      </section>

      {/* Main Content: "Just the Way You Like It" */}
      <section className="bg-white py-24">
         <div className="container px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
               
               {/* Left: Images Stack */}
               <div className="relative hidden lg:block h-[600px]">
                  <motion.img 
                     src={IMAGE_URLS[1]} // Avo Toast
                     alt="Avocado Toast"
                     className="absolute top-0 left-0 w-3/4 aspect-[4/5] object-cover rounded-xl shadow-lg z-10"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     loading="lazy"
                  />
                  <motion.img 
                     src={IMAGE_URLS[8]} // French Toast
                     alt="Sweet Breakfast"
                     className="absolute bottom-0 right-0 w-2/3 aspect-square object-cover rounded-xl shadow-lg z-20 border-8 border-white"
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     loading="lazy"
                  />
               </div>

               {/* Right: Text Content */}
               <div className="flex flex-col justify-center h-full space-y-10">
                   <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                   >
                       <h2 className="font-serif text-4xl md:text-5xl text-text-dark mb-8 leading-tight">
                           {BREAKFAST_CONTENT.SECTION_TITLE_1}
                       </h2>
                       <div className="space-y-6 text-text-light text-lg leading-relaxed">
                           <p>{BREAKFAST_CONTENT.PARAGRAPH_2}</p>
                           <p>{BREAKFAST_CONTENT.PARAGRAPH_3}</p>
                       </div>
                   </motion.div>
                   
                   {/* Mobile Only Image */}
                   <div className="lg:hidden w-full">
                       <img src={IMAGE_URLS[1]} alt="Avocado Toast" className="w-full rounded-xl shadow-lg mb-4" loading="lazy" />
                   </div>

                   <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                   >
                        <button 
                            onClick={() => onNavigate('menu')}
                            className="text-accent-clay font-medium text-lg hover:text-accent-clay-dark transition-colors inline-flex items-center gap-2 border-b border-accent-clay/30 pb-1"
                        >
                            View Our Breakfast Menu <ArrowRight size={18} />
                        </button>
                   </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* Coffee Section */}
      <section className="py-24 bg-soft-tan/20">
          <div className="container px-6">
              <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
                  <motion.div 
                     className="lg:w-1/2 space-y-8"
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                  >
                       <h2 className="font-serif text-4xl md:text-5xl text-text-dark">
                           {BREAKFAST_CONTENT.SECTION_TITLE_2}
                       </h2>
                       <p className="text-text-light text-lg leading-relaxed">
                           {BREAKFAST_CONTENT.PARAGRAPH_4}
                       </p>
                  </motion.div>
                  <motion.div 
                     className="lg:w-1/2"
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                  >
                      <div className="grid grid-cols-2 gap-4">
                          <img src={IMAGE_URLS[2]} alt="Latte" className="w-full h-64 object-cover rounded-xl shadow-lg mt-8" loading="lazy" />
                          <img src={IMAGE_URLS[7]} alt="Coffee Cup" className="w-full h-64 object-cover rounded-xl shadow-lg" loading="lazy" />
                      </div>
                  </motion.div>
              </div>
          </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 container px-6 text-center">
          <motion.div 
              className="max-w-3xl mx-auto space-y-8 bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-soft-tan/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          >
              <p className="font-serif text-2xl text-text-dark leading-relaxed">
                 {BREAKFAST_CONTENT.PARAGRAPH_5}
              </p>
              
              <div className="pt-4">
                  <p className="text-text-light text-lg mb-4">let us brighten your morning!</p>
                  <button 
                      onClick={() => onNavigate('contact')}
                      className="bg-accent-clay text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-accent-clay-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
                  >
                      {BREAKFAST_CONTENT.FINAL_CTA_LINK}
                  </button>
              </div>
          </motion.div>
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

export default BreakfastPage;