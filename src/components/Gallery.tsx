// src/components/Gallery.tsx
"use client"; 

import { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Import the Lightbox component and its required styles
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// --- Image Data: Keep your content clean and organized ---
const galleryImages = [
  { src: '/gallery-1.jpg', alt: 'A beautifully designed hotel room with a view' },
  { src: '/gallery-2.jpg', alt: 'Gourmet dish served at the hotel restaurant' },
  { src: '/gallery-3.jpg', alt: 'The tranquil hotel spa and relaxation area' },
  { src: '/gallery-4.jpg', alt: 'Close-up of a craft cocktail on the bar' },
  { src: '/gallery-5.jpg', alt: 'The hotel infinity pool at sunset' },
  { src: '/gallery-6.jpg', alt: 'A luxurious bathroom with a stone bathtub' },
];

const Gallery = () => {
  // State to manage the lightbox (which image is open, or if it's closed)
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleImageClick = (imageIndex: number) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  // Animation variant for the container to stagger the children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Each image will animate in 0.15s after the previous one
      },
    },
  };

  // Animation variant for each individual image
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl">
            A Glimpse Into Paradise
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover the details that make a stay at The Pearl unforgettable.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryImages.map((image, idx) => (
            <motion.div 
              key={idx} 
              className="relative w-full aspect-square overflow-hidden rounded-lg shadow-2xl cursor-pointer group"
              onClick={() => handleImageClick(idx)}
              variants={itemVariants}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* The Lightbox component, which is invisible until 'open' is true */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages}
        index={index}
      />
    </section>
  );
};

export default Gallery;