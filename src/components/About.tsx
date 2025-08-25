// src/components/About.tsx
"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const About = () => {
  // Variant for the image column (slides in from the left)
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variant for the text column (slides in from the right)
  const textVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
  };

  return (
    // The overflow-hidden class prevents scrollbars from appearing during the animation
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% of the section is visible
        >
          {/* Image Column */}
          <motion.div className="md:w-1/2" variants={imageVariants}>
            <Image
              src="/about-image.jpg" // Make sure this image is in your /public folder
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
              Inspired by the elegance of nature and the warmth of world-class hospitality, we've designed an escape that allows you to disconnect from the world and reconnect with yourself.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;