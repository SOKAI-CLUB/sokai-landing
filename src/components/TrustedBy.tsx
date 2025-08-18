'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  return (
    <section className="py-12 md:py-16 bg-sokai-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sokai-gray text-sm md:text-base mb-8 font-sans">
            Trusted by leading youth academies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-60">
            {/* Placeholder logos - TODO: Replace with actual partner logos */}
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="w-20 h-12 md:w-24 md:h-14 bg-sokai-gray/20 rounded-md flex items-center justify-center hover:bg-sokai-gray/30 transition-colors duration-300"
              >
                <span className="text-sokai-gray text-xs font-sans">LOGO {item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;