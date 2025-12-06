import React from 'react';
import { CONTENT, IMAGE_URLS } from '../constants';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about-summary" className="py-20 bg-background">
      <div className="container px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
                <h2 className="font-serif text-4xl md:text-5xl text-text-dark mb-8 leading-tight">
                  {CONTENT.MAIN_HEADLINE}
                </h2>
                
                <div className="space-y-6 text-text-light leading-relaxed font-light">
                    <p>{CONTENT.MAIN_PARAGRAPH_1}</p>
                    <p>{CONTENT.MAIN_PARAGRAPH_2}</p>
                    
                    {/* Paragraph 3 with clickable 'breakfast' word */}
                    <p>
                      Whether you're looking for a quick grab-and-go <button onClick={() => onNavigate('breakfast')} className="text-accent-clay hover:underline font-medium hover:text-accent-clay-dark transition-colors">breakfast</button> or lunch or a longer sit-down meal with friends, we've got you covered. Our menu features a range of options, including breakfast sandwiches, pastries, salads, and more. We also offer a variety of hot and cold drinks, including coffee and tea, as well as a rotating selection of seasonal specials.
                    </p>

                    {/* Paragraph 4 with clickable 'lunch' word */}
                    <p>
                      So whether you're stopping by for a quick cup of coffee on your way to work or grabbing <button onClick={() => onNavigate('lunch')} className="text-accent-clay hover:underline font-medium hover:text-accent-clay-dark transition-colors">lunch</button> with friends, we're confident that In Common NYC Cafe has everything you need for an enjoyable cafe experience in Hudson Yards.
                    </p>
                    
                    {/* Paragraph 5 (added back) */}
                    <p>{CONTENT.MAIN_PARAGRAPH_5}</p>
                </div>

                <div className="pt-8 flex gap-4">
                    <button 
                      onClick={() => onNavigate('menu')}
                      className="bg-accent-clay text-white px-8 py-3 rounded-full hover:bg-accent-clay-dark transition-colors inline-block shadow-md"
                    >
                        See Our Menu
                    </button>
                    <button 
                      onClick={() => onNavigate('about')}
                      className="border border-text-dark text-text-dark px-8 py-3 rounded-full hover:bg-text-dark hover:text-white transition-colors inline-block"
                    >
                        Read Our Story
                    </button>
                </div>
             </motion.div>
          </div>

          {/* Image Grid Side */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <motion.div 
               className="space-y-4 mt-12"
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
                <img src={IMAGE_URLS[3]} alt="In Common NYC Cafe interior" className="w-full h-64 object-cover rounded-xl shadow-lg" loading="lazy" />
                <img src={IMAGE_URLS[1]} alt="Avocado toast at In Common NYC" className="w-full h-80 object-cover rounded-xl shadow-lg" loading="lazy" />
             </motion.div>
             <motion.div 
               className="space-y-4"
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
                <img src={IMAGE_URLS[2]} alt="Latte art coffee" className="w-full h-80 object-cover rounded-xl shadow-lg" loading="lazy" />
                <img src={IMAGE_URLS[5]} alt="Breakfast plate with eggs" className="w-full h-64 object-cover rounded-xl shadow-lg" loading="lazy" />
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;