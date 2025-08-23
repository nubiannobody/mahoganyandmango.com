import React from 'react';
import { Heart, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-950 text-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-amber-500 mr-2" />
              <span className="font-maharlika text-xl text-white">Mahogany 'n' Mango</span>
            </div>
            <p className="mb-6">
              ✨Black woman owned, led & envisioned.✨
            </p>
            <p className="italic text-amber-300 mb-6">
              "God is within her, she will not fall." - Psalms 46:5
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Design', 'eCommerce', 'Branding', 'SEO', 'Maintenance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-amber-300 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Packages', 'Process', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-amber-300 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-amber-900 text-center text-amber-400">
          <p>&copy; {new Date().getFullYear()} Mahogany 'n' Mango Web Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;