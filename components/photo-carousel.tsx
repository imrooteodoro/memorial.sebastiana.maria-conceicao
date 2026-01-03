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
  // align: 'start' ajuda a mostrar uma parte da próxima foto no mobile
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {filenames.map((name) => (
          <div 
            key={name} 
           
            className="flex-[0_0_85%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-2"
          >
            <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl border border-stone-200 shadow-sm bg-white">
              <Image
                src={`${basePath}/imgs/vozinha-fotos/${name}`}
                alt="Retrato memorial"
                fill
                sizes="(max-width: 768px) 85vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}