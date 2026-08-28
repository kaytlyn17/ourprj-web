import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import { labs } from "@/content/labs/data";

type LabPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return labs.map((lab) => ({
    slug: lab.slug,
  }));
}

export async function generateMetadata({
  params,
}: LabPageProps): Promise<Metadata> {
  const { slug } = await params;

  const lab = labs.find((lab) => lab.slug === slug);

  if (!lab) {
    return {
      title: "Lab Not Found",
    };
  }

  return {
    title: lab.title,
    description: lab.summary,
  };
}

export default async function LabPage({
  params,
}: LabPageProps) {
  const { slug } = await params;

  const lab = labs.find(
    (lab) => lab.slug === slug
  );

  if (!lab) {
    notFound();
  }

  return (
    <article>
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Link
          href="/labs"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to labs
        </Link>

        <div className="mt-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-sm text-zinc-500">
              {lab.category}
            </p>

            <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
              {lab.difficulty}
            </span>
          </div>

          <h1 className="mt-5 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            {lab.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {lab.summary}
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-zinc-500">
            OBJECTIVE
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-white">
            What are we testing?
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
            {lab.objective}
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-zinc-500">
            ENVIRONMENT
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-white">
            Lab setup
          </h2>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {lab.environment.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-5 py-4 text-zinc-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-zinc-500">
            PROCEDURE
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-white">
            Steps
          </h2>

          <div className="mt-10 max-w-3xl space-y-5">
            {lab.steps.map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[40px_1fr] gap-4"
              >
                <span className="font-mono text-sm text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="leading-7 text-zinc-400">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-zinc-500">
            RESULT
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-white">
            Outcome
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
            {lab.result}
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-zinc-500">
            LEARNINGS
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-white">
            What I learned
          </h2>

          <div className="mt-8 max-w-3xl space-y-4">
            {lab.learnings.map((learning) => (
              <p
                key={learning}
                className="border-l border-zinc-700 pl-5 leading-7 text-zinc-400"
              >
                {learning}
              </p>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}