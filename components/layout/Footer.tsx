"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Plane,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white px-6 py-12 md:py-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & Description */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="/flyva.png"
                alt="Flyva logo"
                fill
                priority
                sizes="48px"
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold font-poppins">
              Flyva&nbsp;<span className="text-flyva-primary">Tours & Travels LLP</span>
            </span>
          </Link>

          <p className="text-sm text-gray-400">
            Explore the world with tailored travel experiences designed just for
            you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-flyva-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-flyva-primary" />
              <span>support@flyvatours.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-flyva-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-flyva-primary" />
              <span>New York, USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-white/10" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Flyva Tours. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              aria-label={label}
              className="hover:text-flyva-primary transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
