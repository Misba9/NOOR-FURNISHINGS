import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SEO from '../components/SEO';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of curtains do you offer?',
      answer: 'We offer a wide range of curtains including Jacquard, Blackout, Plain, Linen, Sheer, Imported, and Textured curtains. Each type is available in various colors, patterns, and sizes to match your interior design needs.',
    },
    {
      question: 'Do you provide custom sizing for curtains and blinds?',
      answer: 'Yes! All our products can be customized to fit your exact window measurements. Our team will visit your location for precise measurements and ensure perfect fit and installation.',
    },
    {
      question: 'What is your installation process?',
      answer: 'After you place an order, our team schedules a visit for final measurements. Once confirmed, we manufacture your custom products and schedule professional installation at your convenience. The entire process typically takes 7-14 days.',
    },
    {
      question: 'Do you offer warranties on your products?',
      answer: 'Yes, all our products come with a manufacturer warranty. Curtains and fabrics have a 1-year warranty, while blinds and mechanical components have a 2-year warranty against manufacturing defects.',
    },
    {
      question: 'Can I see samples before ordering?',
      answer: 'Absolutely! We offer a free sample viewing service. You can visit our showroom or request samples to be sent to your home to see and feel the fabric quality before making a decision.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including cash, credit/debit cards, UPI, net banking, and EMI options through our partnered banks. A 50% advance is required to start production.',
    },
    {
      question: 'Do you offer maintenance services?',
      answer: 'Yes, we provide cleaning and maintenance services for all our products. We recommend professional cleaning every 6-12 months to maintain the quality and appearance of your curtains and carpets.',
    },
    {
      question: 'What is your return/exchange policy?',
      answer: 'For custom-made products, returns are not accepted unless there is a manufacturing defect. For ready-made items, we offer a 7-day exchange policy if the product is unused and in original packaging.',
    },
    {
      question: 'Do you provide services outside Hyderabad?',
      answer: 'Currently, we provide installation services primarily in Hyderabad and surrounding areas. However, we can ship our products nationwide, and you can arrange local installation.',
    },
    {
      question: 'How do I maintain my curtains and carpets?',
      answer: 'Regular vacuuming and dusting help maintain cleanliness. For curtains, we recommend professional dry cleaning. For carpets, regular vacuuming and spot cleaning with mild detergent works well. Avoid direct sunlight exposure for extended periods.',
    },
  ];

  // SEO data for this page
  const seoData = {
    title: "FAQ - Frequently Asked Questions About NOOR FURNISHINGS",
    description: "Find answers to common questions about NOOR FURNISHINGS premium curtains, carpets, blinds, bedcovers, and upholstery in Hyderabad. Learn about custom sizing, installation, warranties, and maintenance.",
    keywords: "FAQ, frequently asked questions, curtains, carpets, blinds, bedcovers, upholstery, installation, warranty, custom sizing, Hyderabad, interior design",
    image: "/Jacguard-Curtain.jpg",
    url: "https://www.noorfurnishings.com/faq",
    type: "article",
    canonical: "https://www.noorfurnishings.com/faq"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <section className="relative h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/Jacguard-Curtain.jpg"
            alt="Frequently Asked Questions - NOOR FURNISHINGS Premium Interior Solutions"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-gold-200">Find answers to common questions</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-brown-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Got Questions? We have Answers!</h2>
              <p className="text-brown-700">
                Cannot find the answer you are looking for? Feel free to contact our customer support team.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-brown-50 transition-colors"
                  >
                    <span className="font-bold text-brown-900 pr-8">{faq.question}</span>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="text-gold-600" size={24} />
                      ) : (
                        <Plus className="text-gold-600" size={24} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-brown-700 border-t border-brown-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center bg-gradient-to-r from-gold-600 to-gold-700 text-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="mb-6">Our friendly team is here to help you</p>
              <a
                href="/contact"
                className="bg-white text-gold-700 px-8 py-3 rounded-full font-bold hover:bg-brown-100 transition-all inline-block"
              >
                Contact Us
              </a>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Premium Quality Products</h2>
              <p className="text-brown-700 max-w-3xl mx-auto">
                Discover why thousands of customers trust us for their interior needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-brown-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/Shaggy-Carpet.jpg" alt="Premium Carpets - NOOR FURNISHINGS" className="w-16 h-16 object-cover rounded-full" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-brown-900 mb-3">Premium Carpets</h3>
                <p className="text-brown-700">
                  Luxurious carpets with superior comfort and durability for your living spaces.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-brown-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/Linen-Curtain.jpg" alt="Elegant Curtains - NOOR FURNISHINGS" className="w-16 h-16 object-cover rounded-full" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-brown-900 mb-3">Elegant Curtains</h3>
                <p className="text-brown-700">
                  Stylish window treatments that enhance your space with sophistication.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-brown-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/Velvet-Curtain.jpg" alt="Custom Solutions - NOOR FURNISHINGS" className="w-16 h-16 object-cover rounded-full" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-brown-900 mb-3">Custom Solutions</h3>
                <p className="text-brown-700">
                  Tailored interior solutions designed to match your unique style and needs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;