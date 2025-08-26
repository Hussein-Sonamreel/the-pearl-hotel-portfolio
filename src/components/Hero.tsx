// src/components/Hero.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // This 'relative' class is CRITICAL for the Image with the 'fill' prop
    <section className="relative h-screen flex items-center justify-center">
      
      {/* Layer 1: The Background Image (at the very back) */}
      <Image
        src="/hero-image.jpg" // Make sure you have this image in your /public folder
        alt="Serene view from The Pearl Boutique Hotel"
        fill
        className="object-cover z-0"
        sizes="100vw"
        priority // Tells Next.js to load this image first
      />
      
      {/* Layer 2: The Dark Overlay (on top of the image) */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Layer 3: The Text Content (on top of everything) */}
      <div className="relative z-20 text-center text-white px-4">
        
        <motion.h1 
          className="text-5xl md:text-7xl mb-4 leading-tight"
          // ... animation props
        >
          Where Heritage Meets the Horizon.
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          // ... animation props
        >
          Welcome to The Pearl by Hussein, an East African boutique sanctuary where Swahili elegance and barefoot luxury invite you to find your peace.
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
         Luxury service meets serene landscapes. 
         
         
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          // ... animation props
        >
          Your escape from the ordinary awaits.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link href="/rooms">
            <button className="bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors">
              Explore Our Rooms
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;