'use client';

import Image from "next/image";
import Carousel from "@/components/Carousel";
import WebsiteCard from "@/components/WebsiteCard";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { useState } from "react";
import { handleSendEmail } from "./actions";


export default function Home() {
  const [clientEmail, setClientEmail ] = useState('');
  const [clientSubject, setClientSubject ] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    const result = await handleSendEmail(clientEmail, clientSubject);
    
    setIsSending(false);

    if (result.success) {
      setStatusMessage('Email sent! Kindly wait for my reply through email. Thank you!');
      setClientEmail('');
      setClientSubject('');
    } else {
      setStatusMessage(result.error || 'Something went wrong.');
    }
  };


  const contacts = [
    { id: 1, platform: "LinkedIn", icon: "/icons/linkedin.png", text: "Buhawie Santos", link: "https://www.linkedin.com/in/buhawie-santos-04403232b/" },
    { id: 2, platform: "GitHub", icon: "/icons/github.png", text: "BuwieSit", link: "https://github.com/BuwieSit" }
  ];
    
  const skillMap = {
    React: { 
      text: "React", 
      icon: "/skills/react.png" 
    },
    Nextjs: { 
      text: "Next.js", 
      icon: "/skills/nextjs.webp" 
    },

    Tailwind: { 
      text: "Tailwind CSS", 
      icon: "/skills/tailwind.svg" 
    },
    Sass: { 
      text: "Sass CSS", 
      icon: "/skills/sass.png" 
    },
    Wordpress: { 
      text: "Wordpress", 
      icon: "/skills/wordpress.png" 
    },
    Elementor: { 
      text: "Elementor", 
      icon: "/skills/elementor_logo.png" 
    },
    Git: { 
      text: "Git", 
      icon: "/skills/git.png" 
    },
    Python: { 
      text: "Python", 
      icon: "/skills/python.png" 
    },
    Figma: { 
      text: "Figma", 
      icon: "/skills/figma.png" 
    },
    AdobeXd: { 
      text: "AdobeXd", 
      icon: "/skills/adobexd.png" 
    },
    Illustrator: { 
      text: "Illustrator", 
      icon: "/skills/illustrator.webp" 
    },
    PremierePro: { 
      text: "PremierePro", 
      icon: "/skills/premiere.png" 
    },
  };
  const videoProjects = [
    {
      id: 1,
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/VJffXfBqQF4?si=STGushOuzgHV2YW0"
          title="Wedding SDE"
          description="Power intro with the trendy Ring toss."
        />
      )
    },
    {
      id: 2,
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/wJFLJMs7fls?si=YKK8fQ11IkIuGMCI"
          title="Capstone Project Teaser"
          description="Directed, Filmed, and Edited a teaser for our capstone project; applied the card toss (inspired by ring toss)."
        />
      )
    },
    {
      id: 3,
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/-yE81PG0o1U?si=RppxDDC1g36JkVCT"
          title="Anime-inspired Wedding"
          description="Anime-inspired wedding intro requested by the client."
        />
      )
    },
    {
      id: 4,
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/omgqVTdsSRg?si=X85kqek-1tRlnraX"
          title="Save the Date Edit"
          description="Save the date film inspired with an OPM song."
        />
      )
    },
    {
      id: 5,
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/-z8U2AdQpEE?si=FmC42M0EK-arqYAm"
          title="School Organization Music Video Edit"
          description="A music video for a school organization."
        />
      )
    },
    {
      id: 6,
      content: (
        <VideoCard
          embedUrl="https://www.youtube.com/embed/n81224VWB5Q?si=kZAhMojwsMjzhoTZ"
          title="Debut Save the Date Film"
          description="A debutant's save the date film."
        />
      )
    },
    // 
  ]
  const websiteProjects = [
    {
      id: 1,
      content: (
        <WebsiteCard 
          type="International Competition"
          title="Business Proposal Website (Tourism)"
          description="Participated in an international competition in Vietnam. Developed a tourism website with React."
          link="https://tahakver2.vercel.app/"
          mockupImg="/websites/tahak.png"
        />
      )
    },
    {
      id: 2,
      content: (
        <WebsiteCard 
          type="School Project"
          title="Municipality Website"
          description="Lead a group for designing a a website using Figma for UI/UX and developing with JavaScript, PHP for backend, and MySQL for database. Used JSON for data and URL parameters for routing."
          link="https://ibajayaklan.vercel.app/"
          mockupImg="/websites/ibajay.png"
        />
      )
    },
    {
      id: 3,
      content: (
        <WebsiteCard 
          type="Capstone Research"
          title="OJT Administration and Information System"
          description="Currently a frontend developer working on a thesis project using React, and Tailwind CSS. Assisting with the UI/UX design with Figma. Working with a Python backend"
          link="https://oasis-webapp-p21y.vercel.app/"
          mockupImg="/websites/oasis.png"
        />
      )
    },
    {
      id: 4,
      content: (
        <WebsiteCard 
          type="School Project"
          title="Admin Market Vendor Registration System"
          description="A project when I was starting to learn working with databases. Contributed a Market Vendor page (Admin) using vanilla HTML, CSS, and JavaScript. Used plugins for converting table data into excel spreadsheet. PHP and MySQL for saving accounts."
          link="https://team2-web.vercel.app/market_vendor/landingPage.html"
          mockupImg="/websites/vendor.png"
        />
      )
    },
    
  ];

  const combinedProjects = [...websiteProjects, ...videoProjects]

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-poppins mt-20 min-h-screen">

      <section id="home" className="w-full min-h-screen px-4 sm:px-8 py-8 sm:py-10 pt-24 sm:pt-32 flex flex-col gap-6 sm:gap-10 items-center justify-start border-b text-editor-primary max-w-7xl mx-auto">
        
        <div className="w-full sm:w-[90%] md:w-[80%] py-3 sm:py-5 flex flex-col items-start justify-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bebas tracking-wide leading-none">Buhawie Santos</h1>
          <p className="italic text-xs sm:text-base md:text-lg opacity-90 mt-1">Frontend Developer / Professional Video Editor</p>
          <div className="flex items-center justify-start sm:justify-center gap-3 sm:gap-5 p-2 sm:p-5 flex-wrap">
            {contacts.map((contact) => (
              <Link href={contact.link} target="_blank" rel="noopener noreferrer" key={contact.id} className="relative flex flex-col justify-center items-center group transition ease-in-out cursor-pointer">
                <Image src={contact.icon} alt={contact.platform} width={40} height={40} priority={true} className="w-8 h-8 sm:w-10 sm:h-10" />
                <p className="absolute text-nowrap text-[0.8rem] sm:text-[0.9rem] font-bold transition ease-in-out opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-10 pointer-events-none z-20">{contact.text}</p>
              </Link>
            
            ))}
          </div>
        </div>

        <div className="w-full sm:w-[90%] md:w-[80%] py-3 sm:py-5 flex flex-col items-center sm:items-end justify-center">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
              <Link href={"#contacts"} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-linear-to-br from-editor-surface via-editor-accent to-editor-primary shadow-editor-accent shadow-[0px_0px_10px] px-6 py-4 sm:p-5 rounded-2xl sm:rounded-3xl text-editor-bg font-bold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0px_5px_10px] text-sm sm:text-base">
                  Get in Touch
                </button>
              </Link>
              <Link href={"#projects"} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto cursor-pointer transition-all duration-300 ease-in-out border border-editor-primary px-6 py-4 sm:p-5 rounded-2xl sm:rounded-3xl hover:bg-editor-primary hover:text-editor-bg text-sm sm:text-base">
                  See Projects
                </button>
              </Link>
              
            </div>
            
        </div>
        
        <div className="mt-6 sm:mt-10 w-full relative">
          <TestimonialCarousel items={combinedProjects}/>
        </div>
        
      </section>

      <section id="about" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-8 w-full min-h-screen inset-shadow-[0px_0px_50px] inset-shadow-editor-accent bg-editor-primary text-editor-bg font-poppins flex flex-col gap-8 sm:gap-10 justify-center items-center overflow-hidden">
        <h2 className="text-2xl sm:text-3xl md:text-title-size font-editor-title italic">About</h2>
        
        <div className="bg-editor-surface blur-[100px] opacity-20 absolute w-64 sm:w-80 md:w-100 aspect-square rounded-full -top-20 -left-10 pointer-events-none"/>
        <div className="bg-editor-surface blur-[100px] opacity-20 absolute w-64 sm:w-80 md:w-100 aspect-square rounded-full -bottom-10 -right-20 pointer-events-none"/>

        <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[60%] max-w-4xl flex flex-col sm:flex-row justify-center items-center sm:items-start gap-5 sm:gap-8 z-10">
          <Image src={"/editor_logo/buwie_pic.jpg"} alt="my picture" width={200} height={200} loading="lazy" className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl object-cover shrink-0 shadow-xl" />
          <p className="text-center sm:text-justify text-xs sm:text-sm md:text-base leading-relaxed">
            Hi! I am <span className="font-bold text-editor-bg drop-shadow-[0px_0px_20px] shadow-editor-bg">Buhawie Santos</span>. You can call me Buwie! 
            I am a passionate Information Technology student experienced in
            web application development and has also utilized technical
            tools in web content management and SEO such as Wordpress and Elementor! I know a variety of programming languages and frontend
            frameworks which I use for developing web applications. On the other hand, I am also experienced in video editing typically same day edits in events like wedding and debuts but I do film making as well!
          </p>
        </div>

        <div className="w-full sm:w-[80%] max-w-4xl h-0.5 shadow-[0px_0px_80px] rounded-full bg-editor-bg/80"/>

        <div className="w-full max-w-5xl flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-3xl md:text-title-size font-editor-title italic mb-2">Skills</h2>
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 flex-wrap min-h-36 sm:min-h-50 px-2 py-4 group">
            
            {Object.values(skillMap).map((skill) => (
              <div 
                key={skill.text} 
                className="flex flex-col items-center justify-between font-bold text-xs sm:text-sm min-h-20 sm:min-h-25 transition duration-300 group-hover:saturate-0 hover:saturate-100!"
              >
                <Image src={skill.icon} alt={skill.text} width={50} height={50} loading="lazy" className="w-9 h-9 sm:w-12 sm:h-12 object-contain" />
                <p className="mt-1">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
        

      </section>

      <section id="projects" className="text-editor-primary w-full min-h-screen flex flex-col justify-center items-center py-8 sm:py-16 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-title-size font-editor-title italic">Website Projects</h2>
          <Carousel items={websiteProjects} />
      </section>
      <section className="text-editor-primary w-full min-h-screen flex flex-col justify-center items-center py-8 sm:py-16 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-title-size font-editor-title italic">Video Edits</h2>
          <Carousel items={videoProjects} />
      </section>

      <section id="contacts" className="relative py-12 sm:py-20 px-4 sm:px-8 w-full min-h-screen inset-shadow-[0px_0px_50px] inset-shadow-editor-accent bg-editor-primary text-editor-bg font-poppins flex flex-col gap-8 sm:gap-10 justify-center items-center overflow-hidden">
        {/* Background glow effects */}
        <div className="bg-editor-surface blur-[120px] opacity-25 absolute w-[280px] sm:w-[400px] md:w-[500px] aspect-square rounded-full -top-20 -left-20 pointer-events-none" />
        <div className="bg-editor-accent blur-[140px] opacity-20 absolute w-[280px] sm:w-[400px] md:w-[500px] aspect-square rounded-full -bottom-20 -right-20 pointer-events-none" />

        <div className="flex flex-col items-center gap-2 sm:gap-3 text-center z-10">
          <h2 className="text-2xl sm:text-3xl md:text-title-size font-editor-title italic tracking-wider text-editor-bg drop-shadow-[0px_2px_10px_rgba(0,0,0,0.5)]">
            Contact Me
          </h2>
          <p className="text-xs sm:text-sm opacity-80 max-w-md font-poppins px-2">
            Got a question, project proposal, or edit request? Send me a message and I&apos;ll get back to you soon.
          </p>
        </div>

        {/* Main 2-Column Split Container */}
        <div className="w-full sm:w-[90%] lg:w-[85%] max-w-5xl z-10 flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-10 bg-editor-bg/5 backdrop-blur-2xl border border-editor-surface/30 p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/40 relative">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:w-5/12 flex flex-col justify-between gap-6 sm:gap-8 text-editor-bg">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-editor-surface/20 border border-editor-surface/30 text-[10px] sm:text-xs font-semibold tracking-wider text-editor-surface w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Freelance & Projects
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-editor-bg mt-1 sm:mt-2">
                Let&apos;s talk about your next project
              </h3>
              
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                Whether you need web application development, UI/UX implementation, or professional video editing, I&apos;m ready to collaborate.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Direct Gmail Card */}
              <a 
                href="mailto:buhawie.santos@gmail.com" 
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-editor-surface/10 border border-editor-surface/20 hover:bg-editor-surface/20 hover:border-editor-surface/40 transition-all duration-300 group"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-editor-surface/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Image src="/icons/gmail.png" alt="Email" width={22} height={22} className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="overflow-hidden min-w-0">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-editor-surface/80 font-semibold">Direct Email</p>
                  <p className="text-xs sm:text-sm font-bold text-editor-bg group-hover:text-editor-surface transition-colors truncate">
                    santosbuhawie28@gmail.com
                  </p>
                </div>
              </a>

              {/* Social Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {contacts.map((contact) => (
                  <Link 
                    key={contact.id} 
                    href={contact.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-editor-surface/10 border border-editor-surface/20 hover:bg-editor-surface/20 hover:border-editor-surface/40 transition-all duration-300 group"
                  >
                    <Image src={contact.icon} alt={contact.platform} width={20} height={20} className="group-hover:scale-110 transition-transform shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                    <div className="overflow-hidden min-w-0">
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-editor-surface/80 font-semibold">{contact.platform}</p>
                      <p className="text-xs font-bold text-editor-bg truncate">{contact.text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Divider for large screens */}
          <div className="hidden lg:block w-px bg-editor-surface/20 self-stretch" />

          {/* Right Column: Form */}
          <div className="lg:w-6/12 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 w-full">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label htmlFor="client-email" className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-editor-surface/90">
                  Your Email
                </label>
                <input 
                  id="client-email"
                  type="email" 
                  placeholder="name@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-editor-primary/60 border border-editor-surface/30 text-editor-bg placeholder:text-editor-bg/40 focus:outline-none focus:border-editor-surface focus:ring-2 focus:ring-editor-surface/50 transition-all duration-300 text-xs sm:text-sm shadow-inner"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label htmlFor="client-subject" className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-editor-surface/90">
                  Subject / Message Summary
                </label>
                <input 
                  id="client-subject"
                  type="text" 
                  placeholder="What would you like to discuss?"
                  value={clientSubject}
                  onChange={(e) => setClientSubject(e.target.value)}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-editor-primary/60 border border-editor-surface/30 text-editor-bg placeholder:text-editor-bg/40 focus:outline-none focus:border-editor-surface focus:ring-2 focus:ring-editor-surface/50 transition-all duration-300 text-xs sm:text-sm shadow-inner"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSending}
                className="w-full mt-2 bg-linear-to-br from-editor-surface via-editor-accent to-editor-primary shadow-editor-accent shadow-[0px_0px_15px] py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-editor-bg font-bold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0px_5px_20px] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-xs sm:text-sm tracking-wide"
              >
                {isSending ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-editor-bg border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>

              {statusMessage && (
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-editor-surface/20 border border-editor-surface/40 text-center animate-fade-in">
                  <p className="text-xs sm:text-sm text-editor-bg font-semibold">{statusMessage}</p>
                </div>
              )}
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
