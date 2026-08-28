"use client";

import {
  type SubmitEvent,
  useState,
} from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(
    event: SubmitEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"
    >
      <div>
        <label
          htmlFor="name"
          className="text-sm font-medium text-zinc-300"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-zinc-600"
          placeholder="Your name"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="email"
          className="text-sm font-medium text-zinc-300"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-zinc-600"
          placeholder="you@example.com"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="text-sm font-medium text-zinc-300"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full resize-none rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-zinc-600"
          placeholder="Write your message..."
        />
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
      >
        Send message
      </button>

      {submitted && (
        <p className="mt-5 text-sm leading-6 text-zinc-400">
          Frontend form submitted successfully. Backend delivery will be
          connected later.
        </p>
      )}
    </form>
  );
}