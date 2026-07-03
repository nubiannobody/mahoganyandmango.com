import React, { useEffect, useState } from 'react';
import { Heart, Instagram, Linkedin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  // Footer persists across navigation (it's outside <Routes> in App.tsx),
  // so once we arrive on "/" with a pending target, scroll to it.
  useEffect(() => {
    if (location.pathname === '/' && pendingSection) {
      const target = pendingSection;
      setPendingSection(null);

      const timeout = setTimeout(() => {
        if (target === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [location.pathname, pendingSection]);

  const handleNavClick = (item: string) => {
    const id = item.toLowerCase();

    if (location.pathname === '/') {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setPendingSection(id);
      navigate('/');
    }
  };

  return (
    <footer className="bg-amber-950 text-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            {/* Logo */}
            <div
              className="flex items-center mb-4 cursor-pointer"
              onClick={() => {
                if (window.location.pathname !== '/') {
                  navigate('/');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <Heart className="h-6 w-6 text-amber-500 mr-2" />
              <span className="font-Cormorant Garamond text-xl text-white">Mahogany & Mango</span>
            </div>

            <p className="mb-6">
              ✨Black woman owned, led & envisioned.✨
            </p>
            <p className="italic font-DM Sans' text-amber-300 mb-6">
              "But seek first the kingdom of God and his righteousness, and all these things will be added to you" - Matthew 6:33
            </p>

            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mahoganyandmango/" className="text-amber-300 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kweenyoallhiada" className="text-amber-300 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Design', 'eCommerce', 'SEO', 'Maintenance'].map((item) => (
                <li key={item}>
                  <span className="text-amber-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Packages', 'Process', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-amber-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-amber-900 text-center text-amber-400">
          <p>&copy; {new Date().getFullYear()} Mahogany & Mango Web Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;