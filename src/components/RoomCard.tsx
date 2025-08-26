// src/components/RoomCard.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// This interface is now correct, expecting 'price' as a number.
interface RoomCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ imageUrl, title, description, price }) => {
  // Animation variants for the hover overlay
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    // This motion.div controls the hover state for its children
    <motion.div 
      className="relative rounded-lg overflow-hidden shadow-2xl bg-[#1a1a1a]"
      whileHover="visible"
      initial="hidden"
      animate="hidden"
    >
      <div className="relative w-full h-72">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* The text content is always visible */}
      <div className="p-6">
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className="text-gray-400 text-base mb-4 h-16">{description}</p>
        <div className="flex justify-between items-center mt-4">
          
          {/* --- THIS IS THE CORRECTED PRICE DISPLAY --- */}
          <span className="text-xl font-semibold text-white">
            KES {new Intl.NumberFormat('en-US').format(price)}
            <span className="text-sm font-light text-gray-400"> / night</span>
          </span>
          {/* --- END OF FIX --- */}

        </div>
      </div>
      
      {/* The Hover Overlay animates in based on the parent's hover state */}
      <motion.div
        className="absolute inset-0 bg-black/70 flex items-center justify-center p-4"
        variants={overlayVariants}
      >
        {/* We will create the '/rooms/details' page later */}
        <Link href="/rooms/details">
          <button className="bg-white text-black font-bold py-3 px-6 rounded-md transform hover:scale-105 transition-transform">
            View Details
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default RoomCard;