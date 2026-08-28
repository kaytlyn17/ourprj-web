import Link from "next/link";

const areas = [
  {
    title: "Profile",
    description:
      "Background, skills, technologies and professional journey.",
    href: "/profile",
  },
  {
    title: "Projects",
    description:
      "Software, infrastructure and cybersecurity projects I have built.",
    href: "/projects",
  },
  {
    title: "SOC Lab",
    description:
      "Detection engineering, architecture, monitoring and security experiments.",
    href: "/soc",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-sm text-zinc-500">
            CYBERSECURITY · SOFTWARE · INFRASTRUCTURE
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building systems.
            <br />
            Understanding security.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            A personal space for documenting projects, cybersecurity labs,
            SOC experiments and the systems behind them.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              View Projects
            </Link>

            <Link
              href="/profile"
              className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10">
            <p className="font-mono text-sm text-zinc-500">
              EXPLORE
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              What&apos;s inside
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-600 hover:bg-zinc-900"
              >
                <h3 className="text-lg font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {area.description}
                </p>

                <p className="mt-6 text-sm text-zinc-500 transition group-hover:text-white">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}