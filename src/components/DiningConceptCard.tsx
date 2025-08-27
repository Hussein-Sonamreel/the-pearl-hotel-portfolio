// src/components/DiningConceptCard.tsx
"use client";

import Image from 'next/image';

// Define the "blueprint" for the data this component expects to receive
interface DiningConceptCardProps {
  imageUrl: string;
  title: string;
  description: string;
  menuHighlights: string[];
}

const DiningConceptCard: React.FC<DiningConceptCardProps> = ({ imageUrl, title, description, menuHighlights }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl">
      <div className="relative w-full h-64">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div>
          <h4 className="font-semibold text-white mb-2">Menu Highlights:</h4>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {menuHighlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiningConceptCard;