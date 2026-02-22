import { useState } from "react";
import { Play, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const videos = [
  
  {
    id: 2,
    src: "/Infinitum26.mp4",
    thumbnail: "/inf26vot.JPG",
    title: "Infinitum 2026",
    description: "Thanking all those who made Infinitum 2026 (National Level Technical Sympoyism) a shared vision to reality and a grand success",
    date: "February 2026",
    venue: "Coimbatore, India"
  },
  {
    id: 1,
    src: "/aispectrumtalk.mp4",
    thumbnail: "/sanjay photo.jpg",
    title: "AI Spectrum Conference 2025",
    description: "Fireside chat Interaction with Shri Vilas Dhar , President of the Patrick J. McGovern Foundation on the topic 'AI for all'",
    date: "December 2025",
    venue: "Coimbatore, India"
  },
  {
    id: 3,
    src: "/inaug26 (1).mp4",
    thumbnail: "/gallery/IMG_4291.JPG",
    title: "CSEA Inauguration 2025",
    description: "Proposing the Year Plan for the Computer Science and Engineering Association (CSEA) during the inauguration ceremony",
    date: "August 2025",
    venue: "Coimbatore, India"
  },
  {
    id: 4,
    src: "/firstyr26.mp4",
    thumbnail: "/1st25.png",
    title: "CSEA First Year Meeting 2025",
    description: "Addressing the first year students of CSE Students during the first year Induction Programme and sharing insights about the department and student activities",
    date: "September 2025",
    venue: "Coimbatore, India"
  },
  // Add more videos as needed
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
    <section id="videos" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          ref={titleRef}
          className={cn(
            "transition-all duration-1000 mb-16",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Talks<span className="text-gradient"></span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch my presentations and talks from various events and conferences.
          </p>
        </div>

        {/* Video Grid */}
        <div 
          ref={videosRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 bg-card border border-border",
                videosVisible 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-90"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openVideo(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-secondary/20">
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-purple-500/20">
                    <Play className="h-16 w-16 text-primary opacity-50" />
                  </div>
                )}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge (optional) */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-medium">
                  {video.date}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {video.description}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>{video.venue}</span>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'}}></div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeVideo}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-6xl w-full">
              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl animate-scale-in">
                <video
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  className="w-full h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info */}
              <div className="mt-6 text-center text-white">
                <h3 className="font-bold text-2xl mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-300 mb-2">{selectedVideo.description}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                  <span>{selectedVideo.date}</span>
                  <span>•</span>
                  <span>{selectedVideo.venue}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
