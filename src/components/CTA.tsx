'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Target, Zap, Globe } from 'lucide-react';

const CTA = () => {
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(false);

  const handleCalendlyClick = () => {
    setIsCalendlyLoading(true);
    window.open('https://calendly.com/makses/sokai', '_blank');
    setTimeout(() => setIsCalendlyLoading(false), 2000);
  };

  const benefits = [
    {
      icon: Target,
      title: 'Strategic Partnership',
      description: 'Join the revolution in youth sports technology'
    },
    {
      icon: Zap,
      title: 'Early Access',
      description: 'Get exclusive insights into our roadmap and features'
    },
    {
      icon: Globe,
      title: 'Market Opportunity',
      description: '$5.57B global youth sports market growing at 8.1% CAGR'
    }
  ];

  return (
    <div id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sokai-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sokai-neon/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-sokai-white mb-6 leading-tight">
            Let's Build the Future of
            <span className="block text-sokai-neon">Youth Training</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-sokai-gray max-w-2xl mx-auto mb-8 leading-relaxed">
            Looking for strategic investors & partners to scale AI-powered training globally.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-sokai-charcoal/50 p-6 rounded-xl border border-sokai-neon/20 hover:border-sokai-neon/40 transition-all duration-300 text-center group hover:glow-border"
              >
                <div className="w-12 h-12 bg-sokai-neon/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-sokai-neon/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-sokai-neon" />
                </div>
                <h3 className="text-lg font-semibold text-sokai-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sokai-gray text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-sokai-charcoal to-sokai-black p-8 md:p-12 rounded-3xl glow-border-intense relative overflow-hidden"
        >
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(124,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

          <div className="relative z-10 text-center">
            {/* Calendar Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-16 h-16 bg-sokai-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Calendar className="w-8 h-8 text-sokai-neon" />
            </motion.div>

            {/* CTA Text */}
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-sokai-white mb-4">
              Ready to Transform Youth Sports?
            </h3>
            <p className="text-lg text-sokai-gray mb-8 max-w-2xl mx-auto">
              Schedule a 30-minute demo to see how SOKAI is revolutionizing football training with AI and blockchain technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={handleCalendlyClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isCalendlyLoading}
                className="group bg-sokai-neon text-sokai-charcoal px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sokai-neon/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:ring-offset-2 focus:ring-offset-sokai-charcoal min-w-[200px] flex items-center justify-center disabled:opacity-50"
              >
                {isCalendlyLoading ? (
                  <div className="animate-spin w-5 h-5 border-2 border-sokai-charcoal border-t-transparent rounded-full"></div>
                ) : (
                  <>
                    Book a Demo Call
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </motion.button>

              <motion.button
                onClick={() => window.open('[INVESTOR_DECK_URL]', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-sokai-neon text-sokai-neon hover:bg-sokai-neon hover:text-sokai-charcoal transition-all duration-300 rounded-xl font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:ring-offset-2 focus:ring-offset-sokai-charcoal min-w-[200px]"
              >
                Download Deck
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-sokai-neon/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-sokai-neon mb-1">30 min</div>
                  <div className="text-sm text-sokai-gray">Demo Duration</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sokai-neon mb-1">No Strings</div>
                  <div className="text-sm text-sokai-gray">Attached</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sokai-neon mb-1">Live Demo</div>
                  <div className="text-sm text-sokai-gray">App Walkthrough</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fallback Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-sokai-gray text-sm">
            Prefer email? Reach out to{' '}
            <a
              href="mailto:investors@sokai.ai"
              className="text-sokai-neon hover:underline transition-all duration-300"
            >
              investors@sokai.ai
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;
