import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

interface NavItem {
  name: string;
  type: 'section' | 'page';
  path?: string; // for page
  id?: string; // for section scroll
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define nav items
    const navItems: NavItem[] = [
      { name: 'About', type: 'section' },
      { name: 'All Websites', type: 'page', path: '/all-websites' },
      { name: 'Consulting', type: 'page', path: '/consulting' },
      { name: 'Contact', type: 'section' },
      { name: 'Industries', type: 'section' },
      { name: 'Packages', type: 'section' },
      { name: 'Process', type: 'section' },
      { name: 'Testimonials', type: 'section' },
    ];

  const handleNavClick = (item: NavItem) => {
    if (item.type === 'page' && item.path) {
      navigate(item.path);
      setIsMenuOpen(false);
      return;
    }

    // Section scroll
    const sectionId = item.id || item.name.toLowerCase();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F5EFE6] shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setIsMenuOpen(false);
          }}
        >
          <Heart className="h-8 w-8 text-amber-600 mr-2" />
          <span className="font-Cormorant Garamond text-xl md:text-2xl text-amber-950">
            Mahogany & Mango
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) =>
            item.type === 'page' ? (
              <Link
                key={item.name}
                to={item.path!}
                className="font-medium text-amber-950 hover:text-amber-600 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="font-medium text-amber-950 hover:text-amber-600 transition-colors duration-300"
              >
                {item.name}
              </button>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-950"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4">
          <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
            {navItems.map((item) =>
              item.type === 'page' ? (
                <Link
                  key={item.name}
                  to={item.path!}
                  className="font-medium text-amber-950 hover:text-amber-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="font-medium text-amber-950 hover:text-amber-600 transition-colors duration-300"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
