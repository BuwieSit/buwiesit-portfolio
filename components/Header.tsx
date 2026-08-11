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
    { id: 1, icon: <Home className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Home", link: "home" }, 
    { id: 2, icon: <User className="w-4 h-4 sm:w-5 sm:h-5" />, text: "About", link: "about" },
    { id: 3, icon: <Library className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Projects", link: "projects" },
    { id: 4, icon: <Send className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Contacts", link: "contacts" },
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
        <div 
          className={`h-11 sm:h-15 px-4 sm:px-6 py-2 sm:py-5 rounded-full border shadow-xl backdrop-blur-3xl transition-all duration-500 ease-in-out ${
            isDarkSection 
              ? 'bg-editor-primary/80 border-editor-surface/30 text-editor-bg shadow-black/40' 
              : 'bg-editor-surface/30 border-editor-surface/30 text-editor-primary shadow-black/5'
          }`}
        >
          <ul className="w-full h-full flex gap-3 sm:gap-6 md:gap-10 items-center justify-between">
            {navItems.map((item) => {
              const isActive = activeSection === item.link;

              return (
                <li 
                  key={item.id} 
                  className={`relative flex items-center justify-center group transition-all duration-300 ease-in-out cursor-pointer font-bold text-xs sm:text-sm md:text-base rounded-full ${
                    isActive ? (isDarkSection ? 'text-editor-bg opacity-100' : 'text-editor-primary opacity-100') : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <Link href={`#${item.link}`} className="px-1.5 sm:px-2.5 py-1">
                    <p className="relative z-10">{item.text}</p>
                  </Link>

                  {/* Active Indicator Underline / Pill */}
                  {isActive && (
                    <span 
                      className={`absolute bottom-0 h-0.5 w-full rounded-full transition-all duration-300 ${
                        isDarkSection ? 'bg-editor-bg shadow-[0px_0px_8px_rgba(239,234,226,0.8)]' : 'bg-editor-primary shadow-[0px_0px_8px_rgba(42,31,20,0.5)]'
                      }`} 
                    />
                  )}

                  {/* Hover Icon Tooltip */}
                  <div 
                    className={`absolute bottom-0 font-bold transition-all duration-300 ease-in-out -translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-3 px-2.5 py-1 rounded-full drop-shadow-md pointer-events-none z-20 border flex items-center justify-center ${
                      isDarkSection 
                        ? 'bg-editor-bg text-editor-primary border-editor-surface' 
                        : 'bg-editor-primary text-editor-bg border-editor-primary'
                    }`}
                  >
                    {item.icon}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </header>
  );
}
