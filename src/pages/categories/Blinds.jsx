import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Blinds = () => {
  const blindTypes = [
    { 
      name: 'Venetian Blinds', 
      image: '/Venetian-Blind.jpg', 
      description: 'Classic horizontal slats for light control',
      link: '/subcategories/blinds/venetian'
    },
    { 
      name: 'Roman Blinds', 
      image: '/Roman-Blind.jpg', 
      description: 'Elegant fabric folds that stack when raised',
      link: '/subcategories/blinds/roman'
    },
    { 
      name: 'Wooden Blinds', 
      image: '/Wooden-Blind.jpg', 
      description: 'Natural wood slats for a warm, classic look',
      link: '/subcategories/blinds/wooden'
    },
    { 
      name: 'PVC Chick Blinds', 
      image: '/PVC-Chick-Blind.jpg', 
      description: 'Durable and moisture-resistant for kitchens and bathrooms',
      link: '/subcategories/blinds/pvc-chick'
    },
    { 
      name: 'Roller Blinds', 
      image: '/Roller-Blinds.jpg', 
      description: 'Simple and sleek with smooth operation',
      link: '/subcategories/blinds/roller'
    },
    { 
      name: 'Zebra Blinds', 
      image: '/Zebra-Blinds.jpg', 
      description: 'Striped fabric for alternating light and privacy',
      link: '/subcategories/blinds/zebra'
    }
  ];

  return (
    <div>
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/Venetian-Blind.jpg"
          alt="Blinds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Blinds Collection</h1>
            <p className="text-xl text-gold-200">Functional Window Coverings with Style</p>
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
            <h2 className="text-3xl font-bold text-brown-900 mb-4">Our Blinds Collections</h2>
            <p className="text-brown-700 max-w-3xl mx-auto">
              Explore our comprehensive range of blinds designed to provide light control, privacy, and style for any room. 
              From classic Venetian to modern zebra blinds, we have the perfect solution for your windows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blindTypes.map((blind, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={blind.link}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
                    <img
                      src={blind.image}
                      alt={blind.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{blind.name}</h3>
                      <div className="flex items-center gap-2">
                        <span>View Details</span>
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-brown-900 mb-2 group-hover:text-gold-600 transition-colors">{blind.name}</h3>
                    <p className="text-brown-700">{blind.description}</p>
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
            <h2 className="text-3xl font-bold text-brown-900 mb-6">Why Choose Our Blinds?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Light Control</h3>
                <p className="text-brown-700">
                  Adjustable options for perfect light management in any room
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Privacy Solutions</h3>
                <p className="text-brown-700">
                  Various opacity levels to suit your privacy needs
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Energy Efficiency</h3>
                <p className="text-brown-700">
                  Insulating properties to help regulate room temperature
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blinds;