'use client';

import Image from 'next/image';

interface ProjectReelCardProps {
  title: string;
  category: string;
  imageSrc: string;
  targetHref?: string;
}

export default function ProjectReelCard({
  title,
  category,
  imageSrc,
}: ProjectReelCardProps) {
  return (
    <div
      className="relative block w-full h-full rounded-2xl overflow-hidden select-none border-[3px] border-editor-primary shadow-[6px_6px_0px_#2A1F14] sm:shadow-[8px_8px_0px_#2A1F14] bg-editor-primary pointer-events-none"
      aria-label={`${title} preview`}
    >
      {/* 1. Full-bleed Preview / Poster Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 768px) 280px, (max-width: 1200px) 360px, 420px"
          className="object-cover object-center"
          priority={false}
          unoptimized={imageSrc.startsWith('http')}
        />
      </div>

      {/* 2. Warm Editorial Vignette & Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-editor-primary/95 via-editor-primary/45 to-transparent z-[1]" />

      {/* 3. Maximalist Comic Stickers & Badges Content */}
      <div className="relative h-full w-full p-3.5 sm:p-4 md:p-5 flex flex-col justify-between z-10">
        {/* Top: Comic Sticker Pill & Slate Tag */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-poppins font-bold text-[10px] sm:text-xs text-editor-primary bg-editor-bg border-2 border-editor-primary px-2.5 py-1 rounded-md shadow-[2px_2px_0px_#2A1F14] uppercase tracking-wider">
            {category}
          </span>
          <span className="font-bebas text-xs sm:text-sm tracking-widest text-editor-surface bg-editor-primary/90 px-2 py-0.5 rounded border border-editor-surface/30">
            CUT // 2026
          </span>
        </div>

        {/* Bottom: Project Title in Bold Bebas Display */}
        <div className="w-full">
          <h3 className="font-bebas text-xl sm:text-2xl md:text-3xl text-editor-bg tracking-wide line-clamp-2 leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
