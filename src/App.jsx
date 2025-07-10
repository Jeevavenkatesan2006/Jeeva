import React, { useEffect, useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Static Components
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import ShopGrid from "./components/ShopGrid";
import ContactUs from "./components/ContactUs";
import FullHome from "./components/FullHome";
import AboutSection from "./components/About";
import ServiceSection from "./components/ServiceSection";
import Portfolio from "./components/Portfolio";
import PricingSection from "./components/PricingTable";

// Lazy Loaded Components
const ServiceDetail = lazy(() => import("./components/ServiceDetail"));

gsap.registerPlugin(ScrollTrigger);

// Preloader wrapper with route change animation
const RouteWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]);

  return loading ? <Preloader /> : children;
};

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white font-sans overflow-x-hidden">
        <Navbar />
        <CustomCursor />
        <Suspense fallback={<Preloader />}>
          <RouteWrapper>
            <Routes>
              {/* Full Home Page */}
              <Route path="/" element={<FullHome />} />

              {/* Static Sections */}
              <Route path="/about" element={<AboutSection />} />
              <Route path="/services" element={<ServiceSection />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<PricingSection />} />
              <Route path="/contact" element={<ContactUs />} />

              {/* ✅ Fixed Shop route */}
              <Route path="/shop" element={<ShopGrid />} />

              {/* Dynamic service detail route */}
              <Route path="/services/:id" element={<ServiceDetail />} />

              {/* 404 Page */}
              <Route
                path="*"
                element={
                  <div className="text-center py-20 text-red-500 text-2xl">
                    404 - Page Not Found
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
