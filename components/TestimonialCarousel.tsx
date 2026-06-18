'use client';

import { ReactNode } from 'react';

interface TestimonialItem {
  id?: string | number;
  content: ReactNode; 
}

interface TestimonialCarouselProps {
  items: TestimonialItem[];
  speed?: 'slow' | 'normal' | 'fast';
}

export default function TestimonialCarousel({ items = [], speed = 'normal' }: TestimonialCarouselProps) {
  if (!items.length) return <p className="text-center text-gray-500">No testimonials provided.</p>;

  const duplicatedItems = [...items, ...items];

  const speedDurations = {
    fast: 'animate-[marquee_20s_linear_infinite]',
    normal: 'animate-[marquee_40s_linear_infinite]',
    slow: 'animate-[marquee_60s_linear_infinite]',
  };

  return (
    <div className="w-full overflow-hidden py-10 relative">
      {/* Subtle fade edges to blend cards nicely */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-editor-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-editor-bg to-transparent z-10 pointer-events-none" />

      {/* Main Animating Track */}
      <div className={`flex gap-6 w-max ${speedDurations[speed]}`}>
        {duplicatedItems.map((item, index) => (
          <div
            key={item.id ? `${item.id}-${index}` : index}
            className="w-[50px] aspect-video sm:w-[200px] shrink-0 transition-transform duration-300 hover:scale-[1.02] pointer-events-none"
          >
            {item.content}
          </div>
        ))}
      </div>

      {/* Injecting the keyframes directly into the document head */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}