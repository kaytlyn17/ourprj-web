import type {
  ProjectDetail,
  ProjectDetailResponse,
  ProjectListResponse,
  ProjectSummary,
} from "@/types/project";


const API_BASE_URL = process.env.API_BASE_URL;


if (!API_BASE_URL) {
  throw new Error(
    "API_BASE_URL environment variable is not configured."
  );
}


export async function getProjects(): Promise<ProjectSummary[]> {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/projects`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch projects: ${response.status}`
    );
  }

  const result: ProjectListResponse =
    await response.json();

  return result.data;
}


export async function getProjectBySlug(
  slug: string
): Promise<ProjectDetail | null> {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/projects/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch project: ${response.status}`
    );
  }

  const result: ProjectDetailResponse =
    await response.json();

  return result.data;
}