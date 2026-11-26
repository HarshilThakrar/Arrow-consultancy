"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Building,
  User,
  MessageSquare
} from "lucide-react";
import { postApi } from "../lib/api";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "High-Rise Residential",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project_type: formData.projectType,
      message: formData.message,
    };

    await postApi('/contact-inquiries', payload);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white">
      <Navbar />

      {/* 1. Header Banner - Golden Background Video with Only Title */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-[#b89565]/30">
        <BackgroundVideo
          videoSrc="/logo_reveal.mp4"
          posterImage="/assets/contact-us_bg.png"
          overlayOpacity="from-[#3a2d18]/90 via-[#221a0e]/85 to-[#161009]/90"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Contact <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Main Booking & Contact Section on White Background with contact-us_bg.png */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        {/* Full Section Background Image contact-us_bg.png */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url('/assets/contact-us_bg.png')` }}
        />
        {/* Soft White Overlay Layer (Reduced opacity so background image is clearly visible) */}
        <div className="absolute inset-0 bg-white/70 pointer-events-none backdrop-blur-[1px]" />

        {/* Subtle Watermark Blueprint Image */}
        <div className="absolute right-0 top-1/3 w-96 h-96 opacity-10 pointer-events-none select-none">
          <img src="/assets/CTA-bg-rg.png" alt="Blueprint" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Office Details & Value Points (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#a07c48] font-bold block mb-2">
                  // Direct Consultation
                </span>
                <h2 
                  className="text-3xl sm:text-4xl font-bold text-zinc-950 mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Schedule A Session With Our <span className="text-[#a07c48] italic font-normal">Principal Engineers</span>
                </h2>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Whether you are planning a high-rise tower, industrial facility, or requiring forensic structural audits, our senior engineers are here to advise you.
                </p>
              </div>

              {/* Office Details Cards in White & Gold */}
              <div className="space-y-4 pt-4">
                <div className="p-6 rounded-2xl bg-white border border-[#b89565]/30 shadow-md shadow-[#b89565]/5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#b89565]/15 flex items-center justify-center text-[#a07c48] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 mb-1">Corporate Office</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      G-126, Jay Ganesh Samrajya, Spine Rd, near Pune - Nashik Highway, Sector No. 3, Bhosari, Pimpri-Chinchwad, Maharashtra 411039
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#b89565]/30 shadow-md shadow-[#b89565]/5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#b89565]/15 flex items-center justify-center text-[#a07c48] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 mb-1">Phone Inquiries</h4>
                    <a href="tel:+919624803791" className="text-xs font-semibold text-zinc-900 hover:text-[#a07c48] transition-colors block">
                      +91 96248 03791
                    </a>
                    <span className="text-[11px] text-zinc-500 block mt-0.5">Mon - Sat: 9:30 AM – 7:00 PM IST</span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#b89565]/30 shadow-md shadow-[#b89565]/5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#b89565]/15 flex items-center justify-center text-[#a07c48] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 mb-1">Email Direct</h4>
                    <a href="mailto:contact@arrowasc.com" className="text-xs font-semibold text-zinc-900 hover:text-[#a07c48] transition-colors block">
                      contact@arrowasc.com
                    </a>
                    <span className="text-[11px] text-zinc-500 block mt-0.5">24-hour response turnaround</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border-2 border-[#b89565]/35 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-[#b89565]/10 relative overflow-hidden">
                
                {/* Section Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#b89565]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#a07c48]">
                      Consultation Request
                    </span>
                  </div>
                  <h2 
                    className="text-2xl sm:text-3xl font-bold text-zinc-950"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Send Us an <span className="text-[#a07c48] italic font-normal">Inquiry</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                    Fill out the form below with your project details and our lead structural team will get back to you promptly.
                  </p>
                </div>

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#b89565]/20 border border-[#b89565] flex items-center justify-center text-[#a07c48] mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 
                      className="text-2xl font-bold text-zinc-950"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      Inquiry Received!
                    </h3>
                    <p className="text-zinc-600 text-sm max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-zinc-900">{formData.name}</span>. Our lead structural consultant will review your project requirements and contact you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full border border-[#b89565] text-[#a07c48] hover:bg-[#b89565]/10 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Keyur Patel"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#faf8f5] text-zinc-900 text-sm focus:outline-none focus:border-[#b89565] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#faf8f5] text-zinc-900 text-sm focus:outline-none focus:border-[#b89565] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98250 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#faf8f5] text-zinc-900 text-sm focus:outline-none focus:border-[#b89565] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                          Project Classification
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#faf8f5] text-zinc-900 text-sm focus:outline-none focus:border-[#b89565] focus:bg-white transition-colors"
                        >
                          <option>High-Rise Residential</option>
                          <option>Commercial Tower & Hub</option>
                          <option>Pre-Engineered Steel (PEB)</option>
                          <option>Post-Tensioning (PT) Slab</option>
                          <option>Structural Health Audit & NDT</option>
                          <option>Peer Review & Value Eng.</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        Project Details / Inquiry Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about the site location, number of storeys, built-up area, or specific structural requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#faf8f5] text-zinc-900 text-sm focus:outline-none focus:border-[#b89565] focus:bg-white transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a07c48] hover:from-[#a07c48] hover:to-[#8d6935] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#b89565]/30 hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      <span>{isSubmitting ? "Sending..." : "Send Inquiry Message"}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

          {/* 3. Office Location Interactive Map Section */}
          <div className="mt-16 md:mt-20">
            <div className="bg-white border-2 border-[#b89565]/35 rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#b89565]/10 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#b89565]/20 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-[2px] bg-[#b89565]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#a07c48]">
                      Office Coordinates
                    </span>
                  </div>
                  <h3 
                    className="text-2xl sm:text-3xl font-bold text-zinc-950"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Find Our <span className="text-[#a07c48] italic font-normal">Registered Office</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-xl">
                    G-126, Jay Ganesh Samrajya, Spine Rd, near Pune - Nashik Highway, Bhosari, Pimpri-Chinchwad, Pune, Maharashtra 411039
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Jay+Ganesh+Samrajya+Spine+Road+Bhosari+Pune"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a07c48] hover:from-[#a07c48] hover:to-[#8d6935] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#b89565]/20 hover:scale-[1.02] shrink-0"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Responsive Embedded Google Map */}
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#b89565]/20 shadow-inner bg-zinc-100">
                <iframe
                  title="Arrow Structural Consultancy Office Location"
                  src="https://maps.google.com/maps?q=Jay+Ganesh+Samrajya,+Spine+Rd,+Bhosari,+Pimpri-Chinchwad,+Maharashtra+411039&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
