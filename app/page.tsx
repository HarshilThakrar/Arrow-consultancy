"use client";

import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#faf7f2] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white">
      <Navbar />
      <main className="relative">
        {/* Full-bleed Luxury Hero Section */}
        <section className="relative w-full h-screen">
          <Hero />
        </section>

        {/* About Us (Canva / Pinterest Editorial Section) */}
        <div className="relative z-10">
          <AboutUs />
        </div>
        
        {/* Why Choose Us (Stats & Values Cards) */}
        <div className="relative z-10">
          <WhyChooseUs />
        </div>

        {/* Featured Projects Slider */}
        <div className="relative z-10">
          <Projects />
        </div>

        {/* Clients & Trusted Collaborators Marquee */}
        <div className="relative z-10">
          <Clients />
        </div>

        {/* Endorsements & Testimonials */}
        <div className="relative z-10">
          <Testimonials />
        </div>

        {/* Conversion CTA Section */}
        <div className="relative z-10">
          <CTASection />
        </div>

        {/* Luxury Gold/Charcoal Footer */}
        <div className="relative z-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}
