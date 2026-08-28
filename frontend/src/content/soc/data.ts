import type {
  Detection,
  SocAlert,
  SocMetric,
} from "@/types/soc";

export const socMetrics: SocMetric[] = [
  {
    label: "Monitored Systems",
    value: "4",
    description: "Demo Windows and Linux endpoints",
  },
  {
    label: "Alerts / 24h",
    value: "18",
    description: "Demo security events",
  },
  {
    label: "High Severity",
    value: "2",
    description: "Demo high-severity alerts",
  },
  {
    label: "Detection Sources",
    value: "2",
    description: "Wazuh and Suricata",
  },
];

export const recentAlerts: SocAlert[] = [
  {
    id: "ALT-001",
    title: "Multiple failed SSH authentication attempts",
    severity: "high",
    source: "Wazuh",
    host: "linux-server",
    timestamp: "10:42",
  },
  {
    id: "ALT-002",
    title: "Possible network scanning activity",
    severity: "medium",
    source: "Suricata",
    host: "network-sensor",
    timestamp: "09:18",
  },
  {
    id: "ALT-003",
    title: "Repeated Windows logon failures",
    severity: "medium",
    source: "Wazuh",
    host: "windows-client",
    timestamp: "08:51",
  },
];

export const detections: Detection[] = [
  {
    name: "SSH brute-force activity",
    source: "Wazuh",
    severity: "High",
    status: "Enabled",
  },
  {
    name: "Network scanning",
    source: "Suricata",
    severity: "Medium",
    status: "Enabled",
  },
  {
    name: "Windows authentication failures",
    source: "Wazuh",
    severity: "Medium",
    status: "Enabled",
  },
  {
    name: "Suspicious network traffic",
    source: "Suricata",
    severity: "High",
    status: "Enabled",
  },
];