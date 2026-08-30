export type ProjectStatus =
  | "in_development"
  | "active"
  | "completed"
  | "archived";

export type ProjectSummary = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  category: string;
  status: ProjectStatus;
  technologies: string[];
};

export type ProjectDetail = ProjectSummary & {
  description: string;
  details: string[];
};

export type ProjectListResponse = {
  data: ProjectSummary[];
  count: number;
};

export type ProjectDetailResponse = {
  data: ProjectDetail;
};