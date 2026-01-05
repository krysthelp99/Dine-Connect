import { motion } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  UtensilsCrossed, 
  Flame, 
  Coffee, 
  Instagram, 
  Facebook, 
  Menu 
} from "lucide-react";
import heroBg from "@assets/generated_images/modern_kopitiam_interior_background.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="font-heading font-bold text-2xl tracking-tighter text-primary">
            Mami Kopitiam
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('menu')} className="text-sm font-medium hover:text-primary transition-colors">Menu</button>
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-primary transition-colors">Features</button>
            <button onClick={() => scrollToSection('location')} className="text-sm font-medium hover:text-primary transition-colors">Location</button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-6">
              Visit Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg">
            <button onClick={() => scrollToSection('menu')} className="text-left font-medium py-2">Menu</button>
            <button onClick={() => scrollToSection('features')} className="text-left font-medium py-2">Features</button>
            <button onClick={() => scrollToSection('location')} className="text-left font-medium py-2">Location</button>
            <Button className="w-full bg-primary text-white">Visit Us</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Mami Kopitiam Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>

        <motion.div 
          className="relative z-10 container mx-auto px-4 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight tracking-tight"
            variants={fadeIn}
          >
            The Best of Indo-Fusion <br /> & Modern Toast in Miri.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light"
            variants={fadeIn}
          >
            From spicy Ayam Gepuk to viral Pistachio Toast. Come for the heat, stay for the vibe at Marina Parkcity.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25"
              onClick={() => scrollToSection('menu')}
            >
              View Menu
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Section: Spicy Meets Sweet */}
      <section id="features" className="py-20 md:py-28 container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Specialties</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">Spicy Meets Sweet</h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* The Heat Card */}
          <motion.div variants={fadeIn} className="group">
            <Card className="overflow-hidden border-none shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 h-full">
              <div className="h-64 bg-red-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-50 opacity-50" />
                <Flame className="w-24 h-24 text-primary/20 absolute -right-4 -bottom-4 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                {/* Placeholder for food image - using icon for now or abstract shape */}
                <div className="z-10 bg-white p-6 rounded-full shadow-lg">
                  <Flame className="w-12 h-12 text-primary" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-3 text-primary">The Heat</h3>
                <p className="text-muted-foreground mb-4">
                  Experience the authentic kick of our <span className="font-semibold text-foreground">Signature Sambal Cobek</span> and <span className="font-semibold text-foreground">Ayam Gepuk</span>.
                </p>
                <p className="text-sm text-muted-foreground">
                  Made with freshly ground chilies and traditional Indonesian spices that pack a punch.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* The Sweet Card */}
          <motion.div variants={fadeIn} className="group">
            <Card className="overflow-hidden border-none shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 h-full">
              <div className="h-64 bg-amber-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-yellow-50 opacity-50" />
                <Coffee className="w-24 h-24 text-secondary/30 absolute -left-4 -bottom-4 -rotate-12 group-hover:scale-110 transition-transform duration-500" />
                <div className="z-10 bg-white p-6 rounded-full shadow-lg">
                  <UtensilsCrossed className="w-12 h-12 text-secondary" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-3 text-secondary">The Sweet</h3>
                <p className="text-muted-foreground mb-4">
                  Indulge in our viral <span className="font-semibold text-foreground">Fancy Toasts</span>. Don't miss the crowd-favorite <span className="font-semibold text-foreground">Pistachio Butter Toast</span>.
                </p>
                <p className="text-sm text-muted-foreground">
                  Thick cut toast, perfectly golden brown, topped with premium Nutella and toppings.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Why We Are Different */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-background rounded-2xl shadow-sm flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Modern Lepak Spot</h3>
              <p className="text-muted-foreground">
                A comfortable, industrial-chic environment perfect for hanging out with friends or getting work done.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-background rounded-2xl shadow-sm flex items-center justify-center mb-6">
                <Flame className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Authentic Sambal</h3>
              <p className="text-muted-foreground">
                Our homemade spicy paste is made fresh daily, bringing the true taste of Indonesian heat to Miri.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-background rounded-2xl shadow-sm flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Marina Parkcity</h3>
              <p className="text-muted-foreground">
                Located conveniently in Phase 2, we're right in the heart of Miri's vibrant lifestyle district.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-20 md:py-28 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Visit Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-muted-foreground">Marina Parkcity Phase 2,<br/>Miri, Sarawak, Malaysia.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                  <p className="text-muted-foreground">Open Daily</p>
                  <p className="text-foreground font-medium">7:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="pt-6">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            className="h-[400px] bg-muted rounded-3xl overflow-hidden relative shadow-inner"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
               <span className="text-muted-foreground font-medium flex items-center gap-2">
                 <MapPin className="w-5 h-5" /> Google Map Embed Placeholder
               </span>
            </div>
            {/* 
              Note: In a real production app, you would embed the iframe here:
              <iframe 
                src="https://www.google.com/maps/embed?..." 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
              />
            */}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-heading font-bold mb-2">Mami Kopitiam</h2>
              <p className="text-gray-400 text-sm">Modern vibes. Authentic taste.</p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors bg-white/10 p-2 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors bg-white/10 p-2 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              {/* TikTok Icon placeholder since Lucide might not have it in older versions, using generic video icon or text if needed. 
                  Actually Lucide usually doesn't have brand icons except generic ones, but let's assume standard ones are okay. 
                  If TikTok is missing, we can use a generic video icon. */}
              <a href="#" className="hover:text-primary transition-colors bg-white/10 p-2 rounded-full">
                <span className="sr-only">TikTok</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Mami Kopitiam. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
