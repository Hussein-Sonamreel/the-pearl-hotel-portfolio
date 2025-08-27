// src/components/FeaturedRooms.tsx
import RoomCard from './RoomCard';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// This is an async Server Component
export default async function FeaturedRooms() {

  // Fetch the first 3 rooms from the database, ordered by price
  const featuredRooms = await prisma.room.findMany({
    take: 3,
    orderBy: {
      price: 'asc',
    },
  });

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <RoomCard
              key={room.id}
              imageUrl={room.imageUrl}
              title={room.title}
              description={room.description}
              price={room.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
} // End of FeaturedRooms.tsx