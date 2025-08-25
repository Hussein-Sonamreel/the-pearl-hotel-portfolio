// src/app/rooms/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import RoomListingCard from "@/components/RoomListingCard";
import { motion, Variants } from 'framer-motion';

// This would typically come from a database, but for now, we'll define it here.
const allRoomsData = [
  {
    imageUrl: '/room-1.jpg',
    title: 'Ocean View Suite',
    description: 'Bask in breathtaking ocean vistas from your private balcony. This suite features a king-sized bed, a spacious living area, and a marble bathroom.',
    price: 450,
    slug: 'ocean-view-suite',
  },
  {
    imageUrl: '/room-2.jpg',
    title: 'Forest Retreat Villa',
    description: 'Immerse yourself in nature. This private villa offers ultimate seclusion, a cozy fireplace, and floor-to-ceiling windows with forest views.',
    price: 620,
    slug: 'forest-retreat-villa',
  },
  {
    imageUrl: '/room-3.jpg',
    title: 'The Pearl Penthouse',
    description: 'The pinnacle of luxury. Enjoy panoramic views, a private rooftop terrace, a personal plunge pool, and exclusive 24/7 concierge service.',
    price: 1200,
    slug: 'the-pearl-penthouse',
  },
  {
    imageUrl: '/gallery-1.jpg', // Add more room images to your /public folder
    title: 'Deluxe Garden Room',
    description: 'A beautifully appointed room with a private patio overlooking our serene gardens. Perfect for a quiet and relaxing stay.',
    price: 350,
    slug: 'deluxe-garden-room',
  },
];

export default function RoomsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Accommodations"
        subtitle="Every room at The Pearl is a sanctuary designed for your ultimate comfort and relaxation."
      />

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {allRoomsData.map((room) => (
              <RoomListingCard
                key={room.slug}
                imageUrl={room.imageUrl}
                title={room.title}
                description={room.description}
                price={room.price}
                slug={room.slug}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}