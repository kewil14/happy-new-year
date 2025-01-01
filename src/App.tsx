import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Countdown } from "./components/Countdown";
import { 
  Sparkles, 
  // Calendar, 
  // Image as ImageIcon, 
  // MapPin, 
  // Mail, 
  // Facebook, 
  // Twitter, 
  // Instagram 
} from "lucide-react";
import { ParticleEffect } from "./components/ParticleEffect";
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black">
      <ParticleEffect />
      
      {/* Header */}
      <header className="fixed w-full bg-black/50 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-gold"
          >
            Nouvel An 2025
          </motion.h1>
          <div className="space-x-6">
            <Button variant="ghost" className="text-white hover:text-gold">Accueil</Button>
            <Button variant="ghost" className="text-white hover:text-gold">À propos</Button>
            <Button variant="ghost" className="text-white hover:text-gold">Événements</Button>
            <Button variant="ghost" className="text-white hover:text-gold">Galerie</Button>
            <Button variant="ghost" className="text-white hover:text-gold">Contact</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-black/50 to-gold/30"
          animate={{
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-bold mb-4"
              style={{
                background: "linear-gradient(to bottom right, #FFD700, #FFA500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              2025
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Bonne Année!
            </motion.div>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-white/80 mb-12"
            >
              Célébrons ensemble cette nouvelle année
            </motion.p>
          </motion.div>

          <Countdown />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-gradient-to-r from-gold to-amber-500 hover:from-amber-500 hover:to-gold text-black text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Découvrir les festivités <Sparkles className="ml-2 inline-block animate-pulse" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 text-gold opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 text-gold opacity-20"
          animate={{
            rotate: -360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles className="w-full h-full" />
        </motion.div>
      </motion.section>

      {/* Sections principales */}
      <main className="relative z-10">
        {/* Section À propos */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Section Événements */}
        <section id="events">
          <EventsSection />
        </section>

        {/* Section Galerie */}
        <section id="gallery">
          <GallerySection />
        </section>

        {/* Section Contact */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;