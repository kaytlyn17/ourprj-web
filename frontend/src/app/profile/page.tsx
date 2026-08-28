import About from "@/components/profile/About";
import Skills from "@/components/profile/Skills";
import TechStack from "@/components/profile/TechStack";
import Timeline from "@/components/profile/Timeline";

export default function ProfilePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-zinc-500">
            PROFILE
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            About me.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Cybersecurity, software development and infrastructure — learning
            by building systems and understanding how they work.
          </p>
        </div>
      </section>

      <About />
      <Skills />
      <TechStack />
      <Timeline />
    </>
  );
}