import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Clock, Navigation, Send, User, Calendar, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const LocationContact = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Sent!",
      description: "We'll contact you shortly to confirm your booking.",
    });
    setFormData({ name: "", phone: "", date: "", guests: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=C-370+Shankar+Colony+Block+C+Siddharth+Nagar+Jagatpura+Jaipur+Rajasthan+302017",
      "_blank"
    );
  };

  return (
    <section id="contact" className="section-padding bg-charcoal-light relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-amber text-sm tracking-[0.3em] uppercase mb-4 block">
            Visit Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
            Find <span className="text-gradient">Your Way</span> Here
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're waiting to serve you the royal experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1234567890123!2d75.87654321234567!3d26.82345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ5JzI0LjQiTiA3NcKwNTInMzUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 pointer-events-none border-2 border-amber/20 rounded-3xl" />
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 flex items-start gap-4 group hover:border-amber/30 transition-all duration-300">
                <div className="p-3 rounded-xl bg-amber/10 text-amber group-hover:bg-amber group-hover:text-background transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-1">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    C-370 Shankar Colony, Block C, Siddharth Nagar, Jagatpura, Jaipur - 302017
                  </p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-start gap-4 group hover:border-amber/30 transition-all duration-300">
                <div className="p-3 rounded-xl bg-amber/10 text-amber group-hover:bg-amber group-hover:text-background transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-1">Phone</h4>
                  <a href="tel:+918769653769" className="text-sm text-muted-foreground hover:text-amber transition-colors">
                    +91 87696 53769
                  </a>
                </div>
              </div>

              <div className="glass-card p-5 flex items-start gap-4 group hover:border-amber/30 transition-all duration-300 sm:col-span-2">
                <div className="p-3 rounded-xl bg-amber/10 text-amber group-hover:bg-amber group-hover:text-background transition-all">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-1">Hours</h4>
                  <p className="text-sm text-muted-foreground">
                    Daily: 11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <motion.button
              onClick={openDirections}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full glow-button py-4 bg-gradient-to-r from-amber to-gold text-background font-semibold rounded-2xl text-lg flex items-center justify-center gap-3"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </motion.button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-playfair font-bold text-cream mb-2">
                Book a Table
              </h3>
              <p className="text-muted-foreground mb-6">
                Reserve your royal dining experience
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-12 py-6 bg-white/5 border-white/10 text-cream placeholder:text-muted-foreground focus:border-amber"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-12 py-6 bg-white/5 border-white/10 text-cream placeholder:text-muted-foreground focus:border-amber"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="pl-12 py-6 bg-white/5 border-white/10 text-cream placeholder:text-muted-foreground focus:border-amber"
                    />
                  </div>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      name="guests"
                      type="number"
                      placeholder="Guests"
                      min="1"
                      max="50"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="pl-12 py-6 bg-white/5 border-white/10 text-cream placeholder:text-muted-foreground focus:border-amber"
                    />
                  </div>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                  <Textarea
                    name="message"
                    placeholder="Special requests or message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="pl-12 bg-white/5 border-white/10 text-cream placeholder:text-muted-foreground focus:border-amber resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glow-button py-4 bg-gradient-to-r from-amber to-gold text-background font-semibold rounded-xl text-lg flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Request
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-burgundy/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default LocationContact;
