import Link from "next/link";

import type { Lab } from "@/types/lab";

type LabCardProps = {
  lab: Lab;
};

export default function LabCard({
  lab,
}: LabCardProps) {
  return (
    <Link
      href={`/labs/${lab.slug}`}
      className="group flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-600 hover:bg-zinc-900"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs text-zinc-500">
          {lab.category}
        </p>

        <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
          {lab.difficulty}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-semibold text-white">
        {lab.title}
      </h2>

      <p className="mt-3 flex-1 leading-7 text-zinc-400">
        {lab.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {lab.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <p className="mt-6 text-sm text-zinc-500 transition group-hover:text-white">
        View lab →
      </p>
    </Link>
  );
}