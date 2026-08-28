import type { Metadata } from "next";

import { docs } from "@/content/docs/data";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Architecture, deployment, security and API documentation for OurPrj.",
};

export default function DocsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-zinc-500">
            DOCUMENTATION
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            How it works.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Technical notes covering system architecture, deployment,
            security decisions and API design.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {docs.map((doc) => (
              <article
                key={doc.id}
                id={doc.id}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6"
              >
                <p className="font-mono text-xs text-zinc-600">
                  {doc.id.toUpperCase()}
                </p>

                <h2 className="mt-3 text-xl font-semibold text-white">
                  {doc.title}
                </h2>

                <p className="mt-3 leading-7 text-zinc-400">
                  {doc.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {doc.topics.map((topic) => (
                    <li
                      key={topic}
                      className="text-sm text-zinc-500"
                    >
                      — {topic}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}