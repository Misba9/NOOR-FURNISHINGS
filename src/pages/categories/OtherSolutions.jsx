import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

const OtherSolutions = () => {
  const otherSolutions = [
    {
      name: 'Window Treatment',
      image: '/Window-Treatment.jpg',
      description: 'Complete window solutions for any architectural style',
      link: '/subcategories/othersolutions/window-treatment'
    },
    {
      name: 'Valance',
      image: '/Valance.jpg',
      description: 'Decorative top treatments for windows',
      link: '/subcategories/othersolutions/valance'
    },
    {
      name: 'Fittings',
      image: '/fittings.jpg',
      description: 'Hardware and accessories for window treatments',
      link: '/subcategories/othersolutions/fittings'
    }
  ];

  // SEO data for this page
  const seoData = {
    title: "Other Solutions - NOOR FURNISHINGS Complete Interior Design",
    description: "Explore our complete interior design solutions including Window Treatment, Valance, and Fittings. Complementary solutions for a cohesive look in Hyderabad.",
    keywords: "window treatment, valance, fittings, interior design, window accessories, Hyderabad, complete solutions",
    image: "/Window-Treatment.jpg",
    url: "https://www.noorfurnishings.com/other-solutions",
    type: "article",
    canonical: "https://www.noorfurnishings.com/other-solutions"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <section className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/Window-Treatment.jpg"
            alt="Complete Interior Design Solutions - NOOR FURNISHINGS"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Other Solutions</h1>
              <p className="text-xl text-gold-200">Complete Interior Design Solutions</p>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Our Additional Solutions</h2>
              <p className="text-brown-700 max-w-3xl mx-auto">
                Explore our range of complementary solutions that complete your interior design vision.
                From decorative valances to essential fittings, we provide everything needed for a cohesive look.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={solution.link}>
                    <div className="relative overflow-hidden rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
                      <img
                        src={solution.image}
                        alt={`${solution.name} - NOOR FURNISHINGS Complete Interior Design Solutions`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{solution.name}</h3>
                        <div className="flex items-center gap-2">
                          <span>View Details</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-brown-900 mb-2 group-hover:text-gold-600 transition-colors">{solution.name}</h3>
                      <p className="text-brown-700">{solution.description}</p>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-6">Complete Your Space</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Design Expertise</h3>
                  <p className="text-brown-700">
                    Professional consultation to help you choose the perfect solutions
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Quality Materials</h3>
                  <p className="text-brown-700">
                    Premium products that complement your main interior selections
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Professional Installation</h3>
                  <p className="text-brown-700">
                    Expert fitting services for a seamless, polished finish
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

export default OtherSolutions;