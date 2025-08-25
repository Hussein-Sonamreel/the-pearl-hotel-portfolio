// src/components/Navbar.tsx
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <>
      <nav className="bg-[#0a0a0a]/80 backdrop-blur-md fixed top-0 left-0 right-0 z-30 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="The Pearl Logo" width={120} height={40} className="h-auto filter brightness-0 invert"/>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/rooms" className="hover:text-white transition-colors">Rooms</Link>
            <Link href="/dining" className="hover:text-white transition-colors">Dining</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/rooms">
              <button className="bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-200">Book Now</button>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="hidden" className="fixed top-20 left-0 w-full bg-[#0a0a0a] z-20 p-8 shadow-2xl">
            <div className="flex flex-col items-center space-y-8 text-2xl">
              <Link href="/rooms" onClick={toggleMenu} className="hover:text-white">Rooms</Link>
              <Link href="/dining" onClick={toggleMenu} className="hover:text-white">Dining</Link>
              <Link href="/contact" onClick={toggleMenu} className="hover:text-white">Contact</Link>
              <Link href="/rooms">
                <button className="bg-white text-black font-bold py-3 px-8 rounded-md mt-4">Book Now</button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;