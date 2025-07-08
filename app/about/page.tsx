'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const missions = [
  'A reputation built on trust and consistency',
  'Operational excellence and service reliability',
  'Unmatched value and innovation',
  'Premium customer care with a personal touch',
  'Sustainable growth and profitability',
];

export default function AboutPage() {
  return (
    <div>
      <Header />
      
      {/* About Section */}
      <section className="pt-52 pb-6 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div>
            <motion.h1 
              className="text-5xl font-bold text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
            >
              About <span className="text-blue-600">Flyva Holidays</span>
            </motion.h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover the world with us – where travel meets trust, innovation, and unforgettable experiences.
            </p>
            <ul className="space-y-4">
              {missions.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ scale: 0.95, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
          >
            <Image
              src="/world.jpg"
              alt="Flyva Holidays"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Vision and Trusted Partner Section */}
      <section className="bg-gray-50 py-20 mt-[-20px]">
        <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              Flyva Tours & Travels LLP aims to stand out in the travel industry through our distinctive offerings, value for money, and royal customer care. Powered by advanced travel tech, we deliver seamless travel planning — in India and globally.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Trusted Travel Partner</h2>
            <p className="text-gray-700 leading-relaxed">
              Your one-stop destination for all travel needs — tickets, hotels, insurance, tours, and holiday packages. Flexibility and convenience under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <StatsSection />
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <WhyChooseUs />
        </div>
      </section>

      <Footer />
    </div>
  );
}
