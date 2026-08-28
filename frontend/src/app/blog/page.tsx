import type { Metadata } from "next";

import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/content/blog/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes and articles about cybersecurity, software and infrastructure.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="max-w-3xl">
        <p className="font-mono text-sm text-zinc-500">
          BLOG
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Notes and ideas.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Writing about cybersecurity, software development, infrastructure
          and things I learn while building.
        </p>
      </div>

      <div className="mt-16 max-w-4xl">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.slug}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}