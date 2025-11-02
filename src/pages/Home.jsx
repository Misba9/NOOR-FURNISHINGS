import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, Clock, Award, Palette, Truck } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Transform Your Space with Royal Elegance',
      subtitle: 'Premium Curtains, Carpets & Interiors',
      image: '/Jacguard-Curtain.jpg',
    },
    {
      title: 'Luxury That Speaks Volumes',
      subtitle: 'Handcrafted Designs for Distinguished Spaces',
      image: '/Shaggy-Carpet.jpg',
    },
    {
      title: 'Where Comfort Meets Elegance',
      subtitle: 'Bespoke Solutions for Modern Living',
      image: '/Linen-Curtain.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = [
    {
      name: 'Jacquard Curtains',
      image: '/Jacguard-Curtain.jpg',
      category: 'curtains',
      subcategory: 'jacquard'
    },
    { name: 'Shaggy Carpets', image: '/Shaggy-Carpet.jpg', category: 'carpets', subcategory: 'shaggy' },
    { name: 'Luxury Bedcovers', image: '/Luxury-Bed-Set.jpg', category: 'bedcovers', subcategory: 'luxury-bed-sets' },
    { name: 'Roman Blinds', image: '/Roman-Blind.jpg', category: 'blinds', subcategory: 'roman' },
    { name: 'Sofa Fabrics', image: '/Upholstery-Sofa-Fabrics.jpg', category: 'upholstery', subcategory: 'sofa-fabrics' },
    { name: 'Window Treatments', image: '/Window-Treatment.jpg', category: 'othersolutions', subcategory: 'window-treatment' },
  ];

  const whyChooseUs = [
    { icon: Palette, title: 'Luxury Fabrics', description: 'Premium imported fabrics with exquisite designs' },
    { icon: Award, title: 'Expert Craftsmanship', description: 'Skilled artisans with decades of experience' },
    { icon: Sparkles, title: 'Custom Design', description: 'Tailored solutions to match your vision' },
    { icon: Truck, title: 'Fast Delivery', description: 'Quick installation and timely service' },
  ];

  const testimonials = [
    { name: 'Priya Sharma', rating: 5, text: 'Absolutely stunning curtains! The quality is exceptional and the installation was seamless. Highly recommend!' },
    { name: 'Rajesh Kumar', rating: 5, text: 'The team helped us choose the perfect carpet for our living room. Professional service from start to finish.' },
    { name: 'Anita Reddy', rating: 5, text: 'Beautiful bedcovers that transformed our bedroom. The luxury fabric feels amazing!' },
  ];

  // SEO data for this page
  const seoData = {
    title: "NOOR FURNISHINGS - Premium Curtains, Carpets & Blinds",
    description: "Transform your space with NOOR FURNISHINGS - Premium curtains, carpets, bedcovers, blinds and upholstery. Luxury fabrics, expert craftsmanship, and custom interior solutions in Hyderabad.",
    keywords: "curtains, carpets, blinds, bedcovers, upholstery, interior design, home decor, Hyderabad, luxury fabrics, custom solutions",
    image: "/logo.png",
    url: "https://www.noorfurnishings.com/",
    type: "website",
    canonical: "https://www.noorfurnishings.com/"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={slide.image}
                alt={`${slide.title} - Premium Home Furnishings`}
                className="w-full h-full object-cover z-0"
                loading="eager"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
                <div className="container mx-auto px-4">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-gold-200 mb-8"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Link
                      to="/curtains"
                      className="bg-gold-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gold-700 transition-all hover:shadow-xl inline-flex items-center justify-center gap-2 group"
                    >
                      Explore Collection
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/enquiry"
                      className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-brown-900 transition-all group"
                    >
                      <span className="group-hover:scale-105 transition-transform">Get a Free Consultation</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-gold-500 w-8' : 'bg-white/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">About Royal Elegance</h2>
              <p className="text-brown-700 max-w-3xl mx-auto">
                With over two decades of expertise in luxury interiors, we bring your vision to life with premium fabrics,
                expert craftsmanship, and personalized design solutions. Every piece is crafted to perfection, ensuring your
                space reflects timeless elegance and comfort.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { image: '/Jacguard-Curtain.jpg', title: 'Luxury Interiors' },
                { image: '/Shaggy-Carpet.jpg', title: 'Expert Craftsmanship' },
                { image: '/fittings.jpg', title: 'Fittings' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img src={item.image} alt={`${item.title} - Premium Home Furnishings`} className="w-full h-64 object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-bold text-brown-900">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-products" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">Featured Products</h2>
              <p className="text-brown-700">Explore our curated collection of premium interior solutions</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/subcategories/${product.category}/${product.subcategory}`}>
                    <div className="relative overflow-hidden rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
                      <img
                        src={product.image}
                        alt={`${product.name} - Premium Interior Solutions`}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                        <div className="flex items-center gap-2">
                          <span>View Details</span>
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold text-brown-900 group-hover:text-gold-600 transition-colors">{product.name}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-brown-900 to-brown-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-gold-200">Excellence in every detail, perfection in every creation</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="bg-gold-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gold-300 transition-colors">{item.title}</h3>
                  <p className="text-gold-200">{item.description}</p>
                </motion.div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">What Our Clients Say</h2>
              <p className="text-brown-700">Trusted by hundreds of satisfied customers</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-brown-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-brown-900">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 text-gold-600 font-medium hover:text-gold-700 transition-colors group"
              >
                <span className="group-hover:scale-105 transition-transform">View All Testimonials</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-gold-600 to-gold-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
              <p className="text-xl mb-8">Get a free consultation and bring your vision to life</p>
              <Link
                to="/enquiry"
                className="bg-white text-gold-700 px-8 py-3 rounded-full font-bold hover:bg-brown-100 transition-all inline-flex items-center gap-2 hover:shadow-xl group"
              >
                <span className="group-hover:scale-105 transition-transform">Get Started Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;