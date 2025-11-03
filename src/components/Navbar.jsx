import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const productCategories = [
    { name: 'Curtains', path: '/curtains' },
    { name: 'Carpets', path: '/carpets' },
    { name: 'Bedcovers', path: '/bedcovers' },
    { name: 'Blinds', path: '/blinds' },
    { name: 'Upholstery', path: '/upholstery' },
    { name: 'Other Solutions', path: '/other-solutions' },
  ];

  // Check if we're on a subcategory page under "Other Solutions"
  const isOtherSolutionsActive = location.pathname.includes('/subcategories/othersolutions');

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`} role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group" aria-label="NOOR FURNISHINGS Home">
            <div className="relative">
              {/* Logo image with decorative elements */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center relative border-2 border-gold-500 shadow-md">
                <img
                  src="/logo.png"
                  alt="NOOR FURNISHINGS Logo - Premium Curtains, Carpets & Interior Solutions"
                  className="w-8 h-8 object-contain"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brown-800 tracking-tight">NOOR FURNISHINGS</span>
              <span className="text-xs text-gold-600 tracking-widest">PREMIUM INTERIORS</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-brown-800 font-medium hover:text-gold-600 transition-colors ${location.pathname === link.path ? 'text-gold-600' : ''
                  }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-600"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}

            <Link
              to="/enquiry"
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Get an Enquiry</span>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-brown-800 hover:text-gold-600 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brown-100 z-[999999999]"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-brown-800 font-medium hover:text-gold-600 transition-colors py-2 ${location.pathname === link.path ? 'text-gold-600' : ''
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/enquiry"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2.5 rounded-full font-medium text-center hover:shadow-lg transition-all"
              >
                Get an Enquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;