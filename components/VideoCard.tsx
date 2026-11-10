'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface VideoCardProps {
  embedUrl: string; // e.g., "https://www.youtube.com/embed/VJffXfBqQF4?si=STGushOuzgHV2YW0"
  title: string;
  description: string;
  category?: string;
}

export default function VideoCard({ embedUrl, title, description, category = "Cinematography" }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube Video ID from embedUrl
  const getYouTubeId = (url: string) => {
    const match = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  };

  const videoId = getYouTubeId(embedUrl);
  const thumbnailUrl = videoId 
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : '';

  // If user clicked play, mount the active iframe
  if (isPlaying) {
    const autoplayUrl = embedUrl.includes('?') 
      ? `${embedUrl}&autoplay=1` 
      : `${embedUrl}?autoplay=1`;

    return (
      <div className="relative w-full h-full bg-editor-primary rounded-2xl overflow-hidden shadow-2xl border border-editor-surface/30">
        <iframe
          src={autoplayUrl}
          title={`${title} video player`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0 object-cover"
        />
      </div>
    );
  }

  return (
    <div 
      onClick={() => setIsPlaying(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsPlaying(true);
        }
      }}
      aria-label={`Play film: ${title}`}
      className="relative @container w-full h-full text-editor-bg flex flex-col justify-between rounded-2xl overflow-hidden group border border-editor-surface/30 shadow-xl bg-editor-primary cursor-pointer select-none"
    >
      {/* 1. High-Res Video Poster Image */}
      {thumbnailUrl && (
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src={thumbnailUrl} 
            alt={`${title} film poster`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            priority
            unoptimized
          />
        </div>
      )}

      {/* 2. Cinematic Vignette & Matte Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-editor-primary via-editor-primary/60 to-editor-primary/30 z-[1] pointer-events-none transition-opacity duration-300 group-hover:via-editor-primary/50" />

      {/* 3. Top Section: Category Tag & Film Slate Badge */}
      <div className="relative pt-3 sm:pt-5 px-3 sm:px-6 flex items-center justify-between w-full z-10">
        <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold bg-editor-primary/90 text-editor-surface border border-editor-surface/30 px-3 py-1 rounded-full shadow-sm">
          {category}
        </span>

        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold bg-editor-surface/90 text-editor-primary px-3 py-1 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105">
          <span>Watch Film</span>
        </span>
      </div>

      {/* 4. Center: Tactile Cinematic Play Button */}
      <div className="relative flex-grow flex items-center justify-center z-10">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-editor-surface/95 text-editor-primary flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-115 group-hover:bg-editor-bg group-active:scale-95 border-2 border-editor-primary/20">
          <Play className="w-5 h-5 sm:w-7 sm:h-7 ml-0.5 fill-editor-primary" />
        </div>
      </div>

      {/* 5. Bottom Section: Film Info */}
      <div className="relative pb-4 sm:pb-6 px-3 sm:px-6 z-10 w-full flex flex-col gap-1 sm:gap-1.5">
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
    </div>
  );
}
