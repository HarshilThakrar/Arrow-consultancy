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

export default function ContactPage() {
  const [activeMode, setActiveMode] = useState<"book" | "inquiry">("book");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "High-Rise Residential",
    preferredDate: "",
    preferredTime: "11:00 AM",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white">
      <Navbar />

      {/* 1. Header Banner - Golden Background Video with Only Title */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-[#b89565]/30">
        <BackgroundVideo
          videoSrc="/logo_reveal.mp4"
          posterImage="/assets/hero/slider_2.jpg"
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

      {/* 2. Main Booking & Contact Section (Golden and White Theme) */}
      <section className="py-20 md:py-28 relative bg-[#faf8f5]">
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
                      402, Signature Corporate Hub, Gift City Road, Ahmedabad, Gujarat 382010
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#b89565]/30 shadow-md shadow-[#b89565]/5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#b89565]/15 flex items-center justify-center text-[#a07c48] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 mb-1">Phone Inquiries</h4>
                    <a href="tel:+919825000000" className="text-xs font-semibold text-zinc-900 hover:text-[#a07c48] transition-colors block">
                      +91 98250 00000
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

            {/* Right Column: Interactive Booking / Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border-2 border-[#b89565]/35 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-[#b89565]/10 relative overflow-hidden">
                
                {/* Header Mode Toggle */}
                <div className="flex items-center gap-3 mb-8 p-1.5 rounded-full bg-[#faf8f5] border border-[#b89565]/20 max-w-sm">
                  <button
                    type="button"
                    onClick={() => setActiveMode("book")}
                    className={`flex-1 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeMode === "book"
                        ? "bg-gradient-to-r from-[#b89565] to-[#a07c48] text-white shadow-md shadow-[#b89565]/20"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    Book A Slot
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMode("inquiry")}
                    className={`flex-1 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeMode === "inquiry"
                        ? "bg-gradient-to-r from-[#b89565] to-[#a07c48] text-white shadow-md shadow-[#b89565]/20"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    General Inquiry
                  </button>
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
                      {activeMode === "book" ? "Consultation Slot Requested!" : "Message Received!"}
                    </h3>
                    <p className="text-zinc-600 text-sm max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-zinc-900">{formData.name}</span>. Our lead structural consultant will review your project details and confirm your appointment shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full border border-[#b89565] text-[#a07c48] hover:bg-[#b89565]/10 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Submit Another Request
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

                    {/* Book Slot Fields (Only when Book A Slot is active) */}
                    {activeMode === "book" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 rounded-2xl bg-[#faf8f5] border border-[#b89565]/25">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#a07c48] mb-2 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#b89565]" />
                            <span>Preferred Date *</span>
                          </label>
                          <input
                            type="date"
                            required={activeMode === "book"}
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:border-[#b89565]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#a07c48] mb-2 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#b89565]" />
                            <span>Preferred Slot *</span>
                          </label>
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:border-[#b89565]"
                          >
                            <option>10:00 AM – 11:00 AM</option>
                            <option>11:30 AM – 12:30 PM</option>
                            <option>03:00 PM – 04:00 PM</option>
                            <option>04:30 PM – 05:30 PM</option>
                            <option>06:00 PM – 07:00 PM</option>
                          </select>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        Project Details / Inquiry Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about the site location, number of storeys, built-up area, or specific structural requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#faf8f5] text-zinc-900 text-sm focus:outline-none focus:border-[#b89565] focus:bg-white transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a07c48] hover:from-[#a07c48] hover:to-[#8d6935] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#b89565]/30 hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>{activeMode === "book" ? "Confirm & Book Consultation Slot" : "Send Inquiry Message"}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}

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
