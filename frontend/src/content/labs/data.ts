import type { Lab } from "@/types/lab";

export const labs: Lab[] = [
  {
    slug: "ssh-brute-force-detection",
    title: "SSH Brute-Force Detection",
    summary:
      "Detect repeated SSH authentication failures and observe how the activity appears in a SOC environment.",
    category: "Detection Engineering",
    difficulty: "Intermediate",
    technologies: ["Wazuh", "Linux", "SSH"],
    objective:
      "Generate repeated SSH authentication failures and verify that the activity can be detected and investigated through centralized monitoring.",
    environment: [
      "Linux server with SSH enabled",
      "Wazuh agent",
      "Wazuh manager",
      "Separate test system",
    ],
    steps: [
      "Prepare the monitored Linux endpoint.",
      "Verify that SSH authentication logs are collected.",
      "Generate repeated failed authentication attempts.",
      "Observe the resulting security events.",
      "Review the source, affected host and detection rule.",
    ],
    result:
      "The repeated authentication failures were visible in centralized monitoring and could be correlated as suspicious SSH activity.",
    learnings: [
      "Authentication logs are useful for detecting brute-force behavior.",
      "Individual failures may be normal, while repeated failures become more meaningful when correlated.",
      "Detection logic should consider both event frequency and source information.",
    ],
  },

  {
    slug: "network-segmentation",
    title: "Network Segmentation with VLANs",
    summary:
      "Separate management and lab systems using VLANs and firewall policy.",
    category: "Network Security",
    difficulty: "Intermediate",
    technologies: ["pfSense", "VLAN", "Proxmox"],
    objective:
      "Create separate network zones and restrict management access to approved systems.",
    environment: [
      "Proxmox",
      "pfSense",
      "Managed network interfaces",
      "Virtual machines in multiple VLANs",
    ],
    steps: [
      "Define the required network zones.",
      "Create VLAN interfaces.",
      "Assign systems to their appropriate VLANs.",
      "Create firewall rules between the zones.",
      "Verify allowed and denied traffic.",
    ],
    result:
      "Management traffic was separated from other lab systems and inter-VLAN communication could be controlled through firewall policy.",
    learnings: [
      "Segmentation reduces unnecessary trust between systems.",
      "VLANs separate broadcast domains but firewall policy is still required for access control.",
      "Management networks should have stricter access than ordinary workstation networks.",
    ],
  },
];