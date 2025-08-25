// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import FeaturedRooms from "@/components/FeaturedRooms";
import Contact from "@/components/Contact"; // 1. Import Contact
import Footer from "@/components/Footer";   // 2. Import Footer

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <FeaturedRooms />
      <Contact /> {/* 3. Add Contact here */}
      <Footer />  {/* 4. Add Footer here */}
    </main>
  );
}