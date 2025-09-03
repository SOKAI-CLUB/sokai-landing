'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Démarrer la lecture de la vidéo après un court délai pour permettre le rendu
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error('Error playing video:', error);
        });
      }
    }, 100);
  };

  return (
    <section id="video" className="min-h-screen bg-sokai-black flex items-center justify-center py-28 pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-sokai-white mb-6 leading-tight">
            SEE SOKAI VIDEO
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-xl text-sokai-gray max-w-6xl mx-auto leading-relaxed text-balance font-sans"
          >
            SOKAI turns kids' football practice into measurable, motivating sessions — with verifiable proof of play.
          </motion.p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-5xl mb-8"
        >
          {!isPlaying ? (
            /* Video Thumbnail with Preview */
            <div className="relative aspect-[16/9] bg-gradient-to-br from-sokai-charcoal to-sokai-black">
              {/* Video Preview Frame */}
              <video 
                src="/sokaidemo.mp4"
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="metadata"
                poster=""
              />
              
              {/* Dark Overlay for Better Button Visibility */}
              <div className="absolute inset-0 bg-sokai-charcoal/40"></div>

              {/* Video Placeholder Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  onClick={handlePlayClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  {/* Play Button Background */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-sokai-neon/20 rounded-full flex items-center justify-center group-hover:bg-sokai-neon/30 transition-all duration-300 glow-border">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-sokai-neon ml-1" fill="currentColor" />
                  </div>

                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-full bg-sokai-neon/10 animate-ping"></div>
                </motion.button>
              </div>

              {/* Video Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sokai-charcoal/90 to-transparent p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-sokai-white mb-2">
                  SOKAI Training Demo
                </h3>
                <p className="text-sokai-gray text-sm md:text-base">
                  Watch how AI-powered training transforms youth football practice
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-sokai-neon rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-sokai-neon/60 rounded-full animate-pulse delay-500"></div>
            </div>
          ) : (
            /* Actual Video Player */
            <div className="relative aspect-[16/9] bg-sokai-charcoal">
              <video 
                ref={videoRef}
                src="/sokaidemo.mp4"
                controls
                className="w-full h-full object-cover"
                onLoadStart={() => console.log('Video loading started')}
                onError={(e) => console.error('Video error:', e)}
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          )}

          {/* Video Border Glow */}
          <div className="absolute inset-0 rounded-2xl glow-border pointer-events-none"></div>
        </motion.div>

        

       
      </div>
    </section>
  );
};

export default VideoSection;
