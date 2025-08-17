import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
    <section id="gallery" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Photo <span className="text-primary">Gallery</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of moments from my professional journey, projects, and achievements.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openModal(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white bg-black/50 px-4 py-2 rounded-lg">
                <h3 className="font-semibold">{selectedImage.title}</h3>
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
