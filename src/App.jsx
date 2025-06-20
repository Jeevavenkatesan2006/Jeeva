import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import About from "./components/About";
import ServiceSection from "./components/ServiceSection";
import ServiceDetail from "./components/ServiceDetail";
import Text from "./components/Text";
import Portfolio from "./components/Portfolio";
import PricingTable from "./components/PricingTable";



const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Preloader stays for 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <Navbar />
        < Text/>
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <Preloader />
              ) : (
                <>
                  <About />
                  <ServiceSection />
                  <Portfolio/>
                  <PricingTable/>
                 
                  
                 
                 
                </>
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
