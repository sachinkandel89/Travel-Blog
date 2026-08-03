import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id, title, slug, excerpt, mainImage, destination, tripDuration, publishedAt
}`;

export default async function PostsPage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main className="min-h-screen pl-28 pr-6 md:pl-36 md:pr-10 pt-24 pb-24">
      <h1 className="font-[var(--font-display)] text-4xl md:text-5xl text-black/20 mb-12">
        Explore stories
      </h1>

      <p className="text-sm text-black/50 mb-5">Latest</p>

      {posts.length === 0 ? (
        <p className="text-black/50">No posts published yet.</p>
      ) : (
        <div className="flex gap-5 overflow-x-auto pb-6">
          {posts.map((post: any) => (
            <Link
              key={post._id}
              href={`/posts/${post.slug.current}`}
              className="group flex-shrink-0 w-60 transition-transform duration-300 hover:scale-[1.04]"
            >
              <div className="w-60 h-80 rounded-2xl overflow-hidden mb-3 bg-black/5 shadow-sm">
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).width(480).height(640).url()}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <p className="text-sm font-medium leading-snug">{post.title}</p>
              <p className="text-xs text-black/50 mt-1">
                {post.destination}
                {post.tripDuration ? ` · ${post.tripDuration}` : ""}
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
