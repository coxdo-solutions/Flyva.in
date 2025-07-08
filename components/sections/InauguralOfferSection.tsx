"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InauguralOfferSection() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-07-10T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setCountdown("Offer expired");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative w-full max-w-5xl mx-auto mt-20 px-6 py-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl shadow-lg overflow-hidden"
    >
      {/* Floating sparkles or blurred gradient decor */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />

      <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white drop-shadow-md">
        Grand Inaugural Offer
      </h2>

      <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-5">
        Book your international dream vacation before{" "}
        <span className="font-semibold">July 10, 2025</span> and enjoy a{" "}
        <span className="font-bold text-yellow-300">₹5,000 Discount</span> on all packages.
        This is a limited-time launch offer!
      </p>

      <div className="flex justify-center items-center gap-2 text-white text-lg font-medium mb-6">
        <Clock className="w-6 h-6 text-yellow-300 animate-pulse" />
        <span>{countdown}</span>
      </div>

      <Button className="bg-yellow-400 text-black hover:bg-yellow-300 transition px-8 py-3 text-base font-semibold rounded-xl shadow-md">
        Claim Offer Now
      </Button>
    </motion.section>
  );
}

