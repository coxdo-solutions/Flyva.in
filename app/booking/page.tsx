"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Users,
  Calendar,
  Plane,
} from "lucide-react";

const rotatingImages = [
  "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920",
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: 1,
    date: "",
    notes: "",
  });

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
  };

  const transitionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <Header />

      <section className="min-h-screen pt-[180px] pb-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={bgIndex}
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-black"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${rotatingImages[bgIndex]})` }}
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl sm:text-5xl text-white font-bold font-poppins drop-shadow-xl">
              Book Your Trip
            </h1>
            <p className="text-white text-sm sm:text-base mt-2 drop-shadow">
              Plan your next adventure with Flyva Holidays. Just fill in a few
              quick details.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-2xl shadow-2xl rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 placeholder:text-gray-500 text-gray-800 shadow-md border border-gray-200 focus:ring-2 focus:ring-flyva-primary focus:outline-none transition-all duration-200"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 placeholder:text-gray-500 text-gray-800 shadow-md border border-gray-200 focus:ring-2 focus:ring-flyva-primary focus:outline-none transition-all duration-200"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 placeholder:text-gray-500 text-gray-800 shadow-md border border-gray-200 focus:ring-2 focus:ring-flyva-primary focus:outline-none transition-all duration-200"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 placeholder:text-gray-500 text-gray-800 shadow-md border border-gray-200 focus:ring-2 focus:ring-flyva-primary focus:outline-none transition-all duration-200"
                />
              </div>

              <div className="relative">
                <Users className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                <input
                  type="number"
                  name="travelers"
                  placeholder="Travelers"
                  min={1}
                  value={formData.travelers}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 placeholder:text-gray-500 text-gray-800 shadow-md border border-gray-200 focus:ring-2 focus:ring-flyva-primary focus:outline-none transition-all duration-200"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 placeholder:text-gray-500 text-gray-800 shadow-md border border-gray-200 focus:ring-2 focus:ring-flyva-primary focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="relative">
              <Plane className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
              <textarea
                name="notes"
                placeholder="Additional Notes (optional)"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 placeholder:text-gray-500 text-gray-800 shadow-md border border-gray-200 focus:ring-2 focus:ring-flyva-primary focus:outline-none transition-all duration-200"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3 text-lg bg-flyva-primary hover:bg-flyva-primary/90 text-white rounded-xl font-medium transition-all duration-200"
            >
              Confirm Booking
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

