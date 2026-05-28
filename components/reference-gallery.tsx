"use client";

import { useLightbox } from "./lightbox-context";
import { MediaCard } from "./media-card";

type GalleryImage = {
  src: string;
  alt: string;
};

type ReferenceGalleryProps = {
  images: GalleryImage[];
};

export function ReferenceGallery({ images }: ReferenceGalleryProps) {
  const { open } = useLightbox();

  if (images.length === 0) return null;

  const firstImage = images[0];
  const remainingImages = images.slice(1);

  return (
    <div className="space-y-5">
      {/* One big photo */}
      <MediaCard
        src={firstImage.src}
        alt={firstImage.alt}
        priority={true}
        onClick={() => open(images, 0)}
        className="h-[28rem] md:h-[40rem] w-full"
      />

      {/* 3 per row */}
      {remainingImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {remainingImages.map((image, index) => (
            <MediaCard
              key={image.src}
              src={image.src}
              alt={image.alt}
              onClick={() => open(images, index + 1)}
              className="h-48 md:h-64 w-full"
            />
          ))}
        </div>
      )}
    </div>
  );
}
