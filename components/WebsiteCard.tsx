import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  type: string;
  title: string;
  description: string;
  link: string;
  mockupImg?: string;
}

export default function WebsiteCard({ type, title, description, link, mockupImg }: ProjectCardProps) {
  return (
    <Link 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      // Added `w-full h-full overflow-hidden` to clip all absolute backgrounds precisely to parent shape
      className="relative w-full h-full text-white flex flex-col justify-between rounded-2xl overflow-hidden group"
    >
      {/* 1. Full Bleed Background Image */}
      {mockupImg && (
        <div className="absolute inset-0 w-full h-full -z-20">
          <Image 
            src={mockupImg} 
            alt={`${title} background`}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
      )}

      {/* 2. Responsive Gradient Overlay Layer */}
      {/* Explicit w-full h-full forces it to adapt instantly when the container reshapes */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-editor-accent/70 via-editor-primary/80 to-editor-primary/95 -z-10" />

      {/* 3. Top Section: Type Tag */}
      <div className="pt-6 pl-6 self-start">
        <span className="text-xs uppercase tracking-wider bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-80">
          {type}
        </span>
      </div>
      
      {/* Empty spacer area with a percentage basis instead of static min-h to stay flexible */}
      <div className="flex-grow min-h-[25%]" />

      {/* 4. Bottom Section: Info Typography */}
      <div className="pb-6 px-6 z-10 w-full bg-gradient-to-t from-editor-primary via-editor-primary/60 to-transparent pt-16 mt-auto">
        <h4 
          className="font-bold mb-1 line-clamp-2 drop-shadow-md transition-colors"
          style={{ 
            // Scales fluidly between 14px (minimum) and 24px (maximum) based on container width
            fontSize: 'clamp(0.875rem, 2.5cqw, 1.5rem)' 
          }}
        >
          {title}
        </h4>
        <p 
          className="opacity-80 drop-shadow-sm line-clamp-1"
          style={{ 
            // Scales fluidly between 11px (minimum) and 14px (maximum)
            fontSize: 'clamp(0.688rem, 1.5cqw, 0.875rem)' 
          }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}