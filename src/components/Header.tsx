import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

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

  const navItems = ['About', 'All Websites', 'Contact', 'Home', 'Packages', 'Process', 'Testimonials'];
  navItems.sort(); // alphabetical order

  const handleNavClick = (sectionId: string) => {
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
    setIsMenuOpen(false); // close mobile menu
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div
  className="flex items-center cursor-pointer"
  onClick={() => {
    if (location.pathname !== '/') {
      navigate('/'); // go home if not already on homepage
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top if already home
    }
    setIsMenuOpen(false); // close mobile menu if open
  }}
>
  <Heart className="h-8 w-8 text-amber-600 mr-2" />
  <span className="font-maharlika text-xl md:text-2xl text-amber-950">
    Mahogany 'n' Mango
  </span>
</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map(item =>
            item === 'All Websites' ? (
              <Link
                key={item}
                to="/all-websites"
                className="font-medium text-amber-950 hover:text-amber-600 transition-colors duration-300"
              >
                {item}
              </Link>
            ) : (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="font-medium text-amber-950 hover:text-amber-600 transition-colors duration-300"
              >
                {item}
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
            {navItems.map(item =>
              item === 'All Websites' ? (
                <Link
                  key={item}
                  to="/all-websites"
                  className="font-medium text-amber-950 hover:text-amber-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ) : (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="font-medium text-amber-950 hover:text-amber-600 transition-colors duration-300"
                >
                  {item}
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
