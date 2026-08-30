import Link from "next/link";

import type { ProjectSummary } from "@/types/project";
import { formatProjectStatus } from "@/lib/utils";

type ProjectCardProps = {
  project: ProjectSummary;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-600 hover:bg-zinc-900"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-xs text-zinc-500">
          {project.category}
        </p>

        <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
          {formatProjectStatus(project.status)}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-semibold text-white">
        {project.title}
      </h2>

      <p className="mt-3 flex-1 leading-7 text-zinc-400">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <p className="mt-6 text-sm text-zinc-500 transition group-hover:text-white">
        View project →
      </p>
    </Link>
  );
}