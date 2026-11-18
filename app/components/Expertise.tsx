"use client";

import React from 'react';

const services = [
  {
    title: "RCC STRUCTURES",
    desc: "Design and analysis of reinforced concrete structures for various applications.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 22V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
        <path d="M14 2v4M10 2v4M2 22h20M12 11h.01M8 11h.01M16 11h.01M12 15h.01M8 15h.01M16 15h.01" />
      </svg>
    ),
    image: "/assets/hero/slider_4.jpg"
  },
  {
    title: "STEEL STRUCTURES",
    desc: "Efficient and economical steel structural solutions for industrial, commercial and institutional projects.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20h16M4 4h16M7 4v16M17 4v16M12 4v16" />
      </svg>
    ),
    image: "/assets/hero/slider_5.jpg"
  },
  {
    title: "STRUCTURAL ANALYSIS",
    desc: "Advanced analysis using industry-leading tools for accurate and reliable designs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18M18 9l-5 5-4-4-5 5" />
      </svg>
    ),
    image: "/assets/hero/slider_3.jpg"
  },
  {
    title: "SEISMIC DESIGN",
    desc: "Earthquake-resistant design solutions ensuring safety and resilience in critical structures.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M7 12h2l1-3 2 6 1-3h2" />
      </svg>
    ),
    image: "/assets/hero/bg-image.png"
  },
  {
    title: "REHABILITATION & RETROFITTING",
    desc: "Assessment and strengthening of existing structures for enhanced performance and longevity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    ),
    image: "/assets/hero/slider_2.jpg"
  },
  {
    title: "STRUCTURAL AUDIT",
    desc: "Detailed structural evaluations to ensure compliance, safety and long-term value.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M12.5 12.5L16 16" />
      </svg>
    ),
    image: "/assets/hero/slider_4.jpg"
  }
];

const Expertise = () => {

  return (
    <section 
      className="relative w-full bg-white pt-20 pb-16 font-sans overflow-hidden flex flex-col"
    >
      {/* Background Image Container */}
      <div className="absolute top-0 right-0 w-full lg:w-[85%] h-[800px] pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-[center_right] bg-no-repeat"
          style={{ backgroundImage: `url('/assets/our_expertise/right_image.png')` }}
        />
        {/* Gradient mask on the left and bottom to blend seamlessly into white */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-12 flex flex-col">
        
        {/* Top Section */}
        <div className="flex flex-col relative z-10">
          {/* Left Text */}
          <div className="lg:w-[60%] flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#b89565] text-xs font-semibold tracking-[0.2em] uppercase">Our Expertise</span>
              <div className="w-12 h-[1px] bg-[#b89565]"></div>
            </div>

            <h2 className="font-semibold text-zinc-900 mb-8" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(48px, 4.5vw, 76px)", lineHeight: "0.98", letterSpacing: "-0.03em" }}>
              STRUCTURAL <br />
              ENGINEERING <br />
              FOR A <span className="text-[#b89565]">STRONGER</span> <br />
              <span className="text-[#b89565]">TOMORROW</span>
            </h2>

            <p className="text-zinc-500 text-base md:text-lg leading-[1.7] max-w-[500px] mb-12">
              We provide end-to-end structural engineering consultancy with a focus on safety, functionality and long-term value.
            </p>

            <button className="relative overflow-hidden bg-gradient-to-r from-[#b89565] to-[#8c6f4a] text-white px-8 py-4 rounded-sm text-xs font-bold tracking-widest group shadow-lg shadow-[#b89565]/20 hover:shadow-[#b89565]/40 transition-all w-fit">
              <div className="relative z-10 flex items-center justify-center gap-3">
                EXPLORE OUR EXPERTISE
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            </button>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="relative z-20 mt-16 lg:mt-20">
          <div className="flex overflow-x-auto xl:grid xl:grid-cols-6 gap-4 pb-4 snap-x snap-mandatory hide-scrollbar">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative group p-6 min-w-[300px] xl:min-w-0 h-[280px] flex flex-col bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] snap-start shrink-0"
              >
                
                {/* Background Image for all cards */}
                <div 
                  className="absolute right-0 bottom-0 w-full h-[65%] z-[1] pointer-events-none bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('${index === 0 ? '/assets/our_expertise/RCC.png' : service.image}')`,
                    clipPath: 'polygon(30% 100%, 100% 25%, 100% 100%)'
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-[#b89565] mb-4 group-hover:scale-105 transition-transform duration-300 origin-left">
                    {service.icon}
                  </div>
                  <h3 className="text-zinc-900 font-bold text-[15px] leading-tight tracking-wide mb-3 whitespace-pre-line" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {service.title.replace(' ', '\n')}
                  </h3>
                  <p className="text-zinc-500 text-[13px] leading-[1.6] mb-auto pr-8">
                    {service.desc}
                  </p>
                  <div className="text-[#b89565] mt-6 group-hover:translate-x-1 transition-transform duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;
