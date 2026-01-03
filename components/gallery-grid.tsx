"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryGridProps {
  filenames: string[];
  basePath: string;
}

export default function GalleryGrid({ filenames, basePath }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {filenames.map((name) => (
          <div 
            key={name} 
            onClick={() => setSelectedImage(name)}
            className="break-inside-avoid bg-white rounded-lg overflow-hidden relative group border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-zoom-in"
          >
            <Image
              src={`${basePath}/imgs/vozinha-fotos/${name}`}
              alt={`Foto de Dona Sebastiana`}
              width={800}
              height={1200}
              layout="responsive"
              className="object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-stone-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          
          <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
            <Image
              src={`${basePath}/imgs/vozinha-fotos/${selectedImage}`}
              alt="Foto ampliada"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}