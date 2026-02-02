import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Utensils, ChefHat, Cake, Coffee } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: Utensils, value: 40, suffix: "+", label: "Dishes Daily" },
  { icon: ChefHat, value: 5, suffix: "", label: "Live Counters" },
  { icon: Cake, value: 15, suffix: "+", label: "Fresh Desserts" },
  { icon: Coffee, value: 10, suffix: "+", label: "Chai Varieties" },
];

const CountUpNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-5xl md:text-6xl font-playfair font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

const BuffetExperience = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="section-padding bg-charcoal-light relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-cooking-vegetables-in-a-pan-23582-large.mp4"
                type="video/mp4"
              />
            </video>
            
            {/* Overlay with glass effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-6 left-6 glass-card px-6 py-3"
            >
              <span className="text-amber font-semibold">Live Cooking</span>
            </motion.div>
          </motion.div>

          {/* Stats Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
                The Experience
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Unlimited <span className="text-gradient">Buffet</span> Feast
              </h2>
              <p className="text-muted-foreground text-lg">
                Indulge in our lavish spread featuring live cooking stations, 
                fresh preparations, and our legendary chai bar.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-6 text-center group hover:border-amber/30 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-amber mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <CountUpNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                  <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-burgundy/5 rounded-full blur-3xl" />
    </section>
  );
};

export default BuffetExperience;
