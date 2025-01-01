import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

interface Event {
  id: number;
  title: string;
  time: string;
  location: string;
  description: string;
  image: string;
  coordinates: { lat: number; lng: number };
}

const events: Event[] = [
  {
    id: 1,
    title: "Grand Feu d'Artifice",
    time: "23:45 - 00:15",
    location: "Place Centrale",
    description: "Un spectacle pyrotechnique époustouflant pour illuminer le ciel de minuit.",
    image: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=800&q=80",
    coordinates: { lat: 48.8584, lng: 2.2945 }
  },
  {
    id: 2,
    title: "Soirée Gala",
    time: "20:00 - 02:00",
    location: "Grand Salon Doré",
    description: "Une soirée élégante avec dîner gastronomique et animations exclusives.",
    image: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=800&q=80",
    coordinates: { lat: 48.8566, lng: 2.3522 }
  },
  {
    id: 3,
    title: "After Party",
    time: "00:30 - 05:00",
    location: "Club Le Crystal",
    description: "Continuez la fête avec nos DJs internationaux dans une ambiance électrique.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    coordinates: { lat: 48.8606, lng: 2.3376 }
  }
];

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<Event | null>(null);

  return (
    <section className="py-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Programme des Festivités
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Découvrez les événements exceptionnels qui vous attendent pour cette soirée magique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredEvent(event)}
                onHoverEnd={() => setHoveredEvent(null)}
                onClick={() => setSelectedEvent(event)}
                className={`bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer border border-gold/20 transition-all duration-300 ${
                  selectedEvent?.id === event.id ? 'ring-2 ring-gold' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-2xl font-bold text-gold mb-3">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-white/80">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-gold" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-gold" />
                        <span>{event.location}</span>
                      </div>
                      <p className="mt-4">{event.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:sticky lg:top-8 h-[600px] rounded-xl overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-full relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292544315674164!3d48.85837007928754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1641911686545!5m2!1sfr!2sfr"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
              {hoveredEvent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-gold/20"
                >
                  <h4 className="text-gold font-bold">{hoveredEvent.title}</h4>
                  <p className="text-white/80 text-sm">{hoveredEvent.location}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
