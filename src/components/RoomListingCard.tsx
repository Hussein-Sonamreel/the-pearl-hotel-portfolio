// src/components/RoomListingCard.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface RoomListingCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number; // Changed back to number
  slug: string;
}

const RoomListingCard: React.FC<RoomListingCardProps> = ({ imageUrl, title, description, price, slug }) => {
  const itemVariants = { /* ... */ };
  
  return (
    <motion.div /* ... */ >
      {/* ... Image Container ... */}
      <div className="p-6 md:p-8 flex flex-col justify-between md:w-2/3">
        <div>
          <h3 className="text-2xl md:text-3xl mb-2">{title}</h3>
          <p className="text-gray-400 text-base mb-4">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          {/* --- THIS IS THE UPDATED PRICE DISPLAY --- */}
          <span className="text-xl font-semibold text-white">
            KES {new Intl.NumberFormat('en-US').format(price)}
            <span className="text-sm font-light text-gray-400"> / night</span>
          </span>
          <Link href={`/rooms/${slug}`}>
            <button className="bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomListingCard;