"use client";

import React from 'react';
import { 
  Plane, 
  Globe, 
  Users, 
  Star, 
  Award, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const AlhijaraPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Hajj & Umrah Packages",
      icon: <Plane className="w-12 h-12" />,
      description: "Experience spiritual journeys with our comprehensive Hajj and Umrah packages, including flights, accommodations, and guided tours.",
      features: [
        "8 Days Umrah Packages (B2B Travel Agent Price)",
        "Starting from SAR 1450 per person",
        "Hotels: Emaar Grand Hotel, Anjum Hotel, Emaar Taibah Madina",
        "Includes flights, transfers, and ziyarat services"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Holiday Packages",
      icon: <Globe className="w-12 h-12" />,
      description: "Explore the world with our diverse holiday packages, featuring global destinations and tailored itineraries.",
      features: [
        "International & Domestic Tours",
        "Flight Booking & Visa Services",
        "Travel Insurance & Accommodation",
        "Customized Itineraries"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Global Visa & MICE Services",
      icon: <Users className="w-12 h-12" />,
      description: "Simplify your travel with our visa services and expert MICE (Meetings, Incentives, Conferences, Exhibitions) planning.",
      features: [
        "Global Visa Assistance",
        "MICE Event Coordination",
        "Corporate Travel Solutions",
        "Itinerary Planning"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Pilgrims & Travelers" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Destinations Covered" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-40 right-40 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-40 left-40 w-20 h-20 bg-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Al<span className="text-yellow-400">hijrah</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Your Trusted Partner for Hajj, Umrah, and Global Travel
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Discover spiritual and worldly journeys with our expert services tailored to your needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <Globe className="w-5 h-5 mr-2" />
                <span className="font-medium">Global Reach</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-medium">Spiritual Excellence</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-medium">Trusted Service</span>
              </div>
            </div>

            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore Our Packages
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About <span className="text-blue-600">Alhijrah</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Alhijrah, in partnership with Flyva Holidays and Al Hijrah Hajj & Umrah Service, is a premier travel agency specializing in Hajj and Umrah packages, holiday tours, and global visa services. With over 15 years of experience, we are committed to providing accredited, reliable, and personalized travel solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to facilitate spiritual pilgrimages to Mecca and Medina, alongside offering seamless holiday experiences worldwide, supported by dedicated staff and comprehensive travel services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">IATA Accredited Agent</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">24/7 Support in Saudi Arabia</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Customized Pilgrimage Plans</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Transparent Pricing</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="mb-6">
                  <Award className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Why Choose Alhijrah?</h3>
                  <p className="opacity-90">
                    We offer expert guidance, affordable packages, and a commitment to your spiritual and travel needs.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <Users className="w-8 h-8 mb-2" />
                    <div className="font-bold">Expert Guides</div>
                    <div className="text-sm opacity-80">Dedicated pilgrimage support</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <Clock className="w-8 h-8 mb-2" />
                    <div className="font-bold">Quick Bookings</div>
                    <div className="text-sm opacity-80">Fast reservation process</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for your spiritual and travel aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center">{service.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center group-hover:transform group-hover:scale-105`}>
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">
              Contact us today to book your pilgrimage or travel package.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-blue-600 font-semibold">+91 4953531111 / 8089333244</p>
              <p className="text-gray-600 text-sm mt-2">Available 24/7</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-green-600 font-semibold">info@flyvaholidays.com</p>
              <p className="text-gray-600 text-sm mt-2">Response within 24 hours</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 text-center hover:bg-purple-100 transition-colors">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-purple-600 font-semibold">Building No: 27/205-A, Al Ameen Building, Kottoli, Kozhikode, Kerala, India - 673004</p>
              <p className="text-gray-600 text-sm mt-2">Mon-Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AlhijaraPage;