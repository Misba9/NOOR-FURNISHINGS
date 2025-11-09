import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Sparkles, MessageCircle, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-brown-900 to-brown-950 text-gold-100 relative overflow-hidden">
      {/* Enhanced decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gold-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gold-600 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-brown-700 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-gold-500">
                  <img
                    src="/logo.png"
                    alt="NOOR FURNISHINGS Logo - Premium Curtains, Carpets & Interior Solutions in Hyderabad"
                    className="w-6 h-6 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">NOOR FURNISHINGS</span>
                <span className="text-xs text-gold-400 tracking-widest">PREMIUM INTERIORS</span>
              </div>
            </div>
            <p className="text-sm mb-4">
              Transform your space with premium curtains, carpets, and interior solutions crafted with luxury fabrics and expert craftsmanship in Hyderabad.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/noorfurnishings" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="Facebook - NOOR FURNISHINGS" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/noorfurnishings" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="Instagram - NOOR FURNISHINGS" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="Twitter - NOOR FURNISHINGS">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="LinkedIn - NOOR FURNISHINGS">
                <Linkedin size={20} />
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Newsletter</h4>
              <form className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">Email for newsletter subscription</label>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded bg-brown-800 border border-gold-600 focus:outline-none focus:border-gold-400 text-sm"
                  aria-label="Email for newsletter subscription"
                />
                <button
                  type="submit"
                  className="bg-gold-600 text-white px-4 py-2 rounded hover:bg-gold-700 transition-colors text-sm font-medium"
                  aria-label="Subscribe to NOOR FURNISHINGS newsletter"
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
              <li><Link to="/subcategories/curtains/jacquard" className="hover:text-gold-400 transition-colors">Curtains</Link></li>
              <li><Link to="/subcategories/carpets/shaggy" className="hover:text-gold-400 transition-colors">Carpets</Link></li>
              <li><Link to="/subcategories/bedcovers/double-bed" className="hover:text-gold-400 transition-colors">Bedcovers</Link></li>
              <li><Link to="/subcategories/blinds/venetian" className="hover:text-gold-400 transition-colors">Blinds</Link></li>
              <li><Link to="/subcategories/upholstery/sofa-fabrics" className="hover:text-gold-400 transition-colors">Upholstery</Link></li>
              <li><Link to="/subcategories/othersolutions/window-treatment" className="hover:text-gold-400 transition-colors">Other Solutions</Link></li>
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
                <span>Monday - Saturday: 11:30 AM - 10:00 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <span>Sunday: 11:30 AM - 08:00 PM</span>
              </li>
            </ul>

            {/* Enhanced decorative image placeholder */}
            {/* <div className="mt-6 rounded-lg overflow-hidden border-2 border-gold-600 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-gold-500/20 to-gold-700/20 h-32 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('/Jacguard-Curtain.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="text-center relative z-10">
                  <Sparkles className="text-gold-400 w-8 h-8 mx-auto mb-2" />
                  <p className="text-gold-300 text-sm font-medium">Premium Quality</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="border-t text-black border-brown-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} NOOR FURNISHINGS. All rights reserved.</p>
          <p className="mt-2 text-black">
            Design by <a 
              href="https://alehsanmt.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-black transition-colors font-bold"
            >
              Al-Ehsan Media & Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;