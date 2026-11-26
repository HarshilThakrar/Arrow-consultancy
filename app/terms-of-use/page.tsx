"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function TermsOfUsePage() {
  const lastUpdated = "November 24, 2026";

  const termsSections = [
    {
      num: "01",
      title: "Acceptance of Terms",
      content: (
        <div className="space-y-4">
          <p>
            Welcome to the official website of <strong className="text-zinc-950 font-semibold">Arrow Structural Consultancy</strong> (&quot;Arrow&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
          </p>
          <p>
            These Terms of Use govern your access to and use of{" "}
            <a href="https://arrowasc.com/" target="_blank" rel="noreferrer" className="text-[#a07c48] font-medium underline underline-offset-4 hover:text-[#b89565]">
              https://arrowasc.com/
            </a>
            , including the information, content, and resources available through the website.
          </p>
          <p>
            By accessing or using this website, you agree to comply with these Terms of Use and all applicable laws and regulations.
          </p>
          <p className="text-zinc-500 text-sm italic">
            If you do not agree with these terms, please discontinue using the website.
          </p>
        </div>
      ),
    },
    {
      num: "02",
      title: "About Our Services",
      content: (
        <div className="space-y-4">
          <p>
            Arrow Structural Consultancy provides structural consultancy-related services and professional solutions.
          </p>
          <p>
            Information displayed on this website may include details about our services, expertise, projects, capabilities, and professional activities. The information is provided for general informational and promotional purposes.
          </p>
          <p className="text-zinc-800 font-medium">
            Specific consultancy services, project deliverables, technical responsibilities, timelines, and commercial arrangements will be governed by separate proposals, agreements, work orders, or contracts where applicable.
          </p>
        </div>
      ),
    },
    {
      num: "03",
      title: "Website Usage",
      content: (
        <div className="space-y-4">
          <p>You agree to use this website only for lawful purposes. You must not:</p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-700">
            <li>Use the website in any way that violates applicable laws or regulations.</li>
            <li>Attempt to gain unauthorised access to the website, its servers, or associated systems.</li>
            <li>Introduce malicious software, viruses, or harmful code.</li>
            <li>Interfere with website functionality or security.</li>
            <li>Copy, reproduce, or distribute website content without proper authorisation.</li>
            <li>Submit false, misleading, fraudulent, or unlawful information.</li>
            <li>Use website contact forms or communication channels for spam or unauthorised commercial solicitation.</li>
          </ul>
          <p className="text-zinc-500 text-sm italic pt-1">
            We reserve the right to restrict or terminate access where misuse or security concerns are identified.
          </p>
        </div>
      ),
    },
    {
      num: "04",
      title: "Intellectual Property Rights",
      content: (
        <div className="space-y-4">
          <p>Unless otherwise stated, all content available on this website, including:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-700">
            <li>Text and written materials.</li>
            <li>Logos and branding elements.</li>
            <li>Graphics, images, and visual assets.</li>
            <li>Website layouts and designs.</li>
            <li>Illustrations and other creative materials.</li>
            <li>Original technical and promotional content.</li>
          </ul>
          <p>
            is owned by Arrow Structural Consultancy or used under appropriate permission or licence.
          </p>
          <p className="text-zinc-800 font-medium">
            You may view and use website content for personal and informational purposes. You must not reproduce, modify, distribute, publish, commercially exploit, or otherwise use our intellectual property without prior written permission, except where permitted by applicable law.
          </p>
        </div>
      ),
    },
    {
      num: "05",
      title: "Project Information and Technical Disclaimer",
      content: (
        <div className="space-y-4">
          <p>
            Information published on this website is intended for general informational purposes.
          </p>
          <p>
            Any technical descriptions, project examples, illustrations, drawings, structural concepts, or other engineering-related information displayed on the website should not automatically be treated as project-specific professional advice or approved engineering documentation.
          </p>
          <p>Actual structural design and consultancy decisions depend on project-specific factors, including:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-700">
            <li>Site and soil conditions.</li>
            <li>Applicable design codes and standards.</li>
            <li>Structural loads and safety requirements.</li>
            <li>Architectural and engineering specifications.</li>
            <li>Construction methods and site conditions.</li>
            <li>Relevant approvals and regulatory requirements.</li>
          </ul>
          <p className="text-zinc-800 font-medium pt-2">
            Visitors must not rely solely on general website information when making structural, engineering, construction, or safety-related decisions. Project-specific recommendations and professional deliverables should be obtained through an appropriately agreed consultancy engagement.
          </p>
        </div>
      ),
    },
    {
      num: "06",
      title: "Accuracy of Website Information",
      content: (
        <div className="space-y-4">
          <p>
            We make reasonable efforts to keep website information accurate and up to date.
          </p>
          <p>
            However, we do not guarantee that all website content will always be complete, current, accurate, or free from errors.
          </p>
          <p className="text-zinc-500 text-sm italic">
            We reserve the right to modify, update, or remove website content at any time without prior notice.
          </p>
        </div>
      ),
    },
    {
      num: "07",
      title: "No Automatic Consultancy Agreement",
      content: (
        <div className="space-y-4">
          <p>
            Submitting an enquiry, contacting us through the website, or receiving general information from us does not automatically establish a professional consultancy relationship or create a binding project agreement.
          </p>
          <p className="text-zinc-800 font-medium">
            A professional engagement will be subject to separate confirmation of the agreed scope, responsibilities, fees, deliverables, timelines, and applicable contractual terms.
          </p>
        </div>
      ),
    },
    {
      num: "08",
      title: "Third-Party Links",
      content: (
        <div className="space-y-4">
          <p>
            Our website may contain links to third-party websites, platforms, or services for additional information or convenience.
          </p>
          <p>
            These external websites are operated independently. Arrow Structural Consultancy is not responsible for their content, availability, security, or privacy practices.
          </p>
          <p className="text-zinc-500 text-sm italic">
            Accessing third-party websites is at your own discretion and subject to their respective terms and policies.
          </p>
        </div>
      ),
    },
    {
      num: "09",
      title: "Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p>
            To the extent permitted by applicable law, Arrow Structural Consultancy shall not be liable for losses or damages arising solely from:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-700">
            <li>Reliance on general information published on this website.</li>
            <li>Temporary website unavailability or technical interruptions.</li>
            <li>Unauthorised access to or misuse of website information beyond our reasonable control.</li>
            <li>Errors or omissions in general website content.</li>
            <li>The content, security, or practices of external third-party websites.</li>
          </ul>
          <p className="text-zinc-600 text-sm">
            Nothing in these Terms of Use excludes or limits liability that cannot legally be excluded or limited under applicable law.
          </p>
          <p className="text-zinc-800 font-medium">
            Nothing in this section replaces or overrides any responsibilities or liabilities expressly accepted under a separate consultancy agreement.
          </p>
        </div>
      ),
    },
    {
      num: "10",
      title: "Indemnification",
      content: (
        <div className="space-y-4">
          <p>
            To the extent permitted by applicable law, you agree not to misuse the website and to be responsible for losses or claims arising from your unlawful use of the website or violation of these Terms of Use.
          </p>
          <p className="text-zinc-600">
            This provision does not require you to indemnify us for our own negligence, unlawful conduct, or obligations that cannot legally be transferred to you.
          </p>
        </div>
      ),
    },
    {
      num: "11",
      title: "Website Availability and Changes",
      content: (
        <div className="space-y-3">
          <p>
            We may modify, suspend, discontinue, or update any part of the website to maintain, improve, or secure our services.
          </p>
          <p className="text-zinc-500 text-sm italic">
            We do not guarantee uninterrupted or error-free website availability.
          </p>
        </div>
      ),
    },
    {
      num: "12",
      title: "Privacy and Cookies",
      content: (
        <div className="space-y-3">
          <p>
            Your use of this website is also subject to our{" "}
            <Link href="/privacy-policy" className="text-[#a07c48] font-medium underline underline-offset-4 hover:text-[#b89565]">
              Privacy Policy
            </Link>{" "}
            and Cookie Policy.
          </p>
          <p className="text-zinc-600">
            Please review those policies to understand how personal information and cookies may be handled.
          </p>
        </div>
      ),
    },
    {
      num: "13",
      title: "Governing Law and Jurisdiction",
      content: (
        <div className="space-y-3">
          <p>
            These Terms of Use shall be governed by the laws of India.
          </p>
          <p className="text-zinc-800 font-medium">
            Subject to applicable law, courts having jurisdiction at Pune, Maharashtra, India, shall have jurisdiction over disputes arising from or relating to these Terms of Use.
          </p>
        </div>
      ),
    },
    {
      num: "14",
      title: "Changes to These Terms",
      content: (
        <div className="space-y-3">
          <p>
            We reserve the right to revise these Terms of Use from time to time.
          </p>
          <p>
            Changes will become effective when the updated version is published on this website.
          </p>
          <p className="text-zinc-600 text-sm">
            Continued use of the website after publication of revised terms constitutes acceptance of the revised terms to the extent permitted by law.
          </p>
        </div>
      ),
    },
    {
      num: "15",
      title: "Contact Information",
      content: (
        <div className="space-y-5">
          <p>
            For questions or concerns regarding these Terms of Use, please contact:
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
              TERMS & CONDITIONS
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
            Terms Of <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Use</span>
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
          {termsSections.map((sec) => (
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
