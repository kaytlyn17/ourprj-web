import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          ourprj
        </Link>

        <div className="flex flex-wrap gap-5 text-sm text-zinc-400">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <Link href="/profile" className="transition hover:text-white">
            Profile
          </Link>

          <Link href="/projects" className="transition hover:text-white">
            Projects
          </Link>

          <Link href="/soc" className="transition hover:text-white">
            SOC
          </Link>

          <Link href="/labs" className="transition hover:text-white">
            Labs
          </Link>

          <Link href="/blog" className="transition hover:text-white">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}