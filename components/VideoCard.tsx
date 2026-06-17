interface VideoCardProps {
  embedUrl: string; // e.g., "https://www.youtube.com/embed/dQw4w9WgXcQ"
  title: string;
  description: string;
}

export default function VideoCard({ embedUrl, title, description }: VideoCardProps) {
  return (
    <div className="relative w-full h-full text-white flex flex-col justify-between rounded-2xl overflow-hidden group">
      
      <div className="absolute inset-0 w-full h-full z-20">
        <iframe
          src={embedUrl}
          title={`${title} video player`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0 object-cover"
        />
      </div>


      <div className="pt-6 pl-6 pointer-events-none">
        <span className="text-xs uppercase tracking-wider bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-80">
          Video Editing
        </span>
      </div>
      
      <div className="pb-6 px-6 z-10 w-full bg-gradient-to-t from-editor-primary via-editor-primary/60 to-transparent pt-12 pointer-events-none">
        <h4 className="text-sm lg:text-xl font-bold mb-1 line-clamp-2 drop-shadow-md">
          {title}
        </h4>
        <p className="text-xs opacity-80 drop-shadow-sm">
          {description}
        </p>
      </div>
    </div>
  );
}