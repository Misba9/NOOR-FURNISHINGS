import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import SEO from '../../../components/SEO';

const Texture = () => {
  const productImage = '/Images/Curtains/textured-curtains.jpg';

  const features = [
    'Unique surface patterns for visual interest',
    'Premium quality textured fabric',
    'Custom sizing available',
    'Professional installation included',
    'Easy maintenance and cleaning',
    'Wide range of textural options',
    'Adds depth and dimension to spaces',
  ];

  const relatedProducts = [
    { name: 'Jacquard Curtains', image: '/Images/Curtains/Jacguard-Curtain.jpg', link: '/subcategories/curtains/jacquard' },
    { name: 'Blackout Curtains', image: '/Images/Curtains/Blackout-Curtain.jpg', link: '/subcategories/curtains/blackout' },
    { name: 'Linen Curtains', image: '/Images/Curtains/Linen-Curtain.jpg', link: '/subcategories/curtains/linen' },
  ];

  // SEO data for this page
  const seoData = {
    title: "Textured Curtains - Unique Surface Pattern Curtains",
    description: "Premium textured curtains with unique surface patterns for visual interest. Adds depth and dimension to spaces with custom sizing available in Hyderabad.",
    keywords: "textured curtains, patterned curtains, unique curtains, visual interest curtains, depth curtains, dimension curtains, Hyderabad curtains",
    image: "/Images/Curtains/textured-curtains.jpg",
    url: "https://www.noorfurnishings.com/subcategories/curtains/texture",
    type: "article",
    canonical: "https://www.noorfurnishings.com/subcategories/curtains/texture"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <section className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/Images/Curtains/textured-curtains.jpg"
            alt="Premium Textured Curtains with Unique Surface Patterns for Visual Interest"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Textured Curtains</h1>
              <p className="text-xl text-gold-200">Unique Surface Patterns for Visual Interest</p>
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
                    alt="Premium Textured Curtains - Unique Surface Pattern Window Treatments"
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
                  <h2 className="text-3xl font-bold text-brown-900 mb-4">Premium Textured Curtains</h2>

                  <p className="text-brown-700 mb-6 text-lg leading-relaxed">
                    Add visual depth and tactile interest to your space with our premium textured curtains.
                    Featuring unique surface patterns and dimensional fabrics, these curtains create a sophisticated
                    focal point while providing excellent light control and privacy.
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
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Textured Curtains Product Details</h2>
              <p className="text-brown-700">Everything you need to know about our textured curtains</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Materials</h3>
                <p className="text-brown-700">
                  Made from premium quality textured fabrics with unique surface patterns.
                  These materials are selected for their visual interest, durability, and elegant appearance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Customization</h3>
                <p className="text-brown-700">
                  Available in custom sizes and a range of textural options to complement your decor.
                  Our team provides expert guidance for selecting the perfect texture for your space.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brown-900 mb-3">Installation</h3>
                <p className="text-brown-700">
                  Professional installation included with precise measurements and expert fitting.
                  Our experienced team ensures flawless results that showcase the beautiful textures of these fabrics.
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
              <p className="text-brown-700">Explore more of our curtain collection</p>
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
                        alt={`${product.name} - Premium Window Treatments`}
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

export default Texture;