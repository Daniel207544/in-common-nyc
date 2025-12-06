import React from 'react';
import { MENU_ITEMS, IMAGE_URLS, LINKS } from '../constants';
import { motion } from 'framer-motion';

const MenuItem: React.FC<{ name: string; price: string; description?: string }> = ({ name, price, description }) => (
  <div className="flex flex-col gap-1 py-4 border-b border-soft-tan/30 last:border-0 group hover:bg-soft-tan/10 transition-colors px-2 rounded-lg">
    <div className="flex justify-between items-baseline gap-4">
      <h4 className="font-serif text-xl text-text-dark font-medium group-hover:text-accent-clay-dark transition-colors">{name}</h4>
      <span className="font-sans text-accent-clay font-medium whitespace-nowrap">{price}</span>
    </div>
    {description && <p className="font-sans text-sm text-text-light/80 leading-relaxed font-light">{description}</p>}
  </div>
);

const SectionDivider: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-6 my-12">
    <div className="h-[1px] flex-grow bg-soft-tan/50"></div>
    <h3 className="font-serif text-3xl italic text-text-dark">{title}</h3>
    <div className="h-[1px] flex-grow bg-soft-tan/50"></div>
  </div>
);

const FoodSection: React.FC = () => {
  return (
    <section id="menu" className="relative bg-white pb-24">
      
      {/* Menu Header with Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop" 
          alt="In Common NYC Menu - Brunch Spread" 
          className="w-full h-full object-cover"
          // @ts-ignore
          fetchpriority="high"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h2 className="font-serif text-6xl md:text-8xl text-white mb-4 tracking-tight drop-shadow-md">Menu</h2>
                <p className="text-white/90 text-xl font-light tracking-widest uppercase">all day menu</p>
            </motion.div>
        </div>
      </div>

      <div className="container px-4 md:px-8 mx-auto -mt-12 relative z-30">
        
        {/* Main Menu Card */}
        <div className="bg-background rounded-t-3xl shadow-xl p-6 md:p-12 min-h-screen">
          
          {/* All Day Menu Grid */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
            {MENU_ITEMS.ALL_DAY.map((item, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: idx * 0.05 }}
               >
                 <MenuItem {...item} />
               </motion.div>
            ))}
          </div>

          {/* Additions Banner */}
          <motion.div 
            className="mt-16 bg-soft-tan/20 p-8 rounded-xl border border-soft-tan/40 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
             <h4 className="font-serif text-2xl text-accent-clay-dark mb-4">Additions</h4>
             <p className="font-sans text-text-dark/80 leading-loose">
               {MENU_ITEMS.ADDITIONS.split(' / ').map((add, i) => (
                 <span key={i} className="inline-block mx-2">
                   {add} <span className="text-accent-clay/40 mx-1">•</span>
                 </span>
               )).slice(0, -1).concat([<span key="last" className="inline-block mx-2">{MENU_ITEMS.ADDITIONS.split(' / ').pop()}</span>])}
             </p>
          </motion.div>

          {/* Image Break */}
          <div className="grid grid-cols-2 gap-4 my-16 h-64 md:h-96 rounded-2xl overflow-hidden">
             <img src={IMAGE_URLS[2]} alt="Specialty Coffee" className="w-full h-full object-cover" loading="lazy" />
             <img src={IMAGE_URLS[6]} alt="Healthy Food Bowl" className="w-full h-full object-cover" loading="lazy" />
          </div>

          {/* Beverages Section */}
          <SectionDivider title="Beverages" />
          
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Hot Drinks */}
            <div>
              <h4 className="font-serif text-2xl text-text-dark mb-6 pb-2 border-b border-accent-clay/30 inline-block">Hot</h4>
              <div className="flex justify-between text-xs font-bold text-text-light uppercase tracking-wider mb-4 px-2">
                 <span>Item</span>
                 <span>Reg / Lrg</span>
              </div>
              <div className="space-y-1">
                {MENU_ITEMS.HOT_BEVERAGES.map((item, idx) => (
                   <MenuItem key={idx} {...item} />
                ))}
              </div>
            </div>

            {/* Cold Drinks */}
            <div>
              <h4 className="font-serif text-2xl text-text-dark mb-6 pb-2 border-b border-accent-clay/30 inline-block">Cold (12oz)</h4>
               <div className="space-y-1">
                {MENU_ITEMS.COLD_BEVERAGES.map((item, idx) => (
                   <MenuItem key={idx} {...item} />
                ))}
              </div>

              {/* Extras */}
              <div className="mt-8 pt-6 border-t border-soft-tan">
                 <p className="text-text-light italic text-sm text-center">
                    {MENU_ITEMS.BEV_EXTRAS}
                 </p>
              </div>
            </div>

          </div>

          {/* Map Image Placeholder at Bottom (as per screenshot requirement) */}
          <div className="mt-20 relative h-64 rounded-2xl overflow-hidden border border-soft-tan/50 shadow-inner group">
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

        </div>
      </div>

      {/* Mobile Sticky Order Button */}
      <div className="fixed bottom-6 left-0 w-full px-6 z-50 md:hidden pointer-events-none">
        <a 
          href={LINKS.ORDER_ONLINE} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full bg-accent-clay text-white text-center py-4 rounded-full shadow-2xl font-bold uppercase tracking-wide pointer-events-auto transform active:scale-95 transition-transform"
        >
          Order Online
        </a>
      </div>

    </section>
  );
};

export default FoodSection;