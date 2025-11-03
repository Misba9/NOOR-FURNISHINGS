import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

const Carpets = () => {
  const carpetTypes = [
    {
      name: 'Shaggy Carpets',
      image: '/Images/Carpets/Shaggy-Carpet.jpg',
      description: 'Ultra-soft texture with luxurious deep pile',
      link: '/subcategories/carpets/shaggy'
    },
    {
      name: 'PP Carpets',
      image: '/Images/Carpets/PP-Carpets.jpg',
      description: 'Durable polypropylene fibers for high-traffic areas',
      link: '/subcategories/carpets/pp'
    },
    {
      name: 'Turkish Carpets',
      image: '/Images/Carpets/Turkish-Carpet.jpg',
      description: 'Traditional craftsmanship with intricate patterns',
      link: '/subcategories/carpets/turkish'
    },
    {
      name: 'Floor Mats',
      image: '/Images/Carpets/Floor-mats.jpg',
      description: 'Functional and stylish entryway solutions',
      link: '/subcategories/carpets/floor-mats'
    },
    {
      name: 'Runners',
      image: '/Images/Carpets/Runner-Carpet.jpg',
      description: 'Long and narrow carpets for hallways and corridors',
      link: '/subcategories/carpets/runners'
    }
  ];

  // SEO data for this page
  const seoData = {
    title: "Carpet Collection - NOOR FURNISHINGS Premium Floor Coverings",
    description: "Discover our premium carpet collection including Shaggy, PP, Turkish, and Runner carpets. Luxurious floor coverings for comfort and style in Hyderabad.",
    keywords: "carpets, floor coverings, Shaggy carpets, PP carpets, Turkish carpets, Runners, Floor mats, Hyderabad, premium carpets",
    image: "/Images/Carpets/Shaggy-Carpet.jpg",
    url: "https://www.noorfurnishings.com/carpets",
    type: "article",
    canonical: "https://www.noorfurnishings.com/carpets"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <section className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/Images/Carpets/Shaggy-Carpet.jpg"
            alt="Premium Carpet Collection - NOOR FURNISHINGS Floor Coverings"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Carpet Collection</h1>
              <p className="text-xl text-gold-200">Luxurious Floor Coverings for Every Space</p>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Our Carpet Collections</h2>
              <p className="text-brown-700 max-w-3xl mx-auto">
                Explore our diverse range of carpets designed to add warmth, comfort, and style to your living spaces.
                From plush shaggy options to durable solutions for high-traffic areas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carpetTypes.map((carpet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={carpet.link}>
                    <div className="relative overflow-hidden rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
                      <img
                        src={carpet.image}
                        alt={`${carpet.name} - NOOR FURNISHINGS Premium Floor Coverings`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{carpet.name}</h3>
                        <div className="flex items-center gap-2">
                          <span>View Details</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-brown-900 mb-2 group-hover:text-gold-600 transition-colors">{carpet.name}</h3>
                      <p className="text-brown-700">{carpet.description}</p>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-6">Why Choose Our Carpets?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Premium Materials</h3>
                  <p className="text-brown-700">
                    Crafted from high-quality fibers for durability and comfort
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Variety of Styles</h3>
                  <p className="text-brown-700">
                    Extensive collection to match any interior design preference
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Expert Installation</h3>
                  <p className="text-brown-700">
                    Professional fitting services for a perfect finish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Carpets;