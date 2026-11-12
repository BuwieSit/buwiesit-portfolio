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
  const [activeDiscipline, setActiveDiscipline] = useState<'frontend' | 'video' | 'uiux'>('frontend');

  const disciplines = {
    frontend: {
      id: 'frontend',
      label: 'Frontend',
      title: 'Frontend Engineering & Architecture',
      tagline: 'Component hierarchies, asynchronous state, and clean web deployments',
      icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />,
      whatIDid: 'Engineered responsive single-page applications and web portals connected to RESTful APIs. Built cached state management with TanStack Query, structured SRS/DFD specifications, and designed component design systems.',
      whatIUsed: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript (ES6+)', 'TanStack Query', 'REST APIs', 'Supabase', 'Vercel'],
      badge: 'PROD_BUILD // 2026',
    },
    video: {
      id: 'video',
      label: 'Video Edit',
      title: 'Cinematography & Same-Day-Edits (SDE)',
      tagline: 'Emotional pacing, narrative audio cuts, and film-look color mastering',
      icon: <Film className="w-4 h-4 sm:w-5 sm:h-5" />,
      whatIDid: 'Directed and edited high-pressure wedding Same-Day-Edits (SDEs), event teasers, and music videos under rapid same-day deadlines. Engineered emotional narrative audio cuts synced with cinematic score arrangements and color grading.',
      whatIUsed: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Color Grading (LUTs)', 'Audio Mastering', 'Same-Day-Edits (SDE)', 'Multi-Cam Editing'],
      badge: 'REC ● 4K 24FPS',
    },
    uiux: {
      id: 'uiux',
      label: 'UI / UX',
      title: 'UI/UX & Product Design Systems',
      tagline: 'Figma prototypes, design tokens, and human-centered design',
      icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
      whatIDid: 'Led end-to-end interface design in Figma and Adobe XD for university administrative platforms and municipal records systems. Produced high-fidelity interactive wireframes, component design systems, and conducted usability audits.',
      whatIUsed: ['Figma', 'Adobe XD', 'Adobe Illustrator', 'Wireframing', 'Design Systems', 'Miro', 'Lucidchart', 'Elementor', 'SEO Audits'],
      badge: 'FIGMA // AUTO-LAYOUT',
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    const form = e.currentTarget as HTMLFormElement;
    const website = new FormData(form).get('website')?.toString() ?? '';
    const result = await handleSendEmail(clientEmail, clientSubject, website);
    
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
        className="relative w-full min-h-screen pt-28 sm:pt-36 pb-6 sm:pb-10 flex flex-col justify-between items-center text-editor-primary border-b border-editor-border/40 overflow-hidden"
      >
        {/* Core Hero Editorial Container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-between items-center flex-1 z-10">
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
        </div>
        
        {/* Full-bleed Tilted Maximalist Comic Carousel across 100% of Screen Width */}
        <div className="w-full relative mt-8 sm:mt-12 z-10 overflow-hidden pointer-events-none select-none">
          <TestimonialCarousel items={heroReelProjects} speed="normal" />
        </div>
        
      </section>

      {/* ================================================================ */}
      {/* SECTION 2: ABOUT (#about) — Deep Roasted Espresso Palette */}
      {/* ================================================================ */}
      <section 
        id="about" 
        className="relative py-16 sm:py-24 w-full min-h-screen bg-editor-primary text-editor-bg font-poppins flex flex-col justify-center items-center border-b border-editor-surface/20 scroll-mt-20 sm:scroll-mt-28 overflow-hidden"
      >
        {/* Top Bio Container: Centered max-w-5xl */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center gap-10 sm:gap-14 z-10">
          
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center gap-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wide text-editor-bg">
              About Buwie
            </h2>
          </div>

          {/* Bio Frame: Analog Darkroom Portrait + Punchy One-Paragraph Editorial Summary */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-8 sm:gap-12">
            
            {/* Darkroom Portrait with Comic Cel Border */}
            <div className="relative group shrink-0">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-2xl overflow-hidden border-[3px] border-editor-surface shadow-[6px_6px_0px_#8B6F4E] -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                <Image 
                  src="/editor_logo/buwie_pic.jpg" 
                  alt="Buhawie Santos" 
                  fill 
                  sizes="224px" 
                  className="object-cover grayscale-15 contrast-105 group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <div className="mt-3 text-center">
                <span className="inline-block bg-editor-primary px-3 py-1 rounded-md border border-editor-surface/30 font-bebas text-xs sm:text-sm tracking-widest text-editor-surface shadow-xs">
                  RIZAL, PH · VOL. 2026
                </span>
              </div>
            </div>

            {/* Narrative Story: Concise One-Paragraph Summary */}
            <div className="flex flex-col gap-3 text-center md:text-left justify-center flex-1">
              <div className="inline-flex items-center justify-center md:justify-start">
                <span className="font-bebas text-xs sm:text-sm tracking-widest uppercase px-2.5 py-0.5 rounded-md bg-editor-surface text-editor-primary font-bold shadow-[2px_2px_0px_#2A1F14]">
                  CREATIVE PROFILE
                </span>
              </div>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-editor-bg/95 font-medium">
                I am <strong className="text-editor-surface font-bold">Buhawie &ldquo;Buwie&rdquo; Santos</strong>—an Information Technology graduate and event cinematographer based in Rizal, Philippines. I specialize in the user experience side of frontend engineering and UI/UX design, crafting human-centered, responsive interfaces with <strong className="text-editor-surface font-semibold">React, Next.js, and Figma</strong>. Blending design systems and accessible frontend architecture with the rhythmic storytelling of <strong className="text-editor-surface font-semibold">Same-Day-Edit (SDE) wedding films</strong>, I create intuitive digital products and cinematic visuals that feel intentional, tactile, and alive.
              </p>
            </div>

          </div>

        </div>

        {/* FULL SCREEN WIDTH: Interactive Disciplines Showcase (FRONTEND, VIDEO EDIT, UI / UX) */}
        <div className="w-full relative my-12 sm:my-16 z-10 border-y-[3px] sm:border-y-4 border-editor-surface/40 bg-editor-primary shadow-[0_12px_24px_rgba(0,0,0,0.4)]">
          {/* Background Comic Halftone Dot Matrix Accent across whole screen */}
          <div className="absolute inset-0 bg-[radial-gradient(#C9B896_1.5px,transparent_1.5px)] [background-size:22px_22px] opacity-15 pointer-events-none" />

          {/* Top Comic Banner Tape Rule */}
          <div className="w-full bg-editor-surface text-editor-primary py-3 sm:py-2 border-b-2 border-editor-primary flex items-center justify-center overflow-hidden font-bebas text-xs sm:text-sm tracking-widest uppercase">
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 flex flex-col gap-8 z-10 relative">
            
            {/* Category Toggle Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
              {(['frontend', 'video', 'uiux'] as const).map((tabKey) => {
                const tab = disciplines[tabKey];
                const isActive = activeDiscipline === tabKey;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDiscipline(tabKey)}
                    className={`comic-pill group flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-all duration-200 select-none ${
                      isActive
                        ? 'bg-editor-surface text-editor-primary border-2 border-editor-primary shadow-[5px_5px_0px_#8B6F4E] -rotate-1 scale-105'
                        : 'bg-editor-surface/10 text-editor-bg/75 border-2 border-editor-surface/25 hover:border-editor-surface/60 hover:text-editor-bg hover:bg-editor-surface/20'
                    }`}
                  >
                    <span className={isActive ? 'text-editor-primary' : 'text-editor-surface'}>
                      {tab.icon}
                    </span>
                    <span className="font-bebas text-sm sm:text-base tracking-wider uppercase">
                      {tab.label}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-editor-primary animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Category Showcase Panel with Custom Job Highlights */}
            {(() => {
              const cur = disciplines[activeDiscipline];
              return (
                <div className="w-full rounded-2xl border-2 sm:border-[3px] border-editor-surface shadow-[8px_8px_0px_#8B6F4E] bg-editor-primary/95 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-14 relative overflow-hidden transition-all duration-300">
                  
                  {/* Inner Comic Grid Accent */}
                  <div className="absolute inset-0 bg-[radial-gradient(#C9B896_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                  {/* Left Column: What I Did & What I Used */}
                  <div className="flex-1 flex flex-col gap-4 z-10 w-full text-left">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="font-bebas text-xs sm:text-sm tracking-widest text-editor-primary bg-editor-surface px-2.5 py-0.5 rounded shadow-[2px_2px_0px_#2A1F14] font-bold">
                        {cur.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bebas tracking-wide text-editor-bg">
                        {cur.title}
                      </h3>
                      <p className="font-times-new italic text-xs sm:text-sm md:text-base text-editor-surface mt-0.5">
                        {cur.tagline}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-editor-surface">
                        What I Did:
                      </span>
                      <p className="text-xs sm:text-sm md:text-base text-editor-bg/85 leading-relaxed">
                        {cur.whatIDid}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-editor-surface/15">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-editor-surface">
                        What I Used:
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {cur.whatIUsed.map((tool) => (
                          <span 
                            key={tool}
                            className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-editor-surface/15 text-editor-bg border border-editor-surface/25 shadow-2xs"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Props & Highlight Shapes for Each Job */}
                  <div className="w-full lg:w-5/12 z-10 flex flex-col justify-center shrink-0">
                    {activeDiscipline === 'frontend' && (
                      <div className="flex flex-col gap-2.5 w-full bg-editor-primary/95 border-2 border-editor-surface/50 rounded-xl p-3.5 sm:p-5 shadow-[4px_4px_0px_#8B6F4E] relative overflow-hidden">
                        {/* Browser Bar */}
                        <div className="flex items-center justify-between pb-2 border-b border-editor-surface/20">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/20" />
                          </div>
                          <div className="px-3 py-0.5 rounded-md bg-editor-surface/15 text-[10px] text-editor-surface font-mono">
                            https://buwie.dev/frontend
                          </div>
                          <div className="text-[10px] font-mono text-editor-surface/60">
                            SSR
                          </div>
                        </div>
                        
                        {/* Mockup Wireframe Screen */}
                        <div className="space-y-2 pt-1 font-mono text-[11px] sm:text-xs text-editor-bg/85">
                          <div className="flex items-center gap-2 text-editor-surface">
                            <span className="text-editor-accent font-bold">&lt;ApplicationArchitecture&gt;</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-editor-surface/20 text-editor-surface font-semibold">200 OK</span>
                          </div>
                          <div className="pl-3 border-l-2 border-editor-surface/30 space-y-1">
                            <p className="text-editor-bg/90">&lt;<span className="text-editor-surface font-bold">ClientProvider</span> cache=&#123;tanstack&#125; /&gt;</p>
                            <p className="text-editor-bg/90">&lt;<span className="text-editor-surface font-bold">ModularLayout</span> responsive=&#123;true&#125;&gt;</p>
                            <p className="pl-3 text-editor-surface/75">// Server-Side Rendered components</p>
                            <p className="text-editor-bg/90">&lt;/<span className="text-editor-surface font-bold">ModularLayout</span>&gt;</p>
                          </div>
                          <div className="text-editor-accent font-bold">&lt;/ApplicationArchitecture&gt;</div>
                        </div>

                        {/* Floating Comic Stickers */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-editor-surface/15">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-editor-bg text-editor-primary border border-editor-primary shadow-[1px_1px_0px_#2A1F14]">
                            npm run build: ✓ 0 errors
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-editor-surface text-editor-primary border border-editor-primary shadow-[1px_1px_0px_#2A1F14]">
                            TanStack Query v5
                          </span>
                        </div>
                      </div>
                    )}

                    {activeDiscipline === 'video' && (
                      <div className="flex flex-col gap-2.5 w-full bg-editor-primary/95 border-2 border-editor-surface/50 rounded-xl p-3.5 sm:p-5 shadow-[4px_4px_0px_#8B6F4E] relative overflow-hidden">
                        {/* Film Strip Header with Perforations */}
                        <div className="flex items-center justify-between gap-1 pb-2 border-b border-editor-surface/20">
                          <div className="flex gap-1.5">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="w-2.5 h-3 bg-editor-surface/25 rounded-xs border border-editor-surface/50" />
                            ))}
                          </div>
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-950/70 border border-red-500/50 text-[10px] font-mono text-red-300 font-bold">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span>REC 00:04:18:22</span>
                          </div>
                          <div className="flex gap-1.5">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="w-2.5 h-3 bg-editor-surface/25 rounded-xs border border-editor-surface/50" />
                            ))}
                          </div>
                        </div>

                        {/* Video Timeline & Scissors Trim */}
                        <div className="py-1 space-y-2">
                          <div className="flex items-center justify-between text-[10px] font-mono text-editor-surface">
                            <span>TIMELINE // WEDDING_SDE</span>
                            <span className="font-bold text-editor-bg">✂️ TRIM [02:45]</span>
                          </div>
                          
                          {/* Visual Clip Blocks with Trim Dashes */}
                          <div className="flex items-center gap-1.5 h-9 w-full bg-editor-surface/10 rounded-md p-1 border border-editor-surface/25 relative">
                            <div className="h-full w-4/12 bg-editor-surface/30 rounded flex items-center justify-center text-[9px] font-bold text-editor-bg truncate px-1">
                              PREP_SHOTS
                            </div>
                            <div className="h-full border-r-2 border-dashed border-red-400/90 relative">
                              <span className="absolute -top-3.5 -left-2 text-[11px]">✂️</span>
                            </div>
                            <div className="h-full w-5/12 bg-editor-accent/50 rounded flex items-center justify-center text-[9px] font-bold text-editor-bg truncate px-1">
                              VOWS_AUDIO
                            </div>
                            <div className="h-full w-3/12 bg-editor-surface/25 rounded flex items-center justify-center text-[9px] font-bold text-editor-bg truncate px-1">
                              OUTRO_SDE
                            </div>
                          </div>

                          {/* Audio Waveform Simulation */}
                          <div className="flex items-end gap-1 h-5 w-full pt-1 px-1">
                            {[40, 70, 95, 60, 35, 85, 100, 75, 45, 95, 60, 80, 50, 70, 90, 65, 40, 85, 100, 45].map((h, i) => (
                              <div 
                                key={i} 
                                className="flex-1 bg-editor-surface/45 rounded-t-xs"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Floating Comic Stickers */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-editor-surface/15">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-editor-bg text-editor-primary border border-editor-primary shadow-[1px_1px_0px_#2A1F14]">
                            LUT: ANALOG WARM CINEMA
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-editor-surface text-editor-primary border border-editor-primary shadow-[1px_1px_0px_#2A1F14]">
                            4K DCI · 24.00 FPS
                          </span>
                        </div>
                      </div>
                    )}

                    {activeDiscipline === 'uiux' && (
                      <div className="flex flex-col gap-2.5 w-full bg-editor-primary/95 border-2 border-editor-surface/50 rounded-xl p-3.5 sm:p-5 shadow-[4px_4px_0px_#8B6F4E] relative overflow-hidden">
                        {/* Figma / Canvas Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-editor-surface/20">
                          <div className="flex items-center gap-1.5 text-editor-surface text-[11px] font-bold">
                            <span>✏️</span>
                            <span className="font-mono text-[10px]">FIGMA CANVAS · 8px GRID</span>
                          </div>
                          <div className="px-2 py-0.5 rounded bg-editor-surface/15 text-[10px] text-editor-surface font-mono">
                            1440 × 900
                          </div>
                          <div className="text-[10px] font-mono text-editor-surface/60">
                            100%
                          </div>
                        </div>

                        {/* Wireframe Mockup Blueprint */}
                        <div className="py-1 space-y-2">
                          {/* Wireframe Topbar */}
                          <div className="flex items-center justify-between p-1.5 border border-dashed border-editor-surface/35 rounded bg-editor-surface/5">
                            <div className="w-10 h-2 bg-editor-surface/35 rounded-xs" />
                            <div className="flex gap-2">
                              <div className="w-6 h-2 bg-editor-surface/25 rounded-xs" />
                              <div className="w-6 h-2 bg-editor-surface/25 rounded-xs" />
                              <div className="w-6 h-2 bg-editor-surface/25 rounded-xs" />
                            </div>
                          </div>

                          {/* Wireframe Hero Split */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-2 border border-dashed border-editor-surface/35 rounded bg-editor-surface/5 space-y-1.5">
                              <div className="w-3/4 h-3 bg-editor-surface/45 rounded-xs" />
                              <div className="w-full h-1.5 bg-editor-surface/25 rounded-xs" />
                              <div className="w-2/3 h-1.5 bg-editor-surface/25 rounded-xs" />
                              <div className="w-12 h-3.5 bg-editor-surface/35 rounded-xs mt-1" />
                            </div>
                            <div className="p-2 border border-dashed border-editor-surface/35 rounded bg-editor-surface/5 flex items-center justify-center relative min-h-[56px]">
                              <div className="text-editor-surface/40 text-[9px] font-mono">
                                [ WIREFRAME FRAME ]
                              </div>
                              {/* Vector Pen Tool Cursor Overlay */}
                              <div className="absolute bottom-1 right-2 flex items-center gap-1 text-[10px] bg-editor-bg text-editor-primary px-1.5 py-0.5 rounded shadow-[1px_1px_0px_#2A1F14] font-bold">
                                <span>✒️</span>
                                <span className="text-[9px] font-mono">Vector Pen</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Floating Comic Stickers */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-editor-surface/15">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-editor-bg text-editor-primary border border-editor-primary shadow-[1px_1px_0px_#2A1F14]">
                            AUTO-LAYOUT: PADDING 24px
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-editor-surface text-editor-primary border border-editor-primary shadow-[1px_1px_0px_#2A1F14]">
                            ACCESSIBILITY WCAG AAA
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })()}

          </div>

          {/* Bottom Comic Bar Tape Rule */}
          <div className="w-full bg-editor-surface/20 text-editor-surface py-3 border-t-2 border-editor-surface/30 flex items-center justify-center overflow-hidden font-bebas text-[11px] sm:text-xs tracking-widest uppercase">
          </div>
        </div>


      </section>


      {/* ================================================================ */}
      {/* TECH STACK SECTION — Full-bleed maximalist comic architecture    */}
      {/* Lives OUTSIDE #about, its own full-width block                   */}
      {/* ================================================================ */}
      <section
        id="tech-stack"
        className="relative w-full bg-editor-primary text-editor-bg font-poppins overflow-hidden border-b border-editor-surface/20 py-16 sm:py-24"
      >
        {/* ── Giant faded "TECH STACK" background text ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-start overflow-hidden z-0"
        >
          <span
            className="font-bebas leading-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(7rem, 22vw, 22rem)',
              background: 'linear-gradient(to right, rgba(201,184,150,0.13) 0%, rgba(201,184,150,0.04) 55%, rgba(201,184,150,0) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.02em',
              paddingLeft: '2vw',
            }}
          >
            TECH STACK
          </span>
        </div>

        {/* ── Section Header ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 mb-10 sm:mb-14">
          <div className="flex items-end gap-4 border-b-2 border-editor-surface/20 pb-5">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bebas tracking-wide text-editor-bg leading-none">
              Tech Stack
            </h2>
            <span className="font-times-new italic text-editor-surface/70 text-sm sm:text-base pb-1 leading-tight">
              — Architecture &amp; Toolchain
            </span>
          </div>
        </div>

        {/* ── DESKTOP Architecture Pipeline (hidden on mobile) ── */}
        <div className="relative z-10 hidden lg:block w-full max-w-7xl mx-auto px-4 sm:px-8">

          {/* ── Top 4 columns: UI/UX → Frontend+CMS → APIs → Backend ── */}
          <div className="relative flex flex-row items-start gap-0 w-full">

            {/* Shared skill pill renderer as a function-like component */}
            {(() => {
              // Helper: render skill pills (preserves full comic popup logic)
              const renderPills = (skills: string[]) => (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skills.map((skill) => {
                    const iconPath = skillIcons[skill];
                    return iconPath ? (
                      <div
                        key={skill}
                        tabIndex={0}
                        role="button"
                        aria-label={`${skill} icon`}
                        className="group relative inline-flex items-center text-[10px] sm:text-[11px] font-medium px-2 py-1 rounded-md bg-editor-surface/10 text-editor-bg/85 hover:text-editor-bg hover:bg-editor-surface/20 border border-editor-surface/20 hover:border-editor-accent/70 cursor-pointer active:scale-95 transition-all duration-200 select-none hover:z-30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-editor-accent"
                      >
                        <span className="relative z-10 transition-transform duration-200 group-hover:scale-105 inline-block">
                          {skill}
                        </span>
                        <div className="comic-distort-bubble hidden group-hover:flex group-focus-visible:flex absolute bottom-[calc(100%+8px)] left-1/2 z-40 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]">
                          <div className="relative flex items-center justify-center p-2 rounded-xl bg-editor-bg border-2 border-editor-primary shadow-[3px_3px_0px_#8B6F4E]">
                            <div className="relative w-8 h-8">
                              <Image src={iconPath} alt={`${skill}`} fill className="comic-inner-icon object-contain" sizes="32px" />
                            </div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-editor-primary border-t-[6px] border-x-transparent border-x-[5px] border-b-0" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <span key={skill} className="inline-flex items-center text-[10px] sm:text-[11px] font-medium px-2 py-1 rounded-md bg-editor-surface/10 text-editor-bg/75 border border-transparent select-none">
                        {skill}
                      </span>
                    );
                  })}
                </div>
              );

              // Helper: category card
              const CategoryCard = ({
                title, icon, skills, accent = false,
              }: { title: string; icon: React.ReactNode; skills: string[]; accent?: boolean }) => (
                <div className={`flex flex-col gap-2 rounded-xl border-2 p-4 relative ${accent ? 'border-editor-accent/60 bg-editor-accent/10 shadow-[4px_4px_0px_#8B6F4E]' : 'border-editor-surface/30 bg-editor-primary/80 shadow-[3px_3px_0px_#C9B896]'}`}>
                  <div className="flex items-center gap-2 pb-2 border-b border-editor-surface/20">
                    <span className="text-editor-surface">{icon}</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-editor-surface font-bebas text-sm">{title}</span>
                  </div>
                  {renderPills(skills)}
                </div>
              );

              return (
                <>
                  {/* ─── COLUMN 1: UI/UX & Multimedia (front layer) ─── */}
                  <div className="flex-1 min-w-0 flex flex-col gap-3 relative">
                    {/* Front layer badge */}
                    <div className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full bg-editor-bg text-editor-primary border-2 border-editor-primary shadow-[2px_2px_0px_#2A1F14] font-bebas text-xs tracking-wider mb-1">
                      ✦ FRONT LAYER
                    </div>
                    <CategoryCard
                      title="UI/UX & Multimedia"
                      icon={<Sparkles className="w-4 h-4" />}
                      skills={["Figma", "Adobe XD", "Adobe Illustrator", "Lucidchart", "Miro", "Video Editing"]}
                      accent
                    />
                    {/* Horizontal connector line from col 1 → col 2 */}
                    <div className="absolute top-[45%] right-0 translate-x-full w-full flex items-center pointer-events-none z-20" style={{width: 'calc(100% + 0px)', left: '100%', top: '45%', position: 'absolute'}}>
                    </div>
                  </div>

                  {/* SVG Connector: col1 → col2 */}
                  <div className="flex flex-col items-center justify-center pt-14 shrink-0 w-10 relative">
                    <svg width="40" height="60" viewBox="0 0 40 60" className="overflow-visible" aria-hidden="true">
                      <line x1="0" y1="30" x2="40" y2="30" stroke="#C9B896" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
                      <polygon points="38,26 40,30 38,34" fill="#C9B896" opacity="0.5" />
                    </svg>
                  </div>

                  {/* ─── COLUMN 2: Frontend + CMS ─── */}
                  <div className="flex-1 min-w-0 flex flex-col gap-3">
                    <div className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full bg-editor-surface/15 text-editor-surface border border-editor-surface/30 font-bebas text-xs tracking-wider mb-1">
                      LAYER 02
                    </div>
                    <CategoryCard
                      title="Frontend Engineering"
                      icon={<Code2 className="w-4 h-4" />}
                      skills={["React", "Next.js", "Tailwind CSS", "Sass/SCSS", "JavaScript (ES6+)"]}
                    />
                    <CategoryCard
                      title="CMS & Web Platforms"
                      icon={<Globe className="w-4 h-4" />}
                      skills={["WordPress", "Elementor", "Advanced Custom Fields (ACF)"]}
                    />
                  </div>

                  {/* SVG Connector: col2 → col3 */}
                  <div className="flex flex-col items-center justify-center pt-14 shrink-0 w-10">
                    <svg width="40" height="60" viewBox="0 0 40 60" className="overflow-visible" aria-hidden="true">
                      <line x1="0" y1="30" x2="40" y2="30" stroke="#C9B896" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
                      <polygon points="38,26 40,30 38,34" fill="#C9B896" opacity="0.5" />
                    </svg>
                  </div>

                  {/* ─── COLUMN 3: APIs ─── */}
                  <div className="flex-1 min-w-0 flex flex-col gap-3">
                    <div className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full bg-editor-surface/15 text-editor-surface border border-editor-surface/30 font-bebas text-xs tracking-wider mb-1">
                      LAYER 03
                    </div>
                    <CategoryCard
                      title="APIs & Data Fetching"
                      icon={<Layers className="w-4 h-4" />}
                      skills={["RESTful APIs", "Axios", "TanStack Query", "Postman"]}
                    />
                  </div>

                  {/* SVG Connector: col3 → col4 */}
                  <div className="flex flex-col items-center justify-center pt-14 shrink-0 w-10">
                    <svg width="40" height="60" viewBox="0 0 40 60" className="overflow-visible" aria-hidden="true">
                      <line x1="0" y1="30" x2="40" y2="30" stroke="#C9B896" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
                      <polygon points="38,26 40,30 38,34" fill="#C9B896" opacity="0.5" />
                    </svg>
                  </div>

                  {/* ─── COLUMN 4: Backend & DB ─── */}
                  <div className="flex-1 min-w-0 flex flex-col gap-3">
                    <div className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full bg-editor-surface/15 text-editor-surface border border-editor-surface/30 font-bebas text-xs tracking-wider mb-1">
                      LAYER 04
                    </div>
                    <CategoryCard
                      title="Backend & Database"
                      icon={<Database className="w-4 h-4" />}
                      skills={["Python", "Supabase", "PostgreSQL", "MySQL", "SQL"]}
                    />
                  </div>
                </>
              );
            })()}
          </div>

          {/* ── Vertical drop lines from each column to pipeline bar ── */}
          <div className="relative w-full flex flex-row mt-6 pointer-events-none" aria-hidden="true">
            {/* 4 column drop connectors spread evenly */}
            {[12.5, 37.5, 62.5, 87.5].map((pct, i) => (
              <div
                key={i}
                className="absolute flex flex-col items-center"
                style={{ left: `${pct}%`, top: 0 }}
              >
                <div className="w-px h-8 border-l-2 border-dashed border-editor-surface/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-editor-surface/50 border border-editor-surface animate-pulse" />
              </div>
            ))}
          </div>

          {/* ── Version Control Pipeline Bar ── */}
          <div className="relative z-20 mt-10 w-full border-2 border-editor-surface/35 rounded-xl bg-editor-surface/5 shadow-[4px_4px_0px_#8B6F4E]">
            {/* Pipeline tape label top-left */}
            <div className="absolute -top-3.5 left-6 bg-editor-primary px-3 py-0.5 border border-editor-surface/40 rounded font-bebas text-xs text-editor-surface tracking-widest z-10">
              ━ VERSION CONTROL &amp; METHODOLOGY PIPELINE ━
            </div>

            <div className="flex flex-row items-center gap-6 px-6 pt-6 pb-4">
              {/* Pipeline Icon */}
              <div className="shrink-0 flex flex-col items-center gap-1">
                <Terminal className="w-5 h-5 text-editor-surface" />
                <span className="text-[9px] font-mono text-editor-surface/60 uppercase tracking-widest">CI/CD</span>
              </div>

              {/* Pipeline dots */}
              <div className="flex-1 flex flex-row items-center gap-0">
                {/* Skill pills for Version Control */}
                {(() => {
                  const vcSkills = ["Git", "GitHub", "GitLab", "Agile / Scrum", "SRS Documentation"];
                  return (
                    <div className="flex flex-wrap gap-2 items-center">
                      {vcSkills.map((skill, idx) => {
                        const iconPath = skillIcons[skill];
                        return (
                          <div key={skill} className="flex items-center gap-1.5 relative hover:z-40">
                            {idx > 0 && (
                              <svg width="20" height="10" viewBox="0 0 20 10" aria-hidden="true">
                                <line x1="0" y1="5" x2="18" y2="5" stroke="#C9B896" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
                                <polygon points="16,2 20,5 16,8" fill="#C9B896" opacity="0.5" />
                              </svg>
                            )}
                            {iconPath ? (
                              <div
                                tabIndex={0}
                                role="button"
                                aria-label={`${skill} icon`}
                                className="group relative inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-editor-surface/10 text-editor-bg/85 hover:text-editor-bg hover:bg-editor-surface/20 border border-editor-surface/20 hover:border-editor-accent/70 cursor-pointer active:scale-95 transition-all duration-200 select-none hover:z-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-editor-accent"
                              >
                                <span className="relative z-10 group-hover:scale-105 inline-block transition-transform duration-200">{skill}</span>
                                <div className="comic-distort-bubble hidden group-hover:flex group-focus-visible:flex absolute bottom-[calc(100%+8px)] left-1/2 z-50 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]">
                                  <div className="relative flex items-center justify-center p-2 rounded-xl bg-editor-bg border-2 border-editor-primary shadow-[3px_3px_0px_#8B6F4E]">
                                    <div className="relative w-8 h-8">
                                      <Image src={iconPath} alt={skill} fill className="comic-inner-icon object-contain" sizes="32px" />
                                    </div>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-editor-primary border-t-[6px] border-x-transparent border-x-[5px] border-b-0" />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <span className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-editor-surface/10 text-editor-bg/75 border border-transparent select-none">
                                {skill}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>

              {/* Pipeline status badge */}
              <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-editor-bg text-editor-primary border-2 border-editor-primary shadow-[2px_2px_0px_#2A1F14] font-bebas text-[11px] tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                PIPELINE OK
              </div>
            </div>
          </div>

        </div>

        {/* ── MOBILE: Stacked vertical layout (shown on < lg) ── */}
        <div className="relative z-10 lg:hidden w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col gap-3 border-2 border-editor-surface/25 rounded-xl p-4 bg-editor-primary/80 shadow-[3px_3px_0px_#C9B896]">
              <div className="flex items-center gap-2 pb-2 border-b border-editor-surface/20">
                <span className="text-editor-surface">{category.icon}</span>
                <span className="font-bebas text-sm tracking-widest text-editor-surface uppercase">{category.title}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => {
                  const iconPath = skillIcons[skill];
                  return iconPath ? (
                    <div
                      key={skill}
                      tabIndex={0}
                      role="button"
                      aria-label={`${skill} icon`}
                      className="group relative inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-editor-surface/10 text-editor-bg/85 hover:text-editor-bg hover:bg-editor-surface/20 border border-editor-surface/20 hover:border-editor-accent/70 cursor-pointer active:scale-95 transition-all duration-200 select-none hover:z-30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-editor-accent"
                    >
                      <span className="relative z-10 transition-transform duration-200 group-hover:scale-105 inline-block">{skill}</span>
                      <div className="comic-distort-bubble hidden group-hover:flex group-focus-visible:flex absolute bottom-[calc(100%+8px)] left-1/2 z-40 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]">
                        <div className="relative flex items-center justify-center p-2 rounded-xl bg-editor-bg border-2 border-editor-primary shadow-[3px_3px_0px_#8B6F4E]">
                          <div className="relative w-8 h-8">
                            <Image src={iconPath} alt={skill} fill className="comic-inner-icon object-contain" sizes="32px" />
                          </div>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-editor-primary border-t-[6px] border-x-transparent border-x-[5px] border-b-0" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <span key={skill} className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-editor-surface/10 text-editor-bg/75 border border-transparent select-none">
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
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
              <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
                <label htmlFor="contact-website">Leave this field empty</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
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
