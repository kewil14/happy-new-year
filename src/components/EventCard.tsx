import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface EventCardProps {
  title: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export function EventCard({ title, time, location, description, image }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gold">{title}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-white/80">
            <Clock className="w-4 h-4 mr-2 text-gold" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-white/80">
            <MapPin className="w-4 h-4 mr-2 text-gold" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-white/70">{description}</p>
        <Button 
          className="w-full bg-gold/20 hover:bg-gold/30 text-gold border border-gold/50"
          variant="outline"
        >
          Réserver
        </Button>
      </div>
    </motion.div>
  );
}
