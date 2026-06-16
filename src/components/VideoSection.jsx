import { useState } from "react";
import { Play, X, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/L9lp-QbbJyA",
    thumbnail: "/pannel.jpg",
    isYoutube: true,
    title: "Panel Discussion on Mitigating Job Displacement in the Age of AI",
    description: "Moderated a panel discussion at PSG Tech, Coimbatore, focusing on solutions, policy frameworks, and educational shifts to mitigate job displacement in the era of rapid AI adoption.",
    date: "March 2026",
    venue: "PSG Tech, Coimbatore"
  },
  {
    id: 2,
    src: "/Infinitum26.mp4",
    thumbnail: "/inf26vot.JPG",
    title: "Infinitum 2026 Symposium",
    description: "Thanking all participants, speakers, and volunteers who made Infinitum 26 (National Level Technical Symposium) a grand operational success.",
    date: "February 2026",
    venue: "PSG Tech, Coimbatore"
  },
  {
    id: 3,
    src: "/aispectrumtalk.mp4",
    thumbnail: "/sanjay photo.jpg",
    title: "AI Spectrum Conference 2025",
    description: "Participating in a fireside chat with Shri Vilas Dhar, President of the Patrick J. McGovern Foundation, exploring the topic of 'AI for All'.",
    date: "December 2025",
    venue: "PSG Tech, Coimbatore"
  },
  {
    id: 4,
    src: "/inaug26 (1).mp4",
    thumbnail: "/gallery/IMG_4291.JPG",
    title: "CSEA Inauguration Address",
    description: "Proposing the academic year plan and strategic goals for the Computer Science and Engineering Association (CSEA) during the inaugural ceremony.",
    date: "August 2025",
    venue: "PSG Tech, Coimbatore"
  },
  {
    id: 5,
    src: "/firstyr26.mp4",
    thumbnail: "/1st25.png",
    title: "CSEA First Year Meeting",
    description: "Addressing the incoming first-year computer science students, offering academic advice, association support, and departmental pathways.",
    date: "September 2025",
    venue: "PSG Tech, Coimbatore"
  }
];

export const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [videosRef, videosVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeVideo();
  };

  return (
    <section id="videos" className="py-24 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={cn(
            "transition-all duration-1000 mb-16 text-center",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Presentations & <span className="text-gradient font-serif italic">Talks</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            A visual documentation of my keynotes, panel discussions, and student organization addresses.
          </p>
        </div>

        {/* Videos Grid */}
        <div 
          ref={videosRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-5xl lg:mx-auto"
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={cn(
                "group glass-premium rounded-[1.75rem] overflow-hidden card-hover transition-all duration-700 flex flex-col justify-between text-left cursor-pointer",
                videosVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openVideo(video)}
            >
              <div>
                {/* Thumbnail and Play Icon */}
                <div className="relative aspect-video overflow-hidden bg-secondary/35 border-b border-border/80">
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                      <Play className="h-10 w-10 text-primary/40" />
                    </div>
                  )}
                  
                  {/* Floating Date Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 text-white text-[10px] font-bold uppercase tracking-wider">
                    {video.date}
                  </div>

                  {/* Play Button Overlay Container */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/45 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-md">
                      <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Video Info Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="px-6 pb-6 pt-2 mt-auto flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="font-medium">{video.venue}</span>
              </div>

              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeVideo}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 z-10 p-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90 cursor-pointer"
                aria-label="Close video player"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Video Player Box */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl animate-scale-in border border-white/10 bg-black">
                {selectedVideo.isYoutube ? (
                  <iframe
                    src={`${selectedVideo.src}?autoplay=1`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                ) : (
                  <video
                    src={selectedVideo.src}
                    controls
                    autoPlay
                    className="w-full h-full"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              {/* Video Info description details */}
              <div className="mt-6 text-center text-white space-y-2">
                <h3 className="font-bold text-xl md:text-2xl">{selectedVideo.title}</h3>
                <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">{selectedVideo.description}</p>
                <div className="flex items-center justify-center gap-4 text-xs font-semibold text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{selectedVideo.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{selectedVideo.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
