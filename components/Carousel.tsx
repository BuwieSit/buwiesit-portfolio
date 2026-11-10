'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, ReactNode } from 'react';

interface CarouselItem {
  id?: string | number;
  content: ReactNode; 
}

interface CarouselProps {
  items: CarouselItem[];
  ariaLabel?: string;
}

export default function Carousel({ items = [], ariaLabel = "Featured Projects Carousel" }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (!items.length) return <p className="text-center text-editor-primary/60 py-8">No items provided.</p>;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      aria-roledescription="carousel" 
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      }}
      className="w-full max-w-7xl mx-auto py-4 sm:py-8 px-2 sm:px-4 flex flex-col items-center gap-4 sm:gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-editor-accent rounded-3xl"
    >
      <div className="relative w-full flex items-center justify-center h-[260px] sm:h-[360px] md:h-[440px] lg:h-[480px]">
        
        {/* Previous Button */}
        <button 
          onClick={handlePrev}
          aria-label="Previous project"
          className="absolute left-1 sm:left-4 z-30 p-2 sm:p-3.5 bg-editor-bg/95 hover:bg-editor-primary hover:text-editor-bg border border-editor-primary/20 text-editor-primary rounded-full transition-all duration-300 shadow-lg hover:scale-110 active:scale-90 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-editor-accent"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Carousel Slides Stage */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden sm:overflow-visible">
          {items.map((item, index) => {
            const isCenter = index === activeIndex;
            const isLeft = index === (activeIndex - 1 + items.length) % items.length;
            const isRight = index === (activeIndex + 1) % items.length;

            let positionClass = "opacity-0 pointer-events-none scale-70 z-0 translate-x-0";
            
            if (isCenter) {
              positionClass = "opacity-100 z-20 scale-100 translate-x-0 shadow-2xl";
            } else if (isLeft) {
              positionClass = "opacity-35 sm:opacity-50 z-10 scale-85 -translate-x-12 sm:-translate-x-36 md:-translate-x-52 lg:-translate-x-60 cursor-pointer hover:opacity-75";
            } else if (isRight) {
              positionClass = "opacity-35 sm:opacity-50 z-10 scale-85 translate-x-12 sm:translate-x-36 md:translate-x-52 lg:translate-x-60 cursor-pointer hover:opacity-75";
            }

            return (
              <div
                key={item.id || index}
                onClick={() => !isCenter && setActiveIndex(index)}
                className={`absolute w-[92%] sm:w-[85%] md:w-[700px] max-w-[760px] aspect-video rounded-2xl p-1 sm:p-3 transition-all duration-500 ease-in-out transform ${positionClass}`}
              >
                {item.content}
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button 
          onClick={handleNext}
          aria-label="Next project"
          className="absolute right-1 sm:right-4 z-30 p-2 sm:p-3.5 bg-editor-bg/95 hover:bg-editor-primary hover:text-editor-bg border border-editor-primary/20 text-editor-primary rounded-full transition-all duration-300 shadow-lg hover:scale-110 active:scale-90 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-editor-accent"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        
      </div>

      {/* Slide Indicators with semantic editor colors */}
      <div className="flex items-center gap-2 sm:gap-2.5 mt-2 sm:mt-6 z-30">
        {items.map((_, index) => {
          const isActive = index === activeIndex;
          
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ease-in-out transform cursor-pointer hover:scale-110 active:scale-95 ${
                isActive 
                  ? 'w-7 sm:w-9 bg-editor-accent shadow-xs' 
                  : 'w-2 sm:w-2.5 bg-editor-primary/25 hover:bg-editor-primary/50'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
