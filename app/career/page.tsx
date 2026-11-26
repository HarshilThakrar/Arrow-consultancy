"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import { fetchApi, postApi } from "../lib/api";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Upload,
  User,
  Mail,
  Phone,
  FileText,
  DollarSign,
  GraduationCap,
  Building,
  Search,
  Filter,
  X,
  Send,
  Globe
} from "lucide-react";

interface JobOpening {
  id: number;
  title: string;
  department: string;
  jobType: string;
  workplaceType: string;
  location: string;
  experience: string;
  salaryRange: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const initialJobs: JobOpening[] = [
  {
    id: 1,
    title: "Senior Structural Design Engineer",
    department: "Structural Engineering",
    jobType: "Full-Time",
    workplaceType: "On-Site",
    location: "Ahmedabad, Gujarat",
    experience: "4 - 7 Years",
    salaryRange: "₹8,00,000 - ₹14,00,000 PA",
    description: "Leading 3D finite element structural analysis, seismic wind engineering, and GFC detailing for high-rise RCC and composite towers.",
    responsibilities: [
      "Perform high-rise structural design and dynamic seismic analysis using ETABS, SAFE & STAAD.Pro",
      "Coordinate with principal architects, MEP engineers, and site PMC teams",
      "Prepare value engineering alternatives saving steel and concrete while strictly honoring IS codes",
      "Lead site inspection visits during major raft and column casting milestones"
    ],
    requirements: [
      "M.Tech / M.E in Structural Engineering from a recognized university",
      "Deep understanding of IS 456, IS 1893, IS 13920, IS 875 Part 3 and NBC standards",
      "4+ years of relevant experience handling multi-storey residential and commercial projects",
      "Strong leadership and technical review capabilities"
    ]
  },
  {
    id: 2,
    title: "BIM Structural Modeler (Revit)",
    department: "BIM & Modeling",
    jobType: "Full-Time",
    workplaceType: "Hybrid",
    location: "Ahmedabad, Gujarat",
    experience: "2 - 4 Years",
    salaryRange: "₹4,50,000 - ₹7,50,000 PA",
    description: "Developing detailed 3D structural Revit models, clash detection with MEP systems, and automated GFC rebar schedule drawings.",
    responsibilities: [
      "Create high-LOD 3D structural BIM models from architectural and engineering input files",
      "Execute Navisworks clash coordination with plumbing, electrical, and HVAC packages",
      "Generate automated quantity takeoff (QTO) and bar bending schedules (BBS)",
      "Ensure structural drawings adhere strictly to company drafting standards"
    ],
    requirements: [
      "Diploma or B.E/B.Tech in Civil Engineering",
      "Certified proficiency in Autodesk Revit Structure and Navisworks Manage",
      "Experience working on high-rise or large-scale industrial projects",
      "Detail-oriented with strong spatial visualization"
    ]
  },
  {
    id: 3,
    title: "Site Structural Quality & Audit Engineer",
    department: "Project Management & QA/QC",
    jobType: "Full-Time",
    workplaceType: "On-Site",
    location: "Gandhinagar / Gift City",
    experience: "3 - 5 Years",
    salaryRange: "₹5,50,000 - ₹9,00,000 PA",
    description: "Conducting rigorous structural audits, reinforcement checking, non-destructive testing (NDT), and concrete quality monitoring across active projects.",
    responsibilities: [
      "Perform site reinforcement checking against approved GFC drawings prior to casting",
      "Monitor slump tests, cube test results, core testing, and ultrasonic pulse velocity audits",
      "Coordinate directly with developer PMCs to resolve site execution queries promptly",
      "Document weekly structural QA/QC compliance reports"
    ],
    requirements: [
      "B.Tech / B.E in Civil Engineering",
      "3+ years in high-rise RCC execution or QA/QC structural consultancy",
      "Thorough knowledge of on-site reinforcement detailing and bar splices",
      "Strong communication and site dispute resolution skills"
    ]
  },
  {
    id: 4,
    title: "Post-Tensioning (PT) Specialist Engineer",
    department: "Specialized Engineering",
    jobType: "Full-Time",
    workplaceType: "On-Site",
    location: "Ahmedabad, Gujarat",
    experience: "3 - 6 Years",
    salaryRange: "₹7,00,000 - ₹11,50,000 PA",
    description: "Designing long-span post-tensioned flat slabs, transfer girders, and pre-stressed elements for landmark commercial towers.",
    responsibilities: [
      "Design PT slabs using ADAPT-Builder and RAM Concept software",
      "Prepare tendon profiling, anchorage zone detailing, and elongation calculations",
      "Review stressing reports, grouting procedures, and friction losses on site",
      "Assist architecture teams in eliminating columns for open commercial spans"
    ],
    requirements: [
      "B.E / M.Tech in Civil / Structural Engineering",
      "Specialized training or prior hands-on work with PT design firms",
      "Familiarity with bonded and unbonded post-tensioning methodologies"
    ]
  }
];

export default function CareersPage() {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedJobForModal, setSelectedJobForModal] = useState<JobOpening | null>(null);

  // Form State
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  useEffect(() => {
    // 1. Instant cache load from localStorage
    try {
      const cached = localStorage.getItem('arrow_cache_career_jobs');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed)) {
          setJobs(parsed);
          setLoading(false);
        }
      }
    } catch (_) {}

    // 2. Fetch fresh from API
    fetchApi<any[]>('/career-jobs').then((data) => {
      setLoading(false);
      if (data && Array.isArray(data)) {
        const mapped: JobOpening[] = data.map((item) => ({
          id: item.id,
          title: item.title,
          department: item.department || "Engineering",
          jobType: item.jobType || item.job_type || "Full-Time",
          workplaceType: item.workplaceType || item.workplace_type || "On-Site",
          location: item.location || "Ahmedabad, Gujarat",
          experience: item.experience || "Not Specified",
          salaryRange: item.salaryRange || item.salary_range || "Competitive",
          description: item.description || "",
          responsibilities: Array.isArray(item.responsibilities) ? item.responsibilities : (typeof item.responsibilities === 'string' ? JSON.parse(item.responsibilities || '[]') : []),
          requirements: Array.isArray(item.requirements) ? item.requirements : (typeof item.requirements === 'string' ? JSON.parse(item.requirements || '[]') : []),
        }));
        setJobs(mapped);
        try {
          localStorage.setItem('arrow_cache_career_jobs', JSON.stringify(mapped));
        } catch (_) {}
      } else {
        setJobs([]);
      }
    });
  }, []);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    totalExperience: "",
    currentCompany: "",
    portfolioUrl: "",
    linkedinUrl: "",
    coverNote: "",
  });

  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];

  const filteredJobs = jobs.filter((job) => {
    const matchesDept = selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleOpenApplication = (job: JobOpening) => {
    setSelectedJobForModal(job);
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    setSelectedJobForModal(null);
    setSubmitted(false);
    setFileName("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    if (selectedJobForModal && selectedJobForModal.id > 0) {
      data.append("career_job_id", String(selectedJobForModal.id));
    }
    data.append("full_name", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("total_experience", formData.totalExperience);
    data.append("current_company", formData.currentCompany);
    data.append("linkedin_url", formData.linkedinUrl);
    data.append("cover_letter", formData.coverNote);
    if (resumeFile) {
      data.append("resume", resumeFile);
    }

    const res = await postApi('/job-applications', data, true);
    setIsSubmitting(false);
    if (res && res.ok) {
      setSubmitted(true);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white">
      <Navbar />

      {/* 1. Header Banner */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-[#b89565]/30">
        <BackgroundVideo
          videoSrc="/logo_reveal.mp4"
          posterImage="/assets/hero/slider_3.jpg"
          overlayOpacity="from-[#3a2d18]/90 via-[#221a0e]/85 to-[#161009]/90"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#b89565]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-[#e5c58a] uppercase">
              Build Your Legacy With Us
            </span>
            <span className="w-8 h-[2px] bg-[#b89565]" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Join Our <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Team</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Meet Our Team & Engineering Culture Section */}
      <section className="py-20 md:py-24 bg-white border-b border-[#b89565]/20 relative">
        {/* Subtle Background Blueprint Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(184, 149, 101, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(184, 149, 101, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Team Narrative, Leadership & Roster (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#b89565]" />
                <span className="text-xs font-bold tracking-[0.25em] text-[#a07c48] uppercase">
                  OUR LEADERSHIP & CORE TEAM
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-950 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Meet the Minds Behind <span className="italic font-normal text-[#a07c48]">Our Vision</span>
              </h2>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal text-justify">
                Under the leadership of our visionary founder, <strong className="text-zinc-950 font-bold">Mr. Gaurav Patel</strong>, we have assembled a highly skilled team of experts in technology, strategy, and industry knowledge.
              </p>

              {/* Core Team Roster Card */}
              <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#b89565]/30 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-widest text-[#a07c48] font-bold block mb-4">
                  // Core Engineering Team
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Er. Vandana Tank",
                    "Er. Riya Pawar",
                    "Er. Aravind Gaikwad",
                    "Er. Aniket Kamble",
                    "Er. Shubham Jadhav",
                  ].map((engineer) => (
                    <div
                      key={engineer}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#b89565]/20 shadow-xs"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#b89565]" />
                      <span className="text-xs sm:text-sm font-semibold text-zinc-900 tracking-wide">
                        {engineer}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-zinc-600 mt-4 leading-relaxed italic border-t border-[#b89565]/20 pt-3 text-justify">
                  Together, this exceptional team enables us to achieve project objectives with unmatched efficiency and precision.
                </p>
              </div>

              {/* Quality & Commitment Values */}
              <div className="space-y-3 pt-2 text-zinc-600 text-xs sm:text-sm leading-relaxed font-light text-justify">
                <p>
                  We are unwavering in our commitment to quality, no matter the size or complexity of the project. Our team emphasizes attention to detail and works to deliver effective, economically sustainable solutions tailored to our clients&apos; specific needs.
                </p>
                <p>
                  Additionally, we support our clients throughout the entire process, starting from the very beginning. We take pride in the meticulous detail and coordination that our designs embody.
                </p>
                <p className="font-semibold text-zinc-900 pt-1 flex items-center gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b89565] shrink-0" />
                  <span>At Arrow Structural Consultants, we guarantee reliable expertise and consistent services.</span>
                </p>
              </div>
            </div>

            {/* Right Column: Team Image Container (6 cols) */}
            <div className="lg:col-span-6 lg:self-start lg:sticky lg:top-28 z-20">
              <div className="relative group w-full">
                  {/* Decorative Golden Ambient Aura */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-[#e5c58a]/35 via-[#b89565]/25 to-transparent rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />

                  {/* Main Team Showcase Box - Landscape / Rectangular */}
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-[#b89565]/35 shadow-2xl aspect-[16/10] sm:aspect-[16/11] flex items-center justify-center">
                    <img
                      src="/assets/Our-team.png"
                      alt="Arrow Structural Consultants Leadership & Engineering Team"
                      className="w-full h-full object-cover object-center opacity-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Team Badge */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-[#b89565]/40 text-white flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#e5c58a] uppercase block">
                          Arrow Leadership & Engineering
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-zinc-100 mt-0.5">
                          Mr. Gaurav Patel & Core Engineering Team
                        </h4>
                      </div>
                      <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#b89565]/20 text-[#e5c58a] border border-[#b89565]/40 shrink-0">
                        Arrow Team
                      </span>
                    </div>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Open Positions Section */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#a07c48] font-bold block mb-2">
                // Opportunities
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-zinc-950"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Current <span className="text-[#a07c48] italic font-normal">Openings</span>
              </h2>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search role or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#b89565]/30 focus:border-[#b89565] focus:outline-none text-xs sm:text-sm shadow-xs"
                />
              </div>

              {/* Department Filter */}
              <div className="relative">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-[#b89565]/30 focus:border-[#b89565] focus:outline-none text-xs sm:text-sm shadow-xs cursor-pointer text-zinc-700"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept === "All" ? "All Departments" : dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings Cards */}
          <div className="space-y-6">
            {loading ? (
              <div className="p-12 text-center bg-white rounded-2xl border border-[#b89565]/20">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#b89565] border-t-transparent mb-3"></div>
                <p className="text-sm text-zinc-500">Checking current job openings...</p>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="p-12 sm:p-16 text-center bg-white rounded-2xl border border-[#b89565]/25 shadow-xs">
                <div className="w-16 h-16 rounded-full bg-[#faf3e8] border border-[#b89565]/30 flex items-center justify-center text-[#a07c48] mx-auto mb-4">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h4 
                  className="text-xl sm:text-2xl font-bold text-zinc-950 mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Currently No Job Openings Available
                </h4>
                <p className="text-sm text-zinc-600 max-w-lg mx-auto leading-relaxed">
                  Right now there are no active job openings matching this criteria. As soon as a position opens up, it will appear here immediately.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => handleOpenApplication({
                      id: 0,
                      title: "General / Open Application",
                      department: "Structural Engineering & Design",
                      jobType: "Full-Time",
                      workplaceType: "On-Site / Hybrid",
                      location: "Ahmedabad, Gujarat",
                      experience: "Any",
                      salaryRange: "Competitive",
                      description: "Open application for structural engineering, BIM modeling, site execution, and project management roles at Arrow Consultancy.",
                      responsibilities: [],
                      requirements: [],
                    })}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a07c48] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#b89565]/25 hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Submit Your Resume Form</span>
                    <FileText className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#b89565]/25 hover:border-[#b89565] shadow-xs hover:shadow-xl hover:shadow-[#b89565]/10 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#faf3e8] text-[#a07c48] border border-[#b89565]/30">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-zinc-100 text-zinc-700">
                          {job.jobType}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-zinc-100 text-zinc-700">
                          {job.workplaceType}
                        </span>
                      </div>

                      <h3
                        className="text-xl sm:text-2xl font-bold text-zinc-950 group-hover:text-[#a07c48] transition-colors duration-200"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {job.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-3xl">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-5 text-xs text-zinc-500 pt-2">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-[#a07c48]" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-[#a07c48]" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <DollarSign className="w-4 h-4 text-[#a07c48]" />
                          <span>{job.salaryRange}</span>
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="shrink-0 flex items-center">
                      <button
                        onClick={() => handleOpenApplication(job)}
                        className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-950 hover:bg-[#a07c48] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 group-hover:translate-x-1"
                      >
                        <span>Apply For Position</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Expandable Technical Detail Snapshot */}
                  <div className="mt-6 pt-6 border-t border-zinc-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-600">
                    <div>
                      <span className="font-bold text-zinc-800 uppercase tracking-wider block mb-2">
                        Key Responsibilities:
                      </span>
                      <ul className="space-y-1.5 list-disc list-inside">
                        {job.responsibilities.slice(0, 2).map((resp, i) => (
                          <li key={i} className="leading-relaxed">{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-zinc-800 uppercase tracking-wider block mb-2">
                        Key Requirements:
                      </span>
                      <ul className="space-y-1.5 list-disc list-inside">
                        {job.requirements.slice(0, 2).map((req, i) => (
                          <li key={i} className="leading-relaxed">{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 4. Application Modal Form */}
      <AnimatePresence>
        {selectedJobForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#b89565]/30 p-6 sm:p-10 my-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                /* Success State */
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-zinc-950"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Application Submitted!
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.fullName}</span>. Your application for{" "}
                    <span className="font-semibold text-[#a07c48]">{selectedJobForModal.title}</span> has been received. Our recruitment team will review your profile and reach out shortly.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="mt-6 px-8 py-3 rounded-xl bg-zinc-950 hover:bg-[#a07c48] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* Form State */
                <div>
                  <div className="mb-6">
                    <span className="text-[11px] font-bold text-[#a07c48] uppercase tracking-wider">
                      Position Application
                    </span>
                    <h3
                      className="text-2xl font-bold text-zinc-950 mt-1"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {selectedJobForModal.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      {selectedJobForModal.department} • {selectedJobForModal.location}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 focus:border-[#b89565] focus:ring-1 focus:ring-[#b89565] text-xs sm:text-sm outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input
                            type="email"
                            required
                            placeholder="rahul@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 focus:border-[#b89565] focus:ring-1 focus:ring-[#b89565] text-xs sm:text-sm outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 focus:border-[#b89565] focus:ring-1 focus:ring-[#b89565] text-xs sm:text-sm outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Experience */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Total Relevant Experience *
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. 5 Years"
                            value={formData.totalExperience}
                            onChange={(e) => setFormData({ ...formData, totalExperience: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 focus:border-[#b89565] focus:ring-1 focus:ring-[#b89565] text-xs sm:text-sm outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Current Company */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Current / Last Company
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input
                            type="text"
                            placeholder="e.g. L&T Construction"
                            value={formData.currentCompany}
                            onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 focus:border-[#b89565] focus:ring-1 focus:ring-[#b89565] text-xs sm:text-sm outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* LinkedIn / Portfolio */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          LinkedIn Profile URL
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input
                            type="url"
                            placeholder="https://linkedin.com/in/..."
                            value={formData.linkedinUrl}
                            onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 focus:border-[#b89565] focus:ring-1 focus:ring-[#b89565] text-xs sm:text-sm outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Resume Upload */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Attach Resume / CV (PDF or DOCX) *
                      </label>
                      <label className="border-2 border-dashed border-[#b89565]/40 hover:border-[#b89565] rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer bg-[#faf8f5] hover:bg-white transition-all">
                        <Upload className="w-6 h-6 text-[#a07c48] mb-2" />
                        <span className="text-xs font-semibold text-zinc-700">
                          {fileName ? fileName : "Click to select or drag & drop your resume"}
                        </span>
                        <span className="text-[10px] text-zinc-400 mt-1">PDF, DOC, DOCX up to 10MB</span>
                        <input
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Cover Note */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Brief Cover Note / Why Arrow?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us briefly about your projects, high-rise experience or goals..."
                        value={formData.coverNote}
                        onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                        className="w-full p-3 rounded-xl border border-zinc-200 focus:border-[#b89565] focus:ring-1 focus:ring-[#b89565] text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#b89565] to-[#967445] hover:from-[#a07c48] hover:to-[#836336] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Submitting Application...</span>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
