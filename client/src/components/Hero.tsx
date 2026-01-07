import { motion } from "framer-motion";

interface HeroProps {
  tagline: string;
  description: string;
  onDonateClick: () => void;
}

export function Hero({ tagline, description, onDonateClick }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-primary mb-8 leading-tight text-balance"
          >
            {tagline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 text-balance"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <button
              onClick={onDonateClick}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-foreground bg-primary rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              Support Our Work
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract background decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-gradient-to-b from-secondary/50 to-transparent -z-10 rounded-[100%] blur-3xl opacity-60 pointer-events-none" />
    </section>
  );
}
