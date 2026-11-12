'use client';

import Image from "next/image";
import Carousel from "@/components/Carousel";
import WebsiteCard from "@/components/WebsiteCard";
import VideoCard from "@/components/VideoCard";
import ProjectReelCard from "@/components/ProjectReelCard";
import Link from "next/link";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { useState } from "react";
import { handleSendEmail } from "./actions";
import { 
  ArrowUpRight, 
  Send, 
  Mail, 
  Code2, 
  Film, 
  Sparkles, 
  GraduationCap, 
  Award, 
  Layers, 
  Terminal, 
  Database, 
  Globe, 
  Building2,
} from "lucide-react";

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

  // Technical skill icon mappings corresponding to files in public/icons/
  const skillIcons: Record<string, string> = {
    "React": "/icons/react.webp",
    "Next.js": "/icons/nextjs.png",
    "Tailwind CSS": "/icons/tailwind.webp",
    "Sass/SCSS": "/icons/sass.png",
    "JavaScript (ES6+)": "/icons/javascript.png",
    "Python": "/icons/python.webp",
    "Supabase": "/icons/supabase.png",
    "PostgreSQL": "/icons/postgresql.png",
    "MySQL": "/icons/mysql.png",
    "WordPress": "/icons/wordpress.png",
    "Elementor": "/icons/elementor.png",
    "Git": "/icons/git.webp",
    "GitHub": "/icons/github.png",
    "GitLab": "/icons/gitlab.svg",
    "Figma": "/icons/figma.svg",
    "Adobe XD": "/icons/adobexd.webp",
    "Adobe Illustrator": "/icons/adobe_illustrator.webp",
    "Lucidchart": "/icons/lucidchart.webp",
    "Miro": "/icons/miro.svg",
  };

  // 6 Structured Skill Categories as specified
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Code2 className="w-4 h-4 text-editor-surface" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Sass/SCSS", "JavaScript (ES6+)"]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-4 h-4 text-editor-surface" />,
      skills: ["Python", "Supabase", "PostgreSQL", "MySQL", "SQL"]
    },
    {
      title: "APIs & Data Fetching",
      icon: <Layers className="w-4 h-4 text-editor-surface" />,
      skills: ["RESTful APIs", "Axios", "TanStack Query", "Postman"]
    },
    {
      title: "CMS & Web Platforms",
      icon: <Globe className="w-4 h-4 text-editor-surface" />,
      skills: ["WordPress", "Elementor", "Advanced Custom Fields (ACF)"]
    },
    {
      title: "Version Control & Methodology",
      icon: <Terminal className="w-4 h-4 text-editor-surface" />,
      skills: ["Git", "GitHub", "GitLab", "Agile / Scrum", "SRS Documentation"]
    },
    {
      title: "UI/UX & Multimedia",
      icon: <Film className="w-4 h-4 text-editor-surface" />,
      skills: ["Figma", "Adobe XD", "Adobe Illustrator", "Lucidchart", "Miro", "Video Editing"]
    }
  ];

  const workExperience = [
    {
      id: "zynappse",
      company: "Zynappse Corporation",
      role: "Web Developer Intern",
      duration: "February 2026 – April 2026",
      badges: ["Next.js", "React", "Sass/SCSS", "Flutter", "Postman", "REST API", "GitLab", "Adobe XD", "Adobe Illustrator"],
      achievements: [
        "Migrated legacy React applications to Next.js, implementing Server-Side Rendering (SSR) and modular SCSS architecture for enhanced responsiveness and page performance.",
        "Tested and validated RESTful API endpoints for a Flutter-based store clock-in application using Postman.",
        "Managed code integration and resolution of Git merge conflicts in GitLab during sprint development cycles.",
        "Designed website prototypes and vector UI assets using Adobe XD and Adobe Illustrator."
      ]
    },
    {
      id: "exaweb",
      company: "ExaWeb Corporation",
      role: "Web Developer Intern",
      duration: "July 2025 – August 2025",
      badges: ["WordPress", "Elementor", "ACF/SCF", "SEO", "Lighthouse", "PageSpeed Insights", "Agile/Scrum"],
      achievements: [
        "Built and modernized client websites using WordPress and Elementor, configuring Advanced Custom Fields (ACF) and Secure Custom Fields (SCF) for tailored content management.",
        "Conducted technical SEO audits, meta-data optimization, and performance refactoring using PageSpeed Insights and Google Lighthouse.",
        "Participated in daily Agile standups and sprint planning sessions to prioritize web optimization tasks."
      ]
    },
    {
      id: "freelance-film",
      company: "Freelance Creative",
      role: "Lead Video Editor & Event Cinematographer",
      duration: "2023 – Present",
      badges: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading", "Audio Mastering", "Same-Day-Edits (SDE)"],
      achievements: [
        "Directed, filmed, and edited Same-Day-Edit (SDE) wedding films, debut teasers, and promotional reels under rapid event turnaround deadlines.",
        "Engineered narrative audio pacing and rhythm cuts synced with emotional score arrangements.",
        "Executed film-look color grading, cinematic LUT workflows, and high-fidelity video mastering for web and commercial broadcast."
      ]
    }
  ];

  const education = [
    {
      institution: "Polytechnic University of the Philippines",
      campus: "Sta. Mesa, Manila",
      degree: "Diploma in Information Technology",
      year: "Class of 2026",
      honor: "GWA: 1.34",
      description: "Comprehensive coursework in software architecture, web application engineering, database administration, and capstone systems analysis."
    },
    {
      institution: "Systems Technology Institute",
      campus: "STI College Ortigas-Cainta",
      degree: "Mobile App and Web Development (MAWD)",
      year: "Graduated 2023",
      honor: null,
      description: "Focused foundation in user interface design, core programming principles, object-oriented concepts, and mobile application prototypes."
    }
  ];

  const certifications = [
    {
      title: "TESDA National Certificate II (NC II)",
      field: "Computer Systems Servicing",
      description: "Certified competency in hardware diagnostics, network cable configuration, operating system installation, and computer servicing."
    },
    {
      title: "TESDA National Certificate III (NC III)",
      field: "Visual Graphics Design",
      description: "Certified proficiency in vector illustration, digital layouts, raster asset production, and typography composition for print and web media."
    }
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
          type="Capstone Thesis"
          title="OASIS: OJT Administration & Information System"
          tagline="Centralized web system for PUP ITech internship administration."
          role="Full-Stack/Frontend Developer & System Analyst (Capstone)"
          description="Modeled system workflows and produced comprehensive SRS documentation, DFDs, ERDs, and sequence diagrams. Built dynamic frontend components connected to asynchronous REST API endpoints via TanStack Query for cached data fetching and state management."
          link="https://oasis-webapp-p21y.vercel.app/"
          mockupImg="/websites/oasis.png"
          tags={["React", "Tailwind CSS", "Python", "Axios", "TanStack Query", "PostgreSQL", "Vercel"]}
        />
      )
    },
    {
      id: "web-2",
      content: (
        <WebsiteCard 
          type="International Competition"
          title="TAHAK: Wellness Tourism Booking Platform"
          tagline="Single-page wellness tourism platform developed for a venture in Dolores, Quezon."
          role="Web Application Developer"
          description="Architected a responsive single-page application (SPA) handling both tourist customer bookings and internal administrative dashboard controls. Partnered with a multidisciplinary team (biology & tourism specialists) to translate an award-winning ecotourism pitch into an operational production build."
          link="https://tahakver2.vercel.app/"
          mockupImg="/websites/tahak.png"
          tags={["React", "Supabase", "Tailwind CSS", "Vercel"]}
        />
      )
    },
    {
      id: "web-3",
      content: (
        <WebsiteCard 
          type="Municipality Portal"
          title="Ibajay Aklan Official Web Platform"
          tagline="Public portal and municipal digital record system."
          role="UI/UX Designer & Frontend Engineer"
          description="Led the design in Figma and built the frontend with JavaScript, routing parameters, and PHP/MySQL backend for municipal public access and records."
          link="https://ibajayaklan.vercel.app/"
          mockupImg="/websites/ibajay.png"
          tags={["JavaScript", "Figma", "PHP", "MySQL"]}
        />
      )
    },
    {
      id: "web-4",
      content: (
        <WebsiteCard 
          type="Administrative System"
          title="Market Vendor Registration & Records Portal"
          tagline="Tabular database and vendor management system."
          role="Full-Stack Developer"
          description="Vendor records management platform with tabular databases, customized spreadsheet Excel export plugins, and secure database persistence."
          link="https://team2-web.vercel.app/market_vendor/landingPage.html"
          mockupImg="/websites/vendor.png"
          tags={["HTML5/JS", "PHP", "MySQL", "Excel Export"]}
        />
      )
    },
  ];

  const heroReelProjects = [
    {
      id: "hero-oasis",
      content: (
        <ProjectReelCard 
          title="OASIS: OJT Administration & Information System"
          category="Administrative System"
          imageSrc="/websites/oasis.png"
          targetHref="#projects"
        />
      )
    },
    {
      id: "hero-sde",
      content: (
        <ProjectReelCard 
          title="Wedding SDE (Same Day Edit)"
          category="Wedding SDE"
          imageSrc="https://img.youtube.com/vi/VJffXfBqQF4/hqdefault.jpg"
          targetHref="#video-projects"
        />
      )
    },
    {
      id: "hero-tahak",
      content: (
        <ProjectReelCard 
          title="TAHAK: Wellness Tourism Booking Platform"
          category="Booking Platform"
          imageSrc="/websites/tahak.png"
          targetHref="#projects"
        />
      )
    },
    {
      id: "hero-teaser",
      content: (
        <ProjectReelCard 
          title="Capstone Project Cinematic Teaser"
          category="Project Teaser"
          imageSrc="https://img.youtube.com/vi/wJFLJMs7fls/hqdefault.jpg"
          targetHref="#video-projects"
        />
      )
    },
    {
      id: "hero-vendor",
      content: (
        <ProjectReelCard 
          title="Market Vendor Registration & Records Portal"
          category="Administrative System"
          imageSrc="/websites/vendor.png"
          targetHref="#projects"
        />
      )
    },
    {
      id: "hero-anime",
      content: (
        <ProjectReelCard 
          title="Anime-Inspired Wedding Film"
          category="Creative Wedding"
          imageSrc="https://img.youtube.com/vi/-yE81PG0o1U/hqdefault.jpg"
          targetHref="#video-projects"
        />
      )
    },
    {
      id: "hero-ibajay",
      content: (
        <ProjectReelCard 
          title="Ibajay Aklan Official Web Platform"
          category="Municipality Portal"
          imageSrc="/websites/ibajay.png"
          targetHref="#projects"
        />
      )
    },
    {
      id: "hero-std",
      content: (
        <ProjectReelCard 
          title="Save the Date Cinematic Edit"
          category="Save The Date"
          imageSrc="https://img.youtube.com/vi/omgqVTdsSRg/hqdefault.jpg"
          targetHref="#video-projects"
        />
      )
    },
    {
      id: "hero-music",
      content: (
        <ProjectReelCard 
          title="School Organization Music Video"
          category="Music Video"
          imageSrc="https://img.youtube.com/vi/-z8U2AdQpEE/hqdefault.jpg"
          targetHref="#video-projects"
        />
      )
    },
    {
      id: "hero-debut",
      content: (
        <ProjectReelCard 
          title="Debutant Save the Date Film"
          category="Debut Film"
          imageSrc="https://img.youtube.com/vi/n81224VWB5Q/hqdefault.jpg"
          targetHref="#video-projects"
        />
      )
    },
  ];

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
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bebas tracking-wide leading-none text-editor-primary">
              Buhawie Santos
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base text-editor-primary/80 font-medium tracking-wide max-w-xl leading-relaxed">
              Frontend Web Developer crafting responsive React & Next.js applications, paired with professional event cinematography and same-day-edit (SDE) filmmaking.
            </p>

            {/* Social Channels */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              {contacts.map((contact) => (
                <Link 
                  href={contact.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={contact.id} 
                  className="comic-pill group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-editor-surface/20 border border-editor-surface/40 hover:bg-editor-surface/40 hover:border-editor-accent/50 shadow-xs"
                >
                  <Image src={contact.icon} alt={contact.platform} width={20} height={20} priority className="comic-icon w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                  <span className="comic-text text-xs font-bold text-editor-primary">{contact.platform}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Tactile CTAs */}
          <div className="flex flex-row items-center gap-3 w-full sm:w-auto shrink-0 justify-center lg:justify-end">
            <Link href="#contacts" className="flex-1 sm:flex-initial">
              <button className="comic-btn group w-full sm:w-auto bg-editor-primary text-editor-bg border border-editor-primary px-6 py-3.5 rounded-xl font-bold cursor-pointer hover:bg-editor-accent hover:border-editor-accent text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-md">
                <span className="comic-text">Start a Project</span>
                <Send className="comic-icon w-3.5 h-3.5" />
              </button>
            </Link>
            
            <Link href="#projects" className="flex-1 sm:flex-initial">
              <button className="comic-btn group w-full sm:w-auto cursor-pointer border border-editor-primary/40 bg-editor-surface/20 px-6 py-3.5 rounded-xl text-editor-primary font-bold hover:bg-editor-primary hover:text-editor-bg text-xs sm:text-sm tracking-wide flex items-center justify-center gap-1.5 shadow-xs">
                <span className="comic-text">Browse Work</span>
                <ArrowUpRight className="comic-icon w-4 h-4" />
              </button>
            </Link>
          </div>

        </div>
        
        {/* Film Slate Reel Marquee */}
        <div className="mt-10 sm:mt-14 w-full relative z-10 border-t border-editor-primary/10 pt-4">
          <TestimonialCarousel items={heroReelProjects} speed="normal" />
        </div>
        
      </section>

      {/* ================================================================ */}
      {/* SECTION 2: ABOUT (#about) — Deep Roasted Espresso Palette */}
      {/* ================================================================ */}
      <section 
        id="about" 
        className="relative py-16 sm:py-24 px-4 sm:px-8 w-full min-h-screen bg-editor-primary text-editor-bg font-poppins flex flex-col justify-center items-center border-b border-editor-surface/20 scroll-mt-20 sm:scroll-mt-28"
      >
        <div className="w-full max-w-5xl flex flex-col items-center gap-12 sm:gap-16 z-10">
          
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center gap-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wide text-editor-bg">
              About Buwie
            </h2>
          </div>

          {/* Bio Frame: Analog Darkroom Portrait + Editorial Story — unboxed, direct on canvas */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-10 sm:gap-16">
            
            {/* Darkroom Portrait */}
            <div className="relative group shrink-0">
              <Image 
                src="/editor_logo/buwie_pic.jpg" 
                alt="Buhawie Santos" 
                width={240} 
                height={240} 
                loading="lazy" 
                className="w-40 h-40 sm:w-52 sm:h-52 rounded-xl object-cover grayscale-20 contrast-105 group-hover:grayscale-0 transition-all duration-500" 
              />
              <div className="mt-2.5 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-editor-surface/80">
                  SAN PEDRO, PH · 2026
                </span>
              </div>
            </div>

            {/* Narrative Story */}
            <div className="flex flex-col gap-4 text-center md:text-left text-xs sm:text-sm md:text-base leading-relaxed text-editor-bg/90">
              <p>
                I am <span className="font-bold text-editor-surface">Buhawie Santos</span> (friends and collaborators call me <span className="font-bold text-editor-surface">Buwie</span>). I am an Information Technology student and web developer based in the Philippines, working where structured engineering meets visual storytelling.
              </p>
              
              <p>
                On the code side, I build responsive, production-ready web applications using <strong className="text-editor-bg font-semibold">React, Next.js, Tailwind CSS, and Python/Node.js</strong>. I enjoy crafting clean layouts, architecting maintainable component hierarchies, and implementing accessible interactions with state management like TanStack Query.
              </p>

              <p>
                In cinematography and post-production, I direct and edit <strong className="text-editor-bg font-semibold">Same-Day-Edits (SDEs), wedding films, and debut teasers</strong>. Pacing, audio cutting, and color grading dictate the emotional impact of every cut—disciplines that directly inform how I design intuitive, rhythm-driven user experiences.
              </p>

              {/* Pillar List — editorial typographic columns, no boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 pt-4 text-left border-t border-editor-surface/20">
                <div className="py-4 sm:pr-6 sm:border-r border-editor-surface/15">
                  <div className="flex items-center gap-2 text-editor-surface mb-1.5">
                    <Code2 className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Frontend</span>
                  </div>
                  <p className="text-[11px] text-editor-bg/70">React, Next.js, Tailwind, TypeScript, SCSS</p>
                </div>

                <div className="py-4 sm:px-6 sm:border-r border-editor-surface/15 border-t sm:border-t-0 border-editor-surface/15">
                  <div className="flex items-center gap-2 text-editor-surface mb-1.5">
                    <Film className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Video Edit</span>
                  </div>
                  <p className="text-[11px] text-editor-bg/70">Wedding SDEs, Premiere Pro, Color Grading</p>
                </div>

                <div className="py-4 sm:pl-6 border-t sm:border-t-0 border-editor-surface/15">
                  <div className="flex items-center gap-2 text-editor-surface mb-1.5">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">UI / UX</span>
                  </div>
                  <p className="text-[11px] text-editor-bg/70">Figma, Adobe XD, Wireframing, Elementor, SEO</p>
                </div>
              </div>

            </div>

          </div>

          {/* Tech Stack — open directory grid with comic distorted logo popups */}
          <div className="w-full flex flex-col gap-6">
            <div className="border-b border-editor-surface/20 pb-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bebas tracking-wide text-editor-bg">
                Tech Stack
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7 w-full">
              {skillCategories.map((category) => (
                <div 
                  key={category.title}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2 pb-2 border-b border-editor-surface/15">
                    {category.icon}
                    <span className="text-xs font-bold uppercase tracking-wider text-editor-surface">
                      {category.title}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => {
                      const iconPath = skillIcons[skill];
                      return iconPath ? (
                        <div
                          key={skill}
                          tabIndex={0}
                          role="button"
                          aria-label={`${skill} skill icon popup`}
                          className="group relative inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-editor-surface/10 text-editor-bg/85 hover:text-editor-bg hover:bg-editor-surface/20 border border-editor-surface/20 hover:border-editor-accent/70 cursor-pointer active:scale-95 transition-all duration-200 select-none hover:z-30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-editor-accent"
                        >
                          <span className="relative z-10 transition-transform duration-200 group-hover:scale-105 inline-block">
                            {skill}
                          </span>

                          {/* Comic Distorted Logo Popup */}
                          <div 
                            className="comic-distort-bubble hidden group-hover:flex group-focus-visible:flex absolute bottom-[calc(100%+8px)] left-1/2 z-40 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]"
                          >
                            <div className="relative flex items-center justify-center p-2 rounded-xl bg-editor-bg border-2 border-editor-primary shadow-[3px_3px_0px_#8B6F4E]">
                              <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                                <Image 
                                  src={iconPath} 
                                  alt={`${skill} icon`} 
                                  fill 
                                  className="comic-inner-icon object-contain" 
                                  sizes="36px"
                                />
                              </div>
                              {/* Comic Speech Pointer pointing to text base */}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-editor-primary border-t-[6px] border-x-transparent border-x-[5px] border-b-0" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <span 
                          key={skill}
                          className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-editor-surface/10 text-editor-bg/75 border border-transparent select-none"
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 3: WORK EXPERIENCE & EDUCATION (#experience) — Deep Roasted Espresso */}
      {/* ================================================================ */}
      <section 
        id="experience" 
        className="relative py-16 sm:py-24 px-4 sm:px-8 w-full min-h-screen bg-editor-primary text-editor-bg font-poppins flex flex-col justify-center items-center border-b border-editor-surface/20 scroll-mt-20 sm:scroll-mt-28"
      >
        <div className="w-full max-w-5xl flex flex-col items-center gap-14 sm:gap-20 z-10">
          
          {/* Header */}
          <div className="w-full flex flex-col gap-2 border-b border-editor-surface/20 pb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wide text-editor-bg">
              Work Experience
            </h2>
            <p className="text-xs sm:text-sm text-editor-bg/75 max-w-lg">
              Production code migrations, full-stack application testing, and client web optimization.
            </p>
          </div>

          {/* Timeline — unboxed editorial list */}
          <div className="relative w-full flex flex-col gap-0">
            {workExperience.map((item, index) => (
              <div 
                key={item.id} 
                className="relative flex flex-col md:flex-row items-start gap-6 sm:gap-10 py-8 sm:py-10 border-b border-editor-surface/15 last:border-b-0"
              >
                {/* Timeline Index */}
                <div className="hidden md:flex shrink-0 w-10 items-start justify-center pt-1">
                  <span className="font-bebas text-3xl text-editor-surface/40 leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content Block */}
                <div className="flex-1 flex flex-col gap-3">
                  
                  {/* Top Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-editor-bg leading-tight">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-editor-surface flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-editor-surface/70 shrink-0" />
                        <span>{item.company}</span>
                      </p>
                    </div>

                    <span className="text-xs font-mono text-editor-surface/70 tracking-wide whitespace-nowrap mt-1">
                      {item.duration}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.badges.map((badge) => (
                      <span 
                        key={badge} 
                        className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md bg-editor-surface/10 text-editor-surface/90"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Achievements */}
                  <ul className="flex flex-col gap-2 pt-1 text-xs sm:text-sm text-editor-bg/80 leading-relaxed">
                    {item.achievements.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-editor-surface/50 mt-1 shrink-0">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            ))}
          </div>

          {/* Education & Certifications — open typographic layout */}
          <div className="w-full flex flex-col gap-8">
            <div className="border-b border-editor-surface/20 pb-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bebas tracking-wide text-editor-bg">
                Education & Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full">
              
              {/* Education Block */}
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold uppercase tracking-wider text-editor-surface flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Credentials</span>
                </span>

                <div className="flex flex-col gap-6">
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 pb-6 border-b border-editor-surface/10 last:border-b-0 last:pb-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-editor-bg leading-snug">
                            {edu.institution}
                          </h4>
                          <p className="text-xs text-editor-surface font-medium">{edu.campus}</p>
                        </div>
                        {edu.honor && (
                          <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-editor-surface text-editor-primary shrink-0">
                            {edu.honor}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-semibold text-editor-bg/85 mt-0.5">
                        <span>{edu.degree}</span>
                        <span className="text-editor-surface/40">·</span>
                        <span className="text-editor-surface">{edu.year}</span>
                      </div>

                      <p className="text-[11px] sm:text-xs text-editor-bg/65 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Block */}
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold uppercase tracking-wider text-editor-surface flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Professional Certifications</span>
                </span>

                <div className="flex flex-col gap-6">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 pb-6 border-b border-editor-surface/10 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-editor-surface">
                        <span>{cert.field}</span>
                      </div>
                      
                      <h4 className="text-sm sm:text-base font-bold text-editor-bg leading-snug">
                        {cert.title}
                      </h4>

                      <p className="text-[11px] sm:text-xs text-editor-bg/65 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 4A: WEBSITE PROJECTS (#projects) — Light Linen Palette */}
      {/* ================================================================ */}
      <section 
        id="projects" 
        className="text-editor-primary w-full min-h-screen flex flex-col justify-center items-center py-16 sm:py-24 px-3 sm:px-6 max-w-7xl mx-auto border-b border-editor-border/40 scroll-mt-20 sm:scroll-mt-28"
      >
        <div className="flex flex-col items-center text-center gap-2 mb-6 sm:mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wide text-editor-primary">
            Website Projects
          </h2>
          <p className="text-xs sm:text-sm text-editor-primary/75 max-w-lg">
            Production thesis systems, competition entries, and municipal web platforms engineered with React and modern APIs.
          </p>
        </div>

        <Carousel items={websiteProjects} ariaLabel="Website Projects Carousel" />
      </section>

      {/* ================================================================ */}
      {/* SECTION 4B: VIDEO FILMS & EDITS — Light Linen Palette */}
      {/* ================================================================ */}
      <section 
        id="video-projects" 
        className="text-editor-primary w-full min-h-screen flex flex-col justify-center items-center py-16 sm:py-24 px-3 sm:px-6 max-w-7xl mx-auto border-b border-editor-border/40 scroll-mt-20 sm:scroll-mt-28"
      >
        <div className="flex flex-col items-center text-center gap-2 mb-6 sm:mb-8">
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
      {/* SECTION 5: CONTACTS (#contacts) — Deep Roasted Espresso Palette */}
      {/* ================================================================ */}
      <section 
        id="contacts" 
        className="relative py-16 sm:py-24 px-4 sm:px-8 w-full min-h-screen bg-editor-primary text-editor-bg font-poppins flex flex-col justify-center items-center scroll-mt-20 sm:scroll-mt-28"
      >
        <div className="w-full max-w-5xl z-10 flex flex-col gap-10 sm:gap-16">

          {/* Contact Header */}
          <div className="border-b border-editor-surface/20 pb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wide text-editor-bg">
              Contact Me
            </h2>
            <p className="text-xs sm:text-sm text-editor-bg/75 max-w-md mt-2">
              Have a project proposal, web inquiry, or video editing request? Send me a message and I&apos;ll get back to you promptly.
            </p>
          </div>

          {/* 2-Column open split — no glass box */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
          
          {/* Left Column: Direct Inquiries */}
          <div className="lg:w-5/12 flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-editor-bg">
                Let&apos;s discuss your next project
              </h3>
              
              <p className="text-xs sm:text-sm text-editor-bg/80 leading-relaxed">
                Whether you need web application engineering, UI/UX implementation in Figma, or a Same-Day-Edit wedding film, I&apos;m ready to collaborate.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Direct Gmail */}
              <a 
                href="mailto:santosbuhawie28@gmail.com" 
                className="comic-pill group flex items-center gap-3 sm:gap-4 py-3.5 border-b border-editor-surface/15 hover:border-editor-surface/35"
              >
                <div className="comic-icon w-9 h-9 rounded-lg bg-editor-surface/15 flex items-center justify-center shrink-0 text-editor-surface">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-editor-surface/70 font-semibold">Direct Email</p>
                  <p className="comic-text text-xs sm:text-sm font-bold text-editor-bg group-hover:text-editor-surface transition-colors truncate">
                    santosbuhawie28@gmail.com
                  </p>
                </div>
              </a>

              {/* Social Channels */}
              <div className="flex flex-col gap-0">
                {contacts.map((contact) => (
                  <Link 
                    key={contact.id} 
                    href={contact.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="comic-pill group flex items-center gap-3 py-3.5 border-b border-editor-surface/15 hover:border-editor-surface/35"
                  >
                    <Image src={contact.icon} alt={contact.platform} width={20} height={20} className="comic-icon shrink-0 w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                    <div className="overflow-hidden min-w-0">
                      <p className="text-[9px] uppercase tracking-wider text-editor-surface/70 font-semibold">{contact.platform}</p>
                      <p className="comic-text text-xs font-bold text-editor-bg truncate">{contact.text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-editor-surface/15 self-stretch" />

          {/* Right Column: Contact Form */}
          <div className="lg:w-6/12 flex flex-col justify-center w-full">
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
                className="comic-btn group w-full mt-2 bg-editor-surface text-editor-primary font-bold py-3.5 sm:py-4 rounded-xl cursor-pointer hover:bg-editor-bg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 text-xs sm:text-sm tracking-wide"
              >
                {isSending ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-editor-primary border-t-transparent rounded-full animate-spin" />
                    <span className="comic-text">Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span className="comic-text">Send Message</span>
                    <Send className="comic-icon w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {statusMessage && (
                <div className="pt-3 border-t border-editor-surface/20 text-center">
                  <p className="text-xs text-editor-bg/80 font-semibold">{statusMessage}</p>
                </div>
              )}
            </form>
          </div>

          </div>
        </div>
      </section>

    </div>
  );
}
