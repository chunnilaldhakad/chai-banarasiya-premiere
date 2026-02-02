import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  isVeg: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "north-indian",
    name: "North Indian",
    items: [
      { name: "Butter Chicken", description: "Tender chicken in rich tomato-butter gravy", price: "₹349", isVeg: false },
      { name: "Dal Makhani", description: "Slow-cooked black lentils with cream", price: "₹249", isVeg: true },
      { name: "Paneer Tikka Masala", description: "Grilled cottage cheese in spiced gravy", price: "₹299", isVeg: true },
      { name: "Biryani Lucknowi", description: "Aromatic rice with saffron and spices", price: "₹399", isVeg: false },
    ],
  },
  {
    id: "chinese",
    name: "Chinese",
    items: [
      { name: "Kung Pao Chicken", description: "Wok-tossed with peanuts and dried chillies", price: "₹329", isVeg: false },
      { name: "Hakka Noodles", description: "Stir-fried noodles with vegetables", price: "₹229", isVeg: true },
      { name: "Manchurian Dry", description: "Crispy vegetable balls in tangy sauce", price: "₹249", isVeg: true },
      { name: "Dim Sum Platter", description: "Assorted steamed dumplings", price: "₹299", isVeg: true },
    ],
  },
  {
    id: "italian",
    name: "Italian",
    items: [
      { name: "Penne Arrabiata", description: "Spicy tomato sauce with herbs", price: "₹279", isVeg: true },
      { name: "Chicken Alfredo", description: "Creamy white sauce pasta", price: "₹329", isVeg: false },
      { name: "Risotto Funghi", description: "Creamy mushroom risotto", price: "₹349", isVeg: true },
      { name: "Bruschetta", description: "Toasted bread with fresh tomatoes", price: "₹199", isVeg: true },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    items: [
      { name: "Margherita", description: "Classic tomato, mozzarella, basil", price: "₹299", isVeg: true },
      { name: "Pepperoni Supreme", description: "Loaded with spicy pepperoni", price: "₹399", isVeg: false },
      { name: "Farmhouse", description: "Garden fresh vegetables medley", price: "₹349", isVeg: true },
      { name: "BBQ Chicken", description: "Smoky BBQ sauce with grilled chicken", price: "₹429", isVeg: false },
    ],
  },
  {
    id: "chai",
    name: "Banarasi Chai",
    items: [
      { name: "Signature Banarasi", description: "Our legendary spiced chai blend", price: "₹79", isVeg: true },
      { name: "Masala Chai", description: "Traditional spices with fresh ginger", price: "₹69", isVeg: true },
      { name: "Kulhad Chai", description: "Served in authentic earthen cups", price: "₹89", isVeg: true },
      { name: "Kesar Chai", description: "Saffron-infused royal chai", price: "₹99", isVeg: true },
    ],
  },
];

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const currentCategory = menuData.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
            Culinary <span className="text-gradient">Masterpieces</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each dish crafted with passion, served with love
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {menuData.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-amber to-gold text-background"
                  : "glass-card text-cream hover:border-amber/50"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {currentCategory?.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 group hover:border-amber/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`w-3 h-3 rounded-full ${
                          item.isVeg ? "bg-green-500" : "bg-red-500"
                        }`}
                      />
                      <h3 className="text-xl font-playfair font-semibold text-cream group-hover:text-amber transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-2xl font-playfair font-bold text-gradient whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-amber/50 text-amber font-semibold rounded-full hover:bg-amber/10 transition-all duration-300"
          >
            View Full Menu
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl -translate-x-1/2" />
    </section>
  );
};

export default MenuPreview;
