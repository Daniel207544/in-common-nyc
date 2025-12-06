import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import AboutSection from './components/AboutSection';
import FoodSection from './components/FoodSection';
import HomeFoodSection from './components/HomeFoodSection';
import CoffeeSection from './components/CoffeeSection';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BreakfastPage from './components/BreakfastPage';
import LunchPage from './components/LunchPage';
import EspressoPage from './components/EspressoPage';

type View = 'home' | 'menu' | 'about' | 'contact' | 'breakfast' | 'lunch' | 'espresso';

function App() {
  const [view, setView] = useState<View>('home');

  const handleNavigate = (target: string) => {
    if (target === 'menu') {
      setView('menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'about') {
      setView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'contact') {
      setView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'breakfast') {
      setView('breakfast');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'lunch') {
      setView('lunch');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'espresso') {
      setView('espresso');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'home') {
      setView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // For anchors like #about on home, go to home then scroll
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-text-dark selection:bg-accent-clay selection:text-white">
      <Navbar currentPage={view} onNavigate={handleNavigate} />
      
      <main>
        {view === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <InfoSection />
            <AboutSection onNavigate={handleNavigate} />
            <HomeFoodSection />
            <CoffeeSection />
            <ImageGallery />
          </>
        )}
        {view === 'menu' && <FoodSection />}
        {view === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {view === 'contact' && <ContactPage />}
        {view === 'breakfast' && <BreakfastPage onNavigate={handleNavigate} />}
        {view === 'lunch' && <LunchPage onNavigate={handleNavigate} />}
        {view === 'espresso' && <EspressoPage onNavigate={handleNavigate} />}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;