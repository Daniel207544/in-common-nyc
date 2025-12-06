import React from 'react';
import { motion } from 'framer-motion';
import { LINKS, CONTENT } from '../constants';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-soft-tan/20 rounded-l-full -z-10 hidden lg:block" />

        <div className="container px-6 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 flex flex-col items-start space-y-6"
            >
                <div className="flex items-center space-x-2">
                    <span className="h-[1px] w-8 bg-accent-clay"></span>
                    <span className="text-accent-clay font-medium tracking-widest text-sm uppercase">Hudson Yards, NY</span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-text-dark font-medium">
                    {CONTENT.MAIN_HEADLINE}
                </h1>
                
                <p className="text-text-light text-lg md:text-xl max-w-lg leading-relaxed">
                   A charming cafe experience serving delicious food, coffee, and community spirit in the heart of NYC.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                    <button 
                        onClick={() => onNavigate('menu')}
                        className="flex items-center justify-center gap-2 bg-text-dark text-white px-8 py-4 rounded-full text-base font-medium hover:bg-accent-clay transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                        See Our Menu
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a 
                        href={LINKS.ORDER_ONLINE}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 bg-transparent border-2 border-text-dark text-text-dark px-8 py-4 rounded-full text-base font-medium hover:bg-text-dark hover:text-white transition-all duration-300"
                    >
                        Order Online
                    </a>
                </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
                <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop" 
                        alt="Delicious brunch spread at In Common NYC - Hudson Yards Cafe" 
                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                        // @ts-ignore
                        fetchpriority="high"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xs border border-soft-tan/50 hidden md:block">
                        <p className="font-serif text-lg text-text-dark italic">"The perfect spot for your morning coffee and breakfast."</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Hero;