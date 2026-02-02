import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const headlineWords = "From Banaras Chai to Global Cuisine — Served in Royal Style".split(" ");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Placeholder */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-plate-in-a-restaurant-43681-large.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Animated Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-amber text-lg md:text-xl tracking-[0.3em] uppercase font-poppins">
            Welcome to
          </span>
        </motion.div>

        {/* Restaurant Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6"
        >
          <span className="text-gradient">Chai Banarasiya</span>
        </motion.h1>

        {/* Animated Headline */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-12 max-w-4xl mx-auto">
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.1,
              }}
              className="text-xl md:text-2xl lg:text-3xl font-playfair text-cream/90"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection("menu")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-button px-8 py-4 bg-gradient-to-r from-amber to-gold text-background font-semibold rounded-full text-lg transition-all duration-300"
          >
            Explore Menu
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-amber/50 text-amber font-semibold rounded-full text-lg hover:bg-amber/10 hover:border-amber transition-all duration-300 backdrop-blur-sm"
          >
            Book a Table
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("cuisines")}
        >
          <span className="text-amber/70 text-sm tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-6 h-6 text-amber animate-glow" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
