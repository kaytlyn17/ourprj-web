import type { Metadata } from "next";

import LabCard from "@/components/labs/LabCard";
import { labs } from "@/content/labs/data";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "Hands-on cybersecurity, networking and infrastructure experiments.",
};

export default function LabsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="max-w-3xl">
        <p className="font-mono text-sm text-zinc-500">
          LABS
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Learn by experimenting.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Hands-on experiments documenting security concepts, configurations,
          observations and lessons learned.
        </p>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {labs.map((lab) => (
          <LabCard
            key={lab.slug}
            lab={lab}
          />
        ))}
      </div>
    </div>
  );
}