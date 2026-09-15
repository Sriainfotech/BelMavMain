"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { PrimaryButtonEl } from "./buttons";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  landscape: string;
  interest: string;
  goal: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  landscape: "",
  interest: "",
  goal: "",
  message: "",
  consent: false,
};

const areasOfInterest = [
  "SAP Finance",
  "SAP Controlling",
  "SAP RAR",
  "SAP BRIM",
  "S/4HANA Finance",
  "ECC to S/4HANA Transformation",
  "Advisory",
  "Support & Optimization",
  "Other",
];

const landscapeOptions = [
  "SAP ECC (on-premise)",
  "SAP S/4HANA (on-premise)",
  "SAP S/4HANA Cloud",
  "Non-SAP / Legacy system",
  "No SAP system yet",
  "Not sure",
];

function inputClass(hasError: boolean) {
  return `w-full border bg-belmav-white px-4 py-3 text-sm text-belmav-black placeholder:text-belmav-black/40 focus:outline-none transition-colors ${
    hasError ? "border-belmav-red" : "border-belmav-black/20 focus:border-belmav-black"
  }`;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!form.company.trim()) next.company = "Please enter your company.";
    if (!form.email.trim()) {
      next.email = "We need your email to respond.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "This email address looks incomplete.";
    }
    if (!form.message.trim()) next.message = "Please tell us a little about your needs.";
    if (!form.consent) next.consent = "Please confirm we may contact you.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // Client-side simulated submission — no backend configured.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="border border-belmav-black/10 bg-belmav-mist p-10 text-center">
        <CheckCircle2 className="mx-auto text-belmav-red" size={40} />
        <h3 className="mt-4 text-2xl font-extrabold text-belmav-black">Thank you, {form.name.split(" ")[0] || "there"}.</h3>
        <p className="mt-3 text-belmav-black/70 max-w-md mx-auto">
          Thank you. Your message has been received. A member of the BelMav team will respond to{" "}
          <span className="font-semibold">{form.email}</span> shortly.
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-belmav-red hover:text-belmav-black underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <p className="text-sm leading-relaxed text-belmav-black/50">
        A few words about your situation help us prepare. Fields marked optional can stay empty—everything else
        helps us prepare a useful first response.
      </p>
      {status === "error" && (
        <div className="flex items-center gap-2 border border-belmav-red bg-belmav-red/5 px-4 py-3 text-sm text-belmav-red">
          <AlertCircle size={18} />
          Please review the highlighted fields below.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide mb-2">
            Full name *
          </label>
          <input id="name" className={inputClass(!!errors.name)} value={form.name} onChange={(e) => update("name", e.target.value)} />
          {errors.name && <p className="mt-1 text-xs text-belmav-red">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wide mb-2">
            Company *
          </label>
          <input id="company" className={inputClass(!!errors.company)} value={form.company} onChange={(e) => update("company", e.target.value)} />
          {errors.company && <p className="mt-1 text-xs text-belmav-red">{errors.company}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide mb-2">
            Email *
          </label>
          <input id="email" type="email" className={inputClass(!!errors.email)} value={form.email} onChange={(e) => update("email", e.target.value)} />
          {errors.email && <p className="mt-1 text-xs text-belmav-red">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide mb-2">
            Phone
          </label>
          <input id="phone" className={inputClass(false)} value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        </div>
        <div>
          <label htmlFor="country" className="block text-xs font-semibold uppercase tracking-wide mb-2">
            Country
          </label>
          <input id="country" className={inputClass(false)} value={form.country} onChange={(e) => update("country", e.target.value)} />
        </div>
        <div>
          <label htmlFor="landscape" className="block text-xs font-semibold uppercase tracking-wide mb-2">
            Current SAP landscape
          </label>
          <select id="landscape" className={inputClass(false)} value={form.landscape} onChange={(e) => update("landscape", e.target.value)}>
            <option value="">Select...</option>
            {landscapeOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="interest" className="block text-xs font-semibold uppercase tracking-wide mb-2">
            Area of Interest
          </label>
          <select id="interest" className={inputClass(false)} value={form.interest} onChange={(e) => update("interest", e.target.value)}>
            <option value="">Select...</option>
            {areasOfInterest.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="goal" className="block text-xs font-semibold uppercase tracking-wide mb-2">
            Transformation goal
          </label>
          <input
            id="goal"
            placeholder="e.g. Move from ECC to S/4HANA, improve close cycle, implement RAR..."
            className={inputClass(false)}
            value={form.goal}
            onChange={(e) => update("goal", e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            className={inputClass(!!errors.message)}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
          {errors.message && <p className="mt-1 text-xs text-belmav-red">{errors.message}</p>}
        </div>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-belmav-black/80">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-1 h-4 w-4 accent-belmav-red"
          />
          <span>
            I agree that BelMav Info Tech may use these details to respond to my enquiry. No newsletters, no
            sharing—just a reply. *
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-xs text-belmav-red">{errors.consent}</p>}
      </div>

      <PrimaryButtonEl type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </PrimaryButtonEl>
    </form>
  );
}
