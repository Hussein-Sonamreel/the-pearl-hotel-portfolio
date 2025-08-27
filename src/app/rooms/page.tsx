// src/app/rooms/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import RoomListingCard from "@/components/RoomListingCard";
import { PrismaClient } from '@prisma/client';

// Initialize a single, reusable Prisma Client instance
const prisma = new PrismaClient();

// This is a Server Component, so we can make it async and fetch data directly.
export default async function RoomsPage() {
  
  // This line now talks directly to your Supabase database!
  const rooms = await prisma.room.findMany({
    orderBy: {
      price: 'asc',
    },

  });

  return (
    <main>
      <Navbar />
      <PageHeader
        title="Accommodations"
        subtitle="Every room at The Pearl is a sanctuary designed for your ultimate comfort and relaxation."
      />

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* We are now mapping over the REAL data from our database */}
            {rooms.map((room) => (
              <RoomListingCard
                key={room.id}
                imageUrl={room.imageUrl}
                title={room.title}
                description={room.description}
                price={room.price}
                slug={room.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}