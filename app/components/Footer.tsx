"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#181410] text-white pt-20 pb-12 border-t border-[#b89565]/30 overflow-hidden font-sans selection:bg-[#b89565] selection:text-white">
      {/* Background Blueprint Grid Lines with Golden Tint */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient Top Golden Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#b89565]/20 to-transparent blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/assets/logo/arrow-logo.png" 
                  alt="Arrow Structural Consultants" 
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed max-w-md mb-6 font-light">
                Arrow Structural Consultants provides premier engineering solutions for high-rises, commercial landmarks, heavy industrial infrastructure, and specialized post-tensioning frameworks.
              </p>

              {/* Gold Quote Badge */}
              <blockquote className="text-xs font-semibold text-[#e5c58a] italic border-l-2 border-[#b89565] pl-3 py-1.5 bg-white/5 rounded-r-lg max-w-sm">
                &ldquo;We are professionals, not businessmen.&rdquo;
              </blockquote>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 mt-8">
              {['LinkedIn', 'Instagram', 'Twitter', 'Facebook'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-4 py-1.5 rounded-full border border-white/15 hover:border-[#b89565] bg-white/5 hover:bg-[#b89565] text-zinc-300 hover:text-black text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 
              className="text-xs font-bold tracking-[0.25em] text-[#b89565] uppercase mb-6 flex items-center gap-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>Navigation</span>
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px] text-zinc-300 font-light">
              <li>
                <Link href="/" className="hover:text-[#e5c58a] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#e5c58a] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#e5c58a] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#e5c58a] transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-[#e5c58a] transition-colors">Clients</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e5c58a] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Disciplines (2 cols) */}
          <div className="lg:col-span-2">
            <h4 
              className="text-xs font-bold tracking-[0.25em] text-[#b89565] uppercase mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Disciplines
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px] text-zinc-300 font-light">
              <li className="hover:text-[#e5c58a] transition-colors cursor-pointer">RCC High-Rise</li>
              <li className="hover:text-[#e5c58a] transition-colors cursor-pointer">Structural Steel</li>
              <li className="hover:text-[#e5c58a] transition-colors cursor-pointer">Post-Tensioning</li>
              <li className="hover:text-[#e5c58a] transition-colors cursor-pointer">Forensic Audit</li>
              <li className="hover:text-[#e5c58a] transition-colors cursor-pointer">Earthquake Safety</li>
              <li className="hover:text-[#e5c58a] transition-colors cursor-pointer">Peer Review Stamp</li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3">
            <h4 
              className="text-xs font-bold tracking-[0.25em] text-[#b89565] uppercase mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact Office
            </h4>
            
            <div className="space-y-4 text-xs sm:text-[13px] text-zinc-300 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#b89565] shrink-0 mt-1" />
                <span className="leading-relaxed">402, Signature Corporate Hub, Gift City Road, Ahmedabad, Gujarat 382010</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#b89565] shrink-0" />
                <a href="tel:+919825000000" className="hover:text-[#e5c58a] transition-colors font-medium">
                  +91 98250 00000
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#b89565] shrink-0" />
                <a href="mailto:contact@arrowasc.com" className="hover:text-[#e5c58a] transition-colors font-medium">
                  contact@arrowasc.com
                </a>
              </div>
            </div>

            {/* Book Slot Card */}
            <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-[#b89565]/30">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e5c58a] block mb-1">
                ONLINE CONSULTATION
              </span>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#e5c58a] uppercase tracking-wider transition-colors"
              >
                <span>Book A Slot With Principal</span>
                <ArrowUpRight className="w-4 h-4 text-[#b89565]" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} Arrow Structural Consultants. Designed for Structural Excellence.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2.5 text-zinc-300 hover:text-[#b89565] transition-colors cursor-pointer group"
          >
            <span className="uppercase tracking-widest text-[11px] font-semibold">Back to Top</span>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-[#b89565]/40 group-hover:bg-[#b89565] group-hover:text-black flex items-center justify-center transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
