"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedText = () => {
  const words = [
    "Web Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "JavaScript",
  ];
  const [index, setIndex] = useState(0);

  const total = words.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 1300);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="mb-4">
      <span className="text-xl md:text-2xl font-medium">
        console.log(&quot;
        <AnimatePresence mode="wait">
          <motion.h1
            key={`words_${index}`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xl md:text-2xl text-main"
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
        &quot;)
      </span>
    </div>
  );
};

export default AnimatedText;
