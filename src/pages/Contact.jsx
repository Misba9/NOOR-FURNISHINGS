import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SEO data for this page
  const seoData = {
    title: "Contact Us - NOOR FURNISHINGS Premium Interior Solutions",
    description: "Get in touch with NOOR FURNISHINGS in Hyderabad for premium curtains, carpets, blinds, bedcovers, and upholstery. Visit our showroom or contact us for expert consultation.",
    keywords: "contact us, curtains, carpets, blinds, bedcovers, upholstery, interior design, Hyderabad, showroom, consultation, phone, email, WhatsApp",
    image: "/Jacguard-Curtain.jpg",
    url: "https://www.noorfurnishings.com/contact",
    type: "article",
    canonical: "https://www.noorfurnishings.com/contact"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        <section className="relative h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/Jacguard-Curtain.jpg"
            alt="Contact NOOR FURNISHINGS - Premium Interior Solutions in Hyderabad"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-gold-200">We would love to hear from you</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-brown-900 mb-6">Get In Touch</h2>
                <p className="text-brown-700 mb-8">
                  Have questions about our products or services? Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold-100 p-3 rounded-full">
                      <Phone className="text-gold-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brown-900 mb-1">Phone</h3>
                      <a href="tel:+919177480706" className="text-brown-700 hover:text-gold-600 transition-colors">
                        +91-9177480706
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gold-100 p-3 rounded-full">
                      <Mail className="text-gold-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brown-900 mb-1">Email</h3>
                      <a href="mailto:info@noorfurnishings.com" className="text-brown-700 hover:text-gold-600 transition-colors">
                        info@noorfurnishings.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Section */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gold-100 p-3 rounded-full">
                      <MessageCircle className="text-gold-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brown-900 mb-1">WhatsApp</h3>
                      <a href="https://wa.me/919392572455" className="text-brown-700 hover:text-gold-600 transition-colors" target="_blank" rel="noopener noreferrer">
                        +91-9392572455
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gold-100 p-3 rounded-full">
                      <MapPin className="text-gold-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brown-900 mb-1">Location</h3>
                      <p className="text-brown-700">
                        Banjara Hills, Hyderabad<br />
                        Telangana 500034, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gold-100 p-3 rounded-full">
                      <Clock className="text-gold-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brown-900 mb-1">Operating Hours</h3>
                      <p className="text-brown-700">
                        Monday - Sunday: 10:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="bg-brown-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-brown-900 mb-6">Send us a Message</h3>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-brown-900 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:outline-none focus:border-gold-600 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-brown-900 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:outline-none focus:border-gold-600 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-brown-900 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:outline-none focus:border-gold-600 transition-colors"
                        placeholder="+91-9177480706"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-brown-900 font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg border border-brown-300 focus:outline-none focus:border-gold-600 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gold-600 to-gold-700 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={20} />
                    </button>
                  </div>
                </form>
              </motion.div>
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
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Visit Our Showroom</h2>
              <p className="text-brown-700 max-w-3xl mx-auto">
                Experience our premium collections in person at our showroom in Hyderabad. Our expert team is ready to help you find the perfect solutions for your space.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src="/Shaggy-Carpet.jpg"
                  alt="NOOR FURNISHINGS Showroom - Premium Collections"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brown-900 mb-2">Premium Collections</h3>
                  <p className="text-brown-700 mb-4">
                    Explore our extensive range of curtains, carpets, and upholstery fabrics in person.
                    Touch and feel the quality of our premium materials.
                  </p>
                  <div className="flex items-center text-gold-600 font-medium">
                    <MapPin size={18} className="mr-2" />
                    <span>Banjara Hills, Hyderabad</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src="/Linen-Curtain.jpg"
                  alt="Expert Consultation - NOOR FURNISHINGS"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brown-900 mb-2">Expert Consultation</h3>
                  <p className="text-brown-700 mb-4">
                    Our design experts will help you choose the perfect products for your space,
                    providing personalized recommendations based on your style and requirements.
                  </p>
                  <div className="flex items-center text-gold-600 font-medium">
                    <Clock size={18} className="mr-2" />
                    <span>Open 10 AM - 10 PM Daily</span>
                  </div>
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
              <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-xl mb-8">Chat with us on WhatsApp for instant support</p>
              <a
                href="https://wa.me/919392572455"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gold-700 px-8 py-3 rounded-full font-bold hover:bg-brown-100 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;