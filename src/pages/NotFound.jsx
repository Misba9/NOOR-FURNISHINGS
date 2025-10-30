import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brown-50 to-brown-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-4xl font-bold text-gold-600">404</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-brown-900 mb-4"
            >
              Page Not Found
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-brown-700 mb-8 max-w-2xl mx-auto"
            >
              Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <Home size={20} className="group-hover:scale-110 transition-transform" />
              <span className="group-hover:scale-105 transition-transform">Back to Home</span>
            </Link>
            
            <Link
              to="/products"
              className="bg-transparent border-2 border-brown-900 text-brown-900 px-8 py-3 rounded-full font-bold hover:bg-brown-900 hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              <ArrowLeft size={20} className="group-hover:scale-110 transition-transform" />
              <span className="group-hover:scale-105 transition-transform">View Products</span>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 pt-8 border-t border-brown-200"
          >
            <h2 className="text-2xl font-bold text-brown-900 mb-4">Popular Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Link to="/curtains" className="bg-brown-50 hover:bg-gold-100 text-brown-900 px-4 py-2 rounded-lg transition-all font-medium">
                Curtains
              </Link>
              <Link to="/carpets" className="bg-brown-50 hover:bg-gold-100 text-brown-900 px-4 py-2 rounded-lg transition-all font-medium">
                Carpets
              </Link>
              <Link to="/bedcovers" className="bg-brown-50 hover:bg-gold-100 text-brown-900 px-4 py-2 rounded-lg transition-all font-medium">
                Bedcovers
              </Link>
              <Link to="/blinds" className="bg-brown-50 hover:bg-gold-100 text-brown-900 px-4 py-2 rounded-lg transition-all font-medium">
                Blinds
              </Link>
              <Link to="/upholstery" className="bg-brown-50 hover:bg-gold-100 text-brown-900 px-4 py-2 rounded-lg transition-all font-medium">
                Upholstery
              </Link>
              <Link to="/other-solutions" className="bg-brown-50 hover:bg-gold-100 text-brown-900 px-4 py-2 rounded-lg transition-all font-medium">
                Other Solutions
              </Link>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-brown-700"
        >
          <p>Need help? <Link to="/contact" className="text-gold-600 hover:text-gold-700 font-medium">Contact our support team</Link></p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;