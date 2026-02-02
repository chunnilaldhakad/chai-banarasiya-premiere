import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span: "normal" | "tall" | "wide";
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Restaurant interior",
    span: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Elegant dining setup",
    span: "normal",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    alt: "Buffet spread",
    span: "wide",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Fine dining dish",
    span: "normal",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    alt: "Restaurant ambience",
    span: "tall",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80",
    alt: "Bar area",
    span: "normal",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80",
    alt: "Private dining",
    span: "wide",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=80",
    alt: "Outdoor seating",
    span: "normal",
  },
];

const AmbienceGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="gallery" className="section-padding bg-charcoal-light relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Space
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
            Royal <span className="text-gradient">Ambience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Step into an atmosphere of elegance and warmth
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid mb-4 ${
                image.span === "tall" ? "aspect-[3/4]" : image.span === "wide" ? "aspect-[4/3]" : "aspect-square"
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700"
                whileHover={{ scale: 1.1 }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-cream font-medium">{image.alt}</p>
              </div>

              {/* Glow border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber/40 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 p-2 glass-card text-cream hover:text-amber transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-burgundy/5 rounded-full blur-3xl -translate-x-1/2" />
    </section>
  );
};

export default AmbienceGallery;
