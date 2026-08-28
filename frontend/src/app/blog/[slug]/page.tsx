import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts } from "@/content/blog/data";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find(
    (post) => post.slug === slug
  );

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const post = blogPosts.find(
    (post) => post.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <article>
      <header className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <Link
          href="/blog"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to blog
        </Link>

        <div className="mt-10">
          <div className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500">
            <span>{post.publishedAt}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="mt-5 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-zinc-900 px-3 py-1 text-sm text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="space-y-16">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  {section.heading}
                </h2>

                <div className="mt-6 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-lg leading-8 text-zinc-400"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}