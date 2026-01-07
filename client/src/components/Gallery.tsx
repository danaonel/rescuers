import { motion } from "framer-motion";

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  if (!images.length) return null;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Gallery</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto md:mx-0 opacity-20" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-muted shadow-sm"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
