'use client';

import { motion } from 'framer-motion';
import { Plane, Clock, Calendar, Mail } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="py-24 relative bg-flyva-primary overflow-hidden">
      {/* Floating Circles BG */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-16 w-24 h-24 border border-white rounded-full animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
          
            <span className="text-white text-lg font-medium tracking-wide">
              Flyva Holidays
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4">
            Elevating Your <span className="text-yellow-300">Travel</span> Experience
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-10 text-lg">
            Discover hand-picked destinations, expert-crafted itineraries, and exceptional customer service — all designed for the modern traveler.
          </p>
        </motion.div>

        {/* Feature Info Boxes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white text-sm flex items-center gap-3">
            <Clock className="h-5 w-5 text-yellow-300" />
            24/7 Personalized Support
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white text-sm flex items-center gap-3">
            <Calendar className="h-5 w-5 text-yellow-300" />
            Curated Trips All Year Round
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white text-sm flex items-center gap-3">
            <Mail className="h-5 w-5 text-yellow-300" />
            info@flyvatours.com
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl"
        >
          <h4 className="text-xl font-semibold text-white mb-4">
            Get Exclusive Travel Deals
          </h4>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-300 text-flyva-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
            >
              Notify Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
