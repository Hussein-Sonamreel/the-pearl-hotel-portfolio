// prisma/seed.ts
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const roomsToSeed: Prisma.RoomCreateInput[] = [
  { imageUrl: '/swahili1.jpg', title: 'Swahili-Inspired Suite', description: '...', price: 45000, slug: 'swahili-inspired-suite' },
  { imageUrl: '/Safari Suite.jpg', title: 'Safari Suite', description: '...', price: 62000, slug: 'safari-suite' },
  { imageUrl: '/ocenfront.jpg', title: 'Oceanfront Villa', description: '...', price: 85000, slug: 'oceanfront-villa' },
  { imageUrl: '/gallery-1.jpg', title: 'Deluxe Garden Room', description: '...', price: 32000, slug: 'deluxe-garden-room' },
];

const diningConceptsToSeed: Prisma.DiningConceptCreateArgs['data'][] = [
  { imageUrl: '/bpmarestaurant.jpg', title: 'Signature Restaurant', description: '...', menuItems: { create: [{ name: 'Lamu Coconut Crab Curry' }]}},
  { imageUrl: '/finedining.jpg', title: 'Boma-Style Outdoor Dining', description: '...', menuItems: { create: [{ name: 'Traditional Nyama Choma' }]}},
  { imageUrl: '/rooftop1.jpg', title: 'Rooftop Terrace Dining', description: '...', menuItems: { create: [{ name: 'Sunset Cocktails' }]}},
  { imageUrl: '/poolside.jpg', title: 'Garden & Poolside Lounge', description: '...', menuItems: { create: [{ name: 'Grilled Seafood Platters' }]}},
];

async function main() { /* ... same main function, no changes needed ... */ }
main().catch( /* ... */ ).finally( /* ... */ );

