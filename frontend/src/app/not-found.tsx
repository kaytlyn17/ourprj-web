import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-zinc-500">
          404 · NOT FOUND
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          This page doesn&apos;t exist.
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          The page may have been moved, removed or the URL may be incorrect.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Go home
          </Link>

          <Link
            href="/projects"
            className="rounded-lg border border-zinc-700 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500"
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}