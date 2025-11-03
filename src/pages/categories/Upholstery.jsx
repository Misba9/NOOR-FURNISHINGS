import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

const Upholstery = () => {
  const upholsteryTypes = [
    {
      name: 'Sofa Fabrics',
      image: '/Images/Upholstery/Sofa-Fabrics-Upholstery.jpg',
      description: 'Premium fabrics for sofa upholstery and reupholstery',
      link: '/subcategories/upholstery/sofa-fabrics'
    },
    {
      name: 'Cushion Fabrics',
      image: '/Images/Upholstery/Cushion-Fabric-Upholstery.jpg',
      description: 'Soft and durable materials for decorative cushions',
      link: '/subcategories/upholstery/cushion-fabrics'
    }
  ];

  // SEO data for this page
  const seoData = {
    title: "Upholstery Collection - NOOR FURNISHINGS Premium Furniture Fabrics",
    description: "Discover our premium upholstery collection including Sofa Fabrics and Cushion Fabrics. Transform your furniture with style and comfort in Hyderabad.",
    keywords: "upholstery, sofa fabrics, cushion fabrics, furniture fabrics, reupholstery, Hyderabad, premium upholstery",
    image: "/Images/Upholstery/Sofa-Fabrics-Upholstery.jpg",
    url: "https://www.noorfurnishings.com/upholstery",
    type: "article",
    canonical: "https://www.noorfurnishings.com/upholstery"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <section className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/Images/Upholstery/Sofa-Fabrics-Upholstery.jpg"
            alt="Premium Upholstery Collection - NOOR FURNISHINGS Furniture Fabrics"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Upholstery Collection</h1>
              <p className="text-xl text-gold-200">Premium Fabrics for Furniture</p>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Our Upholstery Collections</h2>
              <p className="text-brown-700 max-w-3xl mx-auto">
                Discover our premium range of upholstery fabrics designed to transform your furniture with style and comfort.
                From durable options for high-use areas to luxurious textures for statement pieces.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upholsteryTypes.map((upholstery, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={upholstery.link}>
                    <div className="relative overflow-hidden rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
                      <img
                        src={upholstery.image}
                        alt={`${upholstery.name} - NOOR FURNISHINGS Premium Furniture Fabrics`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{upholstery.name}</h3>
                        <div className="flex items-center gap-2">
                          <span>View Details</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-brown-900 mb-2 group-hover:text-gold-600 transition-colors">{upholstery.name}</h3>
                      <p className="text-brown-700">{upholstery.description}</p>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-6">Why Choose Our Upholstery?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Premium Quality</h3>
                  <p className="text-brown-700">
                    High-performance fabrics that resist wear, fading, and stains
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Extensive Selection</h3>
                  <p className="text-brown-700">
                    Wide variety of colors, patterns, and textures to choose from
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Professional Expertise</h3>
                  <p className="text-brown-700">
                    Expert guidance for fabric selection and furniture transformation
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

export default Upholstery;