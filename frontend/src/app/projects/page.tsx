import ProjectGrid from "@/components/projects/ProjectGrid";
import PageHeader from "@/components/layout/PageHeader";

import { projects } from "@/content/projects/data";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="PROJECTS"
        title="Things I've built."
        description="Software, cybersecurity and infrastructure projects built through experimentation, learning and hands-on work."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ProjectGrid projects={projects} />
      </section>
    </>
  );
}