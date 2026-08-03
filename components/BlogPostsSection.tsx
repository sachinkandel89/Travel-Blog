"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  destination?: string;
  tripDuration?: string;
  publishedAt?: string;
  featured?: boolean;
  categories?: Array<{ title?: string; slug?: { current: string } }>;
}

const CAPSULES = ["Latest", "Popular", "Travel", "Lifestyle"] as const;
type Capsule = (typeof CAPSULES)[number];

export default function BlogPostsSection({ posts }: { posts: Post[] }) {
  const [activeCapsule, setActiveCapsule] = useState<Capsule>("Latest");

  const filteredPosts = useMemo(() => {
    if (!posts || posts.length === 0) return [];

    switch (activeCapsule) {
      case "Popular":
        const popular = posts.filter((p) => p.featured);
        return popular.length > 0 ? popular : posts;

      case "Travel":
        const travel = posts.filter(
          (p) =>
            p.destination ||
            p.categories?.some(
              (c) =>
                c.title?.toLowerCase().includes("travel") ||
                c.slug?.current?.toLowerCase().includes("travel")
            )
        );
        return travel.length > 0 ? travel : posts;

      case "Lifestyle":
        const lifestyle = posts.filter(
          (p) =>
            !p.destination ||
            p.categories?.some(
              (c) =>
                c.title?.toLowerCase().includes("lifestyle") ||
                c.slug?.current?.toLowerCase().includes("lifestyle")
            )
        );
        return lifestyle.length > 0 ? lifestyle : posts;

      case "Latest":
      default:
        return posts;
    }
  }, [posts, activeCapsule]);

  return (
    <section className="w-full">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 md:mb-7">
        {CAPSULES.map((capsule) => {
          const isActive = activeCapsule === capsule;
          return (
            <button
              key={capsule}
              onClick={() => setActiveCapsule(capsule)}
              className={`
                px-4 sm:px-5 py-1.5 text-sm sm:text-xs font-medium tracking-wider uppercase rounded-full
                transition-colors duration-200 cursor-pointer select-none
                ${isActive
                  ? "bg-[#22201c] text-[#FAF6EE]"
                  : "bg-transparent text-[#555048] hover:text-[#22201c] border border-[#22201c]/20"
                }
              `}
            >{capsule}</button>
          );
        })}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="py-16 text-center text-black/50">
          <p className="text-base">No blog posts found in this category.</p>
        </div>
      ) : (
        <div
          key={activeCapsule}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {filteredPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blogs/${post.slug.current}`}
              className="group flex flex-col p-0 bg-transparent"
            >
              {/* Sharp Image Container - No padding, no border radius */}
              <div className="w-full aspect-[4/3] rounded-none overflow-hidden mb-4 bg-black/5 relative">
                {post.mainImage ? (
                  <img
                    src={urlFor(post.mainImage).width(640).height(480).url()}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#FAF6EE] text-black/30 text-xs uppercase tracking-widest">
                    No Image
                  </div>
                )}
                {post.destination && (
                  <span className="absolute top-3 left-3 bg-[#22201c] text-white text-[9px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-none">
                    {post.destination}
                  </span>
                )}
              </div>

              {/* Title & Content */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-[var(--font-display)] text-lg sm:text-xl font-medium leading-snug text-[#14140F] group-hover:text-[#8B6E5C] transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-xs sm:text-sm text-[#555048] mt-1.5 leading-relaxed font-sans line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
