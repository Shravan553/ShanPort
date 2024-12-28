import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedShan() {
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-transparent p-4 sm:p-12">
      {/* Container visible only on larger screens */}
      <motion.div
        className="hidden sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ backgroundColor: 'transparent' }}
      >
        {/* S with special styling */}
        <motion.div
          className="text-5xl sm:text-7xl font-bold text-gray-800"
          variants={letterVariants}
          transition={{ duration: 0.4 }}
          style={{ backgroundColor: 'transparent' }}
        >
          S
        </motion.div>

        {/* HAN letters with explicit transparency */}
        <div
          className="flex gap-2 sm:gap-4"
          style={{ backgroundColor: 'transparent' }}
        >
          {['H', 'A', 'N'].map((letter, index) => (
            <motion.span
              key={letter}
              className="text-4xl sm:text-6xl font-medium text-gray-600"
              variants={letterVariants}
              transition={{ duration: 0.4 }}
              style={{ backgroundColor: 'transparent' }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Minimal underline visible only on larger screens */}
      <motion.div
        className="hidden sm:block h-px w-20 sm:w-32 bg-gray-300 mt-4"
        initial={{ width: 0 }}
        animate={{ width: '5rem' }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
    </div>
  );
}
