const timeline = [
  {
    year: "Now",
    title: "Building cybersecurity and software projects",
    description:
      "Developing SOC labs, infrastructure projects and web applications.",
  },
  {
    year: "2026",
    title: "SOC Lab",
    description:
      "Built a virtualized security environment using pfSense, Wazuh, Suricata and multiple endpoints.",
  },
  {
    year: "2025",
    title: "Cybersecurity learning",
    description:
      "Focused on networking, security fundamentals, programming and defensive security concepts.",
  },
];

export default function Timeline() {
  return (
    <section className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-sm text-zinc-500">
          TIMELINE
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
          Journey
        </h2>

        <div className="mt-10 space-y-8">
          {timeline.map((item) => (
            <div
              key={`${item.year}-${item.title}`}
              className="grid gap-3 border-l border-zinc-800 pl-6 sm:grid-cols-[120px_1fr]"
            >
              <p className="font-mono text-sm text-zinc-500">
                {item.year}
              </p>

              <div>
                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-2xl leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}