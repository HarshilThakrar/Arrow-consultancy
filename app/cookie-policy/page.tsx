"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function CookiePolicyPage() {
  const lastUpdated = "November 24, 2026";

  const cookieSections = [
    {
      num: "01",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p>
            <strong className="text-zinc-950 font-semibold">Arrow Structural Consultancy</strong> (&quot;Arrow&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses or may use cookies and similar technologies on its website,{" "}
            <a href="https://arrowasc.com/" target="_blank" rel="noreferrer" className="text-[#a07c48] font-medium underline underline-offset-4 hover:text-[#b89565]">
              https://arrowasc.com/
            </a>
            .
          </p>
          <p>
            This Cookie Policy explains what cookies are, why they may be used, what types of cookies may be present on our website, and how visitors can manage their cookie preferences.
          </p>
          <p className="text-zinc-600">
            We are committed to respecting visitor privacy and providing transparency regarding website technologies.
          </p>
        </div>
      ),
    },
    {
      num: "02",
      title: "What Are Cookies?",
      content: (
        <div className="space-y-4">
          <p>
            Cookies are small text files stored on your device when you visit a website. They help websites remember certain information about your visit, maintain functionality, understand user interactions, and improve website performance.
          </p>
          <p>Cookies may be:</p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-700">
            <li><strong className="text-zinc-900 font-medium">Session Cookies:</strong> Temporary cookies that are removed when you close your browser.</li>
            <li><strong className="text-zinc-900 font-medium">Persistent Cookies:</strong> Cookies that remain stored on your device until they expire or are manually deleted.</li>
            <li><strong className="text-zinc-900 font-medium">First-Party Cookies:</strong> Cookies placed directly by the website you visit.</li>
            <li><strong className="text-zinc-900 font-medium">Third-Party Cookies:</strong> Cookies placed by external services integrated into a website.</li>
          </ul>
        </div>
      ),
    },
    {
      num: "03",
      title: "Types of Cookies We May Use",
      content: (
        <div className="space-y-6">
          <p>
            Depending on the website functionality and services enabled, Arrow Structural Consultancy may use the following categories of cookies:
          </p>

          <div className="space-y-2">
            <h4 className="text-zinc-950 font-semibold text-base">Essential Cookies</h4>
            <p className="text-zinc-600 text-sm">These cookies are necessary for basic website functionality and security. They may help with:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-700">
              <li>Website navigation.</li>
              <li>Security and protection against malicious activity.</li>
              <li>Maintaining essential website functionality.</li>
              <li>Remembering necessary technical preferences.</li>
            </ul>
            <p className="text-zinc-500 text-xs italic pt-1">
              Essential cookies cannot always be disabled through website settings without affecting certain website features.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-zinc-950 font-semibold text-base">Functional Cookies</h4>
            <p className="text-zinc-600 text-sm">Functional cookies may help remember visitor preferences and improve website usability. They may be used to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-700">
              <li>Remember selected preferences.</li>
              <li>Maintain certain website settings.</li>
              <li>Improve the overall browsing experience.</li>
            </ul>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-zinc-950 font-semibold text-base">Analytics and Performance Cookies</h4>
            <p className="text-zinc-600 text-sm">If analytics services are enabled, these cookies may help us understand how visitors interact with our website. They may collect information such as:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-700">
              <li>Number of website visitors.</li>
              <li>Pages visited.</li>
              <li>Time spent on website pages.</li>
              <li>Traffic sources.</li>
              <li>Browser and device information.</li>
              <li>General website interaction patterns.</li>
            </ul>
            <p className="text-zinc-600 text-xs pt-1">
              This information may help us improve website content, performance, and usability.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-zinc-950 font-semibold text-base">Marketing and Advertising Cookies</h4>
            <p className="text-zinc-600 text-sm">
              If advertising or marketing technologies are enabled in the future, these cookies may be used to measure advertising effectiveness or provide relevant promotional content.
            </p>
            <p className="text-zinc-500 text-xs italic">
              We will use non-essential marketing cookies subject to applicable consent requirements.
            </p>
          </div>
        </div>
      ),
    },
    {
      num: "04",
      title: "Third-Party Cookies",
      content: (
        <div className="space-y-4">
          <p>
            Certain external services integrated into our website may place cookies or use similar tracking technologies. Depending on the website configuration, these services may include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-700">
            <li>Google Analytics.</li>
            <li>Google Maps.</li>
            <li>YouTube or other embedded media platforms.</li>
            <li>Social media integrations.</li>
            <li>Other website performance or security services.</li>
          </ul>
          <p className="text-zinc-600">
            The actual third-party services and cookies depend on the technologies enabled on our website. Third-party providers may process information in accordance with their own privacy and cookie policies.
          </p>
          <p className="text-zinc-500 text-sm italic">
            We encourage visitors to review the relevant third-party policies.
          </p>
        </div>
      ),
    },
    {
      num: "05",
      title: "How We Use Cookies",
      content: (
        <div className="space-y-4">
          <p>Where applicable, cookies may be used to:</p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-700">
            <li>Maintain essential website functionality.</li>
            <li>Improve website loading and performance.</li>
            <li>Understand visitor behaviour and website traffic.</li>
            <li>Remember user preferences.</li>
            <li>Improve website navigation and usability.</li>
            <li>Monitor website security.</li>
            <li>Evaluate the performance of website content.</li>
          </ul>
          <p className="text-zinc-800 font-medium pt-1">
            We do not intend to use cookies to collect unnecessary personal information.
          </p>
        </div>
      ),
    },
    {
      num: "06",
      title: "Managing Cookie Preferences",
      content: (
        <div className="space-y-4">
          <p>
            Visitors may manage their cookie preferences through available website cookie settings, where provided. You may also manage or delete cookies through your browser settings.
          </p>
          <p>Most browsers allow you to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-700">
            <li>View stored cookies.</li>
            <li>Delete existing cookies.</li>
            <li>Block cookies from specific websites.</li>
            <li>Block third-party cookies.</li>
            <li>Configure browser notifications before cookies are stored.</li>
          </ul>
          <p className="text-zinc-600 text-sm pt-1">
            Please note that disabling certain cookies may affect the functionality or performance of some website features.
          </p>
          <p className="text-zinc-800 font-medium">
            Where consent is required for non-essential cookies, those cookies should not be activated before the appropriate consent is obtained.
          </p>
        </div>
      ),
    },
    {
      num: "07",
      title: "Cookie Consent",
      content: (
        <div className="space-y-4">
          <p>
            Where required by applicable law, we will seek visitor consent before placing or accessing non-essential cookies and similar technologies.
          </p>
          <p>
            Visitors should be provided with appropriate information and a reasonable mechanism to manage or withdraw their consent.
          </p>
          <p className="text-zinc-600 text-sm">
            Essential cookies necessary for requested website functionality may operate without optional analytics or marketing consent where legally permitted.
          </p>
        </div>
      ),
    },
    {
      num: "08",
      title: "Data Protection and Privacy",
      content: (
        <div className="space-y-4">
          <p>
            Information collected through cookies may include technical and browsing information.
          </p>
          <p>
            Where such information constitutes personal data under applicable law, we will handle it in accordance with our{" "}
            <Link href="/privacy-policy" className="text-[#a07c48] font-medium underline underline-offset-4 hover:text-[#b89565]">
              Privacy Policy
            </Link>{" "}
            and applicable data protection requirements.
          </p>
          <p className="text-zinc-600">
            For further information about how we collect, process, store, and protect personal information, please refer to our Privacy Policy.
          </p>
        </div>
      ),
    },
    {
      num: "09",
      title: "Changes to This Cookie Policy",
      content: (
        <div className="space-y-4">
          <p>We may update this Cookie Policy to reflect changes in:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-700">
            <li>Website functionality.</li>
            <li>Cookie technologies.</li>
            <li>Third-party integrations.</li>
            <li>Analytics and tracking services.</li>
            <li>Applicable legal and regulatory requirements.</li>
          </ul>
          <p className="text-zinc-500 text-sm italic pt-1">
            Any updated version will be published on this page with a revised update date.
          </p>
        </div>
      ),
    },
    {
      num: "10",
      title: "Contact Us",
      content: (
        <div className="space-y-5">
          <p>
            If you have questions or concerns regarding our Cookie Policy or the use of cookies on our website, please contact:
          </p>

          <div className="space-y-3 pt-1 text-zinc-800">
            <p className="font-bold text-zinc-950 text-base">Arrow Structural Consultancy</p>
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-[#a07c48]" />
              <a href="https://arrowasc.com/" target="_blank" rel="noreferrer" className="text-[#a07c48] font-medium underline underline-offset-4 hover:text-[#b89565]">
                https://arrowasc.com/
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#a07c48]" />
              <a href="mailto:design@arrowasc.com" className="text-[#a07c48] font-medium underline underline-offset-4 hover:text-[#b89565]">
                design@arrowasc.com
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#a07c48] mt-1 shrink-0" />
              <span>G-126, Jay Ganesh Samrajya, Spine Rd, near Pune - Nashik Highway, Sector No. 3, Bhosari, Pimpri-Chinchwad, Maharashtra 411039</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white">
      <Navbar />

      {/* 1. Header Banner */}
      <section className="relative min-h-[42vh] md:min-h-[46vh] flex items-center justify-center pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-[#b89565]/30">
        <BackgroundVideo
          videoSrc="/logo_reveal.mp4"
          posterImage="/assets/about_us/about_us_bg.png"
          overlayOpacity="from-[#3a2d18]/90 via-[#221a0e]/85 to-[#161009]/90"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#b89565]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-[#e5c58a] uppercase">
              DATA & PREFERENCES
            </span>
            <span className="w-8 h-[2px] bg-[#b89565]" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Cookie <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Policy</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Clean Editorial Document Layout */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-16 md:py-24">
        
        {/* Document Sub-Bar */}
        <div className="pb-8 mb-12 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-zinc-500 font-medium">
          <span>ARROW STRUCTURAL CONSULTANCY</span>
          <span>Effective Date & Last Updated: {lastUpdated}</span>
        </div>

        {/* Numbered Clean Editorial Sections */}
        <div className="divide-y divide-zinc-200">
          {cookieSections.map((sec) => (
            <article key={sec.num} className="py-10 first:pt-0 last:pb-0">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-mono font-bold text-[#a07c48]">
                  {sec.num}.
                </span>
                <h2 
                  className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {sec.title}
                </h2>
              </div>
              
              <div className="pl-8 text-zinc-700 text-sm sm:text-base leading-relaxed">
                {sec.content}
              </div>
            </article>
          ))}
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
