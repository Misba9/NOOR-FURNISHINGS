import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Bed, Eye, Square, Palette, RollerCoaster, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const products = [
    {
      name: 'Curtains',
      icon: <Layers className="w-4 h-4" />,
      items: ['Jacquard', 'Blackout', 'Plain', 'Linen', 'Sheer', 'Imported', 'Texture'],
    },
    {
      name: 'Carpets',
      icon: <Square className="w-4 h-4" />,
      items: ['Shaggy', 'PP', 'Turkish', 'Floor Mats', 'Runners'],
    },
    {
      name: 'Bedcovers',
      icon: <Bed className="w-4 h-4" />,
      items: ['Double Bed', 'Fitted Bedcovers', 'Linen', 'Wedding Bed Sets', 'Luxury Bed Sets', 'Dohar', 'Blankets'],
    },
    {
      name: 'Blinds',
      icon: <Eye className="w-4 h-4" />,
      items: ['Venetian', 'Roman', 'Wooden', 'PVC Chick', 'Roller', 'Zebra'],
    },
    {
      name: 'Upholstery',
      icon: <Palette className="w-4 h-4" />,
      items: ['Sofa Fabrics', 'Cushion Fabrics'],
    },
    {
      name: 'Other Solutions',
      icon: <RollerCoaster className="w-4 h-4" />,
      items: ['Window Treatment', 'Valance', 'Fittings'],
    },
  ];

  // Helper function to generate correct paths
  const generatePath = (categoryName, itemName) => {
    // Special case for "Other Solutions" category
    if (categoryName === 'Other Solutions') {
      const formattedItemName = itemName.toLowerCase().replace(/\s+/g, '-');
      return `/subcategories/othersolutions/${formattedItemName}`;
    }
    
    // For all other categories
    const formattedCategoryName = categoryName.toLowerCase().replace(/\s+/g, '-');
    const formattedItemName = itemName.toLowerCase().replace(/\s+/g, '-');
    return `/subcategories/${formattedCategoryName}/${formattedItemName}`;
  };

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
              <button className="flex items-center gap-2 font-medium hover:text-gold-400 transition-colors group">
                {category.icon}
                <span className="group-hover:scale-105 transition-transform">{category.name}</span>
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
                    {category.items.map((item, index) => (
                      <Link
                        key={item}
                        to={generatePath(category.name, item)}
                        className="block px-6 py-3 hover:bg-gold-50 hover:text-gold-600 transition-colors border-b border-brown-100 last:border-b-0 flex items-center gap-2 group/item"
                      >
                        <span className="w-2 h-2 bg-gold-600 rounded-full group-hover/item:scale-125 transition-transform"></span>
                        <span className="group-hover/item:translate-x-1 transition-transform">{item}</span>
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
            className="w-full bg-brown-800 text-white px-4 py-2 rounded-lg border-2 border-gold-600 focus:border-gold-400 transition-colors"
          >
            <option value="">Select a Product Category</option>
            {products.map((category) => (
              <optgroup key={category.name} label={category.name}>
                {category.items.map((item) => (
                  <option
                    key={item}
                    value={generatePath(category.name, item)}
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