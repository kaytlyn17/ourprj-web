import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-soc-home-lab",
    title: "Building a SOC Home Lab",
    excerpt:
      "Why I built a virtual security environment and how the major components fit together.",
    publishedAt: "2026-08-29",
    readingTime: "6 min read",
    tags: ["SOC", "Wazuh", "Networking"],
    sections: [
      {
        heading: "Why build a SOC lab?",
        paragraphs: [
          "Security concepts become much easier to understand when they can be observed in a working environment.",
          "A home lab provides a controlled place to experiment with endpoints, network segmentation, security monitoring and detection without depending on production infrastructure.",
        ],
      },
      {
        heading: "Core components",
        paragraphs: [
          "The environment uses virtualization to host multiple systems with pfSense controlling network traffic and Wazuh providing centralized security monitoring.",
          "Additional tools such as Suricata can provide network-level visibility alongside endpoint telemetry.",
        ],
      },
      {
        heading: "What the lab is for",
        paragraphs: [
          "The main goal is not simply to install security products. The lab is intended to provide a place to generate activity, observe telemetry, build detections and understand how different systems interact.",
        ],
      },
    ],
  },

  {
    slug: "server-components-vs-client-components",
    title: "Server Components vs Client Components",
    excerpt:
      "A practical mental model for deciding when a Next.js component actually needs to run on the client.",
    publishedAt: "2026-08-29",
    readingTime: "5 min read",
    tags: ["Next.js", "React", "Frontend"],
    sections: [
      {
        heading: "Server by default",
        paragraphs: [
          "In the Next.js App Router, components are Server Components by default.",
          "If a component only renders content and does not require browser-side state or events, it often does not need to become a Client Component.",
        ],
      },
      {
        heading: "When the client is needed",
        paragraphs: [
          "Client Components are useful when the browser must manage interactive state, event handlers or browser-only APIs.",
          "Examples include an expandable mobile menu, interactive form state or components using useState.",
        ],
      },
      {
        heading: "A useful rule",
        paragraphs: [
          "Start with a Server Component and move the smallest necessary interactive part to the client rather than marking an entire page as client-side.",
        ],
      },
    ],
  },
];