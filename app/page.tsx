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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Premium Parallax / Curtain effect for Hero
    gsap.to('.hero-wrapper', {
      yPercent: 20,
      scale: 0.9,
      opacity: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: '.about-wrapper',
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
      }
    });

  }, { scope: container });

  return (
    <div ref={container} className="relative min-h-screen bg-black font-sans">
      <Navbar />
      <main>
        {/* Fixed Hero Section in the background */}
        <div className="hero-wrapper fixed inset-0 z-0 h-screen w-full">
          <Hero />
        </div>
        
        {/* Spacer to push AboutUs down below the Hero */}
        <div className="h-screen w-full pointer-events-none"></div>

        {/* About Us section that slides over the Hero */}
        <div className="about-wrapper relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
          <AboutUs />
        </div>
        
        {/* Why Choose Us */}
        <div className="relative z-10 bg-white overflow-hidden">
          <WhyChooseUs />
        </div>

        {/* Projects & Clients Section */}
        <div className="projects-wrapper relative z-10 bg-[#f4f2ee] overflow-hidden">
          <Projects />
          <Clients />
        </div>

        {/* Testimonials */}
        <div className="relative z-10 bg-white overflow-hidden">
          <Testimonials />
        </div>

        {/* CTA Section */}
        <div className="relative z-10 bg-zinc-950 overflow-hidden">
          <CTASection />
        </div>

        {/* Footer */}
        <div className="relative z-10 bg-black overflow-hidden">
          <Footer />
        </div>
      </main>
    </div>
  );
}
