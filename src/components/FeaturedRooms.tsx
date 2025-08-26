// src/components/FeaturedRooms.tsx
"use client";
import { motion, Variants } from 'framer-motion';
import RoomCard from './RoomCard';

const featuredRoomsData = [
  // ... your room data remains the same ...
 {
    imageUrl: '/swahili1.jpg', // Assuming this is a shot of the Swahili Suite
    title: 'Swahili-Inspired Suite',
    description: 'Experience coastal heritage in this exquisite suite, featuring a hand-carved Zanzibari four-poster bed.',
    price: 45000, // Price in KES
  },
  {
    imageUrl: '/Safari Suite.jpg', // Assuming this is a shot of the Safari Suite
    title: 'Safari Suite',
    description: 'An adventurous yet luxurious escape with leather & canvas decor and authentic Maasai beadwork.',
    price: 62000, // Price in KES
  },
  {
    imageUrl: '/ocenfront.jpg', // Assuming this is a shot of the Ocean Villa
    title: 'Oceanfront Villa',
    description: 'The pinnacle of barefoot luxury. This private villa offers direct beach access and a personal plunge pool.',
    price: 85000, // Price in KES
  },
];


const FeaturedRooms = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      };
    
      const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      };

  // --- THIS IS THE FIX ---
  // We are replacing <AnimatedSection> with a standard <section> tag
  // because this component handles its own scroll animations.
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl">
            Our Signature Accommodations
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Each room is designed to be a private sanctuary of comfort and style.
          </p>
        </div>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {featuredRoomsData.map((room, index) => (
            <motion.div key={index} variants={itemVariants}>
                <RoomCard
                imageUrl={room.imageUrl}
                title={room.title}
                description={room.description}
                price={room.price}
                />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
  // --- END OF FIX ---
};

export default FeaturedRooms;