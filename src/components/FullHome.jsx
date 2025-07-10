import React, { lazy, Suspense } from "react";
import Text from "./Text";
import ContactUs from "./ContactUs";
const About = lazy(() => import("./About"));
const ServiceSection = lazy(() => import("./ServiceSection"));
const Portfolio = lazy(() => import("./Portfolio"));
const PricingTable = lazy(() => import("./PricingTable"));
const ShopGrid = lazy(() => import ("./ShopGrid"));

const FullHome = () => {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <Text />
      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading Services...</div>}>
        <ServiceSection />
      </Suspense>
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<div>Loading Pricing...</div>}>
        <PricingTable />
      </Suspense>
      <Suspense fallback={<div>Loading ShopGrid...</div>}>
        <ShopGrid />
      </Suspense>
      <Suspense fallback={<div>Loading ContactUs...</div>}>
        <ContactUs />
      </Suspense>
    </main>
  );
};

export default FullHome;
