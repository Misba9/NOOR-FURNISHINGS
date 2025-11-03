import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

const Bedcovers = () => {
  const bedcoverTypes = [
    {
      name: 'Double Bed',
      image: '/Images/Bedcovers/Double-Bed-Bedcover.jpg',
      description: 'Perfectly sized for double beds with premium comfort',
      link: '/subcategories/bedcovers/double-bed'
    },
    {
      name: 'Fitted Bedcovers',
      image: '/Images/Bedcovers/Fitted-Bedcover.jpg',
      description: 'Snug fit with elastic edges for a neat appearance',
      link: '/subcategories/bedcovers/fitted-bedcovers'
    },
    {
      name: 'Linen Bedcovers',
      image: '/Images/Bedcovers/Linen-Bedcover.jpg',
      description: 'Natural fabric with a relaxed, elegant look',
      link: '/subcategories/bedcovers/linen'
    },
    {
      name: 'Wedding Bed Sets',
      image: '/Images/Bedcovers/Wedding-Bed-Set.jpg',
      description: 'Special collections for newlyweds and celebrations',
      link: '/subcategories/bedcovers/wedding-bed-sets'
    },
    {
      name: 'Luxury Bed Sets',
      image: '/Images/Bedcovers/Luxury-Bed-Set.jpg',
      description: 'Premium collections with exquisite designs',
      link: '/subcategories/bedcovers/luxury-bed-sets'
    },
    {
      name: 'Dohar',
      image: '/Images/Bedcovers/Dohar.jpg',
      description: 'Traditional lightweight quilted bedspreads',
      link: '/subcategories/bedcovers/dohar'
    },
    {
      name: 'Blankets',
      image: '/Images/Bedcovers/Blanket.jpg',
      description: 'Warm and cozy options for all seasons',
      link: '/subcategories/bedcovers/blankets'
    }
  ];

  // SEO data for this page
  const seoData = {
    title: "Bedcover Collection - NOOR FURNISHINGS Premium Bedding Solutions",
    description: "Explore our premium bedcover collection including Luxury Sets, Wedding Sets, Linen, and Dohar bedspreads. Luxurious bedding for ultimate comfort in Hyderabad.",
    keywords: "bedcovers, bedding, Luxury bed sets, Wedding bed sets, Linen bedcovers, Dohar, Blankets, Hyderabad, premium bedding",
    image: "/Images/Bedcovers/Linen-Bedcover.jpg",
    url: "https://www.noorfurnishings.com/bedcovers",
    type: "article",
    canonical: "https://www.noorfurnishings.com/bedcovers"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <section className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/Images/Bedcovers/Linen-Bedcover.jpg"
            alt="Premium Bedcover Collection - NOOR FURNISHINGS Bedding Solutions"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Bedcover Collection</h1>
              <p className="text-xl text-gold-200">Luxurious Bedding for Ultimate Comfort</p>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Our Bedcover Collections</h2>
              <p className="text-brown-700 max-w-3xl mx-auto">
                Discover our exquisite range of bedcovers designed to transform your bedroom into a sanctuary of comfort and style.
                From luxurious sets to traditional options, we have something for every taste.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bedcoverTypes.map((bedcover, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={bedcover.link}>
                    <div className="relative overflow-hidden rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
                      <img
                        src={bedcover.image}
                        alt={`${bedcover.name} - NOOR FURNISHINGS Premium Bedding Solutions`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{bedcover.name}</h3>
                        <div className="flex items-center gap-2">
                          <span>View Details</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-brown-900 mb-2 group-hover:text-gold-600 transition-colors">{bedcover.name}</h3>
                      <p className="text-brown-700">{bedcover.description}</p>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-6">Why Choose Our Bedcovers?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Premium Quality</h3>
                  <p className="text-brown-700">
                    Made from high-quality fabrics for lasting comfort and durability
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Variety of Styles</h3>
                  <p className="text-brown-700">
                    Extensive collection to match any bedroom decor preference
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Easy Maintenance</h3>
                  <p className="text-brown-700">
                    Machine washable options for convenient care
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

export default Bedcovers;