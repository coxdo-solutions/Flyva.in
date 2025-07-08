'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Calendar,
  Heart,
  Verified
} from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    date: '2024-02-15',
    packageTitle: 'Tropical Paradise Getaway',
    packageLocation: 'Maldives',
    quote: 'Absolutely magical experience! The attention to detail was incredible, from the moment we arrived until we left. The private villa was stunning and the staff went above and beyond.',
    fullReview: 'Flyva Tours made our honeymoon unforgettable. Every aspect was perfectly planned - the seaplane transfer, the overwater villa, the private dining experiences. We felt like royalty throughout our stay. The local excursions were well-organized and our guide was knowledgeable and friendly. Will definitely book with them again!',
    images: [
      'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=300'
    ],
    verified: true,
  },
  {
    id: 2,
    name: 'Marco Rodriguez',
    location: 'Barcelona, Spain',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    date: '2024-01-28',
    packageTitle: 'European Grand Tour',
    packageLocation: 'France, Italy, Spain',
    quote: 'The European tour exceeded all expectations. The itinerary was perfectly balanced between must-see attractions and hidden gems. Our guide was exceptional!',
    fullReview: 'What an incredible journey through Europe! The accommodations were luxurious, the transportation seamless, and the experiences authentic. From wine tasting in Tuscany to art galleries in Paris, every moment was curated to perfection. The small group size made it feel personal and intimate.',
    images: [
      'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=300'
    ],
    verified: true,
  },
  {
    id: 3,
    name: 'Priya Patel',
    location: 'Mumbai, India',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    date: '2024-02-10',
    packageTitle: 'Safari & Wildlife Experience',
    packageLocation: 'Kenya & Tanzania',
    quote: 'A life-changing adventure! Seeing the Big Five in their natural habitat was breathtaking. The lodge was comfortable and the game drives were thrilling.',
    fullReview: 'This safari exceeded every expectation. The wildlife encounters were incredible - we saw lions, elephants, rhinos, and so much more. The Maasai cultural experience was deeply moving and educational. Our safari guide was incredibly knowledgeable about animal behavior and conservation efforts.',
    images: [
      'https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=300'
    ],
    verified: true,
  },
  {
    id: 4,
    name: 'James Wilson',
    location: 'London, UK',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    date: '2024-02-05',
    packageTitle: 'Himalayan Adventure Trek',
    packageLocation: 'Nepal',
    quote: 'The trek to Everest Base Camp was challenging but incredibly rewarding. The support team was professional and the views were absolutely spectacular.',
    fullReview: 'An adventure of a lifetime! The trek was well-organized with experienced guides who prioritized safety while ensuring we had an amazing experience. The mountain views were absolutely breathtaking, and reaching base camp was an emotional moment I will never forget.',
    images: [
      'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=300'
    ],
    verified: true,
  },
  {
    id: 5,
    name: 'Elena Kowalski',
    location: 'Warsaw, Poland',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    date: '2024-01-20',
    packageTitle: 'Northern Lights Adventure',
    packageLocation: 'Iceland & Norway',
    quote: 'Witnessing the Aurora Borealis was magical! The ice caves were stunning and the hot springs were the perfect way to relax after a day of exploration.',
    fullReview: 'This Northern Lights tour was absolutely incredible. We were lucky to see the aurora on multiple nights, and the photography guidance helped us capture amazing shots. The ice caves in Iceland were like entering another world, and the Norwegian fjords were breathtaking.',
    images: [
      'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=300'
    ],
    verified: true,
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const currentTestimonial = testimonials[currentIndex];

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsExpanded(false);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsExpanded(false);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsExpanded(false);
    setAutoPlay(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsExpanded(false);
    setAutoPlay(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-flyva-primary border-flyva-primary">
            Customer Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-flyva-black mb-4 font-poppins">
            What Our Travelers
            <span className="text-flyva-primary"> Say</span>
          </h2>
          <p className="text-xl text-flyva-gray max-w-3xl mx-auto">
            Real experiences from real travelers who have explored the world with us
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-flyva-primary/10 rounded-full flex items-center justify-center">
                <Quote className="h-8 w-8 text-flyva-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < currentTestimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      )}
                    />
                  ))}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {currentTestimonial.rating}/5 Stars
                </Badge>
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-medium text-flyva-black leading-relaxed">
                "{isExpanded ? currentTestimonial.fullReview : currentTestimonial.quote}"
              </blockquote>

              {/* Expand/Collapse Button */}
              <Button
                variant="ghost"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-flyva-primary hover:text-flyva-primary/80 p-0 h-auto font-medium"
              >
                {isExpanded ? 'Read Less' : 'Read Full Review'}
              </Button>

              {/* Package Info */}
              <div className="bg-flyva-light-gray rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-flyva-primary" />
                  <span className="font-semibold text-flyva-black">
                    {currentTestimonial.packageTitle}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-flyva-gray">
                  <span>{currentTestimonial.packageLocation}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(currentTestimonial.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-flyva-black">
                      {currentTestimonial.name}
                    </h4>
                    {currentTestimonial.verified && (
                      <Verified className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <p className="text-flyva-gray text-sm">
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Images */}
            <motion.div
              key={`images-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {currentTestimonial.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={image}
                    alt={`${currentTestimonial.packageTitle} ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-8 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0 border-flyva-primary text-flyva-primary hover:bg-flyva-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "bg-flyva-primary scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0 border-flyva-primary text-flyva-primary hover:bg-flyva-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="flex items-center justify-center mt-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setAutoPlay(!autoPlay)}
              className="text-flyva-gray hover:text-flyva-primary text-xs"
            >
              {autoPlay ? (
                <>
                  <Heart className="h-3 w-3 mr-1 fill-current text-red-500" />
                  Auto-playing testimonials
                </>
              ) : (
                <>
                  <Heart className="h-3 w-3 mr-1" />
                  Click to auto-play
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-flyva-primary rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-white/90 mb-6">
              Join thousands of satisfied travelers and create memories that last a lifetime
            </p>
            <Button className="bg-white text-flyva-primary hover:bg-gray-100 px-8 py-3 font-semibold">
              Start Planning Your Trip
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}