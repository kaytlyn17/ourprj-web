import type { SocAlert } from "@/types/soc";

type AlertCardProps = {
  alert: SocAlert;
};

const severityStyles = {
  low: "border-zinc-700 text-zinc-400",
  medium: "border-yellow-900/70 text-yellow-500",
  high: "border-orange-900/70 text-orange-500",
  critical: "border-red-900/70 text-red-500",
};

export default function AlertCard({
  alert,
}: AlertCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-zinc-600">
            {alert.id}
          </p>

          <h3 className="mt-2 font-semibold text-white">
            {alert.title}
          </h3>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs uppercase ${severityStyles[alert.severity]}`}
        >
          {alert.severity}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
        <span>
          Source: {alert.source}
        </span>

        <span>
          Host: {alert.host}
        </span>

        <span>
          Time: {alert.timestamp}
        </span>
      </div>
    </div>
  );
}