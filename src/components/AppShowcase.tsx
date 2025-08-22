'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Brain, Shield, Award, Smartphone, Zap } from 'lucide-react';

const AppShowcase = () => {
  const features = [
    {
      title: "AI-Powered Movement Analysis",
      description: "Our advanced computer vision analyzes your technique in real-time, providing instant feedback on ball control, passing accuracy, and movement patterns. Just like having a professional coach in your pocket.",
      icon: Brain,
      image: "/app-mockup-1.png", // Placeholder - replace with actual mockup
      alignment: "left"
    },
    {
      title: "Gamified Training Experience", 
      description: "Turn every training session into an engaging game. Complete challenges, unlock achievements, and compete with friends while developing real football skills that matter on the pitch.",
      icon: Zap,
      image: "/app-mockup-2.png", // Placeholder - replace with actual mockup
      alignment: "right"
    },
    {
      title: "Blockchain-Verified Progress",
      description: "Every training session is recorded and verified on the blockchain, creating an immutable record of your improvement. Build a trusted portfolio of your football development that scouts and academies can verify.",
      icon: Shield,
      image: "/profile_badge.png",
      alignment: "left"
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-sokai-dark-text mb-6">
            Train Smarter with
            <span className="block text-sokai-neon">AI-Powered Coaching</span>
          </h2>
          <p className="text-lg md:text-xl text-sokai-light-gray max-w-3xl mx-auto">
            Experience the future of football training with personalized AI coaching, gamified challenges, and blockchain-verified progress tracking.
          </p>
        </motion.div>

        {/* Features with Alternating Layout */}
        <div className="space-y-20 md:space-y-32">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isLeft = feature.alignment === "left";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isLeft ? '' : 'lg:grid-flow-col-dense'}`}
              >
                {/* Text Content */}
                <div className={`space-y-6 ${isLeft ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sokai-neon/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-sokai-neon" />
                    </div>
                    <div className="text-sm font-semibold text-sokai-neon uppercase tracking-wide">
                      Feature {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-sokai-dark-text leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-sokai-light-gray leading-relaxed">
                    {feature.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-sokai-neon font-semibold"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>

                {/* iPhone Mockup */}
                <div className={`relative ${isLeft ? '' : 'lg:col-start-1'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    {feature.title === "Blockchain-Verified Progress" ? (
                      /* iPhone Frame built around the profile badge image */
                      <div className="relative mx-auto w-56 md:w-64">
                        {/* Phone Shadow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sokai-neon/20 to-transparent blur-2xl transform translate-x-4 translate-y-4 rounded-3xl"></div>
                        
                        {/* Phone Body */}
                        <div className="relative bg-gray-900 rounded-3xl p-1.5 shadow-2xl">
                          {/* Screen */}
                          <div className="bg-black rounded-3xl overflow-hidden">
                            {/* Status Bar */}
                            <div className="bg-black px-4 py-1.5 flex justify-between items-center text-white text-xs relative z-10">
                              <span>9:41</span>
                              <div className="flex space-x-1">
                                <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                                <div className="w-3 h-1.5 bg-white rounded-sm opacity-60"></div>
                                <div className="w-3 h-1.5 bg-white rounded-sm opacity-30"></div>
                              </div>
                            </div>
                            
                            {/* Profile Badge Screenshot */}
                            <div className="relative">
                              <img 
                                src="/profile_badge.png" 
                                alt="Profile Badge Screenshot" 
                                className="w-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Dynamic Light Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-sokai-neon/20 via-transparent to-sokai-neon/20 rounded-3xl blur-xl animate-pulse"></div>
                      </div>
                    ) : (
                      /* Default iPhone Frame for other features */
                      <div className="relative mx-auto w-64 md:w-80">
                        {/* Phone Shadow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sokai-neon/20 to-transparent blur-2xl transform translate-x-4 translate-y-4 rounded-3xl"></div>
                        
                        {/* Phone Body */}
                        <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                          {/* Screen */}
                          <div className="bg-sokai-charcoal rounded-3xl overflow-hidden">
                            {/* Status Bar */}
                            <div className="bg-black px-6 py-2 flex justify-between items-center text-white text-xs">
                              <span>9:41</span>
                              <div className="flex space-x-1">
                                <div className="w-4 h-2 bg-white rounded-sm"></div>
                                <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                                <div className="w-4 h-2 bg-white rounded-sm opacity-30"></div>
                              </div>
                            </div>
                            
                            {/* App Content Area */}
                            <div className="h-96 md:h-[500px] bg-gradient-to-br from-sokai-charcoal via-sokai-black to-sokai-charcoal relative overflow-hidden">
                              <div className="p-6 flex flex-col items-center justify-center h-full">
                                {/* SOKAI Logo */}
                                <div className="text-center mb-8">
                                  <h4 className="font-display text-2xl text-sokai-white mb-2 drop-shadow-lg">
                                    SOKAI
                                  </h4>
                                  <div className="font-antonio text-xs text-sokai-neon tracking-[0.2em] mb-4">
                                    CLUB
                                  </div>
                                </div>
                                
                                {/* Feature Icon */}
                                <div className="w-16 h-16 bg-sokai-neon/10 rounded-2xl flex items-center justify-center mb-6">
                                  <IconComponent className="w-8 h-8 text-sokai-neon" />
                                </div>
                                
                                {/* Feature Preview */}
                                <div className="text-center">
                                  <h5 className="text-sokai-white font-semibold mb-2">
                                    {feature.title.split(' ')[0]} {feature.title.split(' ')[1]}
                                  </h5>
                                  <div className="w-24 h-1 bg-sokai-neon rounded-full mx-auto mb-4"></div>
                                  
                                  {/* Mock UI Elements */}
                                  <div className="space-y-2">
                                    <div className="h-2 bg-sokai-neon/20 rounded w-20 mx-auto"></div>
                                    <div className="h-2 bg-sokai-neon/30 rounded w-16 mx-auto"></div>
                                    <div className="h-2 bg-sokai-neon/10 rounded w-24 mx-auto"></div>
                                  </div>
                                </div>
                                
                                {/* Bottom Action */}
                                <div className="absolute bottom-8 left-6 right-6">
                                  <div className="bg-sokai-neon rounded-xl py-3 text-center">
                                    <span className="text-sokai-charcoal font-semibold text-sm">
                                      Start Training
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Dynamic Light Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-sokai-neon/20 via-transparent to-sokai-neon/20 rounded-3xl blur-xl animate-pulse"></div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;