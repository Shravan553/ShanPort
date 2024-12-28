import React from "react";
import { motion } from "framer-motion";

export default function AnimatedShan() {
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-transparent p-4 sm:p-12">
      {/* Container visible only on larger screens */}
      <motion.div
        className="hidden flex-col items-center gap-4 sm:flex sm:flex-row sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ backgroundColor: "transparent" }}
      >
        {/* S with special styling */}
        <motion.div
          className="text-5xl font-bold text-gray-800 sm:text-7xl"
          variants={letterVariants}
          transition={{ duration: 0.4 }}
          style={{ backgroundColor: "transparent" }}
        >
          S
        </motion.div>

        {/* HAN letters with explicit transparency */}
        <div
          className="flex gap-2 sm:gap-4"
          style={{ backgroundColor: "transparent" }}
        >
          {["H", "A", "N"].map((letter) => (
            <motion.span
              key={letter}
              className="text-4xl font-medium text-gray-600 sm:text-6xl"
              variants={letterVariants}
              transition={{ duration: 0.4 }}
              style={{ backgroundColor: "transparent" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Minimal underline visible only on larger screens */}
      <motion.div
        className="mt-4 hidden h-px w-20 bg-gray-300 sm:block sm:w-32"
        initial={{ width: 0 }}
        animate={{ width: "5rem" }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
    </div>
  );
}
