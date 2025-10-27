import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Sparkles, MessageCircle, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-brown-900 to-brown-950 text-gold-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-gold-500 w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">NOOR FURNISHINGS</span>
                <span className="text-xs text-gold-400 tracking-widest">PREMIUM INTERIORS</span>
              </div>
            </div>
            <p className="text-sm mb-4">
              Transform your space with premium curtains, carpets, and interior solutions crafted with luxury fabrics and expert craftsmanship.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div> */}

               <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded bg-brown-800 border border-gold-600 focus:outline-none focus:border-gold-400 text-sm"
                />
                <button
                  type="submit"
                  className="bg-gold-600 text-white px-4 py-2 rounded hover:bg-gold-700 transition-colors text-sm font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-gold-400 transition-colors">FAQ</Link></li>
              <li><Link to="/testimonials" className="hover:text-gold-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/enquiry" className="hover:text-gold-400 transition-colors">Get an Enquiry</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Product Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/curtains/jacquard" className="hover:text-gold-400 transition-colors">Curtains</Link></li>
              <li><Link to="/products/carpets/shaggy" className="hover:text-gold-400 transition-colors">Carpets</Link></li>
              <li><Link to="/products/bedcovers/double-bed" className="hover:text-gold-400 transition-colors">Bedcovers</Link></li>
              <li><Link to="/products/blinds/venetian" className="hover:text-gold-400 transition-colors">Blinds</Link></li>
              <li><Link to="/products/upholstery/sofa-fabrics" className="hover:text-gold-400 transition-colors">Upholstery</Link></li>
              <li><Link to="/products/other-solutions/window-treatment" className="hover:text-gold-400 transition-colors">Other Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+919177480706" className="hover:text-gold-400 transition-colors">+91-9177480706</a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle size={16} className="mt-1 flex-shrink-0" />
                <a href="https://wa.me/919392572455" className="hover:text-gold-400 transition-colors" target="_blank" rel="noopener noreferrer">WhatsApp: +91-9392572455</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@noorfurnishings.com" className="hover:text-gold-400 transition-colors">info@noorfurnishings.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <span>Monday - Sunday: 10:00 AM - 10:00 PM</span>
              </li>
            </ul>

         
          </div>
        </div>

        <div className="border-t border-brown-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} NOOR FURNISHINGS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
