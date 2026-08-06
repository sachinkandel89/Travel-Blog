"use client";

import { useState, useMemo } from "react";

type DriveImage = {
  id: string;
  title: string;
  uploadedAt: string;
  url: string;
};

type ImagesData = Record<string, DriveImage[]>;

export default function PhotographyGallery({
  images,
  categories,
}: {
  images: ImagesData;
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightbox, setLightbox] = useState<DriveImage | null>(null);

  const capsules = ["All", ...categories];

  const filtered = useMemo(() => {
    if (activeCategory === "All") {
      return Object.values(images).flat();
    }
    return images[activeCategory] ?? [];
  }, [images, activeCategory]);

  return (
    <>
      {/* Category capsules */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
        {capsules.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 sm:px-5 py-1.5 text-sm sm:text-xs font-medium tracking-wider uppercase rounded-full
                transition-colors duration-200 cursor-pointer select-none
                ${
                  isActive
                    ? "bg-[#22201c] text-[#FAF6EE]"
                    : "bg-transparent text-[#555048] hover:text-[#22201c] border border-[#22201c]/20"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="py-16 text-center text-black/50">No photos in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((img) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setLightbox(img)}
              className="group relative aspect-[4/3] overflow-hidden bg-black/5 focus:outline-none"
            >
              <img
                src={img.url}
                alt={img.title.replace(/\.[^/.]+$/, "")}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                {img.title.replace(/\.[^/.]+$/, "")}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 z-[110] text-white text-4xl leading-none hover:text-white/70"
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={lightbox.url}
            alt={lightbox.title}
            className="max-h-[90vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}