"use client";

import React from 'react';

const stats = [
  {
    value: "200+",
    label: "Projects Delivered",
    // Building Icon SVG
    icon: (
      <svg className="w-9 h-9 text-[#b89565] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v8h4" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11h-4" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    ),
  },
  {
    value: "10M+",
    label: "Sq. Ft. Designed",
    // Architect Triangle Ruler Icon SVG
    icon: (
      <svg className="w-9 h-9 text-[#b89565] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 21.5 3 3v18.5Z" />
        <path d="M7 17.5v-3.5" />
        <path d="M10.5 17.5v-2" />
        <path d="M14 17.5v-3.5" />
        <path d="M17.5 17.5v-2" />
      </svg>
    ),
  },
  {
    value: "9+ Years",
    label: "of Experience",
    // Calendar with Checkmark Icon SVG
    icon: (
      <svg className="w-9 h-9 text-[#b89565] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="3" />
        <path d="M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: "End-to-End",
    label: "Design Solutions",
    // Draftsman Compass Divider Icon SVG
    icon: (
      <svg className="w-9 h-9 text-[#b89565] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <path d="m3 21 8.02-14.26" />
        <path d="m21 21-8.02-14.26" />
        <path d="M6 14h12" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section 
      id="why-choose-us" 
      className="relative w-full bg-white text-zinc-900 py-20 md:py-28 overflow-hidden font-sans border-t border-b border-zinc-200/80"
    >
      {/* 1. Architectural Blueprint Wireframe Sketches (Top-Right & Bottom-Left) */}
      <div className="absolute top-0 right-[-100px] w-[280px] sm:w-[380px] md:w-[440px] h-auto pointer-events-none select-none z-0 opacity-30">
        <img 
          src="/assets/why-choose-rt-bg.png" 
          alt="Architectural Framework Blueprint" 
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="absolute -bottom-10 sm:-bottom-16 -left-4 sm:-left-6 w-[280px] sm:w-[380px] md:w-[440px] h-auto pointer-events-none select-none z-0 opacity-30 rotate-6 origin-bottom-left">
        <img 
          src="/assets/why-choose-lb-bg.png" 
          alt="Architectural Wireframe Blueprint" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 2. Elegant Golden Wave Curvature Accent Overlays */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#b89565]/10 via-[#b89565]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#b89565]/10 via-[#b89565]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 text-center">
        
        {/* Top Tag: —— WHY CHOOSE US —— */}
        <div className="flex items-center justify-center gap-3.5 mb-4">
          <div className="w-12 sm:w-16 h-[1.5px] bg-[#b89565]" />
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.3em] text-[#b89565] uppercase">
            WHY CHOOSE US
          </span>
          <div className="w-12 sm:w-16 h-[1.5px] bg-[#b89565]" />
        </div>

        {/* Main Headline: Industry Excellence in Numbers */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#161c2d] leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Industry Excellence <span className="text-[#b89565] italic font-normal">in Numbers</span>
        </h2>

        {/* Underline Golden Divider bar */}
        <div className="w-16 h-[2px] bg-[#b89565] mx-auto mb-6" />

        {/* Descriptive Statement Paragraph (Clean & Unboxed) */}
        <div className="max-w-4xl mx-auto mb-16 px-4">
          <p className="text-sm sm:text-base md:text-[17px] text-zinc-700 leading-relaxed font-normal">
            At Arrow Structural Consultants, <span className="text-[#b89565] font-semibold">our mission</span> is to deliver exceptional structural engineering solutions,{' '}
            <span className="text-[#b89565] font-semibold">our vision</span> is to become a globally recognized leader through innovation and excellence, and{' '}
            <span className="text-[#b89565] font-semibold">our values</span> are built on integrity, precision, adaptability, and a strong commitment to client satisfaction.
          </p>
        </div>

        {/* Horizontal Divider Line above Stats */}
        <div className="w-full max-w-5xl h-[1px] bg-zinc-200/90 mx-auto mb-12" />

        {/* 4 Stats Columns in Seamless Border-Separated Architectural Row (Matching Reference) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200/90 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-center gap-4 px-4 sm:px-6 py-6 lg:py-2 transition-transform duration-300 hover:scale-[1.03] group ${
                idx % 2 !== 0 ? 'pl-4 sm:pl-8' : ''
              }`}
            >
              {/* Icon */}
              <div className="group-hover:scale-110 transition-transform duration-300 shrink-0">
                {stat.icon}
              </div>

              {/* Number & Label */}
              <div className="text-left leading-tight">
                <span 
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#b89565] block tracking-tight whitespace-nowrap"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs sm:text-[13px] md:text-sm font-semibold text-zinc-900 tracking-tight block mt-0.5 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
