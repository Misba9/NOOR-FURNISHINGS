import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Curtains = () => {
  const curtainTypes = [
    { 
      name: 'Jacquard Curtains', 
      image: '/Jacguard-Curtain.jpg', 
      description: 'Luxurious woven fabric with intricate patterns',
      link: '/subcategories/curtains/jacquard'
    },
    { 
      name: 'Blackout Curtains', 
      image: '/Blackout-Curtain.jpg', 
      description: 'Complete light blocking for better sleep',
      link: '/subcategories/curtains/blackout'
    },
    { 
      name: 'Plain Curtains', 
      image: '/Eyelet-Curtains.jpg', 
      description: 'Simple elegance with premium fabric quality',
      link: '/subcategories/curtains/plain'
    },
    { 
      name: 'Linen Curtains', 
      image: '/Linen-Curtain.jpg', 
      description: 'Natural texture with a relaxed, elegant look',
      link: '/subcategories/curtains/linen'
    },
    { 
      name: 'Sheer Curtains', 
      image: '/Sheer-Elegance-Curtain.jpg', 
      description: 'Light and airy for a soft, diffused light',
      link: '/subcategories/curtains/sheer'
    },
    { 
      name: 'Imported Curtains', 
      image: '/Velvet-Curtain.jpg', 
      description: 'Premium international designs and fabrics',
      link: '/subcategories/curtains/imported'
    },
    { 
      name: 'Textured Curtains', 
      image: '/Pleated-Elegance.jpg', 
      description: 'Unique surface patterns for visual interest',
      link: '/subcategories/curtains/texture'
    }
  ];

  return (
    <div>
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/Jacguard-Curtain.jpg"
          alt="Curtains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Curtains Collection</h1>
            <p className="text-xl text-gold-200">Elegant Window Treatments for Every Style</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brown-900 mb-4">Our Curtain Collections</h2>
            <p className="text-brown-700 max-w-3xl mx-auto">
              Discover our exquisite range of curtains designed to enhance your space with elegance and functionality. 
              From light-filtering sheers to blackout options, we have the perfect solution for every room.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curtainTypes.map((curtain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={curtain.link}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
                    <img
                      src={curtain.image}
                      alt={curtain.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{curtain.name}</h3>
                      <div className="flex items-center gap-2">
                        <span>View Details</span>
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-brown-900 mb-2 group-hover:text-gold-600 transition-colors">{curtain.name}</h3>
                    <p className="text-brown-700">{curtain.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brown-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brown-900 mb-6">Why Choose Our Curtains?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Premium Quality</h3>
                <p className="text-brown-700">
                  Made from high-quality fabrics that are durable and long-lasting
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Custom Sizing</h3>
                <p className="text-brown-700">
                  Available in custom sizes to perfectly fit your windows
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Professional Installation</h3>
                <p className="text-brown-700">
                  Expert installation service for a flawless finish
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curtains;