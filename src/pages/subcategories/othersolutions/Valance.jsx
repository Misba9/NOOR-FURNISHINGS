import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import SEO from '../../../components/SEO';

const Valance = () => {
  const productImage = '/Images/Other-Solutions/Valance.jpg';

  const features = [
    'Decorative top treatments for windows',
    'Durable materials for long-lasting performance',
    'Available in various styles and designs',
    'Professional installation included',
    '2-year warranty',
    'Wide range of customization options',
    'Enhances architectural features',
    'Complements existing window treatments',
  ];

  const relatedProducts = [
    { name: 'Window Treatment', image: '/Images/Other-Solutions/Window-Treatment.jpg', link: '/subcategories/othersolutions/window-treatment' },
    { name: 'Fittings', image: '/Images/Other-Solutions/fittings.jpg', link: '/subcategories/othersolutions/fittings' },
    { name: 'Curtains', image: '/Images/Curtains/Jacguard-Curtain.jpg', link: '/subcategories/curtains' },
  ];

  // SEO data for this page
  const seoData = {
    title: "Valance - Decorative Top Treatments for Windows",
    description: "Premium valance with decorative top treatments for windows. Enhances architectural features with professional installation and 2-year warranty in Hyderabad.",
    keywords: "valance, window valance, decorative window treatments, top window treatments, architectural features, window decor, Hyderabad valance",
    image: "/Images/Other-Solutions/Valance.jpg",
    url: "https://www.noorfurnishings.com/subcategories/othersolutions/valance",
    type: "article",
    canonical: "https://www.noorfurnishings.com/subcategories/othersolutions/valance"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <section className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/Images/Other-Solutions/Valance.jpg"
            alt="Premium Valance - Decorative Top Treatments for Windows"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Valance</h1>
              <p className="text-xl text-gold-200">Decorative Top Treatments for Windows</p>
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
                    alt="Premium Valance Solutions - Decorative Top Treatments for Windows"
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
                  <h2 className="text-3xl font-bold text-brown-900 mb-4">Premium Valance Solutions</h2>

                  <p className="text-brown-700 mb-6 text-lg leading-relaxed">
                    Add the perfect finishing touch to your windows with our premium valance collection,
                    designed to enhance architectural features and create a polished, sophisticated look.
                    These decorative top treatments serve as elegant crowns for your windows, tying together
                    your overall design scheme while adding visual interest and dimension to your space.
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
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Product Details</h2>
              <p className="text-brown-700">Everything you need to know about our valance solutions</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Materials</h3>
                <p className="text-brown-700">
                  Made from premium quality fabrics and materials selected for their durability,
                  appearance, and draping qualities. These materials are chosen to provide long-lasting
                  performance while maintaining their aesthetic appeal and shape.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Customization</h3>
                <p className="text-brown-700">
                  Available in various styles, sizes, and designs to perfectly complement your window
                  dimensions and interior design preferences. Our team provides expert guidance for
                  selecting the perfect valance that enhances your space.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Installation</h3>
                <p className="text-brown-700">
                  Professional installation included with precise measurements and expert fitting.
                  Our experienced team ensures flawless results that showcase the decorative beauty
                  and finishing touch of our valance solutions in your space.
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
              <p className="text-brown-700">Explore more of our other solutions collection</p>
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
                        alt={`${product.name} - Premium Other Solutions`}
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

export default Valance;