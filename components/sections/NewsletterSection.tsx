'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Gift,
  Plane,
  MapPin,
  Clock,
  Users,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from 'lucide-react';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: Gift,
    title: 'Exclusive Deals',
    description: 'Up to 30% off on premium packages',
  },
  {
    icon: Plane,
    title: 'Early Bird Access',
    description: 'First access to new destinations',
  },
  {
    icon: MapPin,
    title: 'Travel Tips',
    description: 'Expert advice and insider secrets',
  },
  {
    icon: Clock,
    title: 'Flash Sales',
    description: 'Limited-time offers delivered first',
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', followers: '125K' },
  { icon: Facebook, href: '#', label: 'Facebook', followers: '89K' },
  { icon: Twitter, href: '#', label: 'Twitter', followers: '67K' },
  { icon: Youtube, href: '#', label: 'YouTube', followers: '45K' },
];

const recentOffers = [
  {
    destination: 'Santorini, Greece',
    discount: '25% OFF',
    validUntil: '3 days left',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    destination: 'Bali, Indonesia',
    discount: '30% OFF',
    validUntil: '5 days left',
    image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    destination: 'Swiss Alps',
    discount: '20% OFF',
    validUntil: '1 week left',
    image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-flyva-primary via-blue-600 to-flyva-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border border-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 border border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-1/3 w-36 h-36 border border-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Floating travel icons */}
        <div className="absolute top-32 left-1/3 animate-float">
          <Plane className="h-8 w-8 text-white/20" />
        </div>
        <div className="absolute bottom-32 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <MapPin className="h-6 w-6 text-white/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Newsletter & Updates
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins leading-tight">
              Never Miss Your Next
              <span className="text-yellow-300"> Adventure</span>
            </h2>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Join our community of travel enthusiasts and get exclusive access to premium deals, 
              insider travel tips, and early bird offers delivered straight to your inbox.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      <Icon className="h-4 w-4 text-yellow-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-white/80">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8"
            >
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-flyva-black font-semibold py-4 rounded-lg transition-colors duration-300"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-flyva-black"></div>
                        <span>Subscribing...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Subscribe for Exclusive Deals
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-white/70 text-center">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Welcome Aboard! 🎉</h3>
                  <p className="text-white/80">
                    You're now part of our travel community. Check your inbox for a special welcome offer!
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Social Media */}
            <div className="flex flex-wrap gap-4">
              <span className="text-white/80 text-sm font-medium">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-300 group"
                  >
                    <Icon className="h-5 w-5 text-white group-hover:text-yellow-300 transition-colors duration-200" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - Recent Offers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                Hot Deals This Week
              </h3>
              <p className="text-white/80">
                Limited-time offers from our newsletter subscribers
              </p>
            </div>

            {recentOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.destination}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {offer.discount}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">
                      {offer.destination}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3 w-3 text-yellow-300" />
                      <span className="text-xs text-white/80">{offer.validUntil}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-white/80">4.9</span>
                    </div>
                    <Users className="h-4 w-4 text-white/60 mx-auto" />
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-flyva-primary transition-all duration-300"
              >
                View All Deals
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
        >
          {[
            { number: '50K+', label: 'Newsletter Subscribers' },
            { number: '95%', label: 'Subscriber Satisfaction' },
            { number: '2-3x', label: 'Exclusive Deals Weekly' },
            { number: '30%', label: 'Average Savings' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}