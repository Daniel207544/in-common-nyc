import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram } from 'lucide-react';
import { CONTENT, LINKS, IMAGE_URLS } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-background min-h-screen pt-24 md:pt-32">
      
      <div className="container px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Info & Form */}
          <div className="space-y-12">
            
            {/* Header Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl text-text-dark mb-8">Contact Us</h1>
              
              <div className="space-y-6">
                
                {/* Address Link */}
                <a 
                  href={LINKS.GOOGLE_MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all border border-soft-tan/30">
                     <MapPin className="text-accent-clay" size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-serif text-xl text-text-dark group-hover:text-accent-clay transition-colors">In Common NYC Cafe</p>
                    <p className="text-text-light font-light">{CONTENT.ADDRESS_LINE_1}</p>
                    <p className="text-text-light font-light">{CONTENT.ADDRESS_LINE_2}</p>
                  </div>
                </a>

                {/* Email Link */}
                <a 
                  href={LINKS.MAILTO}
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all border border-soft-tan/30">
                     <Mail className="text-accent-clay" size={24} />
                  </div>
                  <span className="text-lg text-text-dark font-light group-hover:text-accent-clay transition-colors">
                    {CONTENT.CONTACT_EMAIL}
                  </span>
                </a>

                 {/* Hours & Social */}
                 <div className="pl-[4.5rem] space-y-4 pt-2">
                    <p className="text-text-light/80 text-sm italic">
                      {CONTENT.CONTACT_HOURS_SHORT}
                    </p>
                    <a 
                      href={LINKS.INSTAGRAM} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-text-dark font-medium hover:text-accent-clay transition-colors uppercase tracking-wider text-xs"
                    >
                      <Instagram size={18} />
                      Follow us on Instagram
                    </a>
                 </div>

              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-[1px] bg-soft-tan/40 w-full"></div>

            {/* Contact Form */}
            <motion.form 
               className="space-y-6"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               onSubmit={(e) => e.preventDefault()}
            >
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-light">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="Your Name"
                        className="w-full bg-white border border-soft-tan/50 rounded-lg px-4 py-3 text-text-dark placeholder:text-text-light/40 focus:outline-none focus:border-accent-clay focus:ring-1 focus:ring-accent-clay transition-all shadow-sm"
                      />
                   </div>
                   <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-light">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="your@email.com"
                        className="w-full bg-white border border-soft-tan/50 rounded-lg px-4 py-3 text-text-dark placeholder:text-text-light/40 focus:outline-none focus:border-accent-clay focus:ring-1 focus:ring-accent-clay transition-all shadow-sm"
                      />
                   </div>
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-light">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full bg-white border border-soft-tan/50 rounded-lg px-4 py-3 text-text-dark placeholder:text-text-light/40 focus:outline-none focus:border-accent-clay focus:ring-1 focus:ring-accent-clay transition-all shadow-sm resize-none"
                    ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-accent-clay text-white px-8 py-3 rounded-full font-medium hover:bg-accent-clay-dark transition-all shadow-md hover:shadow-lg transform active:scale-95"
                >
                  Send Message
                </button>
            </motion.form>

          </div>

          {/* Right Column: Visuals */}
          <motion.div 
            className="hidden lg:block relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             <img 
               src="https://images.unsplash.com/photo-1525351463629-487050f7528a?q=80&w=1000&auto=format&fit=crop" 
               alt="Cafe Interior at In Common NYC" 
               className="absolute inset-0 w-full h-full object-cover"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
             
             {/* Overlay Content */}
             <div className="absolute bottom-8 left-8 right-8 text-white p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <p className="font-serif text-2xl mb-2">"Great company, great food."</p>
                <p className="text-sm text-white/80 font-light">Join us in Hudson Yards.</p>
             </div>
          </motion.div>

        </div>
      </div>

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

export default ContactPage;