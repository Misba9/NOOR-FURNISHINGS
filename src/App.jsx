import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import Enquiry from './pages/Enquiry';
import ProductPage from './pages/ProductPage';
import Products from './pages/Products';
// Import category pages
import Curtains from './pages/categories/Curtains';
import Carpets from './pages/categories/Carpets';
import Bedcovers from './pages/categories/Bedcovers';
import Blinds from './pages/categories/Blinds';
import Upholstery from './pages/categories/Upholstery';
import OtherSolutions from './pages/categories/OtherSolutions';

// Import subcategory pages for Curtains
import Jacquard from './pages/subcategories/curtains/Jacquard';
import Blackout from './pages/subcategories/curtains/Blackout';
import Plain from './pages/subcategories/curtains/Plain';
import LinenCurtains from './pages/subcategories/curtains/Linen';
import Sheer from './pages/subcategories/curtains/Sheer';
import Imported from './pages/subcategories/curtains/Imported';
import Texture from './pages/subcategories/curtains/Texture';

// Import subcategory pages for Carpets
import Shaggy from './pages/subcategories/carpets/Shaggy';
import PP from './pages/subcategories/carpets/PP';
import Turkish from './pages/subcategories/carpets/Turkish';
import FloorMats from './pages/subcategories/carpets/FloorMats';
import Runners from './pages/subcategories/carpets/Runners';

// Import subcategory pages for Bedcovers
import DoubleBed from './pages/subcategories/bedcovers/DoubleBed';
import FittedBedcovers from './pages/subcategories/bedcovers/FittedBedcovers';
import LinenBedcovers from './pages/subcategories/bedcovers/Linen';
import WeddingBedSets from './pages/subcategories/bedcovers/WeddingBedSets';
import LuxuryBedSets from './pages/subcategories/bedcovers/LuxuryBedSets';
import Dohar from './pages/subcategories/bedcovers/Dohar';
import Blankets from './pages/subcategories/bedcovers/Blankets';

// Import subcategory pages for Blinds
import VenetianBlinds from './pages/subcategories/blinds/VenetianBlinds';
import RomanBlinds from './pages/subcategories/blinds/RomanBlinds';
import WoodenBlinds from './pages/subcategories/blinds/WoodenBlinds';
import PVCChickBlinds from './pages/subcategories/blinds/PVCChickBlinds';
import RollerBlinds from './pages/subcategories/blinds/RollerBlinds';
import ZebraBlinds from './pages/subcategories/blinds/ZebraBlinds';

// Import subcategory pages for Upholstery
import SofaFabrics from './pages/subcategories/upholstery/SofaFabrics';
import CushionFabrics from './pages/subcategories/upholstery/CushionFabrics';

// Import subcategory pages for Other Solutions
import WindowTreatment from './pages/subcategories/othersolutions/WindowTreatment';
import Valance from './pages/subcategories/othersolutions/Valance';
import Fittings from './pages/subcategories/othersolutions/Fittings';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="enquiry" element={<Enquiry />} />
          {/* Products routes */}
          <Route path="products" element={<Products />} />
          <Route path="curtains" element={<Curtains />} />
          <Route path="carpets" element={<Carpets />} />
          <Route path="bedcovers" element={<Bedcovers />} />
          <Route path="blinds" element={<Blinds />} />
          <Route path="upholstery" element={<Upholstery />} />
          <Route path="other-solutions" element={<OtherSolutions />} />
          
          {/* Subcategory routes for Curtains */}
          <Route path="subcategories/curtains/jacquard" element={<Jacquard />} />
          <Route path="subcategories/curtains/blackout" element={<Blackout />} />
          <Route path="subcategories/curtains/plain" element={<Plain />} />
          <Route path="subcategories/curtains/linen" element={<LinenCurtains />} />
          <Route path="subcategories/curtains/sheer" element={<Sheer />} />
          <Route path="subcategories/curtains/imported" element={<Imported />} />
          <Route path="subcategories/curtains/texture" element={<Texture />} />
          
          {/* Subcategory routes for Carpets */}
          <Route path="subcategories/carpets/shaggy" element={<Shaggy />} />
          <Route path="subcategories/carpets/pp" element={<PP />} />
          <Route path="subcategories/carpets/turkish" element={<Turkish />} />
          <Route path="subcategories/carpets/floor-mats" element={<FloorMats />} />
          <Route path="subcategories/carpets/runners" element={<Runners />} />
          
          {/* Subcategory routes for Bedcovers */}
          <Route path="subcategories/bedcovers/double-bed" element={<DoubleBed />} />
          <Route path="subcategories/bedcovers/fitted-bedcovers" element={<FittedBedcovers />} />
          <Route path="subcategories/bedcovers/linen" element={<LinenBedcovers />} />
          <Route path="subcategories/bedcovers/wedding-bed-sets" element={<WeddingBedSets />} />
          <Route path="subcategories/bedcovers/luxury-bed-sets" element={<LuxuryBedSets />} />
          <Route path="subcategories/bedcovers/dohar" element={<Dohar />} />
          <Route path="subcategories/bedcovers/blankets" element={<Blankets />} />
          
          {/* Subcategory routes for Blinds */}
          <Route path="subcategories/blinds/venetian" element={<VenetianBlinds />} />
          <Route path="subcategories/blinds/roman" element={<RomanBlinds />} />
          <Route path="subcategories/blinds/wooden" element={<WoodenBlinds />} />
          <Route path="subcategories/blinds/pvc-chick" element={<PVCChickBlinds />} />
          <Route path="subcategories/blinds/roller" element={<RollerBlinds />} />
          <Route path="subcategories/blinds/zebra" element={<ZebraBlinds />} />
          
          {/* Subcategory routes for Upholstery */}
          <Route path="subcategories/upholstery/sofa-fabrics" element={<SofaFabrics />} />
          <Route path="subcategories/upholstery/cushion-fabrics" element={<CushionFabrics />} />
          
          {/* Subcategory routes for Other Solutions */}
          <Route path="subcategories/othersolutions/window-treatment" element={<WindowTreatment />} />
          <Route path="subcategories/othersolutions/valance" element={<Valance />} />
          <Route path="subcategories/othersolutions/fittings" element={<Fittings />} />
          
          {/* Existing product detail route */}
          <Route path="products/:category/:subcategory" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;