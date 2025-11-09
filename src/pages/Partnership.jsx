import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Handshake, TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const Partnership = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    partnershipType: '',
    message: ''
  });

  const partnershipTypes = [
    'Wholesale Distributor',
    'Retail Partner',
    'Interior Designer',
    'Architect',
    'Contractor',
    'Other'
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-gold-600" />,
      title: 'Profitable Margins',
      description: 'Competitive pricing structure with attractive profit margins for all partnership tiers.'
    },
    {
      icon: <Users className="w-8 h-8 text-gold-600" />,
      title: 'Training & Support',
      description: 'Comprehensive training programs and ongoing support to ensure your success.'
    },
    {
      icon: <Handshake className="w-8 h-8 text-gold-600" />,
      title: 'Exclusive Territory',
      description: 'Protected territory rights to ensure your investment is secure.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-gold-600" />,
      title: 'Marketing Materials',
      description: 'Access to professional marketing materials and digital assets.'
    }
  ];

  const partnershipOptions = [
    {
      title: 'Wholesale Distribution',
      description: 'Become an authorized distributor for NOOR FURNISHINGS products in your region with bulk purchasing options and exclusive discounts.'
    },
    {
      title: 'Retail Partnership',
      description: 'Feature our premium products in your showroom or retail space with dedicated support and promotional materials.'
    },
    {
      title: 'Design Collaboration',
      description: 'Partner with our design team to create exclusive collections for interior designers and architects.'
    },
    {
      title: 'Project Partnership',
      description: 'Collaborate on large-scale projects with our team for hotels, offices, and residential complexes.'
    }
  ];

  const requirements = [
    'Minimum 2 years of experience in the furnishing or interior design industry',
    'Proven track record in sales or project execution',
    'Dedicated showroom space or established distribution network',
    'Commitment to maintaining brand standards and quality',
    'Financial stability to support inventory or project requirements'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your partnership inquiry! We will contact you within 2 business days.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      partnershipType: '',
      message: ''
    });
  };

  // SEO data for this page
  const seoData = {
    title: "Partnership Opportunities - NOOR FURNISHINGS",
    description: "Join NOOR FURNISHINGS as a business partner. Explore wholesale distribution, retail partnerships, and design collaborations in the premium furnishing industry.",
    keywords: "partnership, wholesale, retail, distributor, interior design, furnishing, collaboration, business opportunity, Hyderabad",
    image: "/Images/Curtains/Jacguard-Curtain.jpg",
    url: "https://www.noorfurnishings.com/partnership",
    type: "website",
    canonical: "https://www.noorfurnishings.com/partnership"
  };

  return (
    <>
      <SEO {...seoData} />
      <div>
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/Images/Curtains/Jacguard-Curtain.jpg"
            alt="NOOR FURNISHINGS Partnership Opportunities"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white max-w-4xl px-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Partnership Opportunities</h1>
              <p className="text-xl text-gold-200 mb-8">
                Grow your business with NOOR FURNISHINGS premium furnishing solutions
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-600 text-brown-900 px-8 py-3 rounded-full font-bold hover:bg-gold-700 transition-colors"
              >
                Become a Partner
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-brown-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Partnership Benefits</h2>
              <p className="text-brown-700 max-w-2xl mx-auto">
                Join our network of trusted partners and unlock exclusive benefits designed to grow your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brown-900 mb-2">{benefit.title}</h3>
                  <p className="text-brown-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Partnership Types</h2>
              <p className="text-brown-700 max-w-2xl mx-auto">
                Explore the different ways you can collaborate with NOOR FURNISHINGS
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partnershipOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-6 bg-brown-50 rounded-lg"
                >
                  <div className="bg-gold-100 p-3 rounded-full">
                    <Handshake className="text-gold-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brown-900 mb-2">{option.title}</h3>
                    <p className="text-brown-700">{option.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-gradient-to-r from-brown-800 to-brown-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Partnership Requirements</h2>
              <p className="text-brown-200 max-w-2xl mx-auto">
                We look for committed partners who share our vision for quality and excellence
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brown-700/50 backdrop-blur-sm rounded-lg p-8"
              >
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={20} />
                      <span className="text-brown-100">{requirement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brown-900 mb-4">Start Your Partnership Journey</h2>
              <p className="text-brown-700 max-w-2xl mx-auto">
                Fill out the form below and our partnership team will contact you within 2 business days
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brown-50 p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-brown-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold-100 p-3 rounded-full">
                      <Phone className="text-gold-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brown-900 mb-1">Phone</h4>
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
                      <h4 className="font-bold text-brown-900 mb-1">Email</h4>
                      <a href="mailto:--"lassName="text-brown-700 hover:text-gold-600 transition-colors">
                        partnerships@noorfurnishings.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gold-100 p-3 rounded-full">
                      <MapPin className="text-gold-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brown-900 mb-1">Office</h4>
                      <p className="text-brown-700">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg text-white">
                  <h4 className="font-bold text-lg mb-2">Why Partner With Us?</h4>
                  <p className="text-sm">
                    NOOR FURNISHINGS offers premium quality products, strong brand recognition, 
                    and comprehensive support to help you grow your business in the furnishing industry.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border border-brown-200">
                  <h3 className="text-2xl font-bold text-brown-900 mb-6">Partnership Inquiry Form</h3>

                  <div className="space-y-4">
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

                    <div>
                      <label htmlFor="company" className="block text-brown-900 font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:outline-none focus:border-gold-600 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="partnershipType" className="block text-brown-900 font-medium mb-2">
                        Partnership Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="partnershipType"
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:outline-none focus:border-gold-600 transition-colors"
                      >
                        <option value="">Select a partnership type</option>
                        {partnershipTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-brown-900 font-medium mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:outline-none focus:border-gold-600 transition-colors resize-none"
                        placeholder="Tell us about your business and partnership interests..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gold-600 to-gold-700 text-brown-900 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                    >
                      Submit Partnership Inquiry
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partnership;