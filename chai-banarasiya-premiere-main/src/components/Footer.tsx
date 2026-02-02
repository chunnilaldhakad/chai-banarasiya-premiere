import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="relative bg-background pt-20 pb-8 overflow-hidden">
      {/* Animated Wave Divider */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          className="absolute w-[200%] h-full animate-wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1200,100 1200,60 1200,60 L1200,0 L0,0 Z"
            fill="hsl(var(--charcoal-light))"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-playfair font-bold text-gradient mb-4">
              Chai Banarasiya
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Where the warmth of Banarasi hospitality meets global flavors. 
              Experience the royal taste of tradition, served with modern elegance.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glass-card text-muted-foreground hover:text-amber hover:border-amber/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-playfair font-semibold text-cream mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-amber transition-colors animated-underline inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-playfair font-semibold text-cream mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  C-370 Shankar Colony, Block C, Siddharth Nagar, Jagatpura, Jaipur
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber flex-shrink-0" />
                <a href="tel:+918769653769" className="text-muted-foreground text-sm hover:text-amber transition-colors">
                  +91 87696 53769
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber flex-shrink-0" />
                <a href="mailto:info@chaibanarasiya.com" className="text-muted-foreground text-sm hover:text-amber transition-colors">
                  info@chaibanarasiya.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Chai Banarasiya Restaurant. All rights reserved.
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            Crafted with ❤️ in Jaipur, India
          </p>
        </motion.div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-burgundy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </footer>
  );
};

export default Footer;
