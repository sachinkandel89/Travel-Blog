import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const HERO_QUERY = `*[_type == "post"] | order(featured desc, publishedAt desc)[0...1]{
  _id, title, slug, excerpt, mainImage, destination
}`;

export default async function HomePage() {
  const posts = await client.fetch(HERO_QUERY);
  const featured = posts?.[0];

  const imageUrl = featured?.mainImage
    ? urlFor(featured.mainImage).width(1200).height(1400).url()
    : "https://i.pinimg.com/1200x/6f/22/14/6f22140232ff4713d04dea85e24cfc08.jpg";

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#F3EFE7]">
      {/* ---------- DESKTOP LAYOUT ---------- */}
      <div className="hidden md:block relative min-h-screen">
        {/* Split background */}
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
            <img
              src={imageUrl}
              alt={featured?.title ?? "Featured story"}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
          </div>
        </div>

        {/* Headline — split-color with clip-path */}
        <div className="pointer-events-none absolute inset-0 z-10">
          {/* Left half (dark text) */}
          <div
            className="absolute left-1/2 top-[38%] flex w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6 text-center"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          >
            <h1 className="font-[var(--font-display)] text-[2.6rem] font-medium italic leading-[1.08] tracking-tight text-[#14140F] lg:text-[3.6rem]">
              Discover the beauty
              <br />
              <span className="not-italic">of the world around</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-[#4a4740]">
              Escape the ordinary and find inspiration in the most breathtaking
              corners of the globe. Real stories from the road, tailored to your
              rhythm and spirit.
            </p>
          </div>

          {/* Right half (white text) */}
          <div
            className="absolute left-1/2 top-[38%] flex w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6 text-center"
            style={{ clipPath: "inset(0 0 0 50%)" }}
          >
            <h1 className="font-[var(--font-display)] text-[2.6rem] font-medium italic leading-[1.08] tracking-tight text-white lg:text-[3.6rem]">
              Discover the beauty
              <br />
              <span className="not-italic">of the world around</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/90">
              Escape the ordinary and find inspiration in the most breathtaking
              corners of the globe. Real stories from the road, tailored to your
              rhythm and spirit.
            </p>
          </div>
        </div>

        {/* Featured post card — bottom right */}
        {featured && (
          <div className="absolute bottom-12 right-8 z-10 flex w-[340px] gap-3.5 rounded-2xl bg-[#F3EFE7]/95 p-4 shadow-2xl shadow-black/20 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 lg:right-14">
            {featured.mainImage && (
              <img
                src={urlFor(featured.mainImage).width(200).height(240).url()}
                alt={featured.title}
                className="h-32 w-28 flex-shrink-0 rounded-xl object-cover"
              />
            )}
            <div className="flex flex-col justify-between py-0.5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#a3947c]">
                  {featured.destination ?? "Latest Post"}
                </p>
                <h3 className="mt-1 font-[var(--font-display)] text-[15px] font-medium leading-snug text-[#14140F] line-clamp-2">
                  {featured.title}
                </h3>
                {featured.excerpt && (
                  <p className="mt-1 text-[12px] leading-snug text-[#6f6a5e] line-clamp-2">
                    {featured.excerpt}
                  </p>
                )}
              </div>
              <Link
                href={`/blogs/${featured.slug.current}`}
                className="mt-2 w-fit rounded-full bg-[#14140F] px-4 py-2 text-[11px] font-medium text-white hover:bg-black/80 transition-colors"
              >
                Read more
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ---------- MOBILE LAYOUT ---------- */}
      <div className="flex flex-col items-center px-6 py-24 text-center md:hidden">
        <div className="w-full overflow-hidden rounded-2xl">
          <img
            src={imageUrl}
            alt={featured?.title ?? "Featured story"}
            className="h-56 w-full object-cover"
          />
        </div>

        <h1 className="mt-8 font-[var(--font-display)] text-[2rem] font-medium italic leading-[1.1] tracking-tight text-[#14140F]">
          Discover the beauty
          <br />
          <span className="not-italic">of the world around</span>
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-[14px] leading-relaxed text-[#4a4740]">
          Escape the ordinary and find inspiration in the most breathtaking
          corners of the globe. Real stories from the road, tailored to your
          rhythm and spirit.
        </p>

        {featured && (
          <div className="mt-8 flex w-full max-w-sm gap-3.5 rounded-2xl bg-[#F3EFE7] p-4 text-left shadow-lg shadow-black/10">
            {featured.mainImage && (
              <img
                src={urlFor(featured.mainImage).width(160).height(160).url()}
                alt={featured.title}
                className="h-24 w-24 flex-shrink-0 rounded-xl object-cover"
              />
            )}
            <div className="flex flex-col justify-between py-0.5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#a3947c]">
                  {featured.destination ?? "Latest Post"}
                </p>
                <h3 className="mt-1 font-[var(--font-display)] text-[14px] font-medium leading-snug text-[#14140F] line-clamp-2">
                  {featured.title}
                </h3>
              </div>
              <Link
                href={`/blogs/${featured.slug.current}`}
                className="mt-2 w-fit rounded-full bg-[#14140F] px-3.5 py-1.5 text-[10px] font-medium text-white"
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
