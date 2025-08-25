// src/components/RoomListingCard.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface RoomListingCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  slug: string; // e.g., 'ocean-view-suite'
}

const RoomListingCard: React.FC<RoomListingCardProps> = ({ imageUrl, title, description, price, slug }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  
  return (
    <motion.div 
      className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row"
      variants={itemVariants}
    >
      {/* Image Container */}
      <div className="relative w-full md:w-1/3 h-64 md:h-auto">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col justify-between md:w-2/3">
        <div>
          <h3 className="text-2xl md:text-3xl mb-2">{title}</h3>
          <p className="text-gray-400 text-base mb-4">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold text-white">${price}
            <span className="text-sm font-light text-gray-400"> / night</span>
          </span>
          {/* This will link to a future details page, e.g., /rooms/ocean-view-suite */}
          <Link href={`/rooms/${slug}`}>
            <button className="bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-200 transition-transform hover:scale-105">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomListingCard;