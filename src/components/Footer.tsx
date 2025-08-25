// src/components/Footer.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="border-t border-gray-800 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.0 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Column 1: Logo and Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="The Pearl Boutique Logo" 
                width={120} 
                height={40} 
                className="h-auto filter brightness-0 invert" 
              />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Your personal sanctuary for tranquility and luxury.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/rooms" className="hover:text-white transition-colors">Rooms</Link></li>
              <li><Link href="/dining" className="hover:text-white transition-colors">Dining</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-500">
          <p className="mb-2">&copy; {new Date().getFullYear()} The Pearl Boutique. All Rights Reserved.</p>
          <p>
            Designed & Built by{' '}
            <a 
              href="https://github.com/Hussein-Sonamreel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Hussein Salim
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;