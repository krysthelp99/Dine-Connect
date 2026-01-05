import { motion } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  Flame, 
  Leaf, 
  Instagram, 
  Facebook, 
  Menu,
  ChevronRight
} from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_bali_cafe_background.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30">
      {/* Navbar */}
      <nav className="fixed w-full z-50 px-6 py-8 flex justify-between items-center transition-all">
        <div className="text-xl font-heading font-medium tracking-widest uppercase">
          Mami Kopitiam
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.2em] font-medium">
          <button onClick={() => scrollToSection('about')} className="hover:opacity-50 transition-opacity">Philosophy</button>
          <button onClick={() => scrollToSection('menu')} className="hover:opacity-50 transition-opacity">Menu</button>
          <button onClick={() => scrollToSection('location')} className="hover:opacity-50 transition-opacity">Contact</button>
          <button className="bg-foreground text-background px-6 py-2 hover:bg-foreground/90 transition-all">Visit</button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={heroBg} 
            className="w-full h-full object-cover grayscale-[20%] opacity-40"
            alt="Bali Vibe"
          />
        </div>

        <motion.div 
          className="relative z-10 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] mb-6 block text-primary font-bold">Miri — Sarawak</span>
          <h1 className="text-5xl md:text-8xl font-heading mb-8 leading-[1.1]">
            Indo-Fusion <br />
            <span className="italic font-serif">reimagined.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-foreground/70 max-w-xl mb-12 leading-relaxed">
            Spicy Ayam Gepuk meets the viral Pistachio Toast. A sanctuary of heat and sweetness in the heart of Marina Parkcity.
          </p>
          <div className="flex items-center gap-8">
            <button 
              id="menu"
              onClick={() => scrollToSection('menu')}
              className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold"
            >
              Explore Menu 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Philosophy / Features */}
      <section id="about" className="py-32 px-6 md:px-24 border-t border-border">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-heading mb-8">Spicy meets Sweet.</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold mb-4 flex items-center gap-3">
                  <Flame className="w-4 h-4 text-primary" /> The Heat
                </h3>
                <p className="font-light text-foreground/60 leading-relaxed">
                  Our Signature Sambal Cobek is a tribute to Indonesian heritage. Hand-ground daily, it provides a slow, meaningful heat that complements our Ayam Gepuk.
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold mb-4 flex items-center gap-3">
                  <Leaf className="w-4 h-4 text-accent" /> The Sweet
                </h3>
                <p className="font-light text-foreground/60 leading-relaxed">
                  Viral Pistachio Butter Toast and our Nutella Series. A modern take on the classic Kopitiam breakfast, designed for the contemporary palate.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
             <div className="h-80 bg-secondary rounded-sm overflow-hidden grayscale">
                <img src="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-80" alt="Coffee" />
             </div>
             <div className="h-80 bg-primary/10 mt-12 rounded-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1563379091339-03b21ef4a4f8?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Chili" />
             </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <MapPin className="w-6 h-6 mb-8 text-primary/40" />
            <h2 className="text-4xl font-heading mb-8">Sanctuary at Marina.</h2>
            <p className="font-light text-lg mb-12">
              Marina Parkcity Phase 2, Miri.<br />
              Open Daily from 7:00 AM — 10:00 PM.
            </p>
            <div className="flex gap-4">
               <Button variant="outline" className="rounded-none border-foreground hover:bg-foreground hover:text-background px-12 uppercase text-[10px] tracking-widest">
                 Map
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] uppercase tracking-widest font-medium opacity-40">
          © 2026 Mami Kopitiam — Crafted in Miri
        </div>
        <div className="flex gap-8">
          <Instagram className="w-4 h-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
          <Facebook className="w-4 h-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}
