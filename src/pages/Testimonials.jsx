import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Jubilee Hills, Hyderabad',
      rating: 5,
      image: '/Jacguard-Curtain.jpg',
      text: 'Absolutely stunning curtains! The quality is exceptional and the installation was seamless. The team was professional, courteous, and completed everything on time. I highly recommend Royal Elegance for anyone looking for premium interior solutions.',
      product: 'Jacquard Curtains',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Banjara Hills, Hyderabad',
      rating: 5,
      image: '/Shaggy-Carpet.jpg',
      text: 'The team helped us choose the perfect carpet for our living room. Their expertise and attention to detail is unmatched. The carpet quality is superb and has transformed our entire space. Professional service from start to finish!',
      product: 'Shaggy Carpet',
    },
    {
      name: 'Anita Reddy',
      location: 'Gachibowli, Hyderabad',
      rating: 5,
      image: '/Linen-Curtain.jpg',
      text: 'Beautiful bedcovers that transformed our bedroom. The luxury fabric feels amazing and the craftsmanship is top-notch. Worth every penny! The entire experience was smooth and the team was very accommodating to our needs.',
      product: 'Luxury Bed Sets',
    },
    {
      name: 'Vikram Patel',
      location: 'Madhapur, Hyderabad',
      rating: 5,
      image: '/Eyelet-Curtains.jpg',
      text: 'We got Roman blinds installed in our office and the results are fantastic. The quality of materials used is excellent and they function perfectly. Royal Elegance delivered exactly what we wanted within our budget and timeline.',
      product: 'Roman Blinds',
    },
    {
      name: 'Sneha Iyer',
      location: 'Kondapur, Hyderabad',
      rating: 5,
      image: '/Blackout-Curtain.jpg',
      text: 'Outstanding service and premium quality products! I ordered custom blackout curtains and the entire process was hassle-free. The curtains block light perfectly and look absolutely elegant. Highly satisfied with my purchase!',
      product: 'Blackout Curtains',
    },
    {
      name: 'Arjun Mehta',
      location: 'Hitech City, Hyderabad',
      rating: 5,
      image: '/Velvet-Curtain.jpg',
      text: 'The sofa fabrics we selected are simply beautiful. The texture and color are exactly what we wanted. The team provided excellent guidance and the installation was perfect. Truly a premium experience from a premium brand.',
      product: 'Sofa Upholstery',
    },
    {
      name: 'Lakshmi Naidu',
      location: 'Kukatpally, Hyderabad',
      rating: 5,
      image: '/Linen-Curtain.jpg',
      text: 'I am extremely happy with the linen curtains I purchased. The quality is superb and they add such elegance to my home. The customer service was excellent - they helped me choose the right style and color. Definitely recommend!',
      product: 'Linen Curtains',
    },
    {
      name: 'Karthik Rao',
      location: 'Begumpet, Hyderabad',
      rating: 5,
      image: '/Jacguard-Curtain.jpg',
      text: 'Best decision we made for our new home! Got curtains, carpets, and bedcovers - everything is of premium quality. The team is very professional and the after-sales service is commendable. Worth the investment!',
      product: 'Complete Home Makeover',
    },
    {
      name: 'Divya Krishnan',
      location: 'Miyapur, Hyderabad',
      rating: 5,
      image: '/Sheer-Elegance-Curtain.jpg',
      text: 'The zebra blinds in my bedroom are perfect! They provide excellent light control and privacy. The installation was quick and clean. Royal Elegance has earned a loyal customer. Will definitely return for future projects!',
      product: 'Zebra Blinds',
    },
  ];

  return (
    <div>
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/Jacguard-Curtain.jpg"
          alt="Testimonials"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Client Testimonials</h1>
            <p className="text-xl text-gold-200">Hear what our customers have to say</p>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">Trusted by Hundreds of Happy Customers</h2>
            <p className="text-brown-700 max-w-2xl mx-auto">
              Our commitment to quality and customer satisfaction has made us the preferred choice for luxury interiors in Hyderabad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative"
              >
                <Quote className="absolute top-4 right-4 text-gold-200" size={40} />
                
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold-500"
                  />
                  <div>
                    <h3 className="font-bold text-brown-900">{testimonial.name}</h3>
                    <p className="text-sm text-brown-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="text-brown-700 mb-4 italic">"{testimonial.text}"</p>

                <div className="pt-4 border-t border-brown-100">
                  <span className="text-sm font-medium text-gold-600">{testimonial.product}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-gold-600 to-gold-700 text-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Royal Elegance?</h3>
            <p className="mb-6 text-lg">Join hundreds of satisfied customers and transform your space today</p>
            <a
              href="/enquiry"
              className="bg-white text-gold-700 px-8 py-3 rounded-full font-bold hover:bg-brown-100 transition-all inline-block"
            >
              Get Started
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
            <h2 className="text-3xl font-bold text-brown-900 mb-4">Our Premium Collections</h2>
            <p className="text-brown-700 max-w-3xl mx-auto">
              Discover the quality that our customers love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brown-50 rounded-lg overflow-hidden shadow-md"
            >
              <img src="/Jacguard-Curtain.jpg" alt="Curtains Collection" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-brown-900">Curtains</h3>
                <p className="text-sm text-brown-700">Premium fabrics</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brown-50 rounded-lg overflow-hidden shadow-md"
            >
              <img src="/Shaggy-Carpet.jpg" alt="Carpets Collection" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-brown-900">Carpets</h3>
                <p className="text-sm text-brown-700">Luxury comfort</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brown-50 rounded-lg overflow-hidden shadow-md"
            >
              <img src="/Linen-Curtain.jpg" alt="Bedcovers Collection" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-brown-900">Bedcovers</h3>
                <p className="text-sm text-brown-700">Elegant bedding</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-brown-50 rounded-lg overflow-hidden shadow-md"
            >
              <img src="/Eyelet-Curtains.jpg" alt="Blinds Collection" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-brown-900">Blinds</h3>
                <p className="text-sm text-brown-700">Modern solutions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;