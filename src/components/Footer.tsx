'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Youtube, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Custom X logo component
  const XLogo = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const socialLinks = [
    {
      name: 'X',
      icon: XLogo,
      href: 'https://x.com/Sokai_Fc',
      color: 'hover:text-white'
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
      href: 'https://youtube.com/@sokai-ai',
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
              <h3 className="text-3xl md:text-4xl font-display font-bold text-sokai-white mb-4 leading-none tracking-wider drop-shadow-[4px_4px_0px_rgba(166,166,166,0.8)]">
                SOKAI
              </h3>
              
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
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        w-12 h-12 rounded-full border-2 border-sokai-neon
                        flex items-center justify-center
                        transition-all duration-300 group
                        hover:bg-sokai-neon hover:border-sokai-neon
                        ${social.color}
                      `}
                    >
                      <IconComponent className="w-5 h-5 text-sokai-white group-hover:text-sokai-charcoal transition-colors duration-300" />
                    </motion.a>
                  );
                })}
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
          className="mt-12 pt-8 border-t border-sokai-gray/20 flex justify-center items-center"
        >
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
