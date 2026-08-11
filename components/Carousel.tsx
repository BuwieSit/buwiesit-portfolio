'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, ReactNode } from 'react';

// 1. Define the structure of a single Carousel Item
interface CarouselItem {
  id?: string | number;
  content: ReactNode; 
}

// 2. Type the component's props destructuring
interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items = [] }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  if (!items.length) return <p className="text-center text-gray-500">No items provided.</p>;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-6 sm:py-12 px-2 sm:px-4 flex flex-col items-center gap-4 sm:gap-6">
      <div className="relative w-full flex items-center justify-center h-[240px] sm:h-[340px] md:h-[420px] lg:h-[460px]">
        
        <button 
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-1 sm:left-4 z-30 p-2 sm:p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all font-bold shadow-md shadow-editor-surface text-editor-primary hover:scale-110 active:scale-90"
        >
          <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center overflow-hidden sm:overflow-visible">
          {items.map((item, index) => {
            const isCenter = index === activeIndex;
            const isLeft = index === (activeIndex - 1 + items.length) % items.length;
            const isRight = index === (activeIndex + 1) % items.length;

            let positionClass = "opacity-0 pointer-events-none scale-70 z-0 translate-x-0";
            
            if (isCenter) {
              positionClass = "opacity-100 z-20 scale-100 translate-x-0 shadow-2xl";
            } else if (isLeft) {
              positionClass = "opacity-40 sm:opacity-50 z-10 scale-85 -translate-x-10 sm:-translate-x-36 md:-translate-x-52 lg:-translate-x-60 cursor-pointer";
            } else if (isRight) {
              positionClass = "opacity-40 sm:opacity-50 z-10 scale-85 translate-x-10 sm:translate-x-36 md:translate-x-52 lg:translate-x-60 cursor-pointer";
            }

            return (
              <div
                key={item.id || index}
                onClick={() => !isCenter && setActiveIndex(index)}
                className={`absolute w-[92%] sm:w-[85%] md:w-[700px] max-w-[750px] aspect-video rounded-xl sm:rounded-2xl p-1 sm:p-4 md:p-6 transition-all duration-500 ease-in-out transform ${positionClass}`}
              >
                {item.content}
              </div>
            );
          })}
        </div>

        <button 
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-1 sm:right-4 z-30 p-2 sm:p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all font-bold shadow-md shadow-editor-surface text-editor-primary hover:scale-110 active:scale-90"
        >
          <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        
      </div>

      <div className="flex items-center gap-2 sm:gap-2.5 mt-4 sm:mt-10 z-30">
        {items.map((_, index) => {
          const isActive = index === activeIndex;
          
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ease-in-out transform cursor-pointer hover:scale-110 active:scale-95 ${
                isActive 
                  ? 'w-6 sm:w-8 bg-editor-accent shadow-sm shadow-editor-accent/50' 
                  : 'w-2 sm:w-2.5 bg-gray-500 hover:bg-gray-400 opacity-40 hover:opacity-80'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}