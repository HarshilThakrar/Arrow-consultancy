"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 24, 2026";

  const sections = [
    {
      num: "01",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p>
            <strong className="text-zinc-950 font-semibold">Arrow Structural Consultancy</strong> (&quot;Arrow&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting the personal information of individuals who visit our website, contact us, or engage with our consultancy services.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, disclose, and protect information when you access our website at{" "}
            <a href="https://arrowasc.com/" target="_blank" rel="noreferrer" className="text-[#a07c48] font-medium underline underline-offset-4 hover:text-[#b89565]">
              https://arrowasc.com/
            </a>{" "}
            or communicate with us through our website and other communication channels.
          </p>
          <p className="text-zinc-500 text-sm italic">
            By using our website, you acknowledge that you have read this Privacy Policy.
          </p>
        </div>
      ),
    },
    {
      num: "02",
      title: "Information We Collect",
      content: (
        <div className="space-y-6">
          <p>We may collect the following categories of information:</p>

          <div className="space-y-3">
            <h4 className="text-zinc-950 font-semibold text-base">Personal Information</h4>
            <p className="text-zinc-600 text-sm">When you contact us or submit an enquiry, we may collect:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-700">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or organisation name</li>
              <li>Designation or professional details</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-zinc-950 font-semibold text-base">Project and Business Information</h4>
            <p className="text-zinc-600 text-sm">To understand and respond to consultancy enquiries, we may collect:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-700">
              <li>Project descriptions and requirements</li>
              <li>Structural drawings and design documents</li>
              <li>Architectural plans and technical specifications</li>
              <li>Site-related information</li>
              <li>Project locations and relevant construction details</li>
              <li>Other documents or information voluntarily shared with us</li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-zinc-950 font-semibold text-base">Technical Information</h4>
            <p className="text-zinc-600 text-sm">When you visit our website, certain technical information may be collected automatically, including:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-700">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device and operating system information</li>
              <li>Pages visited</li>
              <li>Date and time of access</li>
              <li>Website interaction and navigation information</li>
            </ul>
            <p className="text-zinc-500 text-xs italic pt-1">
              The availability and collection of such information may depend on the website technologies and services currently enabled.
            </p>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p>We may use collected information for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-700">
            <li>To respond to enquiries and requests.</li>
            <li>To provide information about our structural consultancy services.</li>
            <li>To understand project requirements and assess potential engagements.</li>
            <li>To communicate with clients, prospective clients, and business partners.</li>
            <li>To prepare proposals, quotations, and project-related documentation.</li>
            <li>To improve website performance and user experience.</li>
            <li>To maintain website security and prevent fraudulent or unauthorised activities.</li>
            <li>To comply with applicable legal and regulatory obligations.</li>
            <li>To maintain business and communication records.</li>
          </ul>
          <p className="text-zinc-800 font-medium pt-2">
            We will use personal information only for purposes that are lawful and relevant to the interaction or services involved.
          </p>
        </div>
      ),
    },
    {
      num: "04",
      title: "Legal Basis for Processing",
      content: (
        <div className="space-y-4">
          <p>Where required by applicable law, we process personal information based on appropriate legal grounds, including:</p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-700">
            <li>Your consent.</li>
            <li>Steps taken at your request before entering into a contract.</li>
            <li>Performance of contractual obligations.</li>
            <li>Compliance with applicable legal requirements.</li>
            <li>Other lawful grounds recognised under applicable law.</li>
          </ul>
          <p className="text-zinc-500 text-sm italic">
            Where processing is based on consent, you may withdraw your consent subject to applicable legal requirements.
          </p>
        </div>
      ),
    },
    {
      num: "05",
      title: "Sharing and Disclosure of Information",
      content: (
        <div className="space-y-4">
          <p className="text-zinc-950 font-semibold">
            Arrow Structural Consultancy does not sell personal information to third parties.
          </p>
          <p>We may share information where reasonably necessary with:</p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-700">
            <li>Website hosting and infrastructure providers.</li>
            <li>Email and communication service providers.</li>
            <li>IT and website maintenance service providers.</li>
            <li>Analytics providers, if analytics services are enabled.</li>
            <li>Professional consultants and service partners involved in an engagement.</li>
            <li>Government authorities, regulators, or law enforcement agencies where legally required.</li>
          </ul>
          <p className="text-zinc-600">
            We expect service providers handling information on our behalf to maintain appropriate confidentiality and security safeguards.
          </p>
          <p className="text-zinc-600">
            We will not disclose confidential project information to unrelated third parties except where authorised by you, necessary for an agreed engagement, or required by law.
          </p>
        </div>
      ),
    },
    {
      num: "06",
      title: "Data Security",
      content: (
        <div className="space-y-4">
          <p>
            We take reasonable technical and organisational measures to protect information against unauthorised access, alteration, disclosure, loss, or misuse. Such measures may include:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-700">
            <li>Access restrictions.</li>
            <li>Secure website and server configurations.</li>
            <li>Appropriate data handling practices.</li>
            <li>Security monitoring and maintenance.</li>
            <li>Confidentiality measures for business information.</li>
          </ul>
          <p className="text-zinc-500 text-sm italic">
            However, no method of transmission or electronic storage can be guaranteed to be completely secure.
          </p>
        </div>
      ),
    },
    {
      num: "07",
      title: "Data Retention",
      content: (
        <div className="space-y-4">
          <p>
            We retain personal and business information only for as long as reasonably necessary to fulfil the purposes for which it was collected, including:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-700">
            <li>Responding to enquiries.</li>
            <li>Managing client relationships.</li>
            <li>Completing consultancy engagements.</li>
            <li>Maintaining business and project records.</li>
            <li>Meeting legal, contractual, accounting, or regulatory obligations.</li>
          </ul>
          <p className="text-zinc-600">
            When information is no longer required, we will take appropriate steps to delete or securely dispose of it, subject to applicable legal retention requirements.
          </p>
        </div>
      ),
    },
    {
      num: "08",
      title: "Cookies and Similar Technologies",
      content: (
        <div className="space-y-3">
          <p>
            Our website may use cookies and similar technologies to support website functionality, understand website usage, and improve user experience.
          </p>
          <p className="text-zinc-600">
            The use of analytics, advertising, or other non-essential cookies will depend on the technologies enabled on our website and applicable consent requirements. For further information, please refer to our Cookie Policy.
          </p>
        </div>
      ),
    },
    {
      num: "09",
      title: "Third-Party Websites and Services",
      content: (
        <div className="space-y-3">
          <p>
            Our website may contain links to external websites or services.
          </p>
          <p className="text-zinc-600">
            Arrow Structural Consultancy does not control the privacy practices, security, or content of third-party websites. We encourage visitors to review the privacy policies of those websites before sharing personal information.
          </p>
        </div>
      ),
    },
    {
      num: "10",
      title: "Your Privacy Rights",
      content: (
        <div className="space-y-4">
          <p>Subject to applicable law, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-zinc-700">
            <li>Request information about personal data processed by us.</li>
            <li>Request correction or updating of inaccurate information.</li>
            <li>Request deletion of personal information where legally permissible.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Raise a complaint regarding the handling of your personal information.</li>
            <li>Exercise other rights available under applicable data protection laws.</li>
          </ul>
          <p className="text-zinc-600">
            To exercise any applicable privacy rights, please contact us using the details provided below.
          </p>
        </div>
      ),
    },
    {
      num: "11",
      title: "Children's Privacy",
      content: (
        <div className="space-y-3">
          <p>
            Our website and consultancy services are not specifically directed towards children.
          </p>
          <p className="text-zinc-600">
            We do not knowingly seek to collect personal information from children in circumstances where such collection would violate applicable law. If you believe that a child has provided personal information to us unlawfully, please contact us so that we can review the matter and take appropriate action.
          </p>
        </div>
      ),
    },
    {
      num: "12",
      title: "Changes to This Privacy Policy",
      content: (
        <div className="space-y-3">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our business practices, website functionality, technologies, or applicable laws.
          </p>
          <p className="text-zinc-600">
            Any revised version will be published on this page with an updated revision date. We encourage visitors to review this page periodically.
          </p>
        </div>
      ),
    },
    {
      num: "13",
      title: "Contact Us",
      content: (
        <div className="space-y-5">
          <p>
            If you have questions, concerns, or requests relating to this Privacy Policy or the handling of your personal information, please contact:
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

          <p className="text-zinc-600 text-sm pt-2">
            We will review and respond to privacy-related requests in accordance with applicable laws and requirements.
          </p>
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
              LEGAL & TRANSPARENCY
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
            Privacy <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Policy</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Clean Editorial Document Layout (No heavy cards/boxes) */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-16 md:py-24">
        
        {/* Effective Date Bar */}
        <div className="pb-8 mb-12 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-zinc-500 font-medium">
          <span>ARROW STRUCTURAL CONSULTANCY</span>
          <span>Effective Date & Last Updated: {lastUpdated}</span>
        </div>

        {/* Numbered Clean Editorial Sections */}
        <div className="divide-y divide-zinc-200">
          {sections.map((sec) => (
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
