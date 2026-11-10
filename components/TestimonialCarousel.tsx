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
    fast: 'animate-[marquee_22s_linear_infinite]',
    normal: 'animate-[marquee_45s_linear_infinite]',
    slow: 'animate-[marquee_70s_linear_infinite]',
  };

  return (
    <div className="w-full overflow-hidden py-4 sm:py-8 relative group">
      {/* Subtle fade edges to blend cards with editorial background */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-editor-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-editor-bg to-transparent z-10 pointer-events-none" />

      {/* Main Animating Track with hover pause */}
      <div className={`flex gap-4 sm:gap-6 w-max ${speedDurations[speed]} group-hover:[animation-play-state:paused]`}>
        {duplicatedItems.map((item, index) => (
          <div
            key={item.id ? `${item.id}-${index}` : index}
            className="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] aspect-video shrink-0 transition-transform duration-300 hover:scale-[1.03] rounded-xl overflow-hidden shadow-md border border-editor-primary/10"
          >
            {item.content}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
