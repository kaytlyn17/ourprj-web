const technologies = [
  {
    category: "Frontend",
    items: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Python", "SQLAlchemy"],
  },
  {
    category: "Infrastructure",
    items: ["Linux", "Docker", "Nginx", "Proxmox"],
  },
  {
    category: "Security",
    items: ["Wazuh", "Suricata", "pfSense"],
  },
];

export default function TechStack() {
  return (
    <section className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-sm text-zinc-500">
          TECHNOLOGY
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
          Tech stack
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology) => (
            <div
              key={technology.category}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <h3 className="font-semibold text-white">
                {technology.category}
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {technology.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}