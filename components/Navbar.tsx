import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { LINKS } from '../constants';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    onNavigate(target);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen || currentPage !== 'home' ? 'bg-background/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="font-serif text-2xl font-bold tracking-tight text-text-dark"
        >
          In Common NYC
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('home')} 
            className={`text-sm font-medium uppercase tracking-wide transition-colors ${currentPage === 'home' ? 'text-accent-clay' : 'text-text-dark hover:text-accent-clay'}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('menu')} 
            className={`text-sm font-medium uppercase tracking-wide transition-colors ${currentPage === 'menu' ? 'text-accent-clay' : 'text-text-dark hover:text-accent-clay'}`}
          >
            Menu
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className={`text-sm font-medium uppercase tracking-wide transition-colors ${currentPage === 'about' ? 'text-accent-clay' : 'text-text-dark hover:text-accent-clay'}`}
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-text-dark hover:text-accent-clay transition-colors text-sm font-medium uppercase tracking-wide"
          >
            Contact
          </button>

          <a 
            href={LINKS.INSTAGRAM} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-dark hover:text-accent-clay transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a 
            href={LINKS.ORDER_ONLINE} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-clay hover:bg-accent-clay-dark text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Order Online
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-soft-tan/30 shadow-lg py-6 px-6 flex flex-col space-y-4">
          <button 
            onClick={() => handleNavClick('home')} 
            className="text-lg font-serif font-medium text-text-dark text-left"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('menu')} 
            className="text-lg font-serif font-medium text-text-dark text-left"
          >
            Menu
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className="text-lg font-serif font-medium text-text-dark text-left"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-lg font-serif font-medium text-text-dark text-left"
          >
            Contact
          </button>
          <a 
            href={LINKS.ORDER_ONLINE}
            className="text-accent-clay font-bold pt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Online (ToastTab)
          </a>
          <a 
            href={LINKS.INSTAGRAM}
            className="flex items-center gap-2 text-text-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} /> Follow us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;