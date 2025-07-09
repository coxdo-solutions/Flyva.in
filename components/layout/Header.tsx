"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane, Globe, Phone, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/packages", label: "Packages" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/alhijrah", label: "Al Hijrah" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-6 inset-x-0 mx-auto z-50 max-w-7xl w-[95%] rounded-2xl shadow-xl transition-all duration-300 backdrop-blur-lg",
        isScrolled
          ? "bg-white/90 border border-gray-200"
          : "bg-white/20 border border-white/30"
      )}
    >
      <div className="px-4 py-2 lg:py-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-14 h-14 shrink-0">
              <Image
                src="/flyva.png"
                alt="Flyva logo"
                fill
                priority
                sizes="56px"
                className="object-contain"
              />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-flyva-primary rounded-full animate-pulse" />
            </div>

            <span className="text-2xl font-bold text-flyva-black font-poppins">
              Flyva&nbsp;<span className="text-flyva-primary">Holidays</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-all hover:text-flyva-primary",
                  isScrolled ? "text-flyva-black" : "text-gray-700"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-flyva-primary transition-all duration-300 hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-flyva-black hover:text-flyva-primary"
            >
              <Globe className="h-4 w-4 mr-1" />
              EN
            </Button>

            <Link
              href="mailto:hello@flyva.com"
              className="text-sm text-flyva-black hover:text-flyva-primary flex items-center"
            >
              <Mail className="h-4 w-4 mr-1" />
            </Link>
            <Link href="/booking">
              <Button className="bg-flyva-primary hover:bg-flyva-primary/90 text-white px-5 rounded-xl">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-flyva-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden px-4 pb-4"
          >
            <div className="rounded-xl bg-white shadow-inner border border-gray-200 p-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-base text-flyva-black hover:text-flyva-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-flyva-black hover:text-flyva-primary"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Language: EN
                </Button>
                <Link href="/booking">
                  <Button className="bg-flyva-primary hover:bg-flyva-primary/90 text-white px-5 rounded-xl">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
