import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    id: 10,
    src: "/gallery/Copy of IMG_2141 (2).JPG",
    alt: "Sanjay Jayakumar - Inauguration Photo",
    title: "Inauguration Ceremony Photo"
  },
  {
    id: 2,
    src: "/gallery/15f99ca5-9dfc-45ab-a8b2-cf5c08997850.jpg",
    alt: "Sanjay Jayakumar - Speech Photo",
    title: "Speech Photo"
  },
  {
    id: 3,
    src: "/gallery/44642cdc-b2d9-4ce4-887e-bc698cb6eb95.jpg",
    alt: "Sanjay Jayakumar - Event Photo",
    title: "Event Photo"
  },
  {
    id: 4,
    src: "/gallery/8f27fbf4-bd43-4a97-82b4-b0ed87f159f3.jpg",
    alt: "Sanjay Jayakumar - Interaction Photo",
    title: "Interaction Photo"
  },
  {
    id: 5,
    src: "/gallery/a80bb449-4d99-4d2b-adcc-c73e65779ae6.jpg",
    alt: "Sanjay Jayakumar - Event Photo",
    title: "Event Photo"
  },
  {
    id: 6,
    src: "/gallery/1745906377568.jpg",
    alt: "Sanjay Jayakumar - Event Photo",
    title: "Event Photo"
  },
  {
    id: 7,
    src: "/gallery/1745906377896.jpg",
    alt: "Sanjay Jayakumar - Achievement Photo",
    title: "Achievement Photo"
  },
  {
    id: 8,
    src: "/gallery/1745906378282.jpg",
    alt: "Sanjay Jayakumar - Addressing Photo",
    title: "Addressing Photo"
  },
  {
    id: 9,
    src: "/gallery/1750344692103.jpg",
    alt: "Sanjay Jayakumar - AIBILL Team Photo",
    title: "AIBILL Team Photo"
  },
  {
    id: 10,
    src: "/gallery/IMG_4283.JPG",
    alt: "Sanjay Jayakumar - Event Photo 2",
    title: "Event Photo 2"
  },
  {
    id: 11,
    src: "/gallery/IMG_4291.JPG",
    alt: "Sanjay Jayakumar - Event Photo 3",
    title: "Event Photo 3"
  }
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [galleryRef, galleryVisible] = useScrollAnimation({ threshold: 0.1, once: true });

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
    <section id="gallery" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
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
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of moments from my professional journey, projects, and achievements.
          </p>
        </div>

        {/* Gallery Grid */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-all duration-700",
                galleryVisible 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-90"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => openModal(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'}}></div>
            </div>
          ))}
        </div>

        {/* Modal */}
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
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image */}
              <div className="relative max-w-full max-h-full animate-scale-in">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                <h3 className="font-bold text-lg mb-1">{selectedImage.title}</h3>
                <p className="text-sm text-gray-300">
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
