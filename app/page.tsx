'use client';

import Image from "next/image";
import Carousel from "@/components/Carousel";
import WebsiteCard from "@/components/WebsiteCard";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { useState } from "react";
import { handleSendEmail } from "./actions";
import { ArrowUpRight, Send, Mail, Code2, Film, Sparkles } from "lucide-react";

export default function Home() {
  const [clientEmail, setClientEmail] = useState('');
  const [clientSubject, setClientSubject] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    const result = await handleSendEmail(clientEmail, clientSubject);
    
    setIsSending(false);

    if (result.success) {
      setStatusMessage('Message received! I will reply to your email shortly. Thank you.');
      setClientEmail('');
      setClientSubject('');
    } else {
      setStatusMessage(result.error || 'Failed to send message. Please reach out directly via email.');
    }
  };

  const contacts = [
    { id: 1, platform: "LinkedIn", icon: "/icons/linkedin.png", text: "Buhawie Santos", link: "https://www.linkedin.com/in/buhawie-santos-04403232b/" },
    { id: 2, platform: "GitHub", icon: "/icons/github.png", text: "BuwieSit", link: "https://github.com/BuwieSit" }
  ];

  const devSkills = [
    { text: "React", icon: "/skills/react.png" },
    { text: "Next.js", icon: "/skills/nextjs.webp" },
    { text: "Tailwind CSS", icon: "/skills/tailwind.svg" },
    { text: "Sass CSS", icon: "/skills/sass.png" },
    { text: "Python", icon: "/skills/python.png" },
    { text: "Git", icon: "/skills/git.png" },
  ];

  const creativeSkills = [
    { text: "Premiere Pro", icon: "/skills/premiere.png" },
    { text: "Figma", icon: "/skills/figma.png" },
    { text: "Adobe XD", icon: "/skills/adobexd.png" },
    { text: "Illustrator", icon: "/skills/illustrator.webp" },
    { text: "WordPress", icon: "/skills/wordpress.png" },
    { text: "Elementor", icon: "/skills/elementor_logo.png" },
  ];

  const videoProjects = [
    {
      id: "video-1",
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/VJffXfBqQF4?si=STGushOuzgHV2YW0"
          title="Wedding SDE (Same Day Edit)"
          description="High-energy wedding film with dynamic pacing, audio mastering, and the trendy ring-toss intro transition."
          category="Wedding SDE"
        />
      )
    },
    {
      id: "video-2",
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/wJFLJMs7fls?si=YKK8fQ11IkIuGMCI"
          title="Capstone Project Cinematic Teaser"
          description="Directed, filmed, and edited promotional teaser featuring custom storyboard transitions and card toss visual motif."
          category="Project Teaser"
        />
      )
    },
    {
      id: "video-3",
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/-yE81PG0o1U?si=RppxDDC1g36JkVCT"
          title="Anime-Inspired Wedding Film"
          description="Stylized wedding film blending cinematic slow-motion cinematography with anime soundtrack timing and pacing."
          category="Creative Wedding"
        />
      )
    },
    {
      id: "video-4",
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/omgqVTdsSRg?si=X85kqek-1tRlnraX"
          title="Save the Date Cinematic Edit"
          description="Narrative couple story driven by heartfelt OPM music, color grading with warm film look, and emotional sound cuts."
          category="Save The Date"
        />
      )
    },
    {
      id: "video-5",
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/-z8U2AdQpEE?si=FmC42M0EK-arqYAm"
          title="School Organization Music Video"
          description="Multi-track rhythmic music video edit featuring dynamic tempo sync, performance cuts, and energetic color palette."
          category="Music Video"
        />
      )
    },
    {
      id: "video-6",
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/n81224VWB5Q?si=kZAhMojwsMjzhoTZ"
          title="Debutant Save the Date Film"
          description="Elegantly paced 18th birthday teaser highlighting venue atmosphere, portrait lighting, and cinematic score."
          category="Debut Film"
        />
      )
    },
  ];

  const websiteProjects = [
    {
      id: "web-1",
      content: (
        <WebsiteCard 
          type="International Competition"
          title="TAHAK: Business Proposal & Tourism Portal"
          description="Developed for an international competition in Vietnam. A cultural tourism website built with React, focusing on visual storytelling and responsive layouts."
          link="https://tahakver2.vercel.app/"
          mockupImg="/websites/tahak.png"
          tags={["React", "Figma", "Tailwind CSS", "Vercel"]}
        />
      )
    },
    {
      id: "web-2",
      content: (
        <WebsiteCard 
          type="Municipality Portal"
          title="Ibajay Aklan Official Web Platform"
          description="Led the design in Figma and built the frontend with JavaScript, routing parameters, and PHP/MySQL backend for municipal public access and records."
          link="https://ibajayaklan.vercel.app/"
          mockupImg="/websites/ibajay.png"
          tags={["JavaScript", "Figma", "PHP", "MySQL"]}
        />
      )
    },
    {
      id: "web-3",
      content: (
        <WebsiteCard 
          type="Capstone Thesis"
          title="OASIS: OJT Administration & Information System"
          description="Frontend engineer for academic thesis application. Designed the UI/UX in Figma and built modular React interfaces connected to Python backend services."
          link="https://oasis-webapp-p21y.vercel.app/"
          mockupImg="/websites/oasis.png"
          tags={["React", "Tailwind CSS", "Python API", "UI/UX"]}
        />
      )
    },
    {
      id: "web-4",
      content: (
        <WebsiteCard 
          type="Administrative System"
          title="Market Vendor Registration & Records Portal"
          description="Vendor records management platform with tabular databases, customized spreadsheet Excel export plugins, and secure database persistence."
          link="https://team2-web.vercel.app/market_vendor/landingPage.html"
          mockupImg="/websites/vendor.png"
          tags={["HTML5/JS", "PHP", "MySQL", "Excel Export"]}
        />
      )
    },
  ];

  const combinedProjects = [...websiteProjects, ...videoProjects];

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-poppins min-h-screen">

      {/* ================================================================ */}
      {/* SECTION 1: HERO (#home) — Light Linen Palette */}
      {/* ================================================================ */}
      <section 
        id="home" 
        className="relative w-full min-h-screen px-4 sm:px-8 py-12 sm:py-16 pt-32 sm:pt-40 flex flex-col justify-between items-center text-editor-primary max-w-7xl mx-auto border-b border-editor-border/40"
      >
        {/* Editorial Masthead Top Row */}
        <div className="w-full flex items-center justify-between border-b border-editor-primary/15 pb-4 mb-6 sm:mb-10 text-xs text-editor-accent uppercase tracking-widest font-medium">
          <span className="font-times-new italic">Vol. 2026 · Issue No. 01</span>
          <span className="hidden sm:inline font-times-new italic">Frontend Engineering & Cinematography</span>
          <span className="font-semibold text-editor-primary">Philippines</span>
        </div>

        {/* Hero Core Layout */}
        <div className="w-full z-10 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 sm:gap-12 my-auto">
          
          {/* Left Column: Typographic Masthead */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 sm:gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-editor-surface/30 border border-editor-accent/30 text-[11px] sm:text-xs font-semibold tracking-wider text-editor-accent shadow-xs">
              <span className="w-2 h-2 rounded-full bg-editor-accent animate-pulse" />
              AVAILABLE FOR DEVELOPMENT & FILM PROJECTS
            </div>

            <p className="font-times-new italic text-editor-accent text-base sm:text-lg md:text-xl -mb-2">
              The Dual Craft of
            </p>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bebas tracking-wide leading-none text-editor-primary">
              Buhawie Santos
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base text-editor-primary/80 font-medium tracking-wide max-w-xl leading-relaxed">
              Frontend Web Developer crafting responsive React & Next.js applications, paired with professional event cinematography and same-day-edit (SDE) filmmaking.
            </p>

            {/* Social Channels */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              {contacts.map((contact) => (
                <Link 
                  href={contact.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={contact.id} 
                  className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-editor-surface/20 border border-editor-surface/40 hover:bg-editor-surface/40 hover:border-editor-accent/50 transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
                >
                  <Image src={contact.icon} alt={contact.platform} width={20} height={20} priority className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                  <span className="text-xs font-bold text-editor-primary">{contact.platform}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Tactile Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 w-full sm:w-auto shrink-0 justify-center items-center lg:items-end">
            <Link href="#contacts" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-editor-primary text-editor-bg border border-editor-primary px-7 py-3.5 sm:py-4 rounded-xl font-bold cursor-pointer transition-all duration-300 hover:bg-editor-accent hover:border-editor-accent hover:-translate-y-0.5 active:scale-[0.98] text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-md">
                <span>Start a Project</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </Link>
            
            <Link href="#projects" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto cursor-pointer transition-all duration-300 border-2 border-editor-primary/80 bg-transparent px-7 py-3.5 sm:py-4 rounded-xl text-editor-primary font-bold hover:bg-editor-primary hover:text-editor-bg hover:-translate-y-0.5 active:scale-[0.98] text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2">
                <span>Browse Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

        </div>
        
        {/* Film Slate Reel Marquee */}
        <div className="mt-10 sm:mt-14 w-full relative z-10 border-t border-editor-primary/10 pt-4">
          <p className="font-times-new italic text-center text-xs tracking-widest uppercase text-editor-accent mb-2">
            — Selected Film Slates & Interactive Web Deployments —
          </p>
          <TestimonialCarousel items={combinedProjects} speed="normal" />
        </div>
        
      </section>

      {/* ================================================================ */}
      {/* SECTION 2: ABOUT (#about) — Deep Roasted Espresso Palette */}
      {/* ================================================================ */}
      <section 
        id="about" 
        className="relative py-16 sm:py-24 px-4 sm:px-8 w-full min-h-screen bg-editor-primary text-editor-bg font-poppins flex flex-col justify-center items-center border-b border-editor-surface/20"
      >
        <div className="w-full max-w-5xl flex flex-col items-center gap-12 sm:gap-16 z-10">
          
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center gap-2">
            <span className="font-times-new italic text-editor-surface tracking-widest uppercase text-xs sm:text-sm">
              The Creator Behind the Work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wide text-editor-bg">
              About Buwie
            </h2>
          </div>

          {/* Bio Frame: Analog Darkroom Portrait + Editorial Story */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-8 sm:gap-12 bg-editor-bg/5 border border-editor-surface/20 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-sm">
            
            {/* Darkroom Portrait Card */}
            <div className="relative group shrink-0">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-editor-surface/15 border border-editor-surface/30 shadow-2xl">
                <Image 
                  src="/editor_logo/buwie_pic.jpg" 
                  alt="Buhawie Santos" 
                  width={240} 
                  height={240} 
                  loading="lazy" 
                  className="w-40 h-40 sm:w-52 sm:h-52 rounded-xl object-cover grayscale-20 contrast-105 group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <div className="mt-2.5 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-editor-surface/80">
                  SAN PEDRO, PH · 2026
                </span>
              </div>
            </div>

            {/* Narrative Story */}
            <div className="flex flex-col gap-4 text-center md:text-left text-xs sm:text-sm md:text-base leading-relaxed text-editor-bg/90">
              <p>
                I am <span className="font-bold text-editor-surface">Buhawie Santos</span> (friends and collaborators call me <span className="font-bold text-editor-surface">Buwie</span>). I am currently a 3rd-year Information Technology student based in the Philippines, working where structured engineering meets visual storytelling.
              </p>
              
              <p>
                On the code side, I build responsive, production-ready web applications using <strong className="text-editor-bg font-semibold">React, Next.js, Tailwind CSS, and Node.js</strong>. I enjoy crafting clean layouts, architecting maintainable component hierarchies, and implementing accessible interactions.
              </p>

              <p>
                In cinematography and post-production, I direct and edit <strong className="text-editor-bg font-semibold">Same-Day-Edits (SDEs), wedding films, and debut teasers</strong>. Pacing, audio cutting, and color grading dictate the emotional impact of every cut—disciplines that directly inform how I design intuitive, rhythm-driven user experiences.
              </p>

              {/* Pillar Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-left">
                <div className="p-3 rounded-xl bg-editor-surface/10 border border-editor-surface/20">
                  <div className="flex items-center gap-2 text-editor-surface mb-1">
                    <Code2 className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Frontend</span>
                  </div>
                  <p className="text-[11px] text-editor-bg/75">React, Next.js, Tailwind, TypeScript</p>
                </div>

                <div className="p-3 rounded-xl bg-editor-surface/10 border border-editor-surface/20">
                  <div className="flex items-center gap-2 text-editor-surface mb-1">
                    <Film className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Video Edit</span>
                  </div>
                  <p className="text-[11px] text-editor-bg/75">Wedding SDEs, Premiere Pro, Color Grading</p>
                </div>

                <div className="p-3 rounded-xl bg-editor-surface/10 border border-editor-surface/20">
                  <div className="flex items-center gap-2 text-editor-surface mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">UI / UX</span>
                  </div>
                  <p className="text-[11px] text-editor-bg/75">Figma, Wireframing, Elementor, SEO</p>
                </div>
              </div>

            </div>

          </div>

          {/* Categorized Skills Section */}
          <div className="w-full flex flex-col items-center gap-6">
            <div className="text-center">
              <span className="font-times-new italic text-editor-surface tracking-widest uppercase text-xs">
                Technical Toolkit
              </span>
              <h3 className="text-2xl sm:text-3xl font-bebas tracking-wide text-editor-bg mt-0.5">
                Tools & Technologies
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              
              {/* Category 1: Development & Code */}
              <div className="p-5 sm:p-6 rounded-2xl bg-editor-bg/5 border border-editor-surface/20 flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-editor-surface flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span>Engineering & Web Development</span>
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {devSkills.map((skill) => (
                    <div 
                      key={skill.text} 
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-editor-surface/10 border border-editor-surface/15 hover:bg-editor-surface/20 hover:border-editor-surface/40 transition-all duration-300 group text-center"
                    >
                      <Image src={skill.icon} alt={skill.text} width={36} height={36} loading="lazy" className="w-8 h-8 object-contain mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-[11px] sm:text-xs font-semibold text-editor-bg">{skill.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2: Creative & Post-Production */}
              <div className="p-5 sm:p-6 rounded-2xl bg-editor-bg/5 border border-editor-surface/20 flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-editor-surface flex items-center gap-2">
                  <Film className="w-4 h-4" />
                  <span>Design & Post-Production</span>
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {creativeSkills.map((skill) => (
                    <div 
                      key={skill.text} 
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-editor-surface/10 border border-editor-surface/15 hover:bg-editor-surface/20 hover:border-editor-surface/40 transition-all duration-300 group text-center"
                    >
                      <Image src={skill.icon} alt={skill.text} width={36} height={36} loading="lazy" className="w-8 h-8 object-contain mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-[11px] sm:text-xs font-semibold text-editor-bg">{skill.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 3A: WEBSITE PROJECTS (#projects) — Light Linen Palette */}
      {/* ================================================================ */}
      <section 
        id="projects" 
        className="text-editor-primary w-full min-h-screen flex flex-col justify-center items-center py-16 sm:py-24 px-3 sm:px-6 max-w-7xl mx-auto border-b border-editor-border/40"
      >
        <div className="flex flex-col items-center text-center gap-2 mb-6 sm:mb-8">
          <span className="font-times-new italic text-editor-accent tracking-widest uppercase text-xs sm:text-sm">
            Curated Deployments & Interactive Systems
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wide text-editor-primary">
            Website Projects
          </h2>
          <p className="text-xs sm:text-sm text-editor-primary/75 max-w-lg">
            Competition entries, municipality portals, and academic thesis platforms built with modern frontend ecosystems.
          </p>
        </div>

        <Carousel items={websiteProjects} ariaLabel="Website Projects Carousel" />
      </section>

      {/* ================================================================ */}
      {/* SECTION 3B: VIDEO FILMS & EDITS — Light Linen Palette */}
      {/* ================================================================ */}
      <section 
        id="video-projects" 
        className="text-editor-primary w-full min-h-screen flex flex-col justify-center items-center py-16 sm:py-24 px-3 sm:px-6 max-w-7xl mx-auto border-b border-editor-border/40"
      >
        <div className="flex flex-col items-center text-center gap-2 mb-6 sm:mb-8">
          <span className="font-times-new italic text-editor-accent tracking-widest uppercase text-xs sm:text-sm">
            Cinematography & Post-Production
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wide text-editor-primary">
            Films & Video Edits
          </h2>
          <p className="text-xs sm:text-sm text-editor-primary/75 max-w-lg">
            Wedding Same-Day-Edits (SDEs), promotional teasers, and narrative music videos edited with cinematic pacing and audio design.
          </p>
        </div>

        <Carousel items={videoProjects} ariaLabel="Video Projects Carousel" />
      </section>

      {/* ================================================================ */}
      {/* SECTION 4: CONTACTS (#contacts) — Deep Roasted Espresso Palette */}
      {/* ================================================================ */}
      <section 
        id="contacts" 
        className="relative py-16 sm:py-24 px-4 sm:px-8 w-full min-h-screen bg-editor-primary text-editor-bg font-poppins flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center gap-2 sm:gap-3 text-center z-10 mb-8 sm:mb-12">
          <span className="font-times-new italic text-editor-surface tracking-widest uppercase text-xs sm:text-sm">
            Let&apos;s Build or Film Together
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wide text-editor-bg">
            Contact Me
          </h2>
          <p className="text-xs sm:text-sm text-editor-bg/80 max-w-md px-2">
            Have a project proposal, web inquiry, or video editing request? Send me a message and I&apos;ll get back to you promptly.
          </p>
        </div>

        {/* 2-Column Split Container */}
        <div className="w-full sm:w-[92%] lg:w-[88%] max-w-5xl z-10 flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12 bg-editor-bg/5 border border-editor-surface/30 p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl relative backdrop-blur-sm">
          
          {/* Left Column: Direct Inquiries */}
          <div className="lg:w-5/12 flex flex-col justify-between gap-6 sm:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-editor-surface/20 border border-editor-surface/30 text-[10px] sm:text-xs font-semibold tracking-wider text-editor-surface w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Freelance & Collaborations
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-editor-bg">
                Let&apos;s discuss your next project
              </h3>
              
              <p className="text-xs sm:text-sm text-editor-bg/80 leading-relaxed">
                Whether you need web application engineering, UI/UX implementation in Figma, or a Same-Day-Edit wedding film, I&apos;m ready to collaborate.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Direct Gmail Card with matching mailto and display */}
              <a 
                href="mailto:santosbuhawie28@gmail.com" 
                className="flex items-center gap-3 sm:gap-4 p-3.5 rounded-2xl bg-editor-surface/10 border border-editor-surface/20 hover:bg-editor-surface/20 hover:border-editor-surface/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-editor-surface/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-editor-surface">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-editor-surface/80 font-semibold">Direct Email</p>
                  <p className="text-xs sm:text-sm font-bold text-editor-bg group-hover:text-editor-surface transition-colors truncate">
                    santosbuhawie28@gmail.com
                  </p>
                </div>
              </a>

              {/* Social Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {contacts.map((contact) => (
                  <Link 
                    key={contact.id} 
                    href={contact.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-3 rounded-2xl bg-editor-surface/10 border border-editor-surface/20 hover:bg-editor-surface/20 hover:border-editor-surface/40 transition-all duration-300 group"
                  >
                    <Image src={contact.icon} alt={contact.platform} width={20} height={20} className="group-hover:scale-110 transition-transform shrink-0 w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                    <div className="overflow-hidden min-w-0">
                      <p className="text-[9px] uppercase tracking-wider text-editor-surface/80 font-semibold">{contact.platform}</p>
                      <p className="text-xs font-bold text-editor-bg truncate">{contact.text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-editor-surface/20 self-stretch" />

          {/* Right Column: Contact Form */}
          <div className="lg:w-6/12 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="client-email" className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-editor-surface">
                  Your Email Address
                </label>
                <input 
                  id="client-email"
                  type="email" 
                  placeholder="name@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-editor-primary/80 border border-editor-surface/30 text-editor-bg placeholder:text-editor-bg/40 focus:outline-none focus:border-editor-surface focus:ring-2 focus:ring-editor-surface/40 transition-all duration-300 text-xs sm:text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="client-subject" className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-editor-surface">
                  Subject / Project Summary
                </label>
                <input 
                  id="client-subject"
                  type="text" 
                  placeholder="Tell me about your web idea or video project"
                  value={clientSubject}
                  onChange={(e) => setClientSubject(e.target.value)}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-editor-primary/80 border border-editor-surface/30 text-editor-bg placeholder:text-editor-bg/40 focus:outline-none focus:border-editor-surface focus:ring-2 focus:ring-editor-surface/40 transition-all duration-300 text-xs sm:text-sm"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSending}
                className="w-full mt-2 bg-editor-surface text-editor-primary font-bold py-3.5 sm:py-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-editor-bg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 text-xs sm:text-sm tracking-wide shadow-md"
              >
                {isSending ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-editor-primary border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {statusMessage && (
                <div className="p-3.5 rounded-xl bg-editor-surface/20 border border-editor-surface/40 text-center animate-fade-in">
                  <p className="text-xs text-editor-bg font-semibold">{statusMessage}</p>
                </div>
              )}
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
