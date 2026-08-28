import ProjectGrid from "@/components/projects/ProjectGrid";

import { projects } from "@/content/projects/data";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="max-w-3xl">
        <p className="font-mono text-sm text-zinc-500">
          PROJECTS
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Things I&apos;ve built.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Software, cybersecurity and infrastructure projects built through
          experimentation, learning and hands-on work.
        </p>
      </div>

      <div className="mt-16">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}