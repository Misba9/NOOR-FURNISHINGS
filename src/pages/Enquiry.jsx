import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', productType: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const productTypes = [
    'Curtains - Jacquard',
    'Curtains - Blackout',
    'Curtains - Plain',
    'Curtains - Linen',
    'Curtains - Sheer',
    'Carpets - Shaggy',
    'Carpets - Turkish',
    'Bedcovers - Luxury Sets',
    'Bedcovers - Wedding Sets',
    'Blinds - Roman',
    'Blinds - Venetian',
    'Blinds - Wooden',
    'Upholstery - Sofa Fabrics',
    'Other - Window Treatment',
    'Complete Home Makeover',
  ];

  return (
    <div>
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/Jacguard-Curtain.jpg"
          alt="Get Enquiry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Get an Enquiry</h1>
            <p className="text-xl text-gold-200">Let us help you transform your space</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brown-50">
        <div className="container mx-auto px-4 max-w-3xl">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-lg shadow-xl"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-brown-900 mb-4">Tell Us About Your Project</h2>
                <p className="text-brown-700">
                  Fill out the form below and our team will get back to you within 24 hours with a personalized quote
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-brown-900 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:outline-none focus:border-gold-600 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-brown-900 font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:outline-none focus:border-gold-600 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-brown-900 font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:outline-none focus:border-gold-600 transition-colors"
                      placeholder="+91-9177480706"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="productType" className="block text-brown-900 font-medium mb-2">
                    Product Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:outline-none focus:border-gold-600 transition-colors"
                  >
                    <option value="">Select a product type</option>
                    {productTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-brown-900 font-medium mb-2">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:outline-none focus:border-gold-600 transition-colors resize-none"
                    placeholder="Tell us about your requirements, preferred colors, dimensions, budget, etc."
                  />
                </div>

                <div className="bg-gold-50 p-4 rounded-lg border border-gold-200">
                  <p className="text-sm text-brown-700">
                    <strong>Note:</strong> By submitting this form, you agree to be contacted by our team regarding your enquiry. 
                    We typically respond within 24 hours during business days.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-600 to-gold-700 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Submit Enquiry <Send size={22} />
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-lg shadow-xl text-center"
            >
              <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Thank You!</h2>
              <p className="text-brown-700 text-lg mb-6">
                Your enquiry has been successfully submitted. Our team will contact you within 24 hours.
              </p>
              <p className="text-brown-600">
                For urgent queries, please call us at <a href="tel:+919177480706" className="text-gold-600 font-bold">+91-9177480706</a>
              </p>
            </motion.div>
          )}
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
            <h2 className="text-3xl font-bold text-brown-900 mb-4">Premium Interior Solutions</h2>
            <p className="text-brown-700 max-w-3xl mx-auto">
              Discover the quality and craftsmanship that makes us Hyderabad's preferred choice for luxury interiors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brown-50 rounded-lg overflow-hidden shadow-lg"
            >
              <img src="/Shaggy-Carpet.jpg" alt="Premium Carpets" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brown-900 mb-2">Premium Carpets</h3>
                <p className="text-brown-700">
                  Luxurious carpets with superior comfort and durability for your living spaces.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brown-50 rounded-lg overflow-hidden shadow-lg"
            >
              <img src="/Linen-Curtain.jpg" alt="Elegant Curtains" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brown-900 mb-2">Elegant Curtains</h3>
                <p className="text-brown-700">
                  Stylish window treatments that enhance your space with sophistication.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brown-50 rounded-lg overflow-hidden shadow-lg"
            >
              <img src="/Velvet-Curtain.jpg" alt="Custom Solutions" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brown-900 mb-2">Custom Solutions</h3>
                <p className="text-brown-700">
                  Tailored interior solutions designed to match your unique style and needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gold-600 to-gold-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8">Get a free consultation and personalized quote</p>
            <a
              href="/contact"
              className="bg-white text-gold-700 px-8 py-3 rounded-full font-bold hover:bg-brown-100 transition-all inline-flex items-center gap-2"
            >
              Contact Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;