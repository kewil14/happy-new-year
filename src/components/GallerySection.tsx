import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=1200&q=80",
    title: "Feux d'Artifice Spectaculaires",
    description: "Un spectacle lumineux qui illuminera le ciel"
  },
  {
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    title: "Ambiance Festive",
    description: "Une atmosphère électrique et joyeuse"
  },
  {
    url: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1200&q=80",
    title: "Célébration en Famille",
    description: "Des moments précieux à partager"
  },
  {
    url: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=1200&q=80",
    title: "Soirée Élégante",
    description: "Une soirée raffinée dans un cadre exceptionnel"
  },
  {
    url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    title: "Danse et Musique",
    description: "Une programmation musicale exceptionnelle"
  },
  {
    url: "https://images.unsplash.com/photo-1521478706270-f2e33c203d95?auto=format&fit=crop&w=1200&q=80",
    title: "Décompte Festif",
    description: "Le moment magique du passage à la nouvelle année"
  }
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
  };

  // const handleKeyDown = (e: KeyboardEvent) => {
  //   if (selectedImage === null) return;
  //   if (e.key === 'ArrowLeft') handlePrevious();
  //   if (e.key === 'ArrowRight') handleNext();
  //   if (e.key === 'Escape') setSelectedImage(null);
  // };

  return (
    <section className="py-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Galerie
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Découvrez l'ambiance magique qui vous attend pour cette soirée exceptionnelle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-white/80">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <motion.img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].title}
                  className={`max-w-full max-h-full object-contain cursor-zoom-in ${
                    isZoomed ? 'scale-150' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                />

                <button
                  className="absolute top-4 right-4 text-white/80 hover:text-white"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-8 h-8" />
                </button>

                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 text-center text-white bg-black/50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{images[selectedImage].title}</h3>
                  <p className="text-white/80">{images[selectedImage].description}</p>
                </div>

                <button
                  className="absolute top-4 left-4 text-white/80 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                >
                  <ZoomIn className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
