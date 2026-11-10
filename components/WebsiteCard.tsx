'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  type: string;
  title: string;
  description: string;
  link: string;
  mockupImg?: string;
  tags?: string[];
}

export default function WebsiteCard({ type, title, description, link, mockupImg, tags = [] }: ProjectCardProps) {
  return (
    <Link 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative @container w-full h-full text-editor-bg flex flex-col justify-between rounded-2xl overflow-hidden group border border-editor-surface/30 shadow-xl bg-editor-primary transition-all duration-300"
    >
      {/* 1. Full Bleed Background Image */}
      {mockupImg && (
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src={mockupImg} 
            alt={`${title} mockup preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
        </div>
      )}

      {/* 2. Editorial Gradient Overlay (Subtle at top, readable at bottom) */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-editor-primary via-editor-primary/75 to-editor-primary/25 z-[1] pointer-events-none transition-opacity duration-300 group-hover:via-editor-primary/65" />

      {/* 3. Top Section: Type Tag & Live Link Indicator */}
      <div className="relative pt-3 sm:pt-5 px-3 sm:px-6 flex items-center justify-between w-full z-10">
        <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold bg-editor-primary/85 text-editor-surface border border-editor-surface/30 px-3 py-1 rounded-full shadow-sm">
          {type}
        </span>

        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold bg-editor-surface/90 text-editor-primary px-3 py-1 rounded-full shadow-sm transition-all duration-300 group-hover:bg-editor-bg group-hover:scale-105">
          <span>Live Site</span>
          <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
      
      {/* Spacer to let image shine */}
      <div className="flex-grow min-h-[25%]" />

      {/* 4. Bottom Section: Typography & Tech Tags */}
      <div className="relative pb-4 sm:pb-6 px-3 sm:px-6 z-10 w-full flex flex-col gap-1.5 sm:gap-2">
        {tags.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[9px] sm:text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-md bg-editor-surface/20 text-editor-surface border border-editor-surface/30 backdrop-blur-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 
          className="font-bold line-clamp-2 text-editor-bg group-hover:text-editor-surface transition-colors leading-snug drop-shadow-sm"
          style={{ 
            fontSize: 'clamp(0.95rem, 2.2cqw, 1.4rem)' 
          }}
        >
          {title}
        </h3>
        
        <p 
          className="text-editor-bg/85 line-clamp-2 leading-relaxed"
          style={{ 
            fontSize: 'clamp(0.7rem, 1.4cqw, 0.875rem)' 
          }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
