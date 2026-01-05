import { motion } from "framer-motion";
import { 
  MapPin, 
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

const popularMenu = [
  {
    name: "Signature Ayam Gepuk",
    description: "Crispy fried chicken smashed with our authentic hand-ground sambal cobek.",
    price: "RM 15.90",
    category: "The Heat"
  },
  {
    name: "Pistachio Butter Toast",
    description: "Thick-cut artisanal toast slathered in premium pistachio cream and crushed nuts.",
    price: "RM 12.90",
    category: "The Sweet"
  },
  {
    name: "Indo-Fusion Fried Rice",
    description: "A unique blend of traditional spices with a modern twist, served with sunny side up.",
    price: "RM 14.90",
    category: "The Heat"
  }
];

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
      <nav className="fixed w-full z-50 px-6 py-8 flex justify-between items-center transition-all bg-background/50 backdrop-blur-sm">
        <div className="text-xl font-heading font-medium tracking-widest uppercase">
          Mami Kopitiam
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.2em] font-medium">
          <button onClick={() => scrollToSection('about')} className="hover:opacity-50 transition-opacity">About</button>
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
          <h1 className="text-5xl md:text-8xl font-heading mb-4 leading-[1.1]">
            Mami Kopitiam
          </h1>
          <p className="text-xl md:text-2xl font-light text-foreground/70 mb-12 tracking-[0.2em] uppercase">
            Indo-Fusion <span className="italic font-serif normal-case tracking-normal text-primary">reimagined.</span>
          </p>
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('menu')}
              className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold"
            >
              Explore Menu 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* About / Introduction Section */}
      <section id="about" className="py-32 px-6 md:px-24 bg-secondary/5">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-6 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-heading mb-8 leading-tight">A Modern Sanctuary <br/>for Traditional Flavors.</h2>
              <p className="font-light text-lg text-foreground/70 leading-relaxed mb-6">
                Born in the heart of Miri, Mami Kopitiam is where the soul of Indonesian street food meets the refined simplicity of a modern sanctuary. We believe that heat and sweetness aren't just flavors—they're experiences.
              </p>
              <p className="font-light text-foreground/60 leading-relaxed">
                From our hand-ground sambals to our viral artisanal toasts, every dish is crafted with a respect for heritage and a passion for contemporary vibes. We invite you to lepak, enjoy the spice, and find your calm in our tropical-inspired industrial space.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-secondary/20 rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover grayscale-[30%] contrast-110" 
                  alt="Cafe atmosphere" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 -z-10 rounded-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Menu Section */}
      <section id="menu" className="py-32 px-6 md:px-24 bg-white/30">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4 block">Selection</span>
            <h2 className="text-4xl font-heading">Popular Menu</h2>
            <p className="mt-4 font-light text-foreground/60">A curated list of our most loved signatures.</p>
          </div>

          <div className="space-y-16">
            {popularMenu.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-8 border-b border-border/50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[9px] uppercase tracking-widest px-2 py-1 bg-secondary/50 text-secondary-foreground font-bold">{item.category}</span>
                    <h3 className="text-xl font-heading uppercase tracking-wider">{item.name}</h3>
                  </div>
                  <p className="font-light text-foreground/60 text-sm max-w-lg">{item.description}</p>
                </div>
                <div className="text-lg font-heading text-primary">{item.price}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Characteristics Section */}
      <section className="py-32 px-6 md:px-24 border-t border-border">
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
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="flex flex-col items-start text-left">
              <MapPin className="w-6 h-6 mb-8 text-primary/40" />
              <h2 className="text-4xl font-heading mb-8 uppercase tracking-widest">Sanctuary at Marina.</h2>
              <div className="space-y-6 mb-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-2">Location</h4>
                  <p className="font-light text-lg">
                    Marina Parkcity Phase 2, Miri,<br />
                    Sarawak, Malaysia.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-2">Hours</h4>
                  <p className="font-light text-lg">
                    Open Daily<br />
                    7:00 AM — 10:00 PM
                  </p>
                </div>
              </div>
              <Button variant="outline" className="rounded-none border-foreground hover:bg-foreground hover:text-background px-12 uppercase text-[10px] tracking-widest">
                Get Directions
              </Button>
            </div>
            
            <div className="h-[500px] w-full bg-white p-4 rounded-sm shadow-xl grayscale contrast-125">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.334188168666!2d113.9666!3d4.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMjMnMDAuMCJOIDExM8KwNTgnMDAuMCJF!5e0!3m2!1sen!2smy!4v1625647000000!5m2!1sen!2smy" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2)' }} 
                allowFullScreen 
                loading="lazy" 
                title="Google Map"
              />
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
