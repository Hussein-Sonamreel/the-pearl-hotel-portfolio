// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from 'react'; // Import useEffect
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // State to track scroll

  const toggleMenu = () => setIsOpen(!isOpen);

  // This effect runs when the component mounts
  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled more than 10px, set hasScrolled to true
      setHasScrolled(window.scrollY > 10);
    };

    // Add the event listener when the component is mounted
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect runs only once

  const menuVariants: Variants = { /* ... */ };

  // This is the core of our change. The navbar's class is now dynamic.
  const navbarClasses = `
    fixed top-0 left-0 right-0 z-30 p-4
    transition-all duration-300
    ${hasScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}
  `;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="The Pearl Boutique Logo" 
              width={120} 
              height={40} 
              className="h-auto filter brightness-0 invert"
            />
          </Link>

          {/* ... The rest of your desktop and mobile navigation code remains exactly the same ... */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/rooms" className="hover:text-white transition-colors">Rooms</Link>
            <Link href="/dining" className="hover:text-white transition-colors">Dining</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/rooms">
              <button className="bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-200">
                Book Now
              </button>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>
      </nav>

      {/* ... The mobile menu panel code also remains the same ... */}
      <AnimatePresence>
        {isOpen && (
           <motion.div /* ... */ >
             {/* ... */}
           </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;