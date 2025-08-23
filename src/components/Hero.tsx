import React from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="max-w-xl">
              <div className="inline-flex items-center bg-amber-100 px-4 py-2 rounded-full mb-6">
                <Heart className="h-4 w-4 text-amber-600 mr-2" />
                <span className="text-amber-950 font-medium text-sm"> "God is within her, she will not fall." -Psalms 46:5</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-950 leading-tight mb-6">
                Websites Designed with <span className="text-amber-600">Purpose</span> &amp; <span className="text-amber-600">Passion</span>
              </h1>
              <p className="text-lg md:text-xl text-amber-800 mb-8">
                ✨Black woman owned, led & envisioned.✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#packages" 
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 text-center"
                >
                  View Packages
                </a>
                <a 
                  href="#process" 
                  className="bg-transparent hover:bg-amber-100 text-amber-600 border border-amber-600 font-medium py-3 px-6 rounded-full transition-colors duration-300 text-center"
                >
                  Our Process
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-[400px] md:h-[500px] rounded-xl bg-amber-200 overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5475755/pexels-photo-5475755.jpeg" 
                  alt="Black woman designer working on a website" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 h-12 w-12 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-amber-950">Beautiful Design</p>
                    <p className="text-amber-800">For Your Business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;