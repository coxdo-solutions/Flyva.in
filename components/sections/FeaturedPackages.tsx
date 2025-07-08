"use client";

import { MapPin, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // ✅ Required for navigation

const travelPackages = [
  {
    id: 1,
    title: "Europe Premium Explorer",
    location: "France, Germany, Italy",
    startLocation: "Cochin",
    duration: "10 Days, 9 Nights",
    price: 269000,
    category: "premium",
    image: "/Europe.jpg",
    description:
      "Explore the heart of Europe with guided city tours, authentic local cuisine, and luxury stays.",
  },
  {
    id: 2,
    title: "Vietnam Discovery",
    location: "Vietnam",
    startLocation: "Cochin",
    duration: "4 Days, 3 Nights",
    price: 56900,
    category: "economy",
    image: "/Vietnam.jpeg",
    description:
      "Uncover the charm of Vietnam with scenic tours and unforgettable food experiences.",
  },
  {
    id: 3,
    title: "Malaysia Short Trip",
    location: "Malaysia",
    startLocation: "Cochin",
    duration: "4 Days, 3 Nights",
    price: 34900,
    category: "economy",
    image: "/malaysia.jpg",
    description:
      "Perfect for a quick getaway, enjoy culture, shopping, and nature in vibrant Malaysia.",
  },
];

export function FeaturedPackages() {
  return (
    <section className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 font-poppins">
            Our <span className="text-blue-600">Travel Packages</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Choose from a variety of domestic and international packages curated specially for you.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{pkg.title}</h2>
                  <Badge className="capitalize bg-blue-100 text-blue-700">
                    {pkg.category}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-3">{pkg.description}</p>
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    From {pkg.startLocation}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">
                    ₹{pkg.price.toLocaleString()}
                  </span>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔵 More Packages Button */}
        <div className="mt-12 text-center">
          <Link href="/packages">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full">
              More Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

