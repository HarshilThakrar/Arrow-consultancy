"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#faf8f5] text-zinc-900 pt-20 pb-10 overflow-hidden font-sans border-t-2 border-[#b89565]/40 selection:bg-[#b89565] selection:text-white">
      
      {/* 1. Subtle Architectural Blueprint Grid Watermark */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 2. Soft Ambient Radial Golden Light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(184,149,101,0.1)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(184,149,101,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 pb-14">
          
          {/* Column 1: Brand Info & Social Icons (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/logo/arrow-logo.png" 
                  alt="Arrow Consultancy Logo" 
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Description */}
            <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed max-w-sm font-normal">
              A trusted consulting partner in structural engineering, post-tensioning and construction solutions. We help build stronger, safer and future-ready structures across industries.
            </p>

            {/* Social Media Rounded Square Icons (White & Gold Luxury) */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/arrow-structural-consultants/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-[#b89565]/40 hover:border-[#b89565] bg-white hover:bg-[#b89565] text-[#a07c48] hover:text-white flex items-center justify-center transition-all duration-300 text-xs font-bold shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                in
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/arrow_structuralconsultants"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-[#b89565]/40 hover:border-[#b89565] bg-white hover:bg-[#b89565] text-[#a07c48] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Arrow-Structural-Consultants/61574598871349/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg border border-[#b89565]/40 hover:border-[#b89565] bg-white hover:bg-[#b89565] text-[#a07c48] hover:text-white flex items-center justify-center transition-all duration-300 text-sm font-bold shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                f
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 lg:pl-2">
            <div className="mb-6">
              <h4 
                className="text-sm font-bold text-zinc-950 tracking-wider uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Quick Links
              </h4>
              <div className="w-8 h-[2px] bg-[#b89565] mt-2" />
            </div>

            <ul className="space-y-2.5 text-xs sm:text-[13px] text-zinc-600 font-medium">
              {[
                { title: 'Home', href: '/' },
                { title: 'About Us', href: '/about' },
                { title: 'Services', href: '/services' },
                { title: 'Industries', href: '/services' },
                { title: 'Projects', href: '/projects' },
                { title: 'Careers', href: '/career' },
                { title: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href} 
                    className="inline-flex items-center gap-1.5 group hover:text-[#a07c48] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#b89565] transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols) */}
          <div className="lg:col-span-3 lg:pl-2">
            <div className="mb-6">
              <h4 
                className="text-sm font-bold text-zinc-950 tracking-wider uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Our Services
              </h4>
              <div className="w-8 h-[2px] bg-[#b89565] mt-2" />
            </div>

            <ul className="space-y-2.5 text-xs sm:text-[13px] text-zinc-600 font-medium">
              {[
                'Structural Consultancy',
                'Post-Tensioning Solutions',
                'Design & Analysis',
                'Value Engineering',
                'Construction Support',
                'Technical Advisory',
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center gap-1.5 group hover:text-[#a07c48] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#b89565] transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch (3 cols) */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h4 
                className="text-sm font-bold text-zinc-950 tracking-wider uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Get in Touch
              </h4>
              <div className="w-8 h-[2px] bg-[#b89565] mt-2" />
            </div>

            <div className="space-y-4 text-xs sm:text-[13px] text-zinc-700">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#b89565]/40 flex items-center justify-center text-[#a07c48] shrink-0 shadow-2xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href="tel:+919624803791" className="hover:text-[#a07c48] transition-colors font-medium text-zinc-800">
                  +91 96248 03791
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#b89565]/40 flex items-center justify-center text-[#a07c48] shrink-0 shadow-2xs">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:design@arrowasc.com" className="hover:text-[#a07c48] transition-colors font-medium text-zinc-800">
                  design@arrowasc.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#b89565]/40 flex items-center justify-center text-[#a07c48] shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed font-normal text-zinc-600 max-w-xs">
                  G-126, Jay Ganesh Samrajya, Spine Rd, near Pune - Nashik Highway, Sector No. 3, Bhosari, Pimpri-Chinchwad, Maharashtra 411039
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Sweeping Golden Ribbon Divider */}
        <div className="relative w-full py-4 pointer-events-none">
          <svg
            className="w-full h-8 overflow-visible"
            viewBox="0 0 1200 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 25 C300 38, 700 8, 1200 32"
              stroke="url(#goldGradientLineLight)"
              strokeWidth="1.5"
            />
            <path
              d="M0 25 C150 35, 350 40, 500 30 C750 15, 1000 28, 1200 32 C1000 24, 750 10, 500 25 C350 36, 150 30, 0 25 Z"
              fill="url(#goldGradientRibbonLight)"
              opacity="0.25"
            />
            <defs>
              <linearGradient id="goldGradientLineLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b89565" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#a07c48" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#b89565" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="goldGradientRibbonLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b89565" />
                <stop offset="30%" stopColor="#d4af37" />
                <stop offset="70%" stopColor="#b89565" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 4. Bottom Copyright, Created By & Legal Links */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Arrow Structural Consultancy. All Rights Reserved.
          </p>

          {/* Center: Created By Zeowl Infotech */}
          <p className="text-center text-zinc-500">
            Created by{" "}
            <a 
              href="https://zeowl.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#a07c48] hover:text-[#b89565] font-semibold transition-colors"
            >
              Zeowl Infotech
            </a>
          </p>

          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <Link href="/privacy-policy" className="hover:text-[#a07c48] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-300">|</span>
            <Link href="/terms-of-use" className="hover:text-[#a07c48] transition-colors">
              Terms of Use
            </Link>
            <span className="text-zinc-300">|</span>
            <Link href="/cookie-policy" className="hover:text-[#a07c48] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
