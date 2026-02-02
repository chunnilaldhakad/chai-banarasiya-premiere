import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CuisineCard {
  id: string;
  name: string;
  description: string;
  image: string;
}

const cuisines: CuisineCard[] = [
  {
    id: "north-indian",
    name: "North Indian",
    description: "Rich curries, aromatic biryanis, and tandoor delights",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
  },
  {
    id: "chinese",
    name: "Chinese",
    description: "Authentic wok-tossed flavors and dim sum",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80",
  },
  {
    id: "italian",
    name: "Italian",
    description: "Wood-fired pizzas and handcrafted pastas",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600&q=80",
  },
  {
    id: "pizza",
    name: "Pizza",
    description: "Artisan pizzas with premium toppings",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
  },
  {
    id: "banarasi-chai",
    name: "Banarasi Chai",
    description: "Our signature chai bar experience",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80",
  },
];

const CuisineShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionRef, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const { scrollXProgress } = useScroll({ container: containerRef });
  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <section id="cuisines" className="section-padding bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Section Header */}
      <div className="container mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Cuisines
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
            A <span className="text-gradient">World</span> of Flavors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Embark on a culinary journey through our diverse menu, crafted by master chefs
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <motion.div style={{ opacity }}>
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-8 cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {cuisines.map((cuisine, index) => (
            <motion.div
              key={cuisine.id}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50 
              }}
              className="flex-shrink-0 w-72 md:w-80 scroll-snap-align-start"
              style={{ perspective: 1000 }}
            >
              <div className="glass-card overflow-hidden group h-96 relative">
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    src={cuisine.image}
                    alt={cuisine.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-playfair font-bold text-cream mb-2 group-hover:text-amber transition-colors">
                    {cuisine.name}
                  </h3>
                  <p className="text-cream/70 text-sm">
                    {cuisine.description}
                  </p>
                </div>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber/50 rounded-2xl transition-all duration-300 pointer-events-none" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 30px hsl(var(--amber) / 0.2)"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="text-center mt-4"
      >
        <span className="text-muted-foreground text-sm">← Drag to explore →</span>
      </motion.div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default CuisineShowcase;
