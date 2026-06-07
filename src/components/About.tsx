import React from 'react';
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-6 bg-[#F5EFE6]">
  <div className="text-center mb-24"> {/* consistent vertical rhythm */}
  </div>
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-Cormorant Garamond text-amber-950 mb-6">
        About Mahogany & Mango
      </h2>
          <p className="text-lg font-DM Sans' text-amber-800">
          We don't just build websites. We build your future.
          Mahogany & Mango crafts elegant, purpose-driven websites for businesses ready to show up online with confidence — built with passion, precision, and a deep respect for your brand's story.          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-amber-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl text-amber-600">🤵🏾‍♀️</span>
            </div>
            <h3 className="text-xl font-Cormorant Garamond text-amber-950 mb-4">Bold Creators</h3>
            <p className="text-lg font-DM Sans' text-amber-800">
            We bring a perspective you won't find anywhere else — rooted in culture, sharpened by craft, and poured into every pixel of your project.            </p>
          </div>
          
          <div className="bg-amber-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl text-amber-600">💛</span>
            </div>
            <h3 className="text-xl font-Cormorant Garamond text-amber-950 mb-4">Purposeful Design</h3>
            <p className="text-lg font-DM Sans' text-amber-800">
            Every design decision has a reason. We build sites that don't just look good — they work, connecting you to the people who need you most.            </p>
          </div>
          
          <div className="bg-amber-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl text-amber-600">🥭</span>
            </div>
            <h3 className="text-xl font-Cormorant Garamond text-amber-950 mb-4">Client-Centered Approach</h3>
            <p className="text-lg font-DM Sans' text-amber-800">

            Your vision leads. We listen first, build second, and don't stop until the final product feels unmistakably you.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;