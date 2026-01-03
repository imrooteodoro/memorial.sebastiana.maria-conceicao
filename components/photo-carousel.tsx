"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface Props {
  filenames: string[];
  basePath: string;
}

export default function PhotoCarousel({ filenames, basePath }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    <div className="overflow-hidden bg-stone-100 rounded-xl shadow-inner" ref={emblaRef}>
      <div className="flex">
        {filenames.map((name) => (
          <div 
            key={name} 
            className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] relative aspect-[4/3] px-2"
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg border border-stone-200 shadow-sm">
              <Image
                src={`${basePath}/imgs/vozinha-fotos/${name}`}
                alt="Retrato memorial"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}