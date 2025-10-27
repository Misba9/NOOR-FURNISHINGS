import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const products = [
    {
      name: 'Curtains',
      items: ['Jacquard', 'Blackout', 'Plain', 'Linen', 'Sheer', 'Imported', 'Texture'],
    },
    {
      name: 'Carpets',
      items: ['Shaggy', 'PP', 'Turkish', 'Floor Mats', 'Runners'],
    },
    {
      name: 'Bedcovers',
      items: ['Double Bed', 'Fitted Bedcovers', 'Linen', 'Wedding Bed Sets', 'Luxury Bed Sets', 'Dohar', 'Blankets'],
    },
    {
      name: 'Blinds',
      items: ['Venetian', 'Roman', 'Wooden', 'PVC Chick', 'Roller', 'Zebra'],
    },
    {
      name: 'Upholstery',
      items: ['Sofa Fabrics', 'Cushion Fabrics'],
    },
    {
      name: 'Other Solutions',
      items: ['Window Treatment', 'Valance', 'Fittings'],
    },
  ];

  return (
    <div className="bg-brown-900 text-white border-b-2 border-gold-600">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex items-center justify-center gap-8 py-4">
          {products.map((category) => (
            <div
              key={category.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(category.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 font-medium hover:text-gold-400 transition-colors">
                {category.name}
                <ChevronDown size={16} className={`transition-transform ${activeMenu === category.name ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMenu === category.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-white text-brown-800 rounded-lg shadow-xl min-w-[200px] border-2 border-gold-400 overflow-hidden z-50"
                  >
                    {category.items.map((item) => (
                      <Link
                        key={item}
                        to={`/products/${category.name.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-6 py-3 hover:bg-gold-50 hover:text-gold-600 transition-colors border-b border-brown-100 last:border-b-0"
                      >
                        {item}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="md:hidden py-4">
          <select
            onChange={(e) => {
              if (e.target.value) {
                window.location.href = e.target.value;
              }
            }}
            className="w-full bg-brown-800 text-white px-4 py-2 rounded-lg border-2 border-gold-600"
          >
            <option value="">Select a Product Category</option>
            {products.map((category) => (
              <optgroup key={category.name} label={category.name}>
                {category.items.map((item) => (
                  <option
                    key={item}
                    value={`/products/${category.name.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductBar;
