interface VideoCardProps {
  embedUrl: string; // e.g., "https://www.youtube.com/embed/dQw4w9WgXcQ"
  title: string;
  description: string;
}

export default function VideoCard({ embedUrl, title, description }: VideoCardProps) {
  return (
    <div className="relative w-full h-full text-white flex flex-col justify-between rounded-xl sm:rounded-2xl overflow-hidden group">
      
      <div className="absolute inset-0 w-full h-full z-20">
        <iframe
          src={embedUrl}
          title={`${title} video player`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0 object-cover"
        />
      </div>

      <div className="pt-3 sm:pt-6 pl-3 sm:pl-6 pointer-events-none z-10">
        <span className="text-[10px] sm:text-xs uppercase tracking-wider bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full opacity-80">
          Video Editing
        </span>
      </div>
      
      <div className="pb-3 sm:pb-6 px-3 sm:px-6 z-10 w-full bg-gradient-to-t from-editor-primary via-editor-primary/60 to-transparent pt-6 sm:pt-12 pointer-events-none">
        <h4 className="text-xs sm:text-base lg:text-xl font-bold mb-0.5 sm:mb-1 line-clamp-1 sm:line-clamp-2 drop-shadow-md">
          {title}
        </h4>
        <p className="text-[10px] sm:text-xs opacity-80 drop-shadow-sm line-clamp-1 sm:line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}