'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Users, FileX, Gamepad2, Smartphone, Shield } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Low motivation & screen addiction',
      description: 'Kids prefer gaming over physical training, losing interest in traditional football practice.'
    },
    {
      icon: Users,
      title: 'Unequal access to quality coaching',
      description: 'Many young players lack access to professional coaching and structured development programs.'
    },
    {
      icon: FileX,
      title: 'No trusted record of progress',
      description: 'Parents and coaches have no verifiable way to track skill development and improvement over time.'
    }
  ];

  const solutions = [
    {
      icon: Gamepad2,
      title: 'Gamified AI drills that kids love',
      description: 'Transform training into engaging game-like experiences that motivate consistent practice and skill building.'
    },
    {
      icon: Smartphone,
      title: 'Train anywhere with just a phone & ball',
      description: 'Access professional-level training guidance using only a smartphone camera and a football.'
    },
    {
      icon: Shield,
      title: 'Blockchain-certified \'Proof of Play\'',
      description: 'Create immutable, verifiable records of training sessions and skill progression that build trust.'
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="problem-solution" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-sokai-dark-text mb-4">
            From <span style={{ color: '#00c6ba' }}>Problems</span> to <span className="text-sokai-neon">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-sokai-light-gray mx-auto">
            We identified the key challenges in youth football training and built innovative solutions that work.
          </p>
        </motion.div>

        {/* Problem → Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-20">
          {/* Problems Column - Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 order-1"
          >
            <h3 className="text-2xl md:text-3xl font-sans font-semibold mb-8 text-left" style={{ color: '#00c6ba' }}>
              Current Problems
            </h3>
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-white p-6 rounded-2xl border transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ 
                    borderColor: 'rgba(0, 198, 186, 0.3)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 198, 186, 0.6)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0, 198, 186, 0.3)'}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 198, 186, 0.1)' }}>
                      <IconComponent className="w-6 h-6" style={{ color: '#00c6ba' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-sokai-dark-text mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-sokai-light-gray leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Solutions Column - Right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 order-2"
          >
            <h3 className="text-2xl md:text-3xl font-sans font-semibold text-sokai-neon mb-8 text-left">
              Our Solutions
            </h3>
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-white p-6 rounded-2xl border border-sokai-neon/30 hover:border-sokai-neon/60 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-sokai-neon/10 rounded-xl">
                      <IconComponent className="w-6 h-6 text-sokai-neon" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-sokai-dark-text mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-sokai-light-gray leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ProblemSolution;
