import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Text from "./components/Text";
import CustomCursor from "./components/CustomCursor";
import ShopGrid from "./components/ShopGrid";
import ContactUs from "./components/ContactUs";

const About = lazy(() => import("./components/About"));
const ServiceSection = lazy(() => import("./components/ServiceSection"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const PricingTable = lazy(() => import("./components/PricingTable"));
const ServiceDetail = lazy(() => import("./components/ServiceDetail"));

const RouteWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // preload for 1 sec
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <Preloader /> : children;
};

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <Navbar />
        <CustomCursor />

        <Suspense fallback={<Preloader />}>
          <RouteWrapper>
            <Routes>
              <Route path="/" element={<Text />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServiceSection />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<PricingTable />} />
              <Route path="/shop" element={<ShopGrid />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route
                path="*"
                element={
                  <div className="text-center py-20 text-red-500">
                    Page not found
                  </div>
                }
              />
            </Routes>
          </RouteWrapper>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
