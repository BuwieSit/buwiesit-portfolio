'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, User, Briefcase, Library, Send, FileDown, Menu, X, LucideIcon } from 'lucide-react';

interface NavItem {
  id: number;
  Icon: LucideIcon;
  text: string;
  link: string;
}

const navItems: NavItem[] = [
  { id: 1, Icon: Home,      text: 'Home',       link: 'home' },
  { id: 2, Icon: User,      text: 'About',      link: 'about' },
  { id: 3, Icon: Briefcase, text: 'Experience', link: 'experience' },
  { id: 4, Icon: Library,   text: 'Projects',   link: 'projects' },
  { id: 5, Icon: Send,      text: 'Contacts',   link: 'contacts' },
];

export default function Header() {
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ── Section tracking ──────────────────────────────────────────── */
  useEffect(() => {
    const darkSections = ['about', 'experience', 'contacts'];
    const handleScroll = () => {
      const headerOffset = 120;
      const sections = ['home', 'about', 'experience', 'projects', 'contacts'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= headerOffset && bottom > headerOffset) { current = id; break; }
        }
      }
      setActiveSection(current);
      setIsDarkSection(darkSections.includes(current));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Body scroll lock when drawer is open ───────────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  /* ── Shared pill classes ─────────────────────────────────────────── */
  const pillClass = isDarkSection
    ? 'bg-editor-primary/85 border-editor-surface/30 text-editor-bg shadow-black/40'
    : 'bg-editor-surface/35 border-editor-surface/40 text-editor-primary shadow-black/5';

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          DESKTOP HEADER  (md and up)
      ══════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 w-full py-5 px-4 z-[500] pointer-events-none hidden md:flex items-center justify-center">
        <div className="flex items-center justify-center gap-4 pointer-events-auto">

          {/* Logo */}
          <Link href="#home" className="relative comic-pill group shrink-0">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image src="/editor_logo/dark_nobg.png" alt="Logo" fill sizes="80px" loading="eager"
                className={`object-contain transition-opacity duration-500 ${isDarkSection ? 'opacity-0' : 'opacity-100'}`} />
              <Image src="/editor_logo/light_nobg.png" alt="Logo" fill sizes="80px" loading="eager"
                className={`object-contain transition-opacity duration-500 ${isDarkSection ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </Link>

          {/* Pill Nav */}
          <nav aria-label="Main Navigation"
            className={`h-15 px-6 py-2.5 rounded-full border shadow-xl backdrop-blur-3xl transition-all duration-500 flex items-center ${pillClass}`}>
            <ul className="h-full flex gap-4 md:gap-8 items-center">
              {navItems.map(({ id, Icon, text, link }) => {
                const isActive = activeSection === link;
                const activeText = isDarkSection ? 'text-editor-bg' : 'text-editor-primary';
                const idleText   = isDarkSection ? 'text-editor-bg/75 hover:text-editor-bg' : 'text-editor-primary/75 hover:text-editor-primary';
                return (
                  <li key={id} className="relative flex items-center justify-center">
                    <Link href={`#${link}`}
                      className={`group relative flex items-center justify-center px-3.5 py-1.5 rounded-full transition-all duration-300 ease-out select-none cursor-pointer
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-editor-accent active:scale-95
                        hover:bg-editor-surface/20 hover:shadow-xs ${isActive ? activeText : idleText}`}>

                      {/* Ghost spacer — prevents width collapse */}
                      <span className="invisible pointer-events-none select-none font-bold text-sm md:text-base px-0.5">{text}</span>

                      {/* Idle text layer */}
                      <span className={`absolute inset-0 flex items-center justify-center font-bold text-sm md:text-base
                        transition-all duration-150 group-hover:opacity-0 group-hover:scale-75 group-hover:pointer-events-none
                        ${isActive ? 'opacity-100 font-extrabold' : 'opacity-85'}`}>
                        {text}
                      </span>

                      {/* Comic hover layer: icon + word pop */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0
                        group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
                        <div className="flex items-center justify-center whitespace-nowrap">
                          <span className="animate-comic-icon flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                          </span>
                          <span className="animate-comic-word inline-block font-extrabold text-sm md:text-base tracking-wide whitespace-nowrap">
                            {text}
                          </span>
                        </div>
                      </div>
                    </Link>

                    {/* Active underline */}
                    {isActive && (
                      <span className={`absolute -bottom-1.5 h-0.5 w-3/4 rounded-full pointer-events-none transition-all duration-300
                        ${isDarkSection
                          ? 'bg-editor-bg shadow-[0px_0px_8px_rgba(239,234,226,0.8)]'
                          : 'bg-editor-primary shadow-[0px_0px_8px_rgba(42,31,20,0.5)]'}`} />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Resume CTA */}
          <a href="/BUHAWIE_SANTOS_RESUME.pdf" target="_blank" rel="noopener noreferrer"
            download="BUHAWIE_SANTOS_RESUME.pdf" aria-label="Download Resume (PDF)"
            className={`comic-btn h-15 px-5 rounded-full border shadow-xl backdrop-blur-3xl transition-all duration-500
              flex items-center gap-2 text-sm font-bold tracking-wide select-none group shrink-0
              ${isDarkSection
                ? 'bg-editor-surface/90 border-editor-surface text-editor-primary hover:bg-editor-bg shadow-black/40'
                : 'bg-editor-primary/90 border-editor-primary text-editor-bg hover:bg-editor-accent shadow-black/10'}`}>
            <FileDown className="comic-icon w-4 h-4" />
            <span className="comic-text">Resume</span>
          </a>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════
          MOBILE HEADER  (below md)
      ══════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 w-full z-[500] md:hidden pointer-events-none">
        <div className="flex items-center justify-between px-4 py-3 pointer-events-auto">

          {/* Logo */}
          <Link href="#home" className="relative comic-pill group shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative w-12 h-12">
              <Image src="/editor_logo/dark_nobg.png" alt="Logo" fill sizes="48px" loading="eager"
                className={`object-contain transition-opacity duration-500 ${isDarkSection ? 'opacity-0' : 'opacity-100'}`} />
              <Image src="/editor_logo/light_nobg.png" alt="Logo" fill sizes="48px" loading="eager"
                className={`object-contain transition-opacity duration-500 ${isDarkSection ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </Link>

          {/* Burger / Close button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className={`comic-btn relative w-11 h-11 rounded-full border shadow-xl backdrop-blur-3xl
              flex items-center justify-center transition-all duration-500
              focus:outline-none focus-visible:ring-2 focus-visible:ring-editor-accent ${pillClass}`}>
            {/* Menu icon */}
            <span className={`absolute transition-all duration-300
              ${mobileMenuOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}>
              <Menu className="w-5 h-5" />
            </span>
            {/* X icon */}
            <span className={`absolute transition-all duration-300
              ${mobileMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`}>
              <X className="w-5 h-5" />
            </span>
          </button>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════
          MOBILE DRAWER  (slides in from right)
      ══════════════════════════════════════════════════════════════ */}
      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-[499] md:hidden transition-opacity duration-500
          ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!mobileMenuOpen}>

        {/* Dimmed backdrop — tap to close */}
        <div
          className="absolute inset-0 bg-editor-primary/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)} />

        {/* Drawer panel */}
        <div className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-editor-primary shadow-2xl
          flex flex-col transition-transform duration-500 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          {/* Drawer header row */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-editor-surface/20">
            <span className="font-bebas text-editor-bg tracking-widest text-2xl">Navigation</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="comic-btn w-9 h-9 rounded-full border border-editor-surface/30 bg-editor-surface/10
                text-editor-bg flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-editor-accent">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav links */}
          <nav aria-label="Mobile Navigation" className="flex-1 flex flex-col px-5 py-6 gap-2 overflow-y-auto">
            {navItems.map(({ id, Icon, text, link }) => {
              const isActive = activeSection === link;
              return (
                <Link key={id} href={`#${link}`} onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center gap-4 px-4 py-3.5 rounded-2xl border
                    transition-all duration-300 font-poppins font-bold text-base select-none
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-editor-accent active:scale-[0.98]
                    ${isActive
                      ? 'bg-editor-surface/20 border-editor-surface/40 text-editor-bg'
                      : 'border-transparent text-editor-bg/70 hover:bg-editor-surface/10 hover:border-editor-surface/20 hover:text-editor-bg'}`}>

                  {/* Icon badge */}
                  <span className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300
                    ${isActive
                      ? 'bg-editor-accent text-editor-bg'
                      : 'bg-editor-surface/10 text-editor-surface group-hover:bg-editor-surface/20'}`}>
                    <Icon className="w-5 h-5" />
                  </span>

                  <span>{text}</span>

                  {/* Active dot */}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-editor-surface shadow-[0_0_6px_rgba(201,184,150,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Resume CTA pinned at the bottom */}
          <div className="px-5 pb-8 pt-2 border-t border-editor-surface/20">
            <a href="/BUHAWIE_SANTOS_RESUME.pdf" target="_blank" rel="noopener noreferrer"
              download="BUHAWIE_SANTOS_RESUME.pdf" aria-label="Download Resume (PDF)"
              onClick={() => setMobileMenuOpen(false)}
              className="comic-btn w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl
                border border-editor-surface bg-editor-surface/90 text-editor-primary
                font-bold text-sm tracking-wide group
                focus:outline-none focus-visible:ring-2 focus-visible:ring-editor-accent">
              <FileDown className="comic-icon w-4 h-4" />
              <span className="comic-text">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
