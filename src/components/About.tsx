import React from 'react';
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
  <div className="text-center mb-24"> {/* consistent vertical rhythm */}
  </div>
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-maharlika text-amber-950 mb-6">
        About Mahogany 'n' Mango
      </h2>
          <p className="text-lg text-amber-800">
            We create beautiful, functional websites that help businesses grow and thrive online.
            Our designs are crafted with purpose, passion, and a deep understanding of your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-amber-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl text-amber-600">🤵🏾‍♀️</span>
            </div>
            <h3 className="text-xl font-marharlika text-amber-950 mb-4">Bold Creators</h3>
            <p className="text-amber-800">
            Mahogany 'n' Mango brings unique perspectives and creativity to every project we touch, leading to innovative solutions for your business.
            </p>
          </div>
          
          <div className="bg-amber-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl text-amber-600">💛</span>
            </div>
            <h3 className="text-xl font-marharlika text-amber-950 mb-4">Purposeful Design</h3>
            <p className="text-amber-800">
              Every element of our designs serves a purpose - to help you connect with your audience and achieve your business goals.
            </p>
          </div>
          
          <div className="bg-amber-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl text-amber-600">🥭</span>
            </div>
            <h3 className="text-xl font-marharlika text-amber-950 mb-4">Client-Centered Approach</h3>
            <p className="text-amber-800">
              We listen carefully to your needs and vision, ensuring the final product truly represents your brand and business objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;