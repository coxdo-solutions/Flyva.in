"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const services = [
  {
    title: "Hajj & Umrah",
    description:
      "Expertly organized pilgrimage tours with complete arrangements.",
  },
  {
    title: "Holiday Packages",
    description:
      "Tailored holiday experiences for families, couples, and solo travelers.",
  },
  {
    title: "Global Visa Service",
    description: "Fast, secure visa processing for any destination worldwide.",
  },
  {
    title: "Flight Booking",
    description: "Domestic & international tickets at unbeatable prices.",
  },
  {
    title: "Travel Insurance",
    description:
      "Reliable protection plans to keep you secure while you explore.",
  },
  {
    title: "MICE",
    description:
      "Custom business travel solutions for events and corporate trips.",
  },
  {
    title: "Medical Appointments",
    description:
      "Travel support for healthcare appointments in India & abroad.",
  },
  {
    title: "Corporate Travel",
    description:
      "Professional end-to-end travel services for business clients.",
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
            Choose from a wide range of expertly curated services designed for
            every kind of traveler.
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
              className="group relative p-8 rounded-3xl backdrop-blur-xl border border-blue-100 bg-blue-600 text-white shadow-2xl hover:shadow-blue-200 transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="absolute -top-3 -right-3 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition">
                Flyva+
              </div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-white/90 leading-relaxed text-sm">
                {service.description}
              </p>
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
            Our travel consultants are available 24/7 to help with custom
            itineraries, bookings, and support.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-white/90 transition"
          >
            Contact Now.!
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
