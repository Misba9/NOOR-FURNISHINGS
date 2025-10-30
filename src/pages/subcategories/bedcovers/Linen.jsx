import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const Linen = () => {
  const productImages = [
    '/Linen-Curtain.jpg',
    'https://images.unsplash.com/photo-1615529162924-f8605388463a?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop',
  ];

  const features = [
    'Natural fabric with a relaxed, elegant look',
    'Premium quality linen for lasting comfort',
    'Available in various sizes and styles',
    'Easy maintenance and cleaning',
    '2-year warranty',
    'Wide range of natural colors',
    'Hypoallergenic materials',
    'Temperature regulating properties',
  ];

  const relatedProducts = [
    { name: 'Double Bed Bedcovers', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop', link: '/subcategories/bedcovers/double-bed' },
    { name: 'Fitted Bedcovers', image: 'https://images.unsplash.com/photo-1615529162924-f8605388463a?w=600&h=400&fit=crop', link: '/subcategories/bedcovers/fitted-bedcovers' },
    { name: 'Luxury Bed Sets', image: 'https://images.unsplash.com/photo-1615529162924-f8605388463a?w=600&h=400&fit=crop', link: '/subcategories/bedcovers/luxury-bed-sets' },
  ];

  return (
    <div>
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/Linen-Curtain.jpg"
          alt="Linen Bedcovers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Linen Bedcovers</h1>
            <p className="text-xl text-gold-200">Natural Fabric with a Relaxed, Elegant Look</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-2 gap-4">
                {productImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`Linen Bedcovers ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-brown-900 mb-4">Premium Linen Bedcovers</h2>
                
                <p className="text-brown-700 mb-6 text-lg leading-relaxed">
                  Embrace the natural beauty of our premium linen bedcovers, featuring the relaxed elegance 
                  and breathability of high-quality linen fabric. These bedcovers bring organic sophistication 
                  to your bedroom while providing exceptional comfort and temperature regulation.
                </p>

                <div className="bg-brown-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-brown-900 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="text-gold-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-brown-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/enquiry"
                    className="bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Get a Quote <ArrowRight size={20} />
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-transparent border-2 border-brown-900 text-brown-900 px-8 py-3 rounded-full font-bold hover:bg-brown-900 hover:text-white transition-all text-center"
                  >
                    Contact Us
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
            <p className="text-brown-700">Everything you need to know about our linen bedcovers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brown-900 mb-3">Materials</h3>
              <p className="text-brown-700">
                Made from premium quality linen fabric that is naturally breathable and moisture-wicking. 
                The fabric has a beautiful natural texture that becomes more appealing with age, 
                offering both comfort and visual appeal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brown-900 mb-3">Customization</h3>
              <p className="text-brown-700">
                Available in standard sizes with custom options for unique mattress dimensions. 
                Our team provides expert guidance for selecting the perfect linen bedcover that 
                complements your bedroom decor with natural elegance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brown-900 mb-3">Care Instructions</h3>
              <p className="text-brown-700">
                Easy to maintain with machine washable options. Linen bedcovers are designed for 
                convenient care while maintaining their quality and appearance. Specific care instructions 
                are provided with each product to ensure longevity and preserve the natural texture.
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
            <p className="text-brown-700">Explore more of our bedcover collection</p>
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
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
                    <h3 className="text-lg font-bold text-brown-900">{product.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Linen;