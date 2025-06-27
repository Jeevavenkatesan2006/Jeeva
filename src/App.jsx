import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Text from "./components/Text";


const About = lazy(() => import("./components/About"));
const ServiceSection = lazy(() => import("./components/ServiceSection"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const PricingTable = lazy(() => import("./components/PricingTable"));
const ServiceDetail = lazy(() => import("./components/ServiceDetail"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
      
        <Navbar />
        
       

        
        

        <Text />
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <Preloader />
              ) : (
                <Suspense fallback={<Preloader />}>
                  <>
                    <About />
                    <ServiceSection />
                    <Portfolio />
                    <PricingTable />
                  
                   
                  </>
                </Suspense>
              )
            }
          />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-red-500">Page not found</div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
