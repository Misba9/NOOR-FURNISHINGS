import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Products = () => {
  const productCategories = [
    {
      name: 'Curtains',
      image: '/Jacguard-Curtain.jpg',
      description: 'Elegant window treatments in various styles and fabrics',
      link: '/curtains',
      itemCount: 7
    },
    {
      name: 'Carpets',
      image: '/Shaggy-Carpet.jpg',
      description: 'Luxurious floor coverings for comfort and style',
      link: '/carpets',
      itemCount: 5
    },
    {
      name: 'Bedcovers',
      image: '/Linen-Bedcover.jpg',
      description: 'Premium bedding collections for ultimate comfort',
      link: '/bedcovers',
      itemCount: 7
    },
    {
      name: 'Blinds',
      image: '/Venetian-Blind.jpg',
      description: 'Functional window coverings with modern designs',
      link: '/blinds',
      itemCount: 6
    },
    {
      name: 'Upholstery',
      image: '/Upholstery-Sofa-Fabrics.jpg',
      description: 'Premium fabrics for furniture transformation',
      link: '/upholstery',
      itemCount: 2
    },
    {
      name: 'Other Solutions',
      image: '/Window-Treatment.jpg',
      description: 'Complete interior design solutions',
      link: '/other-solutions',
      itemCount: 3
    }
  ];

  // SEO data for this page
  const seoData = {
    title: "Our Products - NOOR FURNISHINGS Premium Interior Solutions",
    description: "Explore our comprehensive range of premium curtains, carpets, bedcovers, blinds, upholstery, and interior solutions in Hyderabad. Luxury products for every space.",
    keywords: "products, curtains, carpets, bedcovers, blinds, upholstery, interior design, Hyderabad, luxury products, premium solutions",
    image: "/Jacguard-Curtain.jpg",
    url: "https://www.noorfurnishings.com/products",
    type: "article",
    canonical: "https://www.noorfurnishings.com/products"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <section className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/Jacguard-Curtain.jpg"
            alt="Our Premium Products - NOOR FURNISHINGS Interior Solutions"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Products</h1>
              <p className="text-xl text-gold-200">Premium Interior Solutions for Every Space</p>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Product Categories</h2>
              <p className="text-brown-700 max-w-3xl mx-auto">
                Explore our comprehensive range of premium interior solutions designed to transform your space
                with elegance and functionality. Each category offers a variety of options to suit your unique style.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={category.link}>
                    <div className="relative overflow-hidden rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
                      <img
                        src={category.image}
                        alt={`${category.name} Collection - NOOR FURNISHINGS Premium Interior Solutions`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 bg-gold-600 text-white text-sm font-bold px-3 py-1 rounded-full group-hover:scale-110 transition-transform">
                        {category.itemCount} Items
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                        <div className="flex items-center gap-2">
                          <span>View Collection</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-brown-900 mb-2 group-hover:text-gold-600 transition-colors">{category.name}</h3>
                      <p className="text-brown-700">{category.description}</p>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-6">Why Choose Our Products?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Premium Quality</h3>
                  <p className="text-brown-700">
                    We source only the finest materials and work with skilled artisans to ensure exceptional quality.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Custom Solutions</h3>
                  <p className="text-brown-700">
                    Tailored options to perfectly match your space, style, and requirements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brown-900 mb-3">Professional Service</h3>
                  <p className="text-brown-700">
                    From consultation to installation, our experts ensure a seamless experience.
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

export default Products;