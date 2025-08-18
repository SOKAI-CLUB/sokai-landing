'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-sokai-charcoal/95 backdrop-blur-md border-b border-sokai-gray/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              <Image
                src="/sokaiclub.png"
                alt="SOKAI CLUB"
                width={120}
                height={80}
                className="h-8 md:h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('video')}
              className="text-sokai-gray hover:text-sokai-neon transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:ring-offset-2 focus:ring-offset-sokai-charcoal rounded-md px-3 py-2"
            >
              Video
            </button>
            <button
              onClick={() => scrollToSection('problem-solution')}
              className="text-sokai-gray hover:text-sokai-neon transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:ring-offset-2 focus:ring-offset-sokai-charcoal rounded-md px-3 py-2"
            >
              Problem → Solution
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sokai-gray hover:text-sokai-neon transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:ring-offset-2 focus:ring-offset-sokai-charcoal rounded-md px-3 py-2"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <motion.button
              onClick={() => window.open('https://calendly.com/makses/sokai', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sokai-neon text-sokai-charcoal px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-sokai-neon/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:ring-offset-2 focus:ring-offset-sokai-charcoal text-sm md:text-base"
            >
              Book a Call
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
