import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-brown-800 to-brown-700 text-gold-100 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-2 md:mb-0">
            <a href="tel:+919177480706" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Phone size={14} />
              <span>+91-9177480706</span>
            </a>
            <a href="https://wa.me/919392572455" className="flex items-center gap-2 hover:text-gold-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={14} />
              <span>WhatsApp: +91-9392572455</span>
            </a>
            <a href="mailto:info@noorfurnishings.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Mail size={14} />
              <span>info@noorfurnishings.com</span>
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:text-gold-400 transition-all hover:scale-110" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
