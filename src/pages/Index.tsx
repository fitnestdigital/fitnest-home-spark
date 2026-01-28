import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyFitNest from "@/components/WhyFitNest";
import WhatIncluded from "@/components/WhatIncluded";
import BatchTimings from "@/components/BatchTimings";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyFitNest />
      <WhatIncluded />
      <BatchTimings />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
