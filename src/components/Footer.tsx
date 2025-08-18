'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Youtube, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'X / Twitter',
      icon: Twitter,
      href: 'https://x.com/Sokai_Fc',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/sokai-club/',
      color: 'hover:text-[#0077B5]'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/@sokai-ai', // TODO: Replace with actual social links
      color: 'hover:text-[#FF0000]'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:hello@sokai.ai',
      color: 'hover:text-sokai-neon'
    }
  ];

  return (
    <footer className="bg-sokai-charcoal border-t border-sokai-gray/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Logo */}
            <div>
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-sokai-white mb-4">
                SOKAI
              </h3>
              <p className="text-sokai-gray leading-relaxed max-w-md">
                Transforming youth football training through AI-powered analysis and blockchain-certified progress tracking.
                Making quality coaching accessible to every young athlete, anywhere.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-sokai-black/30 p-6 rounded-xl border border-sokai-neon/20">
              <h4 className="text-lg font-semibold text-sokai-neon mb-2">Our Mission</h4>
              <p className="text-sokai-gray text-sm leading-relaxed">
                To democratize elite football training through cutting-edge technology,
                creating verifiable skill development pathways for the next generation of athletes.
              </p>
            </div>

            {/* Copyright */}
            <div className="pt-4 border-t border-sokai-gray/20">
              <p className="text-sokai-gray text-sm">
                © {currentYear} SOKAI Technologies. All rights reserved.
              </p>
              <p className="text-sokai-gray/60 text-xs mt-1">
                Building the future of youth sports training.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Social Links & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-sokai-white mb-6">
                Connect With Us
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        flex items-center space-x-3 p-4 bg-sokai-black/30 rounded-xl
                        border border-sokai-gray/20 hover:border-sokai-neon/40
                        transition-all duration-300 group hover:glow-border
                        ${social.color}
                      `}
                    >
                      <IconComponent className="w-5 h-5 text-sokai-gray group-hover:text-current transition-colors duration-300" />
                      <span className="text-sokai-gray group-hover:text-sokai-white transition-colors duration-300 text-sm font-medium">
                        {social.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-sokai-white mb-4">
                Quick Access
              </h4>
              <div className="space-y-3">
                <button
                  onClick={() => window.open('[INVESTOR_DECK_URL]', '_blank')}
                  className="block text-sokai-gray hover:text-sokai-neon transition-colors duration-300 text-sm"
                >
                  → Investor Pitch Deck
                </button>
                <button
                  onClick={() => window.open('https://calendly.com/makses/sokai', '_blank')}
                  className="block text-sokai-gray hover:text-sokai-neon transition-colors duration-300 text-sm"
                >
                  → Schedule Demo Call
                </button>
                <a
                  href="mailto:investors@sokai.ai"
                  className="block text-sokai-gray hover:text-sokai-neon transition-colors duration-300 text-sm"
                >
                  → Contact Investors Team
                </a>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-sokai-black/30 p-6 rounded-xl border border-sokai-neon/20">
              <h4 className="text-lg font-semibold text-sokai-neon mb-3">Technology</h4>
              <div className="flex flex-wrap gap-2">
                {['AI/ML', 'Blockchain', 'Computer Vision', 'Mobile-First'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-sokai-neon/10 text-sokai-neon text-xs rounded-full border border-sokai-neon/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-sokai-gray/20 flex flex-col sm:flex-row justify-between items-center"
        >
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-sokai-gray text-sm">
              Made with ⚡ for the future of youth sports
            </p>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 text-sokai-gray hover:text-sokai-neon transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:ring-offset-2 focus:ring-offset-sokai-charcoal rounded-lg p-2"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sokai-neon/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
