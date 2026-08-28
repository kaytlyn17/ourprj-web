export default function About() {
  return (
    <section className="border-t border-zinc-800">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-sm text-zinc-500">
            ABOUT
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            Who I am
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-zinc-400">
          <p>
            I&apos;m interested in cybersecurity, software development and
            infrastructure, with a focus on understanding how systems are
            designed, operated and secured.
          </p>

          <p>
            This website documents the projects, labs and experiments I build
            while learning about defensive security, networking and modern
            application development.
          </p>
        </div>
      </div>
    </section>
  );
}