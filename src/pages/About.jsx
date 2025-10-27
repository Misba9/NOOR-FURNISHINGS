import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Clock, value: '20+', label: 'Years Experience' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Heart, value: '1000+', label: 'Projects Completed' },
  ];

  const values = [
    { icon: Target, title: 'Excellence', description: 'We strive for perfection in every detail, ensuring the highest quality in all our products and services.' },
    { icon: Lightbulb, title: 'Innovation', description: 'Constantly evolving with the latest design trends and technologies to bring you cutting-edge solutions.' },
    { icon: Heart, title: 'Customer First', description: 'Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.' },
    { icon: Award, title: 'Craftsmanship', description: 'Decades of expertise combined with skilled artisans to create timeless elegance.' },
  ];

  return (
    <div>
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=600&fit=crop"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gold-200">Crafting Elegance Since 2005</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-brown-900 mb-6">Our Story</h2>
              <p className="text-brown-700 mb-4">
                Royal Elegance Interiors was founded in 2005 with a simple vision: to bring luxury and sophistication 
                to every home. What started as a small family business has grown into one of Hyderabad's most trusted 
                names in premium curtains, carpets, and interior solutions.
              </p>
              <p className="text-brown-700 mb-4">
                Our journey has been driven by passion for excellence and commitment to customer satisfaction. We 
                believe that every space deserves to be transformed into a masterpiece, and we take pride in making 
                that happen for our clients.
              </p>
              <p className="text-brown-700">
                Today, with over 20 years of experience and hundreds of satisfied customers, we continue to innovate 
                and deliver exceptional quality that stands the test of time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&h=400&fit=crop"
                alt="Our Work 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop"
                alt="Our Work 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop"
                alt="Our Work 3"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop"
                alt="Our Work 4"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brown-900 to-brown-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gold-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gold-200">{stat.label}</div>
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
            <h2 className="text-4xl font-bold text-brown-900 mb-4">Our Mission & Vision</h2>
            <p className="text-brown-700 max-w-3xl mx-auto">
              We are committed to transforming spaces into luxurious sanctuaries through premium quality products, 
              expert craftsmanship, and personalized service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gold-600"
            >
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Our Mission</h3>
              <p className="text-brown-700">
                To provide exceptional interior solutions that blend luxury, comfort, and style, making every space 
                a reflection of elegance and sophistication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gold-600"
            >
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Our Vision</h3>
              <p className="text-brown-700">
                To be the most trusted name in luxury interiors, setting industry standards for quality, innovation, 
                and customer satisfaction across India.
              </p>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-brown-900 mb-4">Our Core Values</h2>
            <p className="text-brown-700">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brown-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="bg-gold-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-brown-900 mb-3">{value.title}</h3>
                <p className="text-brown-700">{value.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-xl mb-8">Experience the Royal Elegance difference today</p>
            <a
              href="/enquiry"
              className="bg-white text-gold-700 px-8 py-3 rounded-full font-bold hover:bg-brown-100 transition-all inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
