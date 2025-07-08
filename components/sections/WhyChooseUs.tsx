'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Users,
  Clock,
  Heart,
} from 'lucide-react';

const values = [
  {
    title: 'Secure & Reliable',
    icon: Shield,
    description: 'IATA certified with 100% secure booking & SSL payments.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Expert Team',
    icon: Users,
    description: '15+ years of experience delivering personalized travel plans.',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: '24/7 Support',
    icon: Clock,
    description: 'We’re available any time — before, during, or after your trip.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Tailored Experiences',
    icon: Heart,
    description: 'Every journey is crafted to match your style and interests.',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-flyva-black mb-4">
            Why Choose <span className="text-flyva-primary">Flyva Holidays</span>
          </h2>
          <p className="text-lg text-flyva-gray max-w-2xl mx-auto">
            We're not just a travel agency — we're your trusted journey partner.
          </p>
        </motion.div>

        {/* 4 Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`mx-auto mb-4 w-14 h-14 rounded-full flex items-center justify-center ${item.bgColor} ${item.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-flyva-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-flyva-gray">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
