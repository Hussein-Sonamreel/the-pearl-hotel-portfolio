// src/components/PageHeader.tsx
"use client";
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="pt-32 pb-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl mb-4">{title}</h1>
        <p className="text-lg text-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default PageHeader;