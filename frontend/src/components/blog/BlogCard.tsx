import Link from "next/link";

import type { BlogPost } from "@/types/blog";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({
  post,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border-b border-zinc-800 py-8 first:pt-0"
    >
      <div className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500">
        <span>{post.publishedAt}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>

      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white transition group-hover:text-zinc-300">
        {post.title}
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
        {post.excerpt}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-900 px-2 py-1 text-xs text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}