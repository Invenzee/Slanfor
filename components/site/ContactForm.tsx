"use client";

import { useActionState } from "react";
import SpecularButton from "@/components/react-bits/SpecularButton";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { pillars } from "@/lib/services";

const initial: EnquiryState = { status: "idle", message: "" };

export function ContactForm({
  idPrefix = "enquiry",
  compact = false,
}: {
  idPrefix?: string;
  compact?: boolean;
}) {
  const [state, action, pending] = useActionState(submitEnquiry, initial);
  const fieldId = (name: string) => `${idPrefix}-${name}`;

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-white/10 bg-panel p-6" role="status">
        <p className="font-display text-2xl tracking-tight">Message checked.</p>
        <p className="mt-3 text-sm leading-6 text-ink/75">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4" noValidate>
      {compact ? null : (
        <p className="text-sm leading-6 text-ink/70">
          The form checks what you send. It does not email anyone until an inbox is connected.
        </p>
      )}
      {state.status === "error" ? (
        <p className="text-sm text-sky" role="alert">
          {state.message}
        </p>
      ) : null}

      <Field error={state.fieldErrors?.name}>
        <input
          id={fieldId("name")}
          name="name"
          autoComplete="name"
          required
          placeholder="Name"
          aria-label="Name"
          className={inputClass}
        />
      </Field>
      <Field error={state.fieldErrors?.email}>
        <input
          id={fieldId("email")}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email"
          aria-label="Email"
          className={inputClass}
        />
      </Field>
      {compact ? null : (
        <Field error={state.fieldErrors?.phone}>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone (optional)"
            aria-label="Phone, optional"
            className={inputClass}
          />
        </Field>
      )}
      <Field error={state.fieldErrors?.service}>
        <select
          id={fieldId("service")}
          name="service"
          defaultValue=""
          required
          aria-label="What do you need?"
          className={inputClass}
        >
          <option value="" disabled>
            What do you need?
          </option>
          {pillars.map((pillar) => (
            <option key={pillar.slug} value={pillar.title}>
              {pillar.title}
            </option>
          ))}
          <option value="Free website package">Free website package</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </Field>
      <Field error={state.fieldErrors?.message}>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={compact ? 3 : 5}
          required
          placeholder="Message"
          aria-label="Message"
          className={`${inputClass} resize-y`}
        />
      </Field>

      <SpecularButton
        type="submit"
        disabled={pending}
        size="md"
        radius={12}
        tint="#2563eb"
        tintOpacity={1}
        textColor="#f8fafc"
        lineColor="#bfdbfe"
        baseColor="#1d4ed8"
        className="w-full"
      >
        {pending ? "Checking…" : "Send enquiry"}
      </SpecularButton>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-sky";

function Field({
  error,
  children,
}: {
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {error ? <span className="mt-2 block text-sm text-sky">{error}</span> : null}
    </div>
  );
}
