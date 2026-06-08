import React from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#F5EFE6]">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col md:flex-row items-center">

          {/* LEFT SPLAT — behind heading & buttons */}
          <svg
            className="absolute top-0 left-[-40%] w-[120%] h-[120%] opacity-30 pointer-events-none z-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#d97706"
              d="M100,20 C115,5 135,10 140,30 C158,25 170,40 160,55 C178,60 180,78 165,85 C175,100 168,118 152,118 C155,138 140,150 125,142 C120,160 103,165 95,150 C80,162 63,155 62,138 C45,145 30,132 35,115 C18,108 15,90 30,82 C18,68 22,50 38,47 C30,30 45,18 60,25 C68,8 88,8 100,20Z"
            />
          </svg>

          {/* RIGHT SPLAT — behind photo */}
          <svg
            className="absolute top-0 right-0 w-[50%] h-full opacity-20 pointer-events-none z-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'scaleX(-1)' }}
          >
            <path
              fill="#d97706"
              d="M100,20 C115,5 135,10 140,30 C158,25 170,40 160,55 C178,60 180,78 165,85 C175,100 168,118 152,118 C155,138 140,150 125,142 C120,160 103,165 95,150 C80,162 63,155 62,138 C45,145 30,132 35,115 C18,108 15,90 30,82 C18,68 22,50 38,47 C30,30 45,18 60,25 C68,8 88,8 100,20Z"
            />
          </svg>

          {/* LEFT CONTENT */}
          <div className="relative z-10 md:w-1/2 mb-10 md:mb-0">
            <div className="max-w-xl">
              <div className="inline-flex items-center bg-amber-100 px-4 py-2 rounded-full mb-6">
                <Heart className="h-4 w-4 text-amber-600 mr-2" />
                <span className="text-amber-950 font-medium text-sm">
                  "God is within her, she will not fall." -Psalms 46:5
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-950 leading-tight mb-6">
                Websites Designed with{' '}
                <span className="text-amber-600">Purpose</span> &amp;{' '}
                <span className="text-amber-600">Passion</span>
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

          {/* RIGHT CONTENT — photo */}
          <div className="relative z-10 md:w-1/2">
            <div className="relative">
              <div className="w-full max-w-7xl mx-auto h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-xl bg-amber-200 overflow-hidden shadow-xl">
                <img
                  src="/furKween.jpg"
                  alt="The stunning CEO staring and smiling beautifully in a brown cow print fur with senegalese twists"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#F2E8D9] p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 h-12 w-12 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-amber-950">Beautiful Designs</p>
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
