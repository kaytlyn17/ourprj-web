import Link from "next/link";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "SOC",
    href: "/soc",
  },
  {
    label: "Labs",
    href: "/labs",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Docs",
    href: "/docs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

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

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}