import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/lib/api";
import { formatProjectStatus } from "@/lib/utils";


export const dynamic = "force-dynamic";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Link
          href="/projects"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to projects
        </Link>

        <div className="mt-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-sm text-zinc-500">
              {project.category}
            </p>

            <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
              {formatProjectStatus(project.status)}
            </span>
          </div>

          <h1 className="mt-5 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {project.description}
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-zinc-500">
            TECHNOLOGIES
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-white">
            Tech used
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-zinc-500">
            OVERVIEW
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-white">
            Project details
          </h2>

          <div className="mt-10 max-w-3xl space-y-5">
            {project.details.map((detail) => (
              <div
                key={detail}
                className="border-l border-zinc-700 pl-5 leading-7 text-zinc-400"
              >
                {detail}
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}