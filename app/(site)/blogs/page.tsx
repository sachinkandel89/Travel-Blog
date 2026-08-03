import { client } from "@/sanity/lib/client";
import BlogPostsSection from "@/components/BlogPostsSection";

export const revalidate = 60;

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id, title, slug, excerpt, mainImage, destination, tripDuration, publishedAt, featured,
  categories[]->{title, slug}
}`;

export default async function PostsPage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main className="min-h-screen px-6 md:pl-36 md:pr-10 pt-28 pb-24 max-w-7xl">
      <BlogPostsSection posts={posts} />
    </main>
  );
}