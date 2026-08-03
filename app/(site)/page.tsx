import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const HERO_QUERY = `*[_type == "post"] | order(featured desc, publishedAt desc)[0...1]{
  _id, title, slug, excerpt, mainImage, destination
}`;

export default async function HomePage() {
  const posts = await client.fetch(HERO_QUERY);
  const featured = posts?.[0];

  return (
    <main className="relative min-h-screen flex flex-col md:flex-row">
      {/* Centered headline + paragraph that span both halves */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-8">
        <h1
          className="font-[var(--font-display)] text-4xl md:text-5xl leading-tight text-center max-w-2xl mb-6"
          style={{
            background: "linear-gradient(to right, #000 50%, #fff 50%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Discover the beauty of the world around
        </h1>

        <p
          className="text-sm leading-relaxed text-center max-w-md"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(255,255,255,0.7) 50%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Escape the ordinary and find inspiration in the most breathtaking
          corners of the globe. Real stories from the road, tailored to your
          rhythm and spirit.
        </p>
      </div>

      {/* Left side – empty now, just keeps the layout split */}
      <div className="w-full md:w-1/2" />

      <div className="relative w-full md:w-1/2 min-h-[60vh] md:min-h-screen">
        {featured?.mainImage ? (
          <img
            src={urlFor(featured.mainImage).width(1200).height(1400).url()}
            alt={featured.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-black/10" />
        )}

        {featured && (
          <div className="absolute bottom-8 right-6 md:right-10 bg-[#F3EFE7] rounded-2xl p-4 w-64 shadow-xl flex gap-3">
            {featured.mainImage && (
              <img
                src={urlFor(featured.mainImage).width(160).height(160).url()}
                alt={featured.title}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
            )}
            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-wide text-black/50 mb-1">
                {featured.destination ?? "Featured story"}
              </p>
              <p className="text-sm font-medium leading-snug mb-2 line-clamp-2">
                {featured.title}
              </p>
              <Link
                href={`/posts/${featured.slug.current}`}
                className="text-xs bg-[#14140F] text-white rounded-full px-3 py-1.5 w-fit hover:bg-black/80 transition-colors"
              >
                Read more
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
