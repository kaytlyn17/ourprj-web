export type Lab = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  technologies: string[];
  objective: string;
  environment: string[];
  steps: string[];
  result: string;
  learnings: string[];
};