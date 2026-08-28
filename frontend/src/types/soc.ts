export type SocMetric = {
  label: string;
  value: string;
  description: string;
};

export type SocAlert = {
  id: string;
  title: string;
  severity: "low" | "medium" | "high" | "critical";
  source: string;
  host: string;
  timestamp: string;
};

export type Detection = {
  name: string;
  source: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  status: "Enabled" | "Disabled";
};