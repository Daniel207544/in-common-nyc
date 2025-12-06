import React from 'react';
import { CONTENT, IMAGE_URLS } from '../constants';
import { motion } from 'framer-motion';

const CoffeeSection: React.FC = () => {
  return (
    <section className="py-24 bg-soft-tan/20 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white rounded-full opacity-50 blur-3xl z-0"></div>

      <div className="container px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
            
            {/* Image Grid for Coffee */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                    <img src={IMAGE_URLS[2]} alt="Latte at In Common NYC" className="w-full h-64 object-cover rounded-xl shadow-lg" loading="lazy" />
                    <img src={IMAGE_URLS[4]} alt="Fresh Coffee Beans" className="w-full h-48 object-cover rounded-xl shadow-lg" loading="lazy" />
                </motion.div>
                <motion.div
                  className="space-y-4 mt-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                    <img src={IMAGE_URLS[7]} alt="Coffee Cup on table" className="w-full h-48 object-cover rounded-xl shadow-lg" loading="lazy" />
                    <img src={IMAGE_URLS[9]} alt="Latte Art Detail" className="w-full h-64 object-cover rounded-xl shadow-lg" loading="lazy" />
                </motion.div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 space-y-6">
                <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                >
                    <h2 className="font-serif text-5xl md:text-6xl text-text-dark mb-6">
                        {CONTENT.COFFEE_TITLE}
                    </h2>
                    <div className="w-20 h-1 bg-accent-clay mb-8"></div>
                    <p className="text-text-light whitespace-pre-line leading-relaxed text-lg">
                        {CONTENT.COFFEE_PARAGRAPH}
                    </p>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;