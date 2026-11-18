"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black text-white pt-16 pb-10 border-t border-zinc-800 overflow-hidden font-sans">
      {/* Background Subtle Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-zinc-800">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 mb-5">
                <img 
                  src="/assets/logo/arrow-logo.png" 
                  alt="Arrow Structural Consultants" 
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
                Arrow Structural Consultants provides premier engineering solutions for high-rises, commercial developments, heavy industrial infrastructure, and specialized post-tensioning frameworks.
              </p>

              <blockquote className="text-xs font-semibold text-[#b89565] italic border-l-2 border-[#b89565] pl-3 py-1">
                &ldquo;We are professionals, not businessmen.&rdquo;
              </blockquote>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-8">
              {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-3.5 py-1.5 rounded-full border border-zinc-800 hover:border-[#b89565] text-zinc-400 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 
              className="text-xs font-bold tracking-[0.2em] text-[#b89565] uppercase mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] text-zinc-400 font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Our Projects</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 
              className="text-xs font-bold tracking-[0.2em] text-[#b89565] uppercase mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] text-zinc-400 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">RCC Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">Steel Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">Structural Auditing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Post Tensioning</li>
              <li className="hover:text-white transition-colors cursor-pointer">High Rise Buildings</li>
              <li className="hover:text-white transition-colors cursor-pointer">Earthquake Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">Proof Checking</li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3">
            <h4 
              className="text-xs font-bold tracking-[0.2em] text-[#b89565] uppercase mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Get In Touch
            </h4>
            
            <div className="space-y-4 text-xs sm:text-[13px] text-zinc-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#b89565] shrink-0 mt-0.5" />
                <span>402, Signature Corporate Hub, Gift City Road, Ahmedabad, Gujarat 382010</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#b89565] shrink-0" />
                <a href="tel:+919825000000" className="hover:text-white transition-colors">
                  +91 98250 00000
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#b89565] shrink-0" />
                <a href="mailto:contact@arrowasc.com" className="hover:text-white transition-colors">
                  contact@arrowasc.com
                </a>
              </div>
            </div>

            {/* Inquiry Direct Link */}
            <div className="mt-6">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#b89565] hover:text-[#d1ab77] tracking-wider uppercase transition-colors"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Arrow Structural Consultants. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#b89565] transition-colors cursor-pointer group"
          >
            <span className="uppercase tracking-widest text-[11px] font-semibold">Back to Top</span>
            <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-[#b89565] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-[#b89565] group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;