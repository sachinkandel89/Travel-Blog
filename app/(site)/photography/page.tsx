import fs from "fs";
import path from "path";
import PhotographyGallery from "../../../components/PhotographyGallery";

export const revalidate = 60; // optional – useful if you regenerate JSON often

type DriveImage = {
  id: string;
  title: string;
  uploadedAt: string;
  url: string;
};

type ImagesData = Record<string, DriveImage[]>;

function getImages(): ImagesData {
  const filePath = path.join(process.cwd(), "public", "images.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export default function PhotographyPage() {
  const images = getImages();
  const categories = Object.keys(images);

  return (
    <main className="min-h-screen w-full bg-[#F3EFE7] text-[#22201c]">
      <div className="relative mx-auto min-h-screen w-full max-w-7xl px-6 py-28 md:pl-36 md:pr-10 lg:pl-40">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a3947c] mb-3">
            Photography
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-tight">
            Sajha Moments
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#4f493f]">
            A collection of places, people, and quiet moments — from the streets
            of Kathmandu to the trails of the Himalayas.
          </p>
        </div>

        <PhotographyGallery images={images} categories={categories} />
      </div>
    </main>
  );
}