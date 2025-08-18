'use client';

import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { label: 'Training Sessions', value: '10K+' },
    { label: 'Young Athletes', value: '2.5K+' },
    { label: 'Skills Tracked', value: '50+' }
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-28 bg-sokai-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-sokai-neon mb-4">
            Real-time tracking. Dynamic badges. Authentic rewards.
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              className="text-center group"
            >
              <div className="bg-sokai-black/50 p-6 md:p-8 rounded-2xl border border-sokai-neon/20 hover:border-sokai-neon/40 transition-all duration-300 hover:glow-border">
                <div className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-sokai-neon mb-3">
                  {stat.value}
                </div>
                <div className="text-sokai-gray text-sm md:text-base font-sans font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;