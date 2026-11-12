'use client';

import { ReactNode } from 'react';

interface ReelItem {
  id?: string | number;
  content: ReactNode; 
}

interface TestimonialCarouselProps {
  items: ReelItem[];
  speed?: 'slow' | 'normal' | 'fast';
}

export default function TestimonialCarousel({ items = [], speed = 'normal' }: TestimonialCarouselProps) {
  if (!items.length) return null;

  const duplicatedItems = [...items, ...items];

  const speedDurations = {
    fast: 'animate-[marquee_25s_linear_infinite]',
    normal: 'animate-[marquee_45s_linear_infinite]',
    slow: 'animate-[marquee_65s_linear_infinite]',
  };

  const topTickerText = "★ BUWIE CREATIVE ARCHIVE ★ FRONTEND ENGINEERING & CINEMATOGRAPHY ★ SELECTED WORK ★ VOL. 2026 ★ SDE REELS & WEB SYSTEMS ★ PHILIPPINES ★";
  const bottomTickerText = "★ REACT ★ NEXT.JS ★ TAILWIND CSS ★ WEDDING SDE ★ COLOR GRADING ★ SUPABASE ★ POSTGRESQL ★ EVENT FILMS ★ REST APIS ★";

  return (
    <div className="w-full relative py-6 sm:py-10 pointer-events-none select-none">
      {/* Tilted Maximalist Comic Film Reel Track */}
      <div className="w-[115vw] -ml-[7.5vw] -rotate-2 sm:-rotate-[2.5deg] scale-[1.03] origin-center flex flex-col gap-3 sm:gap-4.5 bg-editor-primary/5 py-4 sm:py-6 border-y-2 sm:border-y-[3px] border-editor-primary shadow-sm">
        
        {/* Top Comic Ticker Ribbon */}
        <div className="w-full overflow-hidden flex whitespace-nowrap bg-editor-primary text-editor-bg py-1.5 sm:py-2 border-y border-editor-primary">
          <div className="flex gap-8 w-max animate-[marqueeReverse_35s_linear_infinite]">
            <span className="font-bebas tracking-widest text-xs sm:text-sm text-editor-surface">{topTickerText}</span>
            <span className="font-bebas tracking-widest text-xs sm:text-sm text-editor-surface">{topTickerText}</span>
            <span className="font-bebas tracking-widest text-xs sm:text-sm text-editor-surface">{topTickerText}</span>
            <span className="font-bebas tracking-widest text-xs sm:text-sm text-editor-surface">{topTickerText}</span>
          </div>
        </div>

        {/* Center: Main Animating Card Track */}
        <div className="w-full overflow-hidden py-3 sm:py-4 relative">
          {/* Subtle fade edges to blend cards with editorial background */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-editor-bg via-editor-bg/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-editor-bg via-editor-bg/80 to-transparent z-10 pointer-events-none" />

          <div className={`flex gap-5 sm:gap-7 w-max ${speedDurations[speed]}`}>
            {duplicatedItems.map((item, index) => (
              <div
                key={item.id ? `${item.id}-${index}` : index}
                className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-video shrink-0 [&:nth-child(even)]:-rotate-1 [&:nth-child(odd)]:rotate-1"
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Comic Ticker Ribbon */}
        <div className="w-full overflow-hidden flex whitespace-nowrap bg-editor-surface/30 text-editor-primary py-1 sm:py-1.5 border-y border-editor-primary/40">
          <div className="flex gap-8 w-max animate-[marquee_35s_linear_infinite]">
            <span className="font-bebas tracking-widest text-[11px] sm:text-xs text-editor-primary font-bold">{bottomTickerText}</span>
            <span className="font-bebas tracking-widest text-[11px] sm:text-xs text-editor-primary font-bold">{bottomTickerText}</span>
            <span className="font-bebas tracking-widest text-[11px] sm:text-xs text-editor-primary font-bold">{bottomTickerText}</span>
            <span className="font-bebas tracking-widest text-[11px] sm:text-xs text-editor-primary font-bold">{bottomTickerText}</span>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}
