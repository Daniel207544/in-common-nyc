import React from 'react';
import { CONTENT, IMAGE_URLS } from '../constants';
import { motion } from 'framer-motion';

const HomeFoodSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="container px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Content Left */}
            <div className="lg:w-1/2 space-y-6">
                <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                >
                    <h2 className="font-serif text-5xl md:text-6xl text-text-dark mb-6">
                        {CONTENT.FOOD_TITLE}
                    </h2>
                    <div className="w-20 h-1 bg-accent-clay mb-8"></div>
                    <p className="text-text-light whitespace-pre-line leading-relaxed text-lg">
                        {CONTENT.FOOD_PARAGRAPH}
                    </p>
                </motion.div>
            </div>

            {/* Image Grid Right */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                    <img src={IMAGE_URLS[5]} alt="Food Plate" className="w-full h-64 object-cover rounded-xl shadow-lg" />
                    <img src={IMAGE_URLS[8]} alt="Sweet Dish" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                </motion.div>
                <motion.div
                  className="space-y-4 mt-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                    <img src={IMAGE_URLS[6]} alt="Healthy Bowl" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                    <img src={IMAGE_URLS[1]} alt="Avocado Toast" className="w-full h-64 object-cover rounded-xl shadow-lg" />
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFoodSection;