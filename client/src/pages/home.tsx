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
    category: "The Heat",
    color: "bg-primary"
  },
  {
    name: "Pistachio Butter Toast",
    description: "Thick-cut artisanal toast slathered in premium pistachio cream and crushed nuts.",
    price: "RM 12.90",
    category: "The Sweet",
    color: "bg-secondary"
  },
  {
    name: "Indo-Fusion Fried Rice",
    description: "A unique blend of traditional spices with a modern twist, served with sunny side up.",
    price: "RM 14.90",
    category: "The Heat",
    color: "bg-primary"
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
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* Navbar */}
      <nav className="fixed w-full z-50 px-6 py-8 flex justify-between items-center transition-all bg-background/80 backdrop-blur-md">
        <div className="text-2xl font-heading font-bold tracking-tighter text-primary">
          MAMI.
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.3em] font-bold">
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('menu')} className="hover:text-primary transition-colors">Menu</button>
          <button onClick={() => scrollToSection('location')} className="hover:text-primary transition-colors">Contact</button>
          <button className="bg-primary text-white px-8 py-3 hover:translate-y-[-2px] active:translate-y-[0px] transition-all shadow-lg shadow-primary/20">Visit</button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-24">
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={heroBg} 
            className="w-full h-full object-cover grayscale-[40%]"
            alt="Bali Vibe"
          />
        </div>

        <motion.div 
          className="relative z-10 max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <span className="text-[12px] uppercase tracking-[0.5em] mb-8 block text-secondary font-black">Miri — Sarawak</span>
          <h1 className="text-6xl md:text-[120px] font-heading mb-6 leading-[0.9] font-bold text-white">
            MAMI <br />
            <span className="text-primary">KOPITIAM</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 mb-12 tracking-[0.1em] uppercase max-w-2xl">
            Indo-Fusion <span className="italic font-serif normal-case tracking-normal text-secondary font-bold underline decoration-primary underline-offset-8">reimagined.</span>
          </p>
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('menu')}
              className="group flex items-center gap-6 text-[12px] uppercase tracking-[0.4em] font-black text-white hover:text-primary transition-colors"
            >
              Explore Menu 
              <span className="w-12 h-[1px] bg-primary group-hover:w-16 transition-all" />
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* About / Introduction Section */}
      <section id="about" className="py-32 px-6 md:px-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/5 -z-10" />
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid md:grid-cols-2 gap-24 items-center"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-black mb-8 block">Our Story</span>
              <h2 className="text-5xl md:text-6xl font-heading mb-10 leading-[1.1] font-bold">A Sanctuary <br/><span className="text-accent italic">of Flavors.</span></h2>
              <p className="font-light text-xl text-foreground/80 leading-relaxed mb-8 border-l-4 border-primary pl-8">
                Born in the heart of Miri, Mami Kopitiam is where the soul of Indonesian street food meets the refined simplicity of a modern sanctuary. 
              </p>
              <p className="font-light text-foreground/60 leading-relaxed max-w-md">
                We believe that heat and sweetness aren't just flavors—they're experiences. Every dish is crafted with a respect for heritage and a passion for contemporary vibes.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-white rounded-none overflow-hidden shadow-[40px_40px_0px_0px_rgba(192,57,43,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover" 
                  alt="Cafe atmosphere" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Menu Section */}
      <section id="menu" className="py-32 px-6 md:px-24 bg-foreground text-background">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-secondary font-black mb-6 block">Selection</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold leading-none">THE SIGNATURES.</h2>
            </div>
            <p className="font-light text-background/60 text-lg uppercase tracking-widest">A curated list of our most loved signatures.</p>
          </div>

          <div className="grid gap-4">
            {popularMenu.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-12 bg-white/5 hover:bg-white/10 transition-all cursor-pointer border-l-0 hover:border-l-[12px] hover:border-primary"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`text-[10px] uppercase tracking-widest px-4 py-1 ${item.color} text-white font-black`}>{item.category}</span>
                    <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter">{item.name}</h3>
                  </div>
                  <p className="font-light text-background/40 text-lg max-w-xl group-hover:text-background/80 transition-colors">{item.description}</p>
                </div>
                <div className="text-4xl font-heading font-bold text-secondary">{item.price}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Characteristics Section */}
      <section className="py-32 px-6 md:px-24">
        <div className="grid md:grid-cols-2 gap-32 items-center max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-6xl font-heading font-bold mb-16 tracking-tighter uppercase leading-none">SPICY<br/><span className="text-primary">MEETS</span><br/>SWEET.</h2>
            <div className="space-y-16">
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-2 h-2 bg-primary" />
                <h3 className="text-lg uppercase tracking-[0.3em] font-black mb-4">The Heat</h3>
                <p className="font-light text-foreground/60 leading-relaxed text-lg">
                  Our Signature Sambal Cobek is hand-ground daily. It provides a slow, meaningful heat that complements our Ayam Gepuk.
                </p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-2 h-2 bg-secondary" />
                <h3 className="text-lg uppercase tracking-[0.3em] font-black mb-4">The Sweet</h3>
                <p className="font-light text-foreground/60 leading-relaxed text-lg">
                  Viral Pistachio Butter Toast. A modern take on the classic Kopitiam breakfast, designed for the contemporary palate.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
             <div className="h-[600px] bg-secondary/10 overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Coffee" />
             </div>
             <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary rounded-none -z-10 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
            <div className="flex flex-col items-start text-left">
              <MapPin className="w-12 h-12 mb-12 text-white/20" />
              <h2 className="text-6xl md:text-8xl font-heading font-bold mb-12 tracking-tighter leading-none">FIND <br/>US.</h2>
              <div className="space-y-12 mb-16">
                <div>
                  <h4 className="text-[12px] uppercase tracking-[0.5em] font-black text-secondary mb-4">Location</h4>
                  <p className="font-light text-2xl uppercase tracking-wider">
                    Marina Parkcity Phase 2, Miri,<br />
                    Sarawak, Malaysia.
                  </p>
                </div>
                <div>
                  <h4 className="text-[12px] uppercase tracking-[0.5em] font-black text-secondary mb-4">Hours</h4>
                  <p className="font-light text-2xl uppercase tracking-wider">
                    Open Daily<br />
                    7:00 AM — 10:00 PM
                  </p>
                </div>
              </div>
              <Button variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-primary px-16 py-8 uppercase text-[12px] tracking-[0.4em] font-black transition-all">
                Map Directions
              </Button>
            </div>
            
            <div className="h-[600px] w-full bg-white p-2 rounded-none shadow-[60px_60px_0px_0px_rgba(0,0,0,0.1)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.334188168666!2d113.9666!3d4.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMjMnMDAuMCJOIDExM8KwNTgnMDAuMCJF!5e0!3m2!1sen!2smy!4v1625647000000!5m2!1sen!2smy" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0)' }} 
                allowFullScreen 
                loading="lazy" 
                title="Google Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 bg-foreground text-background flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-4xl font-heading font-black tracking-tighter">
          MAMI.
        </div>
        <div className="text-[11px] uppercase tracking-[0.5em] font-black opacity-40">
          © 2026 Mami Kopitiam — Crafted in Miri
        </div>
        <div className="flex gap-12">
          <Instagram className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
          <Facebook className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}
