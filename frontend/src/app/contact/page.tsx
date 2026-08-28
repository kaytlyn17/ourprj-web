import type { Metadata } from "next";

import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch regarding projects, cybersecurity or technical collaboration.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-mono text-sm text-zinc-500">
            CONTACT
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Get in touch.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Have a question about a project, lab or something technical?
            Send a message here.
          </p>

          <p className="mt-8 text-sm leading-6 text-zinc-600">
            The contact backend is not connected yet. This form currently
            demonstrates the frontend interaction only.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}