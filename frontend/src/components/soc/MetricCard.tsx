import type { SocMetric } from "@/types/soc";

type MetricCardProps = {
  metric: SocMetric;
};

export default function MetricCard({
  metric,
}: MetricCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
      <p className="text-sm text-zinc-500">
        {metric.label}
      </p>

      <p className="mt-3 text-4xl font-semibold tracking-tight text-white">
        {metric.value}
      </p>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        {metric.description}
      </p>
    </div>
  );
}