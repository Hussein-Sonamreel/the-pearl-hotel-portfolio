// src/components/About.tsx
"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const About = () => {
  // ... (variants are unchanged)
  const imageVariants: Variants = { /* ... */ };
  const textVariants: Variants = { /* ... */ };

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Column */}
          <motion.div className="md:w-1/2" variants={imageVariants}>
            <Image
              src="/about-image.jpg"
              alt="Comfortable and luxurious interior of a hotel suite at The Pearl"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Text Content Column */}
          <motion.div className="md:w-1/2 text-center md:text-left" variants={textVariants}>
            <h2 className="text-4xl md:text-5xl mb-6">
              Your Personal Sanctuary
            </h2>
            <p className="text-lg text-gray-400 mb-4">
              At The Pearl, we believe true luxury is found in tranquility and personalized care. Our philosophy is simple: to create an environment that feels like a private residence, where every detail is considered and every need is anticipated.
            </p>
            <p className="text-lg text-gray-400">
              {/* THIS IS THE FIX: "we've" is now "we&apos;ve" */}
              Inspired by the elegance of nature and the warmth of world-class hospitality, we&apos;ve designed an escape that allows you to disconnect from the world and reconnect with yourself.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;