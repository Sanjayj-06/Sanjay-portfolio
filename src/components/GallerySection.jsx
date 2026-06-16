import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    id: 10,
    src: "/gallery/Copy of IMG_2141 (2).JPG",
    alt: "Sanjay Jayakumar - Inauguration Photo",
    title: "CSEA Inauguration Ceremony"
  },
  {
    id: 2,
    src: "/gallery/15f99ca5-9dfc-45ab-a8b2-cf5c08997850.jpg",
    alt: "Sanjay Jayakumar - Speech Photo",
    title: "Academic Keynote Address"
  },
  {
    id: 3,
    src: "/gallery/44642cdc-b2d9-4ce4-887e-bc698cb6eb95.jpg",
    alt: "Sanjay Jayakumar - Event Photo",
    title: "Technical Seminar Interaction"
  },
  {
    id: 4,
    src: "/gallery/8f27fbf4-bd43-4a97-82b4-b0ed87f159f3.jpg",
    alt: "Sanjay Jayakumar - Interaction Photo",
    title: "Speaker Discussion Session"
  },
  {
    id: 5,
    src: "/gallery/a80bb449-4d99-4d2b-adcc-c73e65779ae6.jpg",
    alt: "Sanjay Jayakumar - Event Photo",
    title: "Workshop Coordination"
  },
  {
    id: 6,
    src: "/gallery/1745906377568.jpg",
    alt: "Sanjay Jayakumar - Event Photo",
    title: "Industry Collaboration Event"
  },
  {
    id: 7,
    src: "/gallery/1745906377896.jpg",
    alt: "Sanjay Jayakumar - Achievement Photo",
    title: "Symposium Award Ceremony"
  },
  {
    id: 8,
    src: "/gallery/1745906378282.jpg",
    alt: "Sanjay Jayakumar - Addressing Photo",
    title: "Student Induction Keynote"
  },
  {
    id: 9,
    src: "/gallery/1750344692103.jpg",
    alt: "Sanjay Jayakumar - AIBILL Team Photo",
    title: "INRIA AIBILL Project Team"
  },
  {
    id: 11,
    src: "/gallery/IMG_4283.JPG",
    alt: "Sanjay Jayakumar - Event Photo 2",
    title: "CSEA Seminar Presentation"
  },
  {
    id: 12,
    src: "/gallery/IMG_4291.JPG",
    alt: "Sanjay Jayakumar - Event Photo 3",
    title: "CSEA Inauguration Presentation"
  }
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [carouselRef, carouselVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <section id="gallery" className="py-24 md:py-32 px-4 relative overflow-hidden bg-background">
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
            Photo <span className="text-gradient font-serif italic">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Capturing key milestones, event hosting, and project presentations in my engineering journey.
          </p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div 
          ref={carouselRef}
          className={cn(
            "relative transition-all duration-1000 overflow-hidden",
            carouselVisible ? "opacity-100" : "opacity-0"
          )}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full">
            {/* Scrolling Container: gap is set to 4 (16px) so that width 320px + gap 16px = 336px, aligning perfectly with CSS translations */}
            <div className={cn(
              "flex gap-4 animate-scroll",
              isPaused && "pause-animation"
            )}>
              {/* First set of images */}
              {galleryImages.map((image, index) => (
                <div
                  key={`first-${image.id}`}
                  className="group relative flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden cursor-pointer border border-border/80 shadow-md transition-all duration-500 hover:scale-[1.03] bg-secondary/25"
                  onClick={() => openModal(image, index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-base md:text-lg mb-0.5">{image.title}</h3>
                      <p className="text-xs text-gray-300 font-semibold uppercase tracking-wider">Milestones</p>
                    </div>
                  </div>
                  {/* Glowing hover outline */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'}}></div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {galleryImages.map((image, index) => (
                <div
                  key={`second-${image.id}`}
                  className="group relative flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden cursor-pointer border border-border/80 shadow-md transition-all duration-500 hover:scale-[1.03] bg-secondary/25"
                  onClick={() => openModal(image, index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-base md:text-lg mb-0.5">{image.title}</h3>
                      <p className="text-xs text-gray-300 font-semibold uppercase tracking-wider">Milestones</p>
                    </div>
                  </div>
                  {/* Glowing hover outline */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'}}></div>
                </div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* Modal Overlay Player */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 z-10 p-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 z-10 p-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image box frame */}
              <div className="relative max-w-full max-h-full animate-scale-in">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Info text box */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                <h3 className="font-bold text-base md:text-lg mb-0.5">{selectedImage.title}</h3>
                <p className="text-xs text-slate-400">
                  {currentIndex + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
