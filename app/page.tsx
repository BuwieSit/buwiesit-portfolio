import Image from "next/image";
import Carousel from "@/components/Carousel";
import WebsiteCard from "@/components/WebsiteCard";
import VideoCard from "@/components/VideoCard";

export default function Home() {

  const contacts = [
    { id: 1, platform: "LinkedIn", icon: "/icons/linkedin.png", text: "Buhawie Santos" },
    { id: 2, platform: "GitHub", icon: "/icons/github.png", text: "BuwieSit" },
    { id: 3, platform: "Gmail", icon: "/icons/gmail.png", text: "santosbuhawie28@gmail.com" }
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
          description="Developed a website business proposal in the tourism field. Used Reactjs for the frontend development."
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
          description="Designed a website using Figma for UI/UX and developed with JavaScript, PHP for backend, and MySQL for database. Used JSON for data and URL parameters for routing."
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
    
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-poppins mt-20 min-h-screen">

      <section className="w-full px-5 py-10 flex flex-col items-center justify-center border-b">
        <Image src={"/editor_logo/dark_nobg.png"} alt={"Logo"} width={300} height={300} loading="eager"/>
        <div className="w-full flex items-center justify-center gap-30 p-5">
          {contacts.map((contact) => (
            <div key={contact.id} className="relative flex flex-col justify-center items-center group transition ease-in-out cursor-pointer">
              <Image src={contact.icon} alt={contact.platform} width={40} height={40} priority={true}/>
              <p className="absolute text-nowrap text-editor-primary text-[0.9rem] font-bold transition ease-in-out opacity-0 translate-y-5 group-hover:opacity-100 group-hover:-translate-y-10 pointer-events-none">{contact.text}</p>
            </div>
           
          ))}
         
        </div>
      </section>

      <section className="relative py-5 w-full min-h-screen inset-shadow-[0px_0px_50px] inset-shadow-editor-accent bg-editor-primary text-editor-bg font-poppins flex flex-col gap-10 justify-center items-center overflow-hidden">
        <h2 className="text-title-size font-times-new italic">About me</h2>
        
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

      </section>

      <section className="text-editor-primary w-full min-h-screen">
          <Carousel items={websiteProjects} />
      </section>
      <section className="text-editor-primary w-full min-h-screen">
          <Carousel items={videoProjects} />
      </section>
    </div>
  );
}
