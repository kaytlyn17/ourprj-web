import ProjectGrid from "@/components/projects/ProjectGrid";
import PageHeader from "@/components/layout/PageHeader";

import { getProjects } from "@/lib/api";

export default async function ProjectsPage() {
  const projects = await getProjects();

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