
"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Plane, Globe, Users, Shield, Briefcase, Heart, Stethoscope, MapPin } from "lucide-react";

const services = [
  {
    title: "Hajj & Umrah",
    description: "Expertly organized pilgrimage tours with complete arrangements.",
    icon: <Plane className="w-8 h-8" />,
  },
  {
    title: "Holiday Packages",
    description: "Tailored holiday experiences for families, couples, and solo travelers.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "Global Visa Service",
    description: "Fast, secure visa processing for any destination worldwide.",
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    title: "Flight Booking",
    description: "Domestic & international tickets at unbeatable prices.",
    icon: <Plane className="w-8 h-8" />,
  },
  {
    title: "Travel Insurance",
    description: "Reliable protection plans to keep you secure while you explore.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "MICE",
    description: "Custom business travel solutions for events and corporate trips.",
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    title: "Medical Appointments",
    description: "Travel support for healthcare appointments in India & abroad.",
    icon: <Stethoscope className="w-8 h-8" />,
  },
  {
    title: "Corporate Travel",
    description: "Professional end-to-end travel services for business clients.",
    icon: <Users className="w-8 h-8" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-blue-600">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-8 text-center bg-white overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-100 via-white to-white rounded-b-[100px]" />
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-5xl font-bold text-gray-800 font-poppins mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span className="text-blue-600">Travel Services</span>
          </motion.h1>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Choose from a wide range of expertly curated services designed for every kind of traveler.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-md"
            >
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
                Flyva+
              </div>
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-bold ml-3 text-blue-700">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-blue-600 text-white text-center">
        <div className="container max-w-3xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Plan Your Journey?
          </motion.h2>
          <p className="mb-8 text-lg">
            Our travel consultants are available 24/7 to help with custom itineraries, bookings, and support.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-white/90 transition"
          >
            Contact Now!
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}