import React from 'react';
import { Instagram } from 'lucide-react';

const ImageGallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[975px]">
        {/* Header - Instagram Style */}
        <div className="flex flex-col items-center justify-center mb-10 space-y-2">
            <a 
              href="https://www.instagram.com/incommonnyc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
                <Instagram className="text-text-dark group-hover:text-accent-clay transition-colors" size={24} />
                <h3 className="font-sans font-semibold text-2xl text-text-dark group-hover:text-accent-clay transition-colors">
                    incommonnyc
                </h3>
            </a>
            <p className="text-text-light text-sm font-medium">Follow us on Instagram</p>
        </div>

        {/* Elfsight Instagram Feed Widget */}
        <div className="w-full min-h-[600px]">
             <div className="elfsight-app-58a9f206-92d4-4349-8c3e-49cc638a22bb" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;