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
      className="relative w-full h-full text-white flex flex-col justify-between rounded-2xl group"
    >
      {/* 1. Full Bleed Background Image (Landscape orientation fit) */}
      {mockupImg && (
        <div className="absolute inset-0 w-full h-full -z-20">
          <Image 
            src={mockupImg} 
            alt={`${title} background`}
            fill
            sizes="(max-w-768px) 100vw, 33vw"
            className="object-cover object-center"
            priority
          />
        </div>
      )}

      {/* 2. Subtle Gradient Overlay Layer */}
      {/* Mixes from dark translucent to a more solid color at the bottom to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-editor-accent/70 via-editor-primary/80 to-editor-primary/95 -z-10 " />

      {/* 3. Top Section: Type Tag */}
      <div className="pt-6 pl-6">
        <span className="text-xs uppercase tracking-wider bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-80">
          {type}
        </span>
      </div>
      
      {/* Empty spacer area to force landscape viewport height layout */}
      <div className="flex-grow min-h-[100px]" />

      {/* 4. Bottom Section: Info Typography */}
      <div className="pb-6 px-6 z-10 w-full bg-gradient-to-t from-editor-primary via-editor-primary/50 to-transparent pt-12">
        <h4 className="text-sm lg:text-xl font-bold mb-1 line-clamp-2 drop-shadow-md">
          {title}
        </h4>
        <p className="text-xs opacity-80 drop-shadow-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}