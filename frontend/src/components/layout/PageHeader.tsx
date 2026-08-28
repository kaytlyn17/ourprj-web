import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="max-w-3xl">
        <p className="font-mono text-sm text-zinc-500">
          {eyebrow}
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {description}
        </p>

        {children}
      </div>
    </section>
  );
}