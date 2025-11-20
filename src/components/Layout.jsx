import React from 'react';
import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { MessageCircle } from 'lucide-react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import ProductBar from './ProductBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <ProductBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      
      {/* Vercel Analytics */}
      <Analytics />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919392572455"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50 lg:bottom-8 lg:right-8 animate-bounce"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} className="lg:w-6 lg:h-6" />
      </a>
    </div>
  );
};

export default Layout;