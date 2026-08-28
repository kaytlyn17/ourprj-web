const skills = [
  "Security Monitoring",
  "Network Security",
  "SOC Operations",
  "Incident Analysis",
  "Linux",
  "Networking",
  "Web Development",
  "Python",
];

export default function Skills() {
  return (
    <section className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-sm text-zinc-500">
          SKILLS
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
          Areas I work with
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}