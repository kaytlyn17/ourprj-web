export const docs = [
  {
    id: "architecture",
    title: "Architecture",
    description:
      "How the frontend, backend, database, reverse proxy and integrations fit together.",
    topics: [
      "System overview",
      "Frontend and backend boundaries",
      "Request flow",
      "SOC integrations",
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    description:
      "How the application will be built, containerized and deployed.",
    topics: [
      "Ubuntu server",
      "Docker Compose",
      "Nginx",
      "Environment configuration",
    ],
  },
  {
    id: "security",
    title: "Security",
    description:
      "Security decisions and controls used throughout the application.",
    topics: [
      "Secrets management",
      "Input validation",
      "Authentication",
      "Application logging",
    ],
  },
  {
    id: "api",
    title: "API",
    description:
      "Public contracts between the Next.js frontend and FastAPI backend.",
    topics: [
      "API versioning",
      "Projects",
      "SOC metrics",
      "Contact endpoint",
    ],
  },
];