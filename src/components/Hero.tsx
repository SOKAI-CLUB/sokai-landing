'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Hero Background Image */}
          <Image
            src="/Hero.png"
            alt="SOKAI Hero Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />

          {/* Additional side gradients for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-sokai-charcoal/50 via-transparent to-sokai-charcoal/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          {/* SOKAI Brand Name */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-sokai-white leading-none tracking-wider drop-shadow-[4px_4px_0px_rgba(166,166,166,0.8)]">
              SOKAI
            </h1>
            
            {/* CLUB Badge - Below SOKAI */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center mt-6"
            >
              <span className="px-12 py-2 md:px-24 md:py-4 text-white bg-sokai-neon font-antonio font-bold text-lg md:text-4xl rounded-full tracking-wider">
                CLUB
              </span>
            </motion.div>
            
            {/* Slogan - Below CLUB */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-xl lg:text-2xl font-sans font-bold text-sokai-white leading-tight mt-8 drop-shadow-[2px_2px_0px_rgba(166,166,166,0.6)]"
            >
              <span className="block">Play, Have fun, Improve and Start the game ⚽️⚡️</span>
            </motion.h2>
          </motion.div>


          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-0"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('video')}
              className="z-10 px-4 py-2 md:px-6 md:py-3 border-2 border-sokai-neon text-sokai-neon hover:bg-sokai-neon hover:text-sokai-charcoal transition-all duration-300 rounded-lg font-sans font-semibold text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:ring-offset-2 focus:ring-offset-sokai-charcoal min-w-[140px]"
            >
              Start the Game
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('[INVESTOR_DECK_URL]', '_blank')}
              className="px-4 py-2 md:px-6 md:py-3 bg-sokai-neon text-sokai-charcoal hover:bg-sokai-neon/90 transition-colors duration-300 rounded-lg font-sans font-semibold text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:ring-offset-2 focus:ring-offset-sokai-charcoal min-w-[140px] glow-border"
            >
              Investor Deck
            </motion.button>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-sokai-neon rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-sokai-neon rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
