
"use client";

import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, Send, Globe, Star, Users } from 'lucide-react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Create WhatsApp message with form data
    const message = `Hello! I'm interested in your travel packages.
    
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918590508376?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in your travel packages. Please provide more information.");
    window.open(`https://wa.me/918590508376?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-40 right-40 w-16 h-16 bg-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg mr-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Flyva Holidays</h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your next adventure? Contact us and let's plan your perfect getaway together.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <Globe className="w-5 h-5 mr-2" />
              <span className="font-medium">Worldwide Destinations</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 mr-2" />
              <span className="font-medium">Premium Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              Ready to explore the world? Contact us and let's make your travel dreams come true
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email Address"
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your travel plans, destinations you're interested in, and how we can help you..."
                  rows={5}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Why Choose Section */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why Choose Flyva Holidays?</h3>
              <p className="mb-6 opacity-90">
                With years of experience in creating unforgettable travel experiences, we're your trusted partner for adventures around the globe.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold">50+</div>
                  <div className="text-sm opacity-80">Countries</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                    <Star className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold">5-Star</div>
                  <div className="text-sm opacity-80">Rated</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold">24/7</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">WhatsApp Us</h4>
                    <p className="text-blue-600 font-medium">+91 85905 08376</p>
                    <p className="text-sm text-gray-500">Quick response guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">Call Us</h4>
                    <p className="text-blue-600 font-medium">+91 85905 08376</p>
                    <p className="text-sm text-gray-500">Available for urgent inquiries</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                    <p className="text-blue-600 font-medium">hello@flyvaholidays.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                    <p className="text-gray-700 font-medium">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-sm text-gray-500">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center shadow-xl">
              <h4 className="text-xl font-bold mb-2">📞 Contact Us Today!</h4>
              <p className="mb-4 opacity-90">Get personalized travel recommendations and exclusive deals!</p>
              <button
                onClick={handleWhatsApp}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
