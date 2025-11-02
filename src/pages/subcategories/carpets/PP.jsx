import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import SEO from '../../../components/SEO';

const PP = () => {
  const productImage = '/pp-carpets.jpg';

  const features = [
    'Durable polypropylene fibers for high-traffic areas',
    'Stain-resistant and easy to clean',
    'Available in various sizes and shapes',
    'Professional installation included',
    'Easy maintenance and cleaning',
    '2-year warranty',
    'Wide range of colors and patterns',
    'UV resistant and fade-proof',
  ];

  const relatedProducts = [
    { name: 'Shaggy Carpets', image: '/Shaggy-Carpet.jpg', link: '/subcategories/carpets/shaggy' },
    { name: 'Turkish Carpets', image: '/Turkish-Carpet.jpg', link: '/subcategories/carpets/turkish' },
    { name: 'Runners', image: '/Runner-Rug-carpet.jpg', link: '/subcategories/carpets/runners' },
  ];

  // SEO data for this page
  const seoData = {
    title: "PP Carpets - Durable Polypropylene Fiber Carpets",
    description: "Premium PP (polypropylene) carpets with durable fibers for high-traffic areas. Stain-resistant and easy to clean carpets with professional installation in Hyderabad.",
    keywords: "PP carpets, polypropylene carpets, durable carpets, stain resistant carpets, easy clean carpets, high traffic carpets, Hyderabad carpets",
    image: "/pp-carpets.jpg",
    url: "https://www.noorfurnishings.com/subcategories/carpets/pp",
    type: "article",
    canonical: "https://www.noorfurnishings.com/subcategories/carpets/pp"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <section className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/pp-carpets.jpg"
            alt="Premium PP Carpets with Durable Polypropylene Fibers for High-Traffic Areas"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">PP Carpets</h1>
              <p className="text-xl text-gold-200">Durable Polypropylene Fibers for High-Traffic Areas</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden shadow-lg h-full transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={productImage}
                    alt="Premium PP Carpets - Durable Polypropylene Fiber Carpets"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-brown-900 mb-4">Premium PP Carpets</h2>

                  <p className="text-brown-700 mb-6 text-lg leading-relaxed">
                    Experience the perfect combination of durability and style with our premium PP (polypropylene) carpets.
                    Designed for high-traffic areas, these carpets offer exceptional stain resistance and easy maintenance
                    while maintaining their vibrant appearance and soft texture.
                  </p>

                  <div className="bg-brown-50 p-6 rounded-lg mb-6 hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-brown-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 group">
                          <Check className="text-gold-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={18} />
                          <span className="text-brown-700 group-hover:text-brown-900 transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/enquiry"
                      className="bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                    >
                      <span className="group-hover:scale-105 transition-transform">Get a Quote</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-transparent border-2 border-brown-900 text-brown-900 px-8 py-3 rounded-full font-bold hover:bg-brown-900 hover:text-white transition-all text-center group"
                    >
                      <span className="group-hover:scale-105 transition-transform">Contact Us</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brown-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-brown-900 mb-4">PP Carpets Product Details</h2>
              <p className="text-brown-700">Everything you need to know about our PP carpets</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Materials</h3>
                <p className="text-brown-700">
                  Made from high-quality polypropylene fibers that are inherently stain-resistant and easy to clean.
                  These synthetic materials are designed for durability in high-traffic areas while maintaining
                  their color and texture over time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Customization</h3>
                <p className="text-brown-700">
                  Available in custom sizes and a wide range of colors and patterns to perfectly match your decor.
                  Our team provides expert guidance for selecting the perfect PP carpet for your space and lifestyle.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Installation</h3>
                <p className="text-brown-700">
                  Professional installation included with precise measurements and expert fitting.
                  Our experienced team ensures flawless results that maximize the durability and appearance
                  of PP carpets in your space.
                </p>
              </div>
            </div>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-4">You May Also Like</h2>
              <p className="text-brown-700">Explore more of our carpet collection</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={product.link} className="group">
                    <div className="relative overflow-hidden rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
                      <img
                        src={product.image}
                        alt={`${product.name} - Premium Carpets`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                        <div className="flex items-center gap-2">
                          <span>View Details</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-bold text-brown-900 group-hover:text-gold-600 transition-colors">{product.name}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PP;