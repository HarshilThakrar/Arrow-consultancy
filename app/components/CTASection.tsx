"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section 
      id="contact" 
      className="relative w-full bg-white text-zinc-900 py-20 md:py-28 overflow-hidden font-sans border-t border-zinc-200/80"
    >
      {/* 1. Background Architectural Blueprint Images (Left & Right - Subtle Soft Opacity) */}
      {/* Left Blueprint Graphic (CTA-bg-lf.png) */}
      <div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-8 w-[380px] sm:w-[480px] md:w-[580px] h-auto pointer-events-none select-none z-0 opacity-15">
        <img 
          src="/assets/CTA-bg-lf.png" 
          alt="Architectural Blueprint Left" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right Blueprint Graphic (CTA-bg-rg.png) */}
      <div className="absolute top-0 right-0 sm:right-[-40px] md:right-[-60px] w-[360px] sm:w-[460px] md:w-[560px] h-auto pointer-events-none select-none z-0 opacity-15">
        <img 
          src="/assets/CTA-bg-rg.png" 
          alt="Architectural Blueprint Right" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Background Architectural Blueprint Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Seamless Open 2-Column Layout (No Outer Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Content & Controls (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Tag: LET'S BUILD TOGETHER —— */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#b89565] uppercase">
                LET&apos;S BUILD TOGETHER
              </span>
              <div className="w-12 sm:w-16 h-[2px] bg-[#b89565]" />
            </div>

            {/* Main Headline: Have a Project in Mind? */}
            <h2 
              className="text-4xl sm:text-5xl md:text-[56px] font-semibold tracking-tight text-zinc-950 leading-[1.12] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Have a <span className="text-[#b89565] italic font-normal">Project</span> in Mind?
            </h2>

            {/* Description */}
            <p className="text-zinc-600 text-sm sm:text-base md:text-[17px] leading-relaxed mb-8 font-normal max-w-xl">
              From concept to construction, Arrow Consultancy is here to turn your vision into a well-designed, functional, and lasting space.
            </p>

            {/* 3 Value Badges */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-10 pb-2">
              
              {/* Badge 1: Expert Consultation */}
              <div className="flex items-center gap-3">
                <div className="text-[#b89565] shrink-0">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                    <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <p className="text-xs sm:text-sm font-bold text-zinc-900">Expert</p>
                  <p className="text-xs sm:text-sm font-bold text-zinc-900">Consultation</p>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden sm:block w-[1px] h-8 bg-zinc-300" />

              {/* Badge 2: Tailored Designs */}
              <div className="flex items-center gap-3">
                <div className="text-[#b89565] shrink-0">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2 12.5" />
                    <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2 17.5" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <p className="text-xs sm:text-sm font-bold text-zinc-900">Tailored</p>
                  <p className="text-xs sm:text-sm font-bold text-zinc-900">Designs</p>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden sm:block w-[1px] h-8 bg-zinc-300" />

              {/* Badge 3: On-Time Execution */}
              <div className="flex items-center gap-3">
                <div className="text-[#b89565] shrink-0">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                    <circle cx="15.5" cy="15.5" r="3.5" />
                    <path d="M15.5 14v1.5l1 1" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <p className="text-xs sm:text-sm font-bold text-zinc-900">On-Time</p>
                  <p className="text-xs sm:text-sm font-bold text-zinc-900">Execution</p>
                </div>
              </div>

            </div>

            {/* Action Buttons matching reference */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a37e50] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md shadow-[#b89565]/25 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[#b89565] bg-white hover:bg-[#b89565]/5 text-zinc-900 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#b89565]" />
                <span>Schedule a Consultation</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Architectural Modern House Wireframe/Render Image (5 Columns) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-2xl group">
              <img 
                src="/assets/CTA-section.jpg" 
                alt="Modern Architectural Villa & Structural Wireframe" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;
