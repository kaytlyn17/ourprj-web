import type { Detection } from "@/types/soc";

type DetectionTableProps = {
  detections: Detection[];
};

export default function DetectionTable({
  detections,
}: DetectionTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full min-w-170 text-left">
        <thead className="border-b border-zinc-800 bg-zinc-900/70">
          <tr className="text-sm text-zinc-500">
            <th className="px-5 py-4 font-medium">
              Detection
            </th>

            <th className="px-5 py-4 font-medium">
              Source
            </th>

            <th className="px-5 py-4 font-medium">
              Severity
            </th>

            <th className="px-5 py-4 font-medium">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {detections.map((detection) => (
            <tr
              key={`${detection.source}-${detection.name}`}
              className="border-b border-zinc-800 last:border-b-0"
            >
              <td className="px-5 py-4 text-zinc-200">
                {detection.name}
              </td>

              <td className="px-5 py-4 text-zinc-400">
                {detection.source}
              </td>

              <td className="px-5 py-4 text-zinc-400">
                {detection.severity}
              </td>

              <td className="px-5 py-4">
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  {detection.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}