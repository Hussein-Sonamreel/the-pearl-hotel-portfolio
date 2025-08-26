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
              src="/swahili-decor.jpg" // <-- YOUR NEW IMAGE PATH
              alt="Artisanal interior decor at The Pearl hotel"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Text Content Column */}
          <motion.div className="md:w-1/2 text-center md:text-left" variants={textVariants}>
            <h2 className="text-4xl md:text-5xl mb-6">
              Crafted from Culture, Designed for Peace.
            </h2>
            <p className="text-lg text-gray-400 mb-4">
              The Pearl is more than a hotel—it is a story. Born from a love for East African heritage, every detail is hand-picked, from the intricately carved Zanzibari doors to the soft, hand-woven textiles in every suite.
            </p>
            <p className="text-lg text-gray-400">
              Our philosophy blends the warmth of traditional African hospitality with the precision of modern luxury. We have created a sanctuary where you can disconnect from the world and reconnect with the timeless rhythms of nature and culture.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;