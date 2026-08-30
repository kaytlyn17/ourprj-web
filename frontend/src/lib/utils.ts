import type { ProjectStatus } from "@/types/project";


const projectStatusLabels: Record<ProjectStatus, string> = {
  in_development: "In Development",
  active: "Active",
  completed: "Completed",
  archived: "Archived",
};


export function formatProjectStatus(
  status: ProjectStatus
): string {
  return projectStatusLabels[status];
}