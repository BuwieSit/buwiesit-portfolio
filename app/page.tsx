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

      <section id="home" className="w-full min-h-screen px-5 py-10 flex flex-col gap-10 items-center justify-start border-b text-editor-primary">
        
        <div className="w-[80%] py-5 flex flex-col items-start justify-center">
          <h1 className="text-8xl font-bebas">Buhawie Santos</h1>
          <p className="italic">Frontend Developer / Professional Video Editor</p>
          <div className="flex items-center justify-center gap-5 p-5">
            {contacts.map((contact) => (
              <Link href={contact.link} target="_blank" rel="noopener noreferrer" key={contact.id} className="relative flex flex-col justify-center items-center group transition ease-in-out cursor-pointer">
                <Image src={contact.icon} alt={contact.platform} width={40} height={40} priority={true}/>
                <p className="absolute text-nowrap text-[0.9rem] font-bold transition ease-in-out opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-10 pointer-events-none">{contact.text}</p>
              </Link>
            
            ))}
          </div>
        </div>

        <div className="w-[80%] py-5 flex flex-col items-end justify-center">
            <div className="flex gap-5">
              <Link href={"#contacts"}>
                <button className="bg-linear-to-br from-editor-surface via-editor-accent to-editor-primary shadow-editor-accent shadow-[0px_0px_10px] p-5 rounded-3xl text-editor-bg font-bold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0px_5px_10px]">
                  Get in Touch
                </button>
              </Link>
              <Link href={"#projects"}>
                <button className="cursor-pointer transition-all duration-300 ease-in-out border border-editor-primary p-5 rounded-3xl hover:bg-editor-primary hover:text-editor-bg">
                  See Projects
                </button>
              </Link>
              
            </div>
            
        </div>
        
        <div className="mt-10 w-full relative">
          <TestimonialCarousel items={combinedProjects}/>
        </div>
        
      </section>

      <section id="about" className="relative py-5 w-full min-h-screen inset-shadow-[0px_0px_50px] inset-shadow-editor-accent bg-editor-primary text-editor-bg font-poppins flex flex-col gap-10 justify-center items-center overflow-hidden">
        <h2 className="text-title-size font-editor-title italic">About</h2>
        
        <div className="bg-editor-surface blur-[100px] opacity-20 absolute w-100 aspect-square rounded-full -top-20 -left-10 pointer-events-none"/>
        <div className="bg-editor-surface blur-[100px] opacity-20 absolute w-100 aspect-square rounded-full -bottom-10 -right-20 pointer-events-none"/>

        <div className="w-[60%] flex justify-center items-start gap-5 z-10">
          <Image src={"/editor_logo/buwie_pic.jpg"} alt="my picture" width={200} height={200} loading="lazy"/>
          <p className="text-justify">
            Hi! I am <span className="font-bold text-editor-bg drop-shadow-[0px_0px_20px] shadow-editor-bg">Buhawie Santos</span>. You can call me Buwie! 
            I am a passionate Information Technology student experienced in
            web application development and has also utilized technical
            tools in web content management and SEO such as Wordpress and Elementor! I know a variety of programming languages and frontend
            frameworks which I use for developing web applications. On the other hand, I am also experienced in video editing typically same day edits in events like wedding and debuts but I do film making as well!
          </p>
        </div>

        <div className="w-[80%] h-0.5 shadow-[0px_0px_80px] rounded-full bg-editor-bg"/>

        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-title-size font-editor-title italic">Skills</h2>
          <div className="flex justify-center items-center gap-5 flex-wrap min-h-50 group">
            
            {Object.values(skillMap).map((skill) => (
              <div 
                key={skill.text} 
                className="flex flex-col items-center justify-between font-bold min-h-25 transition duration-300 group-hover:saturate-0 hover:saturate-100!"
              >
                <Image src={skill.icon} alt={skill.text} width={50} height={50} loading="lazy" />
                <p>{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
        

      </section>

      <section id="projects" className="text-editor-primary w-full min-h-screen flex flex-col justify-center items-center py-10">
        <h2 className="text-title-size font-editor-title italic">Website Projects</h2>
          <Carousel items={websiteProjects} />
      </section>
      <section className="text-editor-primary w-full min-h-screen  flex flex-col justify-center items-center py-10">
        <h2 className="text-title-size font-editor-title italic">Video Edits</h2>
          <Carousel items={videoProjects} />
      </section>

      <section id="contacts" className="text-editor-primary w-full min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className=" w-1/2 flex flex-col gap-4 bg-editor-primary p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white">Contact Me</h2>
          
          <input 
            type="email" 
            placeholder="Your Email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            required
            className="p-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none"
          />

          <input 
            type="text" 
            placeholder="Subject / Message Summary"
            value={clientSubject}
            onChange={(e) => setClientSubject(e.target.value)}
            required
            className="p-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none"
          />

          <button 
            type="submit" 
            disabled={isSending}
            className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded disabled:opacity-50 transition"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {statusMessage && (
            <p className="text-sm mt-2 text-zinc-300 text-center">{statusMessage}</p>
          )}
        </form>
      </section>
    </div>
  );
}
