"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Building2, 
  Layers, 
  ClipboardCheck, 
  Cable, 
  Building, 
  Activity, 
  Factory, 
  ShieldCheck, 
  FileCheck2 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    id: 1,
    title: "RCC Design",
    desc: "Reinforced cement concrete structural systems engineered for durability and efficiency.",
    imageIcon: "/assets/icons/rcc.png",
  },
  {
    id: 2,
    title: "Steel Design",
    desc: "High-performance structural steel frameworks with optimal weight-to-strength ratios.",
    imageIcon: "/assets/icons/steel.png",
  },
  {
    id: 3,
    title: "Structural Auditing",
    desc: "Comprehensive health assessments, condition surveys, and safety evaluations.",
    imageIcon: "/assets/icons/structural audit.png",
  },
  {
    id: 4,
    title: "Post tensioning Structures",
    desc: "Advanced pre-stressing and post-tensioning for long-span and deflection control.",
    imageIcon: "/assets/icons/post tensioning.png",
  },
  {
    id: 5,
    title: "High rise buildings",
    desc: "Wind and seismic design solutions for landmark towers and multi-story structures.",
    imageIcon: "/assets/icons/High rise buildings.png",
  },
  {
    id: 6,
    title: "Earthquake resisting Structures",
    desc: "Ductile detailing and dynamic analysis ensuring maximum seismic resilience.",
    icon: Activity,
  },
  {
    id: 7,
    title: "INDUSTRIAL PROJECT DESIGN",
    desc: "Heavy industrial sheds, PEB framing, crane gantries, and plant foundations.",
    icon: Factory,
  },
  {
    id: 8,
    title: "STRUCTURAL DETAIL OF EARTH RETAINING STRUCTURES",
    desc: "Basement diaphragm walls, cantilever retaining walls, and shoring systems.",
    icon: ShieldCheck,
  },
  {
    id: 9,
    title: "PROOF CHECKING",
    desc: "Rigorous third-party design validation, peer reviews, and code compliance checks.",
    icon: FileCheck2,
  },
];

const AboutUs = () => {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const servicesColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header & left content reveal
    gsap.from('.about-reveal', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="relative w-full bg-white text-zinc-900 py-16 md:py-20 overflow-hidden"
    >
      {/* Background Architectural Blueprint Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

      {/* Subtle Top & Bottom Architectural Column Lines */}
      <div className="absolute top-0 left-1/3 bottom-0 w-[1px] bg-[#b89565]/10 hidden lg:block" />
      <div className="absolute top-0 left-2/3 bottom-0 w-[1px] bg-[#b89565]/10 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Header Label */}
        <div className="about-reveal text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.35em] text-zinc-800 uppercase">
            ABOUT <span className="font-semibold text-[#b89565]">ARROW STRUCTURAL CONSULTANTS</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#b89565] mx-auto mt-3.5" />
        </div>

        {/* Main Content Grid: Left (History & Design Principle) + Right (Scope of Services - 9 Services) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Watermark + General History + Design Principle */}
          <div ref={leftColRef} className="lg:col-span-5 relative flex flex-col justify-start">
            
            {/* Architectural Large Watermark "About" */}
            <div 
              className="absolute -top-10 -left-6 sm:-left-8 text-[90px] sm:text-[120px] font-extrabold text-zinc-100/90 pointer-events-none select-none -z-10 leading-none tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              About
            </div>

            {/* General History Section */}
            <div className="about-reveal mb-10">
              <h3 
                className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                General History
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#b89565] tracking-wider uppercase mb-3">
                ARROW STRUCTURAL CONSULTANTS was established with a clear vision.
              </p>
              <p className="text-zinc-600 text-sm sm:text-[15px] leading-relaxed mb-3">
                We have specialization in structural and earth retaining design of residential, commercial, industrial, high-rise and public infrastructure projects.
              </p>
              <p className="text-zinc-600 text-sm sm:text-[15px] leading-relaxed">
                Over years of engineering practice, our team delivers safe, innovative, and value-optimized structural frameworks.
              </p>
            </div>

            {/* Design Principle Section */}
            <div className="about-reveal border-t border-[#b89565]/20 pt-8">
              <h3 
                className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Design Principle
              </h3>
              
              <blockquote className="text-base sm:text-lg font-semibold text-zinc-900 italic mb-3 pl-4 border-l-2 border-[#b89565]">
                &ldquo;We are professionals, not businessmen.&rdquo;
              </blockquote>

              <p className="text-zinc-600 text-sm sm:text-[15px] leading-relaxed mb-3">
                We believe that any building design by an Architect has its own importance, functionality, and aesthetic uniqueness.
              </p>

              <p className="text-zinc-600 text-sm sm:text-[15px] leading-relaxed">
                We respect the creative effort and suggest the structural system in such a way that it will not disturb the soul of the building.
              </p>
            </div>

          </div>

          {/* Right Column: Scope of Services (9 Clean Grid Items matching Reference Image) */}
          <div ref={servicesColRef} className="lg:col-span-7">
            
            {/* Title */}
            <div className="about-reveal flex items-center justify-between mb-6 pb-3 border-b border-zinc-200">
              <div>
                <h3 
                  className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Scope of services
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-zinc-400">
                01 &mdash; 09
              </span>
            </div>

            {/* 9 Services in a Compact 2-Column Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {servicesList.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={service.id}
                    className="service-card group flex items-start gap-3.5 p-3 rounded-xl border border-zinc-100 hover:border-[#b89565]/30 hover:bg-[#b89565]/5 transition-all duration-300 cursor-default shadow-2xs"
                  >
                    {/* Architectural Icon Container */}
                    <div className="w-11 h-11 rounded-lg bg-[#fbf9f6] border border-[#b89565]/30 text-[#b89565] flex items-center justify-center shrink-0 group-hover:bg-[#b89565] group-hover:text-white transition-all duration-300 p-2">
                      {service.imageIcon ? (
                        <img 
                          src={service.imageIcon} 
                          alt={service.title} 
                          className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300" 
                        />
                      ) : IconComponent ? (
                        <IconComponent className="w-5 h-5 stroke-[1.7]" />
                      ) : null}
                    </div>

                    {/* Service Info */}
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono font-semibold text-[#b89565] tracking-widest block">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h4 
                        className="text-[13px] sm:text-sm font-bold text-zinc-900 tracking-wide uppercase leading-snug group-hover:text-[#b89565] transition-colors duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {service.title}
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;