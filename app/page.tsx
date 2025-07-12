"use client";

import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Faq from "@/components/landing/faq";

const Index = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <main className="max-w-6xl mx-auto">
          <div className="px-4">
            <Features />
            <Faq />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
