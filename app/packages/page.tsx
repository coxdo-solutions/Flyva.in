'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const travelPackages = [
  {
    id: 1,
    title: 'Europe Premium Explorer Tour',
    location: 'France, Germany, Italy',
    startLocation: 'Cochin',
    duration: '10 Days, 9 Nights',
    price: 269000,
    category: 'premium',
    image: '/Europe.jpg',
    description: 'Discover Europe with luxury stays, guided tours, and fine cuisine across France, Germany, and Italy.',
  },
  {
    id: 2,
    title: 'Vietnam Discovery Getaway',
    location: 'Vietnam',
    startLocation: 'Cochin',
    duration: '4 Days, 3 Nights',
    price: 56900,
    category: 'economy',
    image: '/Vietnam.jpeg',
    description: 'Enjoy Vietnam’s scenic spots, tasty street food, and cultural charm in a short and sweet vacation.',
  },
  {
    id: 3,
    title: 'Malaysia Short Break Tour',
    location: 'Malaysia',
    startLocation: 'Cochin',
    duration: '4 Days, 3 Nights',
    price: 34900,
    category: 'economy',
    image: '/malaysia.jpg',
    description: 'Explore Malaysia’s vibrant cities, local markets, and cultural beauty in this budget-friendly trip.',
  },
  {
    id: 4,
    title: 'Kerala Heritage Trail Trip',
    location: 'Kerala',
    startLocation: 'Kerala',
    duration: '5 Days, 4 Nights',
    price: 24900,
    category: 'domestic',
    image: 'https://images.pexels.com/photos/460376/pexels-photo-460376.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Backwaters, hill stations, and authentic cuisine await you on this traditional Kerala journey.',
  },
  {
    id: 5,
    title: 'Dubai Luxury Escape Tour',
    location: 'Dubai, UAE',
    startLocation: 'Cochin',
    duration: '5 Days, 4 Nights',
    price: 84900,
    category: 'luxury',
    image: 'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Shop, dine, and explore the glamour of Dubai with skyscraper views and desert adventures.',
  },
  {
    id: 6,
    title: 'Lakshadweep Beach Retreat',
    location: 'Lakshadweep Islands',
    startLocation: 'Kochi Port',
    duration: '6 Days, 5 Nights',
    price: 75900,
    category: 'beach',
    image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Unwind on calm beaches, dive in coral reefs, and enjoy seafood bliss in tropical Lakshadweep.',
  },
  {
    id: 7,
    title: 'Maldives Honeymoon Escape',
    location: 'Maldives',
    startLocation: 'Trivandrum',
    duration: '5 Days, 4 Nights',
    price: 119900,
    category: 'honeymoon',
    image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Enjoy private villas, beach dinners, and ocean views designed for a romantic escape together.',
  },
  {
    id: 9,
    title: 'Thailand Budget Explorer',
    location: 'Bangkok & Pattaya',
    startLocation: 'Cochin',
    duration: '5 Days, 4 Nights',
    price: 39900,
    category: 'budget',
    image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience Thai nightlife, beach scenes, temples, and food all within a cost-effective package.',
  },
  {
    id: 10,
    title: 'Andaman Adventure Package',
    location: 'Port Blair & Havelock',
    startLocation: 'Chennai',
    duration: '6 Days, 5 Nights',
    price: 58900,
    category: 'adventure',
    image: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Adventure through the Andaman Islands with snorkeling, diving, and serene island discovery.',
  }
];


export default function TravelPackagesPage() {
  return (
    <div>
      <Header />
      <section className="pt-32 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 font-poppins">
              Our <span className="text-blue-600">Travel Packages</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Choose from a variety of domestic and international packages curated specially for you.
            </p>
          </div>

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
        </div>
      </section>
      <Footer />
    </div>
  );
}

