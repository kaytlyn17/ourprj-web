import type { Metadata } from "next";

import AlertCard from "@/components/soc/AlertCard";
import ArchitectureDiagram from "@/components/soc/ArchitectureDiagram";
import DetectionTable from "@/components/soc/DetectionTable";
import MetricCard from "@/components/soc/MetricCard";
import PageHeader from "@/components/layout/PageHeader";

import {
  detections,
  recentAlerts,
  socMetrics,
} from "@/content/soc/data";

export const metadata: Metadata = {
  title: "SOC Lab",
  description:
    "SOC lab architecture, security monitoring, detections and defensive security experiments.",
};

export default function SocPage() {
  return (
    <>
      <PageHeader
        eyebrow="SECURITY OPERATIONS"
        title="SOC Home Lab."
        description="A virtualized environment for learning security monitoring, network visibility, detection engineering and incident analysis."
      >
        <div className="mt-8 inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 font-mono text-xs text-zinc-500">
          DEMO DATA · LIVE INTEGRATION COMING LATER
        </div>
      </PageHeader>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-zinc-500">
            OVERVIEW
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            Lab snapshot
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {socMetrics.map((metric) => (
              <MetricCard
                key={metric.label}
                metric={metric}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-zinc-500">
            ARCHITECTURE
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            Security environment
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
            A simplified view of the technologies used across the lab.
          </p>

          <div className="mt-10">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-zinc-500">
            ALERTS
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            Recent security events
          </h2>

          <div className="mt-10 grid gap-5">
            {recentAlerts.map((alert) => (
              <AlertCard
                key={alert.id}
                alert={alert}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-zinc-500">
            DETECTIONS
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            Detection coverage
          </h2>

          <div className="mt-10">
            <DetectionTable detections={detections} />
          </div>
        </div>
      </section>
    </>
  );
}