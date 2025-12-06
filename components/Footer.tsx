import React from 'react';
import { Instagram, MapPin } from 'lucide-react';
import { CONTENT, LINKS } from '../constants';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-text-dark text-soft-tan py-16" id="footer-contact">
      <div className="container px-6 grid md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div className="space-y-4">
            <h2 className="font-serif text-3xl text-white">In Common NYC</h2>
            <p className="text-white/60 max-w-xs">
                A community space for coffee lovers and foodies in Hudson Yards.
            </p>
            <div className="flex space-x-4 pt-4">
                <a href={LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Instagram />
                </a>
            </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
            <h4 className="text-white font-serif text-lg">Explore</h4>
            <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('menu')} className="hover:text-white transition-colors text-left">
                    Menu
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">
                    Contact
                  </button>
                </li>
                <li>
                  <a href={LINKS.ORDER_ONLINE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Order Online
                  </a>
                </li>
            </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
            <h4 className="text-white font-serif text-lg">Visit Us</h4>
            <div className="space-y-2 text-sm text-white/80">
                <a 
                    href={LINKS.GOOGLE_MAPS}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-white transition-colors group"
                >
                    <MapPin size={18} className="mt-1 flex-shrink-0 group-hover:text-accent-clay transition-colors" />
                    <span>
                        {CONTENT.ADDRESS_LINE_1}<br/>
                        {CONTENT.ADDRESS_LINE_2}
                    </span>
                </a>
            </div>
            <div className="pt-4 border-t border-white/10 mt-4">
                <p className="text-xs text-white/40">
                    &copy; {new Date().getFullYear()} In Common NYC. All rights reserved.
                </p>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;