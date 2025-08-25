// src/components/Contact.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-24 md:py-32">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Begin Your Journey
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Have a question or ready to book your stay? Our concierge team is 
            available 24/7 to help you plan the perfect escape.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black font-bold py-4 px-10 rounded-md hover:bg-gray-200 transition-transform hover:scale-105">
              Get In Touch
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;