"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar, Users, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { InauguralOfferSection } from "./InauguralOfferSection";

const heroSlides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Discover Paradise",
    subtitle: "Explore breathtaking destinations around the world",
    location: "Bali, Indonesia",
    rating: "4.9",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Alpine Adventures",
    subtitle: "Experience the majesty of mountain landscapes",
    location: "Swiss Alps, Switzerland",
    rating: "4.8",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Desert Wonders",
    subtitle: "Journey through endless golden dunes",
    location: "Sahara Desert, Morocco",
    rating: "5.0",
  },
  {
    id: 4,
    image: "/mecca.jpg",
    title: "Hajj & Umrah Services",
    subtitle:
      "A spiritually fulfilling pilgrimage with complete travel support",
    location: "Makkah & Madinah, Saudi Arabia",
    rating: "5.0",
  },
];

const transitionVariants = {
  initial: { opacity: 0, scale: 1.02 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchData, setSearchData] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    guests: "2 Adults",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      {/* Background Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={heroSlides[currentSlide].id}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroSlides[currentSlide].image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 pt-24 md:px-12">
        {/* Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm flex items-center gap-2 mb-4"
        >
          <MapPin className="h-4 w-4" />
          <span>
            {heroSlides[currentSlide].location} • ⭐{" "}
            {heroSlides[currentSlide].rating}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          key={heroSlides[currentSlide].title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight"
        >
          {heroSlides[currentSlide].title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          key={heroSlides[currentSlide].subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-white/80 text-lg md:text-xl mt-4 max-w-xl"
        >
          {heroSlides[currentSlide].subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Button className="bg-flyva-primary text-white px-8 py-3 text-base font-medium rounded-xl shadow-lg hover:bg-flyva-primary/90 transition">
            Explore Packages
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-base font-medium rounded-xl transition"
          >
            <Play className="h-5 w-5 mr-2" />
            Watch Video
          </Button>
        </motion.div>

     

<InauguralOfferSection/>

{/*
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
  className="w-full max-w-6xl mx-auto mt-14 px-4"
>
  <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    
      <div className="relative group">
        <MapPin className="absolute left-4 top-4 text-gray-400" />
        <input
          type="text"
          list="destinations"
          placeholder=" "
          value={searchData.destination}
          onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
          className="peer w-full pl-12 pr-4 pt-6 pb-2 rounded-xl bg-white/70 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-flyva-primary transition"
        />
        <label className="absolute left-12 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-flyva-primary">
          Destination
        </label>
        <datalist id="destinations">
          <option value="Bali, Indonesia" />
          <option value="Swiss Alps, Switzerland" />
          <option value="Sahara Desert, Morocco" />
          <option value="Dubai, UAE" />
          <option value="London, UK" />
        </datalist>
      </div>

      <div className="relative group">
        <Calendar className="absolute left-4 top-4 text-gray-400" />
        <input
          type="date"
          placeholder=" "
          value={searchData.checkin}
          onChange={(e) => setSearchData({ ...searchData, checkin: e.target.value })}
          className="peer w-full pl-12 pr-4 pt-6 pb-2 rounded-xl bg-white/70 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-flyva-primary transition"
        />
        <label className="absolute left-12 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-flyva-primary">
          Check-in
        </label>
      </div>

      <div className="relative group">
        <Calendar className="absolute left-4 top-4 text-gray-400" />
        <input
          type="date"
          placeholder=" "
          value={searchData.checkout}
          onChange={(e) => setSearchData({ ...searchData, checkout: e.target.value })}
          className="peer w-full pl-12 pr-4 pt-6 pb-2 rounded-xl bg-white/70 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-flyva-primary transition"
        />
        <label className="absolute left-12 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-flyva-primary">
          Check-out
        </label>
      </div>

      
      <div className="relative group">
        <Users className="absolute left-4 top-4 text-gray-400" />
        <select
          value={searchData.guests}
          onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
          className="peer w-full pl-12 pr-4 pt-6 pb-2 rounded-xl bg-white/70 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-flyva-primary transition"
        >
          <option>1 Adult</option>
          <option>2 Adults</option>
          <option>3 Adults</option>
          <option>4 Adults</option>
          <option>2 Adults, 1 Child</option>
          <option>2 Adults, 2 Children</option>
        </select>
        <label className="absolute left-12 top-2 text-gray-500 text-sm transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-flyva-primary">
          Guests
        </label>
      </div>
    </div>


    <div className="mt-10 flex justify-center">
      <Button className="bg-flyva-primary hover:bg-flyva-primary/90 text-white px-10 py-3 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2">
        <Search className="h-5 w-5" />
        Search Packages
      </Button>
    </div>
  </div>
</motion.div> */}

      </div>
    </section>
  );
}
