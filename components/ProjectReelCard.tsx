'use client';

import Link from 'next/link';
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
  targetHref = '#projects',
}: ProjectReelCardProps) {
  return (
    <Link
      href={targetHref}
      className="relative block w-full h-full rounded-xl overflow-hidden group select-none border border-editor-surface/30 shadow-md bg-editor-primary cursor-pointer transition-all duration-300 hover:border-editor-accent/70 hover:shadow-xl"
      aria-label={`View ${title} in projects section`}
    >
      {/* 1. Full-bleed Preview / Poster Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 768px) 240px, (max-width: 1200px) 320px, 360px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          priority={false}
          unoptimized={imageSrc.startsWith('http')}
        />
      </div>

      {/* 2. Warm Editorial Vignette & Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-editor-primary via-editor-primary/55 to-editor-primary/25 z-[1] transition-opacity duration-300 group-hover:via-editor-primary/40 pointer-events-none" />

      {/* 3. Minimal Clean Content: ONLY Category and Title */}
      <div className="relative h-full w-full p-3 sm:p-4 flex flex-col justify-between z-10 pointer-events-none">
        {/* Top: Category Pill */}
        <div className="flex items-start justify-start">
          <span className="comic-pill text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-editor-surface bg-editor-primary/85 border border-editor-surface/35 px-2.5 py-1 rounded-full shadow-xs backdrop-blur-xs">
            {category}
          </span>
        </div>

        {/* Bottom: Project Title */}
        <div className="w-full">
          <h3 className="comic-text font-bold text-xs sm:text-sm text-editor-bg group-hover:text-editor-surface transition-colors line-clamp-2 leading-snug drop-shadow-sm">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
