// src/components/MenuItemCard.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface MenuItemCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ imageUrl, title, description, price }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div 
      className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg group"
      variants={cardVariants}
    >
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl text-white">{title}</h3>
          <p className="text-xl text-white font-bold">{price}</p>
        </div>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;