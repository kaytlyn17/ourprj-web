import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ourprj-web",
    title: "OurPrj Web",
    summary:
      "A personal platform for projects, cybersecurity labs and technical documentation.",
    description:
      "A full-stack web project built to document technical work, cybersecurity experiments and infrastructure projects.",
    category: "Web Development",
    status: "In Development",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
    ],
    details: [
      "Built with the Next.js App Router and TypeScript.",
      "Designed with a separate FastAPI backend and PostgreSQL database.",
      "Planned for containerized deployment using Docker Compose and Nginx.",
      "Will integrate application logging with the SOC environment.",
    ],
  },

  {
    slug: "soc-home-lab",
    title: "SOC Home Lab",
    summary:
      "A virtualized security environment for monitoring, detection and defensive security experiments.",
    description:
      "A security lab designed to simulate parts of an enterprise environment and provide hands-on experience with monitoring, network security and detection engineering.",
    category: "Cybersecurity",
    status: "Active",
    technologies: [
      "Wazuh",
      "Suricata",
      "pfSense",
      "Proxmox",
      "Linux",
      "Windows",
    ],
    details: [
      "Virtualized infrastructure used to simulate multiple systems and security zones.",
      "Centralized security monitoring using Wazuh.",
      "Network visibility and IDS capabilities using Suricata.",
      "Firewalling and network segmentation using pfSense.",
    ],
  },
];