// src/app/rooms/[slug]/page.tsx
import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const prisma = new PrismaClient();

// --- THIS IS THE NEW FUNCTION THAT FIXES THE BUILD ERROR ---
export async function generateStaticParams() {
  const rooms = await prisma.room.findMany({ select: { slug: true } });
  
  // We return an array of objects, where each object has a 'slug' property
  // Example: [ { slug: 'swahili-inspired-suite' }, { slug: 'safari-suite' } ]
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}
// --- END OF NEW FUNCTION ---

async function getRoom(slug: string) {
  const room = await prisma.room.findUnique({ where: { slug: slug } });
  return room;
}

export default async function RoomDetailsPage({ params }: { params: { slug: string } }) {
  const room = await getRoom(params.slug);

  if (!room) {
    // This is a good fallback, though generateStaticParams should prevent this
    return <div>Room not found.</div>;
  }

  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <div className="relative w-full h-[60vh]">
          <Image src={room.imageUrl} alt={room.title} fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-4">{room.title}</h1>
            <p className="text-2xl text-gray-300 mb-8">
              KES {new Intl.NumberFormat('en-US').format(room.price)} / night
            </p>
            <div className="text-lg text-gray-400 space-y-4">
              <p>{room.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}