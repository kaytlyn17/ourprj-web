import ProjectCard from "@/components/projects/ProjectCard";

import type { Project } from "@/types/project";

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  );
}