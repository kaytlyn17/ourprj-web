"use client";

import {
  type SubmitEvent,
  useState,
} from "react";

import { submitContact } from "@/lib/client-api";


type SubmitState =
  | "idle"
  | "submitting"
  | "success"
  | "error";


export default function ContactForm() {
  const [submitState, setSubmitState] =
    useState<SubmitState>("idle");

  async function handleSubmit(
    event: SubmitEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    setSubmitState("submitting");

    try {
      await submitContact({
        name: String(
          formData.get("name") ?? ""
        ),
        email: String(
          formData.get("email") ?? ""
        ),
        message: String(
          formData.get("message") ?? ""
        ),
        website: String(
          formData.get("website") ?? ""
        ),
      });

      form.reset();

      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
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

      <div
        className="absolute left-[-10000px]"
        aria-hidden="true"
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="mt-6 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState === "submitting"
          ? "Sending..."
          : "Send message"}
      </button>

      {submitState === "success" && (
        <p className="mt-5 text-sm text-zinc-400">
          Your message was received successfully.
        </p>
      )}

      {submitState === "error" && (
        <p className="mt-5 text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}