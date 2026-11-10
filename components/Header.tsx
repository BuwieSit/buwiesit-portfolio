'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, User, Library, Send } from 'lucide-react';

export default function Header() {
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const darkSections = ['about', 'contacts'];
    
    const handleScroll = () => {
      const headerOffset = 120; // Check position relative to sticky header height
      const sections = ['home', 'about', 'projects', 'contacts'];
      let current = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset && rect.bottom > headerOffset) {
            current = sectionId;
            break;
          }
        }
      }

      setActiveSection(current);
      setIsDarkSection(darkSections.includes(current));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, icon: <Home className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />, text: "Home", link: "home" }, 
    { id: 2, icon: <User className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />, text: "About", link: "about" },
    { id: 3, icon: <Library className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />, text: "Projects", link: "projects" },
    { id: 4, icon: <Send className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />, text: "Contacts", link: "contacts" },
  ];

  return (
    <header className="fixed top-0 w-full py-3 sm:py-5 px-4 flex items-center justify-center z-[500] pointer-events-none">
      <div className="flex items-center justify-center gap-2 sm:gap-4 pointer-events-auto max-w-[95vw] sm:max-w-none">
        
        {/* Dynamic Inverting Logo */}
        <Link href="#home" className="relative group shrink-0 transition-transform duration-300 hover:scale-105">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
            <Image 
              src="/editor_logo/dark_nobg.png" 
              alt="Logo Dark" 
              fill 
              sizes="80px"
              loading="eager"
              className={`object-contain transition-opacity duration-500 ease-in-out ${
                isDarkSection ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <Image 
              src="/editor_logo/light_nobg.png" 
              alt="Logo Light" 
              fill 
              sizes="80px"
              loading="eager"
              className={`object-contain transition-opacity duration-500 ease-in-out ${
                isDarkSection ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </Link>

        {/* Dynamic Inverting Navigation Bar */}
        <nav 
          aria-label="Main Navigation"
          className={`h-11 sm:h-15 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full border shadow-xl backdrop-blur-3xl transition-all duration-500 ease-in-out flex items-center ${
            isDarkSection 
              ? 'bg-editor-primary/85 border-editor-surface/30 text-editor-bg shadow-black/40' 
              : 'bg-editor-surface/35 border-editor-surface/40 text-editor-primary shadow-black/5'
          }`}
        >
          <ul className="w-full h-full flex gap-1.5 sm:gap-4 md:gap-8 items-center justify-between">
            {navItems.map((item) => {
              const isActive = activeSection === item.link;

              return (
                <li 
                  key={item.id} 
                  className="relative flex items-center justify-center"
                >
                  <Link 
                    href={`#${item.link}`}
                    className={`group relative flex items-center justify-center px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all duration-300 ease-out select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-editor-accent active:scale-95 ${
                      isActive 
                        ? (isDarkSection ? 'text-editor-bg' : 'text-editor-primary') 
                        : (isDarkSection ? 'text-editor-bg/75 hover:text-editor-bg' : 'text-editor-primary/75 hover:text-editor-primary')
                    } hover:bg-editor-surface/20 hover:shadow-xs`}
                  >
                    {/* Ghost Text: Keeps the natural resting width intact to eliminate any layout shift */}
                    <span className="invisible pointer-events-none select-none font-bold text-xs sm:text-sm md:text-base px-0.5">
                      {item.text}
                    </span>

                    {/* 1. Idle Text Layer: Smoothly fades out and scales down on hover */}
                    <span 
                      className={`absolute inset-0 flex items-center justify-center font-bold text-xs sm:text-sm md:text-base transition-all duration-150 ease-out group-hover:opacity-0 group-hover:scale-75 group-hover:pointer-events-none ${
                        isActive ? 'opacity-100 font-extrabold' : 'opacity-85'
                      }`}
                    >
                      {item.text}
                    </span>

                    {/* 2. Comic Hover Stage: Icon appears & scales, then the word bursts beside it */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
                      <div className="flex items-center justify-center whitespace-nowrap">
                        {/* Comic-popped Icon */}
                        <span className="animate-comic-icon flex items-center justify-center shrink-0">
                          {item.icon}
                        </span>

                        {/* Comic-popped Word beside the icon */}
                        <span className="animate-comic-word inline-block font-extrabold text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Active Indicator Underline / Pill */}
                  {isActive && (
                    <span 
                      className={`absolute -bottom-1 sm:-bottom-1.5 h-0.5 w-3/4 rounded-full transition-all duration-300 pointer-events-none ${
                        isDarkSection 
                          ? 'bg-editor-bg shadow-[0px_0px_8px_rgba(239,234,226,0.8)]' 
                          : 'bg-editor-primary shadow-[0px_0px_8px_rgba(42,31,20,0.5)]'
                      }`} 
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </header>
  );
}
